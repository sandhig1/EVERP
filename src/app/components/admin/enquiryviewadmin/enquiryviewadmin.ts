import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Enquiry {
  enquiryNo: string;
  enquiryDate: string;
  requestFrom: string;
  customer: string;
  chargerType: string;
  siteAddress: string;
  preferredDate: string;
  status: string;
}

@Component({
  selector: 'app-enquiryviewadmin',
  imports: [NgClass, NgIf],
  templateUrl: './enquiryviewadmin.html',
  styleUrl: './enquiryviewadmin.css'
})
export class enquiryviewadmin {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  enquiryNo = '';
  enquiry!: Enquiry;

  enquiries: Enquiry[] = [
    { enquiryNo:'ENQ-ADM-1001', enquiryDate:'08-Sep-2026', requestFrom:'Customer', customer:'ABC Enterprises', chargerType:'AC Charger', siteAddress:'123 MG Road, Pune, Maharashtra', preferredDate:'12-Sep-2026', status:'New' },
    { enquiryNo:'ENQ-ADM-1002', enquiryDate:'08-Sep-2026', requestFrom:'Walk-in', customer:'Rahul Patil', chargerType:'DC Charger', siteAddress:'45 Andheri East, Mumbai, Maharashtra', preferredDate:'13-Sep-2026', status:'Convert to Lead' },
    { enquiryNo:'ENQ-ADM-1003', enquiryDate:'07-Sep-2026', requestFrom:'Customer', customer:'XYZ Industries', chargerType:'Fast Charger', siteAddress:'78 Sector 18, Delhi, Maharashtra', preferredDate:'15-Sep-2026', status:'Survey Scheduled' },
    { enquiryNo:'ENQ-ADM-1004', enquiryDate:'07-Sep-2026', requestFrom:'Walk-in', customer:'Amit Sharma', chargerType:'AC Charger', siteAddress:'22 Whitefield Road, Bangalore, Karnataka', preferredDate:'16-Sep-2026', status:'Survey Done' },
    { enquiryNo:'ENQ-ADM-1005', enquiryDate:'06-Sep-2026', requestFrom:'Customer', customer:'PQR Solutions', chargerType:'DC Charger', siteAddress:'18 Hinjewadi Phase 1, Pune, Maharashtra', preferredDate:'18-Sep-2026', status:'Quotation Sent' },
    { enquiryNo:'ENQ-ADM-1006', enquiryDate:'06-Sep-2026', requestFrom:'Walk-in', customer:'Neha Kulkarni', chargerType:'Fast Charger', siteAddress:'11 Baner Road, Pune, Maharashtra', preferredDate:'19-Sep-2026', status:'Quotation Approved' },
    { enquiryNo:'ENQ-ADM-1007', enquiryDate:'05-Sep-2026', requestFrom:'Customer', customer:'Green Mobility', chargerType:'AC Charger', siteAddress:'55 MIDC Area, Nashik, Maharashtra', preferredDate:'20-Sep-2026', status:'Installation Scheduled' },
    { enquiryNo:'ENQ-ADM-1008', enquiryDate:'05-Sep-2026', requestFrom:'Walk-in', customer:'Suresh Enterprises', chargerType:'DC Charger', siteAddress:'90 Vashi Sector 17, Navi Mumbai, Maharashtra', preferredDate:'21-Sep-2026', status:'Technician Assigned' },
    { enquiryNo:'ENQ-ADM-1009', enquiryDate:'04-Sep-2026', requestFrom:'Customer', customer:'Sunrise Motors', chargerType:'Fast Charger', siteAddress:'32 Wakad Main Road, Pune, Maharashtra', preferredDate:'22-Sep-2026', status:'Installation Done' },
    { enquiryNo:'ENQ-ADM-1010', enquiryDate:'04-Sep-2026', requestFrom:'Walk-in', customer:'Vikas Mehta', chargerType:'AC Charger', siteAddress:'14 Powai Road, Mumbai, Maharashtra', preferredDate:'23-Sep-2026', status:'Handover' }
  ];

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.enquiryNo = params.get('enquiryNo') ?? '';
      this.loadEnquiry();
    });

    window.addEventListener('afterprint', () => {
      document.body.classList.remove('enquiry-print-mode');
    });
  }

  loadEnquiry(): void {
    const found = this.enquiries.find(item => item.enquiryNo === this.enquiryNo);
    this.enquiry = found ?? this.enquiries[0];
  }

  printEnquiry(): void {
    document.body.classList.add('enquiry-print-mode');
    setTimeout(() => window.print(), 100);
  }

  goBack(): void {
    this.router.navigate(['/enquiry-list-admin']);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'New': return 'status-new';
      case 'Convert to Lead':
      case 'Convert To Oppertunity': return 'status-lead';
      case 'Survey Scheduled':
      case 'Survey Done':
      case 'Survey Report Submitted': return 'status-survey';
      case 'Quotation Generated':
      case 'Quotation Sent':
      case 'Quotation Approved': return 'status-quotation';
      case 'Quotation Rejected': return 'status-rejected';
      case 'Invoice Generated': return 'status-invoice';
      case 'Project Created': return 'status-project';
      case 'Installation Scheduled':
      case 'Technician Assigned': return 'status-installation';
      case 'Installation Done':
      case 'Handover': return 'status-completed';
      default: return 'status-default';
    }
  }
}
