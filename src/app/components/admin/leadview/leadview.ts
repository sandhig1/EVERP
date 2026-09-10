import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Lead {
  leadId: string;
  leadDate: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  leadSource: string;
  requirement: string;
  estimatedValue: string;
  leadStatus: string;
  assignedSalesTeam: string;
  expectedCloseDate: string;
  status: string;
}

@Component({
  selector: 'app-leadview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadview.html',
  styleUrl: './leadview.css'
})
export class leadview {

  lead: Lead = {
    leadId: 'LD-D1223232',
    leadDate: '10-Sep-2026',
    companyName: 'ABC Industries Pvt. Ltd.',
    contactPerson: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '9876543210',
    leadSource: 'Website',
    requirement: 'Requirement for installation of EV charging stations at company premises.',
    estimatedValue: '₹ 8,50,000',
    leadStatus: 'New',
    assignedSalesTeam: 'Sales Team - West',
    expectedCloseDate: '30-Sep-2026',
    status: 'New'
  };

  currentDate: string = '';

  constructor(private router: Router) {
    this.currentDate = this.getCurrentDate();
  }


  /**
   * Print the Lead View page
   */
  printPage(): void {
    window.print();
  }


  /**
   * Go back to Lead List
   */
  goBack(): void {
    this.router.navigate(['/admin/leadlist']);
  }


  /**
   * Return CSS class for lead status
   */
  getStatusClass(status: string): string {

    switch (status) {

      case 'New':
        return 'status-new';

      case 'Converted To Oppertunity':
        return 'status-converted-opportunity';

      default:
        return 'status-default';
    }
  }


  /**
   * Get current date for document footer
   */
  private getCurrentDate(): string {

    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');

    const month = String(today.getMonth() + 1).padStart(2, '0');

    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

}