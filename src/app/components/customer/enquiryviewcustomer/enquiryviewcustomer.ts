import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiryviewcustomer',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './enquiryviewcustomer.html',
  styleUrl: './enquiryviewcustomer.css'
})
export class enquiryviewcustomer {

  private router = inject(Router);

  /*
   * Sample enquiry data.
   * Replace this object with API data or the enquiry selected
   * from EnquiryListCustomer.
   */
  enquiry = {
    enquiryNo: 'INSR-D1223232',
    enquiryDate: '09-Sep-2026',
    customer: 'ABC Enterprises',
    chargerType: 'AC Charger',
    siteAddress: '123 MG Road',
    city: 'Pune',
    state: 'Maharashtra',
    preferredDate: '12-Sep-2026',
    status: 'Pending'
  };

  printEnquiry(): void {
    window.print();
  }

  backToEnquiryList(): void {
    this.router.navigate(['/enquiry-list-customer']);
  }
}
