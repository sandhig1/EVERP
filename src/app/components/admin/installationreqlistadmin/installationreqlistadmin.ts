import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/* =========================================================
   INSTALLATION REQUEST MODEL
   ========================================================= */

interface InstallationRequest {

  installationNo: string;

  requestName: string;

  requestFrom: 'Dealer' | 'Customer';

  chargerType: string;

  siteAddress: string;

  city: string;

  state: string;

  requestDate: string;

  preferredDate: string;

  status: string;
}


/* =========================================================
   COMPONENT
   ========================================================= */

@Component({
  selector: 'app-installationreqlistadmin',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    NgFor,
    NgIf
  ],

  templateUrl: './installationreqlistadmin.html',

  styleUrls: ['./installationreqlistadmin.css']
})


export class Installationreqlistadmin {


  /* =======================================================
     SEARCH / FILTER VARIABLES
     ======================================================= */

  searchText: string = '';

  selectedStatus: string = '';

  selectedChargerType: string = '';

  requestFromType: string = '';

  selectedRequester: string = '';


  /* =======================================================
     PAGINATION
     ======================================================= */

  pageSize: number = 10;

  currentPage: number = 1;


  /* =======================================================
     STATUS LIST
     ======================================================= */

  statusList: string[] = [

    'Created',

    'Rejected',

    'Accepted',

    'Technician Assigned',

    'Survey Scheduled',

    'Survey Done',

    'Survey Report Generated',

    'BOQ Generated',

    'Quotation Generated',

    'Quotation Approved',

    'Quotation Rejected',

    'Project Created',

    'Invoice Generated',

    'Stock Reserved',

    'Technician Assignment For Installation',

    'Installation Scheduled',

    'Installation Done'

  ];


  /* =======================================================
     CHARGER TYPES
     ======================================================= */

  chargerTypes: string[] = [

    'AC 7.4 kW',

    'AC 11 kW',

    'AC 22 kW',

    'DC 30 kW',

    'DC 60 kW',

    'DC 120 kW'

  ];


  /* =======================================================
     DEALERS
     ======================================================= */

  dealerList: string[] = [

    'ABC EV Solutions',

    'Green Charge Pvt. Ltd.',

    'Volt Mobility',

    'PowerDrive EV',

    'ElectroCharge India'

  ];


  /* =======================================================
     CUSTOMERS
     ======================================================= */

  customerList: string[] = [

    'Rajesh Kumar',

    'Amit Shah',

    'Priya Enterprises',

    'Neha Sharma',

    'Rohit Mehta',

    'Sanjay Patil'

  ];


  /* =======================================================
     DEPENDENT DEALER / CUSTOMER LIST
     ======================================================= */

  requesterList: string[] = [

    ...this.dealerList,

    ...this.customerList

  ];


  /* =======================================================
     INSTALLATION DATA
     ======================================================= */

  installations: InstallationRequest[] = [

    {
      installationNo: 'INSR-D1223232',
      requestName: 'ABC EV Solutions',
      requestFrom: 'Dealer',
      chargerType: 'AC 7.4 kW',
      siteAddress: 'Plot No. 21, MIDC Industrial Area',
      city: 'Pune',
      state: 'Maharashtra',
      requestDate: '09-Sep-2026',
      preferredDate: '12-Sep-2026',
      status: 'Created'
    },

    {
      installationNo: 'INSR-C1223233',
      requestName: 'Rajesh Kumar',
      requestFrom: 'Customer',
      chargerType: 'AC 11 kW',
      siteAddress: 'Flat 302, Green Residency',
      city: 'Mumbai',
      state: 'Maharashtra',
      requestDate: '08-Sep-2026',
      preferredDate: '13-Sep-2026',
      status: 'Accepted'
    },

    {
      installationNo: 'INSR-D1223234',
      requestName: 'Green Charge Pvt. Ltd.',
      requestFrom: 'Dealer',
      chargerType: 'DC 60 kW',
      siteAddress: 'Sector 15, Industrial Estate',
      city: 'Nashik',
      state: 'Maharashtra',
      requestDate: '08-Sep-2026',
      preferredDate: '15-Sep-2026',
      status: 'Technician Assigned'
    },

    {
      installationNo: 'INSR-C1223235',
      requestName: 'Amit Shah',
      requestFrom: 'Customer',
      chargerType: 'AC 7.4 kW',
      siteAddress: '12 Park View Society',
      city: 'Thane',
      state: 'Maharashtra',
      requestDate: '07-Sep-2026',
      preferredDate: '14-Sep-2026',
      status: 'Survey Scheduled'
    },

    {
      installationNo: 'INSR-D1223236',
      requestName: 'Volt Mobility',
      requestFrom: 'Dealer',
      chargerType: 'DC 30 kW',
      siteAddress: 'Warehouse No. 8, Logistics Park',
      city: 'Nagpur',
      state: 'Maharashtra',
      requestDate: '06-Sep-2026',
      preferredDate: '16-Sep-2026',
      status: 'Survey Done'
    },

    {
      installationNo: 'INSR-C1223237',
      requestName: 'Priya Enterprises',
      requestFrom: 'Customer',
      chargerType: 'AC 22 kW',
      siteAddress: 'Commercial Complex, MG Road',
      city: 'Kolhapur',
      state: 'Maharashtra',
      requestDate: '06-Sep-2026',
      preferredDate: '18-Sep-2026',
      status: 'Survey Report Generated'
    },

    {
      installationNo: 'INSR-D1223238',
      requestName: 'PowerDrive EV',
      requestFrom: 'Dealer',
      chargerType: 'DC 60 kW',
      siteAddress: 'Plot 17, Industrial Zone',
      city: 'Aurangabad',
      state: 'Maharashtra',
      requestDate: '05-Sep-2026',
      preferredDate: '19-Sep-2026',
      status: 'BOQ Generated'
    },

    {
      installationNo: 'INSR-C1223239',
      requestName: 'Neha Sharma',
      requestFrom: 'Customer',
      chargerType: 'AC 11 kW',
      siteAddress: 'House No. 18, Sunrise Colony',
      city: 'Navi Mumbai',
      state: 'Maharashtra',
      requestDate: '05-Sep-2026',
      preferredDate: '20-Sep-2026',
      status: 'Quotation Generated'
    },

    {
      installationNo: 'INSR-D1223240',
      requestName: 'ElectroCharge India',
      requestFrom: 'Dealer',
      chargerType: 'DC 120 kW',
      siteAddress: 'EV Hub, Highway Service Road',
      city: 'Pune',
      state: 'Maharashtra',
      requestDate: '04-Sep-2026',
      preferredDate: '21-Sep-2026',
      status: 'Quotation Approved'
    },

    {
      installationNo: 'INSR-C1223241',
      requestName: 'Rohit Mehta',
      requestFrom: 'Customer',
      chargerType: 'AC 7.4 kW',
      siteAddress: 'Villa 14, Palm Residency',
      city: 'Mumbai',
      state: 'Maharashtra',
      requestDate: '04-Sep-2026',
      preferredDate: '22-Sep-2026',
      status: 'Project Created'
    },

    {
      installationNo: 'INSR-D1223242',
      requestName: 'ABC EV Solutions',
      requestFrom: 'Dealer',
      chargerType: 'DC 30 kW',
      siteAddress: 'MIDC Phase 2, Plot 45',
      city: 'Pune',
      state: 'Maharashtra',
      requestDate: '03-Sep-2026',
      preferredDate: '23-Sep-2026',
      status: 'Invoice Generated'
    },

    {
      installationNo: 'INSR-C1223243',
      requestName: 'Sanjay Patil',
      requestFrom: 'Customer',
      chargerType: 'AC 22 kW',
      siteAddress: 'Office No. 405, Business Tower',
      city: 'Thane',
      state: 'Maharashtra',
      requestDate: '03-Sep-2026',
      preferredDate: '24-Sep-2026',
      status: 'Stock Reserved'
    },

    {
      installationNo: 'INSR-D1223244',
      requestName: 'Green Charge Pvt. Ltd.',
      requestFrom: 'Dealer',
      chargerType: 'DC 60 kW',
      siteAddress: 'EV Charging Hub, Station Road',
      city: 'Nashik',
      state: 'Maharashtra',
      requestDate: '02-Sep-2026',
      preferredDate: '25-Sep-2026',
      status: 'Technician Assignment For Installation'
    },

    {
      installationNo: 'INSR-C1223245',
      requestName: 'Rajesh Kumar',
      requestFrom: 'Customer',
      chargerType: 'AC 11 kW',
      siteAddress: 'House No. 52, Lake View Road',
      city: 'Panvel',
      state: 'Maharashtra',
      requestDate: '02-Sep-2026',
      preferredDate: '26-Sep-2026',
      status: 'Installation Scheduled'
    },

    {
      installationNo: 'INSR-D1223246',
      requestName: 'Volt Mobility',
      requestFrom: 'Dealer',
      chargerType: 'DC 120 kW',
      siteAddress: 'National Highway Service Area',
      city: 'Nagpur',
      state: 'Maharashtra',
      requestDate: '01-Sep-2026',
      preferredDate: '27-Sep-2026',
      status: 'Installation Done'
    },

    {
      installationNo: 'INSR-C1223247',
      requestName: 'Amit Shah',
      requestFrom: 'Customer',
      chargerType: 'AC 7.4 kW',
      siteAddress: 'B-204, Orchid Apartments',
      city: 'Navi Mumbai',
      state: 'Maharashtra',
      requestDate: '01-Sep-2026',
      preferredDate: '28-Sep-2026',
      status: 'Rejected'
    },

    {
      installationNo: 'INSR-D1223248',
      requestName: 'PowerDrive EV',
      requestFrom: 'Dealer',
      chargerType: 'AC 22 kW',
      siteAddress: 'Industrial Estate, Block C',
      city: 'Kolhapur',
      state: 'Maharashtra',
      requestDate: '31-Aug-2026',
      preferredDate: '29-Sep-2026',
      status: 'Created'
    },

    {
      installationNo: 'INSR-C1223249',
      requestName: 'Priya Enterprises',
      requestFrom: 'Customer',
      chargerType: 'DC 30 kW',
      siteAddress: 'Commercial Park, Main Road',
      city: 'Aurangabad',
      state: 'Maharashtra',
      requestDate: '31-Aug-2026',
      preferredDate: '30-Sep-2026',
      status: 'Accepted'
    }

  ];


  /* =======================================================
     FILTERED DATA
     ======================================================= */

  filteredInstallations: InstallationRequest[] = [
    ...this.installations
  ];


  /* =======================================================
     CONSTRUCTOR
     ======================================================= */

  constructor(
    private router: Router
  ) {}


  /* =======================================================
     TOTAL PAGES
     ======================================================= */

  get totalPages(): number {

    return Math.ceil(
      this.filteredInstallations.length /
      this.pageSize
    );

  }


  /* =======================================================
     PAGE NUMBERS
     ======================================================= */

  get pages(): number[] {

    return Array.from(
      {
        length: this.totalPages
      },

      (_, index) => index + 1

    );

  }


  /* =======================================================
     PAGINATED INSTALLATIONS
     ======================================================= */

  get paginatedInstallations(): InstallationRequest[] {

    const startIndex =
      (this.currentPage - 1) *
      this.pageSize;

    const endIndex =
      startIndex +
      this.pageSize;

    return this.filteredInstallations.slice(
      startIndex,
      endIndex
    );

  }


  /* =======================================================
     START ITEM
     ======================================================= */

  get startItem(): number {

    if (
      this.filteredInstallations.length === 0
    ) {

      return 0;

    }

    return (
      (this.currentPage - 1) *
      this.pageSize
    ) + 1;

  }


  /* =======================================================
     END ITEM
     ======================================================= */

  get endItem(): number {

    return Math.min(
      this.currentPage * this.pageSize,

      this.filteredInstallations.length
    );

  }


  /* =======================================================
     REQUEST FROM CHANGE
     ======================================================= */

  onRequestFromChange(): void {

    this.selectedRequester = '';

    if (this.requestFromType === 'Dealer') {

      this.requesterList = [
        ...this.dealerList
      ];

    }
    else if (
      this.requestFromType === 'Customer'
    ) {

      this.requesterList = [
        ...this.customerList
      ];

    }
    else {

      this.requesterList = [
        ...this.dealerList,
        ...this.customerList
      ];

    }

  }


  /* =======================================================
     APPLY FILTERS
     ======================================================= */

  applyFilters(): void {

    const search =
      this.searchText
        .trim()
        .toLowerCase();


    this.filteredInstallations =
      this.installations.filter(
        (installation) => {


          /* -------------------------
             SEARCH
             ------------------------- */

          const matchesSearch =
            !search ||

            installation.installationNo
              .toLowerCase()
              .includes(search) ||

            installation.requestName
              .toLowerCase()
              .includes(search) ||

            installation.siteAddress
              .toLowerCase()
              .includes(search) ||

            installation.city
              .toLowerCase()
              .includes(search) ||

            installation.state
              .toLowerCase()
              .includes(search);


          /* -------------------------
             STATUS
             ------------------------- */

          const matchesStatus =
            !this.selectedStatus ||

            installation.status ===
            this.selectedStatus;


          /* -------------------------
             CHARGER TYPE
             ------------------------- */

          const matchesCharger =
            !this.selectedChargerType ||

            installation.chargerType ===
            this.selectedChargerType;


          /* -------------------------
             REQUEST FROM
             ------------------------- */

          const matchesRequestFrom =
            !this.requestFromType ||

            installation.requestFrom ===
            this.requestFromType;


          /* -------------------------
             DEALER / CUSTOMER
             ------------------------- */

          const matchesRequester =
            !this.selectedRequester ||

            installation.requestName ===
            this.selectedRequester;


          return (
            matchesSearch &&
            matchesStatus &&
            matchesCharger &&
            matchesRequestFrom &&
            matchesRequester
          );

        }
      );


    /* -------------------------
       RESET TO FIRST PAGE
       ------------------------- */

    this.currentPage = 1;

  }


  /* =======================================================
     RESET FILTERS
     ======================================================= */

  resetFilters(): void {

    this.searchText = '';

    this.selectedStatus = '';

    this.selectedChargerType = '';

    this.requestFromType = '';

    this.selectedRequester = '';


    this.requesterList = [

      ...this.dealerList,

      ...this.customerList

    ];


    this.filteredInstallations = [

      ...this.installations

    ];


    this.currentPage = 1;

  }


  /* =======================================================
     GO TO PAGE
     ======================================================= */

  goToPage(page: number): void {

    if (
      page >= 1 &&
      page <= this.totalPages
    ) {

      this.currentPage = page;

    }

  }


  /* =======================================================
     PREVIOUS PAGE
     ======================================================= */

  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;

    }

  }


  /* =======================================================
     NEXT PAGE
     ======================================================= */

  nextPage(): void {

    if (
      this.currentPage <
      this.totalPages
    ) {

      this.currentPage++;

    }

  }


  /* =======================================================
     STATUS CSS CLASS
     ======================================================= */

  getStatusClass(status: string): string {

    switch (status) {

      case 'Created':
        return 'status-created';

      case 'Rejected':
        return 'status-rejected';

      case 'Accepted':
        return 'status-accepted';

      case 'Technician Assigned':
        return 'status-technician-assigned';

      case 'Survey Scheduled':
        return 'status-survey-scheduled';

      case 'Survey Done':
        return 'status-survey-done';

      case 'Survey Report Generated':
        return 'status-survey-report-generated';

      case 'BOQ Generated':
        return 'status-boq-generated';

      case 'Quotation Generated':
        return 'status-quotation-generated';

      case 'Quotation Approved':
        return 'status-quotation-approved';

      case 'Quotation Rejected':
        return 'status-quotation-rejected';

      case 'Project Created':
        return 'status-project-created';

      case 'Invoice Generated':
        return 'status-invoice-generated';

      case 'Stock Reserved':
        return 'status-stock-reserved';

      case 'Technician Assignment For Installation':
        return 'status-technician-assignment-for-installation';

      case 'Installation Scheduled':
        return 'status-installation-scheduled';

      case 'Installation Done':
        return 'status-installation-done';

      default:
        return '';

    }

  }


  /* =======================================================
     VIEW INSTALLATION
     ======================================================= */

  viewInstallation(
    installation: InstallationRequest
  ): void {

    console.log(
      'View Installation:',
      installation
    );

    /*
      Add your Angular navigation here.

      Example:

      this.router.navigate([
        '/admin/installation/view',
        installation.installationNo
      ]);
    */

  }


  /* =======================================================
     EDIT INSTALLATION
     ======================================================= */

  editInstallation(
    installation: InstallationRequest
  ): void {

    console.log(
      'Edit Installation:',
      installation
    );

    /*
      Add your Angular navigation here.

      Example:

      this.router.navigate([
        '/admin/installation/edit',
        installation.installationNo
      ]);
    */

  }


  /* =======================================================
     ACCEPT / REJECT
     ======================================================= */

  acceptReject(
    installation: InstallationRequest,
    action: 'Accept' | 'Reject'
  ): void {

    console.log(
      `${action} Installation Request:`,
      installation
    );


    if (action === 'Accept') {

      installation.status = 'Accepted';

    }
    else {

      installation.status = 'Rejected';

    }


    /*
      In your actual application,
      replace the above status update
      with your API call.

      Example:

      this.http.post(
        '/api/installation/status',
        {
          installationNo:
            installation.installationNo,

          status:
            installation.status
        }
      );
    */

    this.applyFilters();

  }


  /* =======================================================
     ASSIGN TECHNICIAN
     ======================================================= */

  assignTechnician(
    installation: InstallationRequest
  ): void {

    console.log(
      'Assign Technician:',
      installation
    );

    /*
      Example:

      this.router.navigate([
        '/admin/installation/assign-technician',
        installation.installationNo
      ]);
    */

  }


  /* =======================================================
     SCHEDULE SURVEY
     ======================================================= */

  scheduleSurvey(installation: InstallationRequest): void {

    console.log(
      'Schedule Survey:',
      installation
    );

    this.router.navigate(['/survey-schedule']);

    /*
      Example:

      this.router.navigate([
        '/admin/installation/schedule-survey',
        installation.installationNo
      ]);
    */
  }

  /* =======================================================
     CREATE QUOTATION
     ======================================================= */

  createQuotation(installation: InstallationRequest): void {

    console.log(
      'Create Quotation:',
      installation
    );

    this.router.navigate(['/quotation-creation']);

  }

}