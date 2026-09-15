import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, NgClass, NgFor, NgIf],
  selector: 'app-enquirylistcustomer',
  styleUrl: './EnquiryListCustomer.css',
  templateUrl: './EnquiryListCustomer.html',
})
export class EnquiryListCustomer {

  searchText = '';
  selectedStatus = '';
  selectedChargerType = '';

  router = inject(Router);

enquiries = [
  {
    enquiryNo: 'INSR-D1223232',
    customer: 'ABC Enterprises',
    chargerType: 'AC Charger',
    siteAddress: '123 MG Road',
    city: 'Pune',
    state: 'Maharashtra',
    preferredDate: '12-Sep-2026',
    status: 'Pending'
  },
  {
    enquiryNo: 'INSR-D1223233',
    customer: 'XYZ Industries',
    chargerType: 'DC Charger',
    siteAddress: '45 Andheri East',
    city: 'Mumbai',
    state: 'Maharashtra',
    preferredDate: '15-Sep-2026',
    status: 'In Progress'
  },
  {
    enquiryNo: 'INSR-D1223234',
    customer: 'PQR Solutions',
    chargerType: 'AC Charger',
    siteAddress: '78 Sector 18',
    city: 'Delhi',
    state: 'Maharashtra',
    preferredDate: '18-Sep-2026',
    status: 'Completed'
  },
  {
    enquiryNo: 'INSR-D1223235',
    customer: 'Green Mobility',
    chargerType: 'Fast Charger',
    siteAddress: '22 Whitefield Road',
    city: 'Bangalore',
    state: 'Maharashtra',
    preferredDate: '20-Sep-2026',
    status: 'Pending'
  }
];

applyFilters(): void {
  // Add API/filter logic here
}

resetFilters(): void {
  this.searchText = '';
  this.selectedStatus = '';
  this.selectedChargerType = '';
}

newEnquiry(): void {
  // Navigate to new enquiry page
  this.router.navigate(['/enquiry-creation-customer'])
}

viewEnquiry(enquiry: any): void {
  // Navigate to enquiry details
  this.router.navigate(['/enquiry-view-customer'])
}

}
