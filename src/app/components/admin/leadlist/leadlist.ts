import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Lead {
  leadId: string;
  leadDate: string;

  companyName: string;
  contactPerson: string;

  email: string;
  phone: string;

  leadSource: string;
  requirement: string;

  estimatedValue: number;

  leadStatus: string;
  assignedSalesTeam: string;

  expectedCloseDate: string;

  status: 'New' | 'Converted To Oppertunity';
}


@Component({
  selector: 'app-leadlist',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule, DecimalPipe
  ],

  templateUrl: './leadlist.html',
  styleUrl: './leadlist.css'
})


export class leadlist {

  /* =========================================
     Filter Values
  ========================================= */

  searchText: string = '';

  selectedStatus: string = '';

  selectedLeadSource: string = '';


  /* =========================================
     Pagination
  ========================================= */

  currentPage: number = 1;

  pageSize: number = 5;


  /* =========================================
     Lead Data
  ========================================= */

  leads: Lead[] = [

    {
      leadId: 'LD-10001',
      leadDate: '09-Sep-2026',

      companyName: 'ABC Industries Pvt. Ltd.',
      contactPerson: 'Rajesh Kumar',

      email: 'rajesh@abcindustries.com',
      phone: '9876543210',

      leadSource: 'Website',
      requirement: '60 KW DC Fast Charger',

      estimatedValue: 850000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team A',

      expectedCloseDate: '30-Sep-2026',

      status: 'New'
    },


    {
      leadId: 'LD-10002',
      leadDate: '08-Sep-2026',

      companyName: 'Green Mobility Solutions',
      contactPerson: 'Amit Shah',

      email: 'amit@greenmobility.com',
      phone: '9823456789',

      leadSource: 'Referral',
      requirement: '120 KW Fast Charging Station',

      estimatedValue: 1450000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team B',

      expectedCloseDate: '15-Oct-2026',

      status: 'New'
    },


    {
      leadId: 'LD-10003',
      leadDate: '07-Sep-2026',

      companyName: 'Metro Auto Services',
      contactPerson: 'Suresh Patil',

      email: 'suresh@metroauto.com',
      phone: '9765432101',

      leadSource: 'Walk In',
      requirement: '30 KW AC Charger',

      estimatedValue: 350000,

      leadStatus: 'Converted To Oppertunity',
      assignedSalesTeam: 'Sales Team A',

      expectedCloseDate: '20-Sep-2026',

      status: 'Converted To Oppertunity'
    },


    {
      leadId: 'LD-10004',
      leadDate: '06-Sep-2026',

      companyName: 'Future EV Hub',
      contactPerson: 'Neha Verma',

      email: 'neha@futureevhub.com',
      phone: '9812345678',

      leadSource: 'Social Media',
      requirement: 'EV Charging Station',

      estimatedValue: 725000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team C',

      expectedCloseDate: '10-Oct-2026',

      status: 'New'
    },


    {
      leadId: 'LD-10005',
      leadDate: '05-Sep-2026',

      companyName: 'Sunrise Logistics',
      contactPerson: 'Vikas Mehta',

      email: 'vikas@sunriselogistics.com',
      phone: '9898765432',

      leadSource: 'Advertisement',
      requirement: 'Fleet Charging Solution',

      estimatedValue: 2100000,

      leadStatus: 'Converted To Oppertunity',
      assignedSalesTeam: 'Sales Team B',

      expectedCloseDate: '05-Oct-2026',

      status: 'Converted To Oppertunity'
    },


    {
      leadId: 'LD-10006',
      leadDate: '04-Sep-2026',

      companyName: 'Urban EV Technologies',
      contactPerson: 'Manish Joshi',

      email: 'manish@urbanev.com',
      phone: '9876123450',

      leadSource: 'Website',
      requirement: 'DC Fast Charger',

      estimatedValue: 975000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team A',

      expectedCloseDate: '25-Oct-2026',

      status: 'New'
    },


    {
      leadId: 'LD-10007',
      leadDate: '03-Sep-2026',

      companyName: 'Prime Auto Group',
      contactPerson: 'Rohit Desai',

      email: 'rohit@primeauto.com',
      phone: '9900123456',

      leadSource: 'Referral',
      requirement: 'EV Charging Infrastructure',

      estimatedValue: 1250000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team C',

      expectedCloseDate: '12-Nov-2026',

      status: 'New'
    },


    {
      leadId: 'LD-10008',
      leadDate: '02-Sep-2026',

      companyName: 'Electro Drive Pvt. Ltd.',
      contactPerson: 'Pankaj Singh',

      email: 'pankaj@electrodrive.com',
      phone: '9789012345',

      leadSource: 'Walk In',
      requirement: '60 KW Charging Station',

      estimatedValue: 895000,

      leadStatus: 'New',
      assignedSalesTeam: 'Sales Team B',

      expectedCloseDate: '18-Oct-2026',

      status: 'New'
    }

  ];


  /* =========================================
     Constructor
  ========================================= */

  constructor(
    private router: Router
  ) {}


  /* =========================================
     Filtered Leads
  ========================================= */

  get filteredLeads(): Lead[] {

    let result = [...this.leads];


    /* Search */

    const search = this.searchText
      .trim()
      .toLowerCase();


    if (search) {

      result = result.filter(lead =>

        lead.leadId.toLowerCase().includes(search) ||

        lead.companyName.toLowerCase().includes(search) ||

        lead.contactPerson.toLowerCase().includes(search) ||

        lead.email.toLowerCase().includes(search) ||

        lead.phone.toLowerCase().includes(search) ||

        lead.requirement.toLowerCase().includes(search)

      );

    }


    /* Status */

    if (this.selectedStatus) {

      result = result.filter(
        lead => lead.status === this.selectedStatus
      );

    }


    /* Lead Source */

    if (this.selectedLeadSource) {

      result = result.filter(
        lead => lead.leadSource === this.selectedLeadSource
      );

    }


    return result;
  }


  /* =========================================
     Pagination
  ========================================= */

  get totalPages(): number {

    return Math.max(
      1,
      Math.ceil(
        this.filteredLeads.length / this.pageSize
      )
    );

  }


  get pages(): number[] {

    return Array.from(
      { length: this.totalPages },
      (_, index) => index + 1
    );

  }


  get paginatedLeads(): Lead[] {

    const start =
      (this.currentPage - 1) *
      this.pageSize;

    const end =
      start + this.pageSize;

    return this.filteredLeads.slice(start, end);

  }


  get startRecord(): number {

    if (this.filteredLeads.length === 0) {
      return 0;
    }

    return (
      (this.currentPage - 1) *
      this.pageSize
    ) + 1;

  }


  get endRecord(): number {

    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredLeads.length
    );

  }


  /* =========================================
     Apply Filters
  ========================================= */

  applyFilters(): void {

    this.currentPage = 1;

  }


  /* =========================================
     Reset Filters
  ========================================= */

  resetFilters(): void {

    this.searchText = '';

    this.selectedStatus = '';

    this.selectedLeadSource = '';

    this.currentPage = 1;

  }


  /* =========================================
     Status Class
  ========================================= */

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


  /* =========================================
     Pagination Methods
  ========================================= */

  goToPage(page: number): void {

    if (
      page >= 1 &&
      page <= this.totalPages
    ) {

      this.currentPage = page;

    }

  }


  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;

    }

  }


  nextPage(): void {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;

    }

  }


  /* =========================================
     New Lead
  ========================================= */

  newLead(): void {

    this.router.navigate(['/lead-generation']);

  }


  /* =========================================
     View Lead
  ========================================= */

  viewLead(lead: Lead): void {

    console.log(
      'View Lead:',
      lead
    );

    this.router.navigate(['/lead-view']);


    // Replace with your actual route
    // this.router.navigate([
    //   '/admin/leadview',
    //   lead.leadId
    // ]);

  }


  /* =========================================
     Edit Lead
  ========================================= */

  editLead(lead: Lead): void {

    console.log(
      'Edit Lead:',
      lead
    );

    // Replace with your actual route
    // this.router.navigate([
    //   '/admin/leadgeneration',
    //   lead.leadId
    // ]);

  }


  /* =========================================
     Convert To Oppertunity
  ========================================= */

  convertToOpportunity(
    lead: Lead
  ): void {

    if (
      lead.status ===
      'Converted To Oppertunity'
    ) {

      return;

    }


    Swal.fire({

      title: 'Convert Lead?',

      text:
        'Do you want to convert ' +
        lead.leadId +
        ' to Oppertunity?',

      icon: 'question',

      showCancelButton: true,

      confirmButtonText:
        'Yes, Convert',

      cancelButtonText:
        'Cancel',

      confirmButtonColor:
        '#079b72',

      cancelButtonColor:
        '#6c757d'

    }).then((result) => {

      if (result.isConfirmed) {

        /* Update status */

        lead.status =
          'Converted To Oppertunity';

        lead.leadStatus =
          'Converted To Oppertunity';


        Swal.fire({

          title:
            'Lead Converted Successfully!!!',

          html:
            `<div class="success-message">
              <div>
                Lead No.
                <strong>${lead.leadId}</strong>
                converted to Oppertunity.
              </div>
            </div>`,

          icon: 'success',

          confirmButtonText:
            'OK',

          confirmButtonColor:
            '#079b72'

        });

      }

    });

  }

}