import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface RequestData {
  requestNo: string;
  requestDate: string;
  dealerName: string;
  customerName: string;
  chargerType: string;
  preferredDate: string;
  requestDetail: string;
  siteAddress: string;
  city: string;
  state: string;
  type: 'installation' | 'enquiry';
}

interface Survey {
  surveyAgainst: 'installation' | 'enquiry';
  requestNo: string;

  siteAddress: string;
  city: string;
  state: string;

  surveyScheduleDate: string;
  timeSlot: string;
  technicianName: string;
  surveyScheduleRemarks: string;
}

@Component({
  selector: 'app-survey-schedule',
  imports:[FormsModule, NgIf, NgFor],
  templateUrl: './surveyschedule.html',
  styleUrls: ['./surveyschedule.css']
})
export class surveyschedule {

  // ---------------------------------------------------------
  // Survey Model
  // ---------------------------------------------------------
  survey: Survey = {
    surveyAgainst: 'installation',
    requestNo: '',

    siteAddress: '',
    city: '',
    state: '',

    surveyScheduleDate: '',
    timeSlot: '',
    technicianName: '',
    surveyScheduleRemarks: ''
  };

  // ---------------------------------------------------------
  // Selected Request
  // ---------------------------------------------------------
  selectedRequest: RequestData | null = null;

  // ---------------------------------------------------------
  // Minimum Survey Date
  // ---------------------------------------------------------
  minDate: string = '';

  // ---------------------------------------------------------
  // Cities
  // ---------------------------------------------------------
  cities: string[] = [
    'Panvel',
    'Navi Mumbai',
    'Mumbai',
    'Pune',
    'Thane',
    'Nagpur',
    'Nashik',
    'Ahmedabad',
    'Surat',
    'Vadodara'
  ];

  // ---------------------------------------------------------
  // States
  // ---------------------------------------------------------
  states: string[] = [
    'Maharashtra',
    'Gujarat',
    'Goa',
    'Karnataka',
    'Madhya Pradesh',
    'Rajasthan'
  ];

  // ---------------------------------------------------------
  // Time Slots
  // ---------------------------------------------------------
  timeSlots: string[] = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  // ---------------------------------------------------------
  // Technicians
  // ---------------------------------------------------------
  technicians: string[] = [
    'Amit Patil',
    'Rahul Sharma',
    'Suresh More',
    'Vikas Singh',
    'Anil Kumar'
  ];

  // ---------------------------------------------------------
  // Installation Requests / Enquiries
  // ---------------------------------------------------------
  requests: RequestData[] = [
    {
      requestNo: 'INSR-D1223232',
      requestDate: '10-Sep-2026',
      dealerName: 'ABC EV Solutions',
      customerName: 'Rajesh Kumar',
      chargerType: 'DC Charger',
      preferredDate: '15-Sep-2026',
      requestDetail: 'Installation of 60KW DC fast charger at customer site.',
      siteAddress: 'Plot No. 25, Sector 5, New Panvel',
      city: 'Panvel',
      state: 'Maharashtra',
      type: 'installation'
    },
    {
      requestNo: 'INSR-D1223233',
      requestDate: '11-Sep-2026',
      dealerName: 'Green Charge Solutions',
      customerName: 'Amit Sharma',
      chargerType: 'AC Charger',
      preferredDate: '17-Sep-2026',
      requestDetail: 'Installation of AC charger for residential application.',
      siteAddress: 'Sector 15, CBD Belapur',
      city: 'Navi Mumbai',
      state: 'Maharashtra',
      type: 'installation'
    },
    {
      requestNo: 'E12332211',
      requestDate: '09-Sep-2026',
      dealerName: 'ABC EV Solutions',
      customerName: 'Suresh Patil',
      chargerType: 'Fast Charger',
      preferredDate: '16-Sep-2026',
      requestDetail: 'Customer requires a fast charging station for commercial use.',
      siteAddress: 'Baner Road, Near Balewadi High Street',
      city: 'Pune',
      state: 'Maharashtra',
      type: 'enquiry'
    },
    {
      requestNo: 'E12332212',
      requestDate: '12-Sep-2026',
      dealerName: 'Power EV Systems',
      customerName: 'Neha Mehta',
      chargerType: 'DC Charger',
      preferredDate: '20-Sep-2026',
      requestDetail: 'Requirement for DC charging station at commercial premises.',
      siteAddress: 'SG Highway, Near Thaltej',
      city: 'Ahmedabad',
      state: 'Gujarat',
      type: 'enquiry'
    }
  ];

  // ---------------------------------------------------------
  // Constructor
  // ---------------------------------------------------------
  constructor(private router: Router) {
    this.setMinimumDate();
  }

  // ---------------------------------------------------------
  // Set Minimum Date
  // ---------------------------------------------------------
  private setMinimumDate(): void {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    this.minDate = `${year}-${month}-${day}`;
  }

  // ---------------------------------------------------------
  // Filter Requests According to Survey Against
  // ---------------------------------------------------------
  get filteredRequests(): RequestData[] {
    return this.requests.filter(
      request => request.type === this.survey.surveyAgainst
    );
  }

  //filteredRequests:RequestData[]=[];


  // ---------------------------------------------------------
  // Dynamic Request Number Label
  // ---------------------------------------------------------
  get requestNoLabel(): string {

    if (this.survey.surveyAgainst === 'installation') {
      return 'Installation Request No.';
    }

    if (this.survey.surveyAgainst === 'enquiry') {
      return 'Enquiry Request No.';
    }

    return 'Installation Request/Enquiry No.';
  }

  // ---------------------------------------------------------
  // Dynamic Request Date Label
  // ---------------------------------------------------------
  get requestDateLabel(): string {

    if (this.survey.surveyAgainst === 'installation') {
      return 'Installation Request Date';
    }

    if (this.survey.surveyAgainst === 'enquiry') {
      return 'Enquiry Date';
    }

    return 'Installation Request/Enquiry Date';
  }

  // ---------------------------------------------------------
  // Dynamic Request Number Placeholder
  // ---------------------------------------------------------
  get requestNoPlaceholder(): string {

    if (this.survey.surveyAgainst === 'installation') {
      return 'Select Installation Request No.';
    }

    if (this.survey.surveyAgainst === 'enquiry') {
      return 'Select Enquiry Request No.';
    }

    return 'Select Request/Enquiry No.';
  }

  // ---------------------------------------------------------
  // Survey Against Change
  // ---------------------------------------------------------
  onSurveyAgainstChange(): void {
debugger;
  this.survey.requestNo = '';

  this.selectedRequest = null;

  this.survey.siteAddress = '';
  this.survey.city = '';
  this.survey.state = '';

  /*const requests = this.requests.filter(
      request => request.type === this.survey.surveyAgainst
    );

  this.filteredRequests = requests;*/

}

  // ---------------------------------------------------------
  // Request Number Change
  // ---------------------------------------------------------
  onRequestChange(): void {

    const request = this.filteredRequests.find(
      item => item.requestNo === this.survey.requestNo
    );

    // If no request is selected
    if (!request) {
      this.selectedRequest = null;

      this.survey.siteAddress = '';
      this.survey.city = '';
      this.survey.state = '';

      return;
    }

    // Assign selected request
    this.selectedRequest = request;

    // Auto-populate site details
    this.survey.siteAddress = request.siteAddress;
    this.survey.city = request.city;
    this.survey.state = request.state;
  }

  // ---------------------------------------------------------
  // Schedule Survey
  // ---------------------------------------------------------
  scheduleSurvey(): void {

    // Validate Survey Against
    if (!this.survey.surveyAgainst) {
      alert('Please select Survey Against.');
      return;
    }

    // Validate Request Number
    if (!this.survey.requestNo) {
      alert(`Please select ${this.requestNoLabel}.`);
      return;
    }

    // Validate Site Address
    if (!this.survey.siteAddress.trim()) {
      alert('Please enter Site Address.');
      return;
    }

    // Validate City
    if (!this.survey.city) {
      alert('Please select City.');
      return;
    }

    // Validate State
    if (!this.survey.state) {
      alert('Please select State.');
      return;
    }

    // Validate Survey Schedule Date
    if (!this.survey.surveyScheduleDate) {
      alert('Please select Survey Schedule Date.');
      return;
    }

    // Validate Time Slot
    if (!this.survey.timeSlot) {
      alert('Please select Preferred Time Slot.');
      return;
    }

    // Validate Technician
    if (!this.survey.technicianName) {
      alert('Please select Technician Name.');
      return;
    }

    // -------------------------------------------------------
    // Generate Temporary Survey Number
    // -------------------------------------------------------
    const randomNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    const surveyNo = `SUR-${new Date().getFullYear()}-${randomNumber}`;

    // -------------------------------------------------------
    // Success Message
    // -------------------------------------------------------
    alert(
      `Survey Scheduled Successfully!!!\nSurvey No. ${surveyNo} Generated.`
    );

    // -------------------------------------------------------
    // Navigate to Survey List
    // -------------------------------------------------------
    this.router.navigate(['/survey-list']);
  }

  // ---------------------------------------------------------
  // Cancel Survey
  // ---------------------------------------------------------
  cancelSurvey(): void {
    this.router.navigate(['/survey-list']);
  }

  // ---------------------------------------------------------
  // Survey List
  // ---------------------------------------------------------
  goToSurveyList(): void {
    this.router.navigate(['/survey-list']);
  }
}