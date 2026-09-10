import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface EnquiryAction {
  label: string;
  icon: string;
  className: string;
}

@Component({
  imports: [FormsModule, NgClass, NgFor, NgIf],
  selector: 'app-enquirylistadmin',
  styleUrl: './enquirylistadmin.css',
  templateUrl: './enquirylistadmin.html',
})
export class enquirylistadmin {

  searchText = '';
  selectedRequestFrom = 'All';
  selectedCustomer = '';
  selectedStatus = '';
  selectedChargerType = '';

  router = inject(Router);

  statuses = [
    'New',
    'Convert to Lead',
    'Convert To Oppertunity',
    'Survey Scheduled',
    'Survey Done',
    'Survey Report Submitted',
    'Quotation Generated',
    'Quotation Sent',
    'Quotation Approved',
    'Quotation Rejected',
    'Invoice Generated',
    'Project Created',
    'Installation Scheduled',
    'Technician Assigned',
    'Installation Done',
    'Handover'
  ];

  customers = [
    'ABC Enterprises',
    'XYZ Industries',
    'PQR Solutions',
    'Green Mobility',
    'Sunrise Motors',
    'Metro Auto Solutions'
  ];

  enquiries = [
    {
      enquiryNo: 'ENQ-ADM-1001',
      enquiryDate: '08-Sep-2026',
      requestFrom: 'Customer',
      customer: 'ABC Enterprises',
      chargerType: 'AC Charger',
      siteAddress: '123 MG Road, Pune, Maharashtra',
      preferredDate: '12-Sep-2026',
      status: 'New'
    },
    {
      enquiryNo: 'ENQ-ADM-1002',
      enquiryDate: '08-Sep-2026',
      requestFrom: 'Walk-in',
      customer: 'Rahul Patil',
      chargerType: 'DC Charger',
      siteAddress: '45 Andheri East, Mumbai, Maharashtra',
      preferredDate: '13-Sep-2026',
      status: 'Convert to Lead'
    },
    {
      enquiryNo: 'ENQ-ADM-1003',
      enquiryDate: '07-Sep-2026',
      requestFrom: 'Customer',
      customer: 'XYZ Industries',
      chargerType: 'Fast Charger',
      siteAddress: '78 Sector 18, Delhi, Maharashtra',
      preferredDate: '15-Sep-2026',
      status: 'Survey Scheduled'
    },
    {
      enquiryNo: 'ENQ-ADM-1004',
      enquiryDate: '07-Sep-2026',
      requestFrom: 'Walk-in',
      customer: 'Amit Sharma',
      chargerType: 'AC Charger',
      siteAddress: '22 Whitefield Road, Bangalore, Karnataka',
      preferredDate: '16-Sep-2026',
      status: 'Survey Done'
    },
    {
      enquiryNo: 'ENQ-ADM-1005',
      enquiryDate: '06-Sep-2026',
      requestFrom: 'Customer',
      customer: 'PQR Solutions',
      chargerType: 'DC Charger',
      siteAddress: '18 Hinjewadi Phase 1, Pune, Maharashtra',
      preferredDate: '18-Sep-2026',
      status: 'Quotation Sent'
    },
    {
      enquiryNo: 'ENQ-ADM-1006',
      enquiryDate: '06-Sep-2026',
      requestFrom: 'Walk-in',
      customer: 'Neha Kulkarni',
      chargerType: 'Fast Charger',
      siteAddress: '11 Baner Road, Pune, Maharashtra',
      preferredDate: '19-Sep-2026',
      status: 'Quotation Approved'
    },
    {
      enquiryNo: 'ENQ-ADM-1007',
      enquiryDate: '05-Sep-2026',
      requestFrom: 'Customer',
      customer: 'Green Mobility',
      chargerType: 'AC Charger',
      siteAddress: '55 MIDC Area, Nashik, Maharashtra',
      preferredDate: '20-Sep-2026',
      status: 'Installation Scheduled'
    },
    {
      enquiryNo: 'ENQ-ADM-1008',
      enquiryDate: '05-Sep-2026',
      requestFrom: 'Walk-in',
      customer: 'Suresh Enterprises',
      chargerType: 'DC Charger',
      siteAddress: '90 Vashi Sector 17, Navi Mumbai, Maharashtra',
      preferredDate: '21-Sep-2026',
      status: 'Technician Assigned'
    },
    {
      enquiryNo: 'ENQ-ADM-1009',
      enquiryDate: '04-Sep-2026',
      requestFrom: 'Customer',
      customer: 'Sunrise Motors',
      chargerType: 'Fast Charger',
      siteAddress: '32 Wakad Main Road, Pune, Maharashtra',
      preferredDate: '22-Sep-2026',
      status: 'Installation Done'
    },
    {
      enquiryNo: 'ENQ-ADM-1010',
      enquiryDate: '04-Sep-2026',
      requestFrom: 'Walk-in',
      customer: 'Vikas Mehta',
      chargerType: 'AC Charger',
      siteAddress: '14 Powai Road, Mumbai, Maharashtra',
      preferredDate: '23-Sep-2026',
      status: 'Handover'
    }
  ];

  applyFilters(): void {
    // Add API/filter logic here.
  }

  resetFilters(): void {
    this.searchText = '';
    this.selectedRequestFrom = 'All';
    this.selectedCustomer = '';
    this.selectedStatus = '';
    this.selectedChargerType = '';
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'New':
        return 'status-new';

      case 'Convert to Lead':
      case 'Convert To Oppertunity':
        return 'status-lead';

      case 'Survey Scheduled':
      case 'Survey Done':
      case 'Survey Report Submitted':
        return 'status-survey';

      case 'Quotation Generated':
      case 'Quotation Sent':
      case 'Quotation Approved':
        return 'status-quotation';

      case 'Quotation Rejected':
        return 'status-rejected';

      case 'Invoice Generated':
        return 'status-invoice';

      case 'Project Created':
        return 'status-project';

      case 'Installation Scheduled':
      case 'Technician Assigned':
        return 'status-installation';

      case 'Installation Done':
      case 'Handover':
        return 'status-completed';

      default:
        return 'status-default';
    }
  }

  getActions(enquiry: any): EnquiryAction[] {
    // View and Edit are available for every enquiry.
    const actions: EnquiryAction[] = [
      {
        label: 'View',
        icon: '◉',
        className: 'action-view'
      },
      {
        label: 'Edit',
        icon: '✎',
        className: 'action-edit'
      }
    ];

    // New enquiry: View + Edit + Convert to Lead + Schedule Survey
    if (enquiry.status === 'New') {
      actions.push(
        {
          label: 'Convert to Lead',
          icon: '↗',
          className: 'action-lead'
        },
        {
          label: 'Schedule Survey',
          icon: '◷',
          className: 'action-survey'
        }
      );
    }
    // Converted to Lead: View + Edit + Schedule Survey
    else if (enquiry.status === 'Convert to Lead') {
      actions.push({
        label: 'Schedule Survey',
        icon: '◷',
        className: 'action-survey'
      });
    }

    // All other statuses: View + Edit only.
    return actions;
  }

  performAction(enquiry: any, action: EnquiryAction): void {
    switch (action.label) {
      case 'View':
        this.viewEnquiry(enquiry);
        break;

      case 'Edit':
        this.editEnquiry(enquiry);
        break;

      case 'Convert to Lead':
        this.convertToLead(enquiry);
        break;

      case 'Convert To Oppertunity':
        this.convertToOpportunity(enquiry);
        break;

      case 'Schedule Survey':
        this.scheduleSurvey(enquiry);
        break;

      case 'Survey Done':
        this.markSurveyDone(enquiry);
        break;

      case 'Submit Survey Report':
        this.submitSurveyReport(enquiry);
        break;

      case 'Generate Quotation':
        this.generateQuotation(enquiry);
        break;

      case 'Send Quotation':
        this.sendQuotation(enquiry);
        break;

      case 'Approve Quotation':
        this.approveQuotation(enquiry);
        break;

      case 'Reject Quotation':
        this.rejectQuotation(enquiry);
        break;

      case 'Edit Quotation':
        this.editQuotation(enquiry);
        break;

      case 'Resend Quotation':
        this.resendQuotation(enquiry);
        break;

      case 'Generate Invoice':
        this.generateInvoice(enquiry);
        break;

      case 'Create Project':
        this.createProject(enquiry);
        break;

      case 'Schedule Installation':
        this.scheduleInstallation(enquiry);
        break;

      case 'Assign Technician':
        this.assignTechnician(enquiry);
        break;

      case 'Installation Done':
        this.markInstallationDone(enquiry);
        break;

      case 'Handover':
        this.handover(enquiry);
        break;

      default:
        console.log(
          `Action "${action.label}" selected for ${enquiry.enquiryNo}`
        );
    }
  }

  viewEnquiry(enquiry: any): void {
    console.log('View enquiry:', enquiry);
    this.router.navigate(['/enquiry-view-admin']);

    // this.router.navigate(['/enquiry-view-admin'], {
    //   queryParams: { enquiryNo: enquiry.enquiryNo }
    // });
  }

  editEnquiry(enquiry: any): void {
    console.log('Edit enquiry:', enquiry);

    // Add your Admin enquiry-edit route here.
    // Example:
    // this.router.navigate(['/enquiry-edit-admin'], {
    //   queryParams: { enquiryNo: enquiry.enquiryNo }
    // });
  }

  convertToLead(enquiry: any): void {
    console.log('Convert to Lead:', enquiry);

    this.router.navigate(['/lead-generation']);

    // Add Convert-to-Lead API/dialog logic here.
  }

  scheduleSurvey(enquiry: any): void {
    console.log('Schedule Survey:', enquiry);
    this.router.navigate(['/survey-schedule']);

    // Add survey scheduling API/dialog logic here.
  }
  convertToOpportunity(enquiry: any): void {
    console.log('Convert To Oppertunity:', enquiry);
  }

  markSurveyDone(enquiry: any): void {
    console.log('Survey Done:', enquiry);
  }

  submitSurveyReport(enquiry: any): void {
    console.log('Submit Survey Report:', enquiry);
  }

  generateQuotation(enquiry: any): void {
    console.log('Generate Quotation:', enquiry);
  }

  sendQuotation(enquiry: any): void {
    console.log('Send Quotation:', enquiry);
  }

  approveQuotation(enquiry: any): void {
    console.log('Approve Quotation:', enquiry);
  }

  rejectQuotation(enquiry: any): void {
    console.log('Reject Quotation:', enquiry);
  }

  editQuotation(enquiry: any): void {
    console.log('Edit Quotation:', enquiry);
  }

  resendQuotation(enquiry: any): void {
    console.log('Resend Quotation:', enquiry);
  }

  generateInvoice(enquiry: any): void {
    console.log('Generate Invoice:', enquiry);
  }

  createProject(enquiry: any): void {
    console.log('Create Project:', enquiry);
  }

  scheduleInstallation(enquiry: any): void {
    console.log('Schedule Installation:', enquiry);
  }

  assignTechnician(enquiry: any): void {
    console.log('Assign Technician:', enquiry);
  }

  markInstallationDone(enquiry: any): void {
    console.log('Installation Done:', enquiry);
  }

  handover(enquiry: any): void {
    console.log('Handover:', enquiry);
  }

}