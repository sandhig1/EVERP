import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Installation {
  installationNo: string;
  installationDate: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
  scheduleStartDateValue: string;
  scheduleEndDateValue: string;
  technicianAssigned: string;
  projectName: string;
  projectAgainst: 'Enquiry Request' | 'Installation Request';
  requestNo: string;
  requestDate: string;
  dealerCustomerName: string;
  dealerCustomerType: 'Dealer' | 'Customer';
  chargerType: string;
  status: string;
}

@Component({
  selector: 'app-installationlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './installationschedulelist.html',
  styleUrls: ['./installationschedulelist.css']
})
export class InstallationScheduleList {

  searchText: string = '';
  selectedProject: string = '';
  scheduleFromDate: string = '';
  scheduleToDate: string = '';
  selectedProjectAgainst: string = '';
  selectedStatus: string = '';
  selectedChargerType: string = '';

  pageSize: number = 10;
  currentPage: number = 1;

  statusList: string[] = [
    'Created',
    'Approved',
    'Cancelled',
    'Installation Scheduled',
    'Installation Done',
    'Under Maintenance'
  ];

  chargerTypes: string[] = [
    'AC 7.4 kW',
    'AC 11 kW',
    'AC 22 kW',
    'DC 30 kW',
    'DC 60 kW',
    'DC 120 kW'
  ];

  projectList: string[] = [
    'Pune Corporate EV Hub',
    'Mumbai Green Residency Charging',
    'Nashik Industrial EV Hub',
    'Thane Park View Charging',
    'Nagpur Logistics EV Station',
    'Navi Mumbai Commercial Charging'
  ];

  installations: Installation[] = [
    {
      installationNo: 'INS-2026-001',
      installationDate: '20-Sep-2026',
      scheduleStartDate: '24-Sep-2026',
      scheduleEndDate: '25-Sep-2026',
      scheduleStartDateValue: '2026-09-24',
      scheduleEndDateValue: '2026-09-25',
      technicianAssigned: 'Amit Patil, Rahul More',
      projectName: 'Pune Corporate EV Hub',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-2026-018',
      requestDate: '12-Sep-2026',
      dealerCustomerName: 'ABC EV Solutions',
      dealerCustomerType: 'Dealer',
      chargerType: 'DC 60 kW',
      status: 'Installation Scheduled'
    },
    {
      installationNo: 'INS-2026-002',
      installationDate: '19-Sep-2026',
      scheduleStartDate: '26-Sep-2026',
      scheduleEndDate: '27-Sep-2026',
      scheduleStartDateValue: '2026-09-26',
      scheduleEndDateValue: '2026-09-27',
      technicianAssigned: 'Sanjay Patil, Nilesh Jadhav',
      projectName: 'Mumbai Green Residency Charging',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223233',
      requestDate: '08-Sep-2026',
      dealerCustomerName: 'Rajesh Kumar',
      dealerCustomerType: 'Customer',
      chargerType: 'AC 11 kW',
      status: 'Installation Scheduled'
    },
    {
      installationNo: 'INS-2026-003',
      installationDate: '18-Sep-2026',
      scheduleStartDate: '28-Sep-2026',
      scheduleEndDate: '29-Sep-2026',
      scheduleStartDateValue: '2026-09-28',
      scheduleEndDateValue: '2026-09-29',
      technicianAssigned: 'Vijay Shinde',
      projectName: 'Nashik Industrial EV Hub',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-2026-015',
      requestDate: '07-Sep-2026',
      dealerCustomerName: 'Green Charge Pvt. Ltd.',
      dealerCustomerType: 'Dealer',
      chargerType: 'DC 120 kW',
      status: 'Approved'
    },
    {
      installationNo: 'INS-2026-004',
      installationDate: '17-Sep-2026',
      scheduleStartDate: '30-Sep-2026',
      scheduleEndDate: '01-Oct-2026',
      scheduleStartDateValue: '2026-09-30',
      scheduleEndDateValue: '2026-10-01',
      technicianAssigned: 'Rohit Mehta, Akash Pawar',
      projectName: 'Thane Park View Charging',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223235',
      requestDate: '07-Sep-2026',
      dealerCustomerName: 'Amit Shah',
      dealerCustomerType: 'Customer',
      chargerType: 'AC 7.4 kW',
      status: 'Created'
    },
    {
      installationNo: 'INS-2026-005',
      installationDate: '16-Sep-2026',
      scheduleStartDate: '02-Oct-2026',
      scheduleEndDate: '03-Oct-2026',
      scheduleStartDateValue: '2026-10-02',
      scheduleEndDateValue: '2026-10-03',
      technicianAssigned: 'Prakash Kadam',
      projectName: 'Nagpur Logistics EV Station',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-2026-012',
      requestDate: '05-Sep-2026',
      dealerCustomerName: 'Volt Mobility',
      dealerCustomerType: 'Dealer',
      chargerType: 'DC 30 kW',
      status: 'Installation Done'
    },
    {
      installationNo: 'INS-2026-006',
      installationDate: '15-Sep-2026',
      scheduleStartDate: '04-Oct-2026',
      scheduleEndDate: '05-Oct-2026',
      scheduleStartDateValue: '2026-10-04',
      scheduleEndDateValue: '2026-10-05',
      technicianAssigned: 'Nitin Joshi, Mahesh Kale',
      projectName: 'Navi Mumbai Commercial Charging',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223239',
      requestDate: '05-Sep-2026',
      dealerCustomerName: 'Neha Sharma',
      dealerCustomerType: 'Customer',
      chargerType: 'AC 11 kW',
      status: 'Under Maintenance'
    },
    {
      installationNo: 'INS-2026-007',
      installationDate: '14-Sep-2026',
      scheduleStartDate: '06-Oct-2026',
      scheduleEndDate: '07-Oct-2026',
      scheduleStartDateValue: '2026-10-06',
      scheduleEndDateValue: '2026-10-07',
      technicianAssigned: 'Amit Patil',
      projectName: 'Pune Corporate EV Hub',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-2026-020',
      requestDate: '13-Sep-2026',
      dealerCustomerName: 'PowerDrive EV',
      dealerCustomerType: 'Dealer',
      chargerType: 'DC 60 kW',
      status: 'Installation Scheduled'
    },
    {
      installationNo: 'INS-2026-008',
      installationDate: '13-Sep-2026',
      scheduleStartDate: '08-Oct-2026',
      scheduleEndDate: '09-Oct-2026',
      scheduleStartDateValue: '2026-10-08',
      scheduleEndDateValue: '2026-10-09',
      technicianAssigned: 'Rahul More, Nilesh Jadhav',
      projectName: 'Mumbai Green Residency Charging',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223241',
      requestDate: '04-Sep-2026',
      dealerCustomerName: 'Rohit Mehta',
      dealerCustomerType: 'Customer',
      chargerType: 'AC 7.4 kW',
      status: 'Approved'
    },
    {
      installationNo: 'INS-2026-009',
      installationDate: '12-Sep-2026',
      scheduleStartDate: '10-Oct-2026',
      scheduleEndDate: '11-Oct-2026',
      scheduleStartDateValue: '2026-10-10',
      scheduleEndDateValue: '2026-10-11',
      technicianAssigned: 'Sanjay Patil',
      projectName: 'Nashik Industrial EV Hub',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-2026-021',
      requestDate: '14-Sep-2026',
      dealerCustomerName: 'ElectroCharge India',
      dealerCustomerType: 'Dealer',
      chargerType: 'DC 120 kW',
      status: 'Created'
    },
    {
      installationNo: 'INS-2026-010',
      installationDate: '11-Sep-2026',
      scheduleStartDate: '12-Oct-2026',
      scheduleEndDate: '13-Oct-2026',
      scheduleStartDateValue: '2026-10-12',
      scheduleEndDateValue: '2026-10-13',
      technicianAssigned: 'Vijay Shinde, Akash Pawar',
      projectName: 'Thane Park View Charging',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223243',
      requestDate: '03-Sep-2026',
      dealerCustomerName: 'Sanjay Patil',
      dealerCustomerType: 'Customer',
      chargerType: 'AC 22 kW',
      status: 'Installation Scheduled'
    }
  ];

  filteredInstallations: Installation[] = [...this.installations];

  constructor(private router: Router) {}

  createInstallation(): void {
    this.router.navigate(['/installation-creation']);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredInstallations.length / this.pageSize));
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  get paginatedInstallations(): Installation[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredInstallations.slice(startIndex, startIndex + this.pageSize);
  }

  get startItem(): number {
    return this.filteredInstallations.length === 0
      ? 0
      : (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredInstallations.length
    );
  }

  onProjectAgainstChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    const search = this.searchText.trim().toLowerCase();

    this.filteredInstallations = this.installations.filter((installation) => {

      const matchesSearch =
        !search ||
        installation.installationNo.toLowerCase().includes(search) ||
        installation.projectName.toLowerCase().includes(search) ||
        installation.requestNo.toLowerCase().includes(search) ||
        installation.dealerCustomerName.toLowerCase().includes(search) ||
        installation.technicianAssigned.toLowerCase().includes(search);

      const matchesProject =
        !this.selectedProject ||
        installation.projectName === this.selectedProject;

      const matchesAgainst =
        !this.selectedProjectAgainst ||
        installation.projectAgainst === this.selectedProjectAgainst;

      const matchesStatus =
        !this.selectedStatus ||
        installation.status === this.selectedStatus;

      const matchesCharger =
        !this.selectedChargerType ||
        installation.chargerType === this.selectedChargerType;

      const matchesFromDate =
        !this.scheduleFromDate ||
        installation.scheduleEndDateValue >= this.scheduleFromDate;

      const matchesToDate =
        !this.scheduleToDate ||
        installation.scheduleStartDateValue <= this.scheduleToDate;

      return (
        matchesSearch &&
        matchesProject &&
        matchesAgainst &&
        matchesStatus &&
        matchesCharger &&
        matchesFromDate &&
        matchesToDate
      );
    });

    this.currentPage = 1;
  }

  resetFilters(): void {
    this.searchText = '';
    this.selectedProject = '';
    this.scheduleFromDate = '';
    this.scheduleToDate = '';
    this.selectedProjectAgainst = '';
    this.selectedStatus = '';
    this.selectedChargerType = '';
    this.filteredInstallations = [...this.installations];
    this.currentPage = 1;
  }

  getSerialNumber(index: number): number {
    return (this.currentPage - 1) * this.pageSize + index + 1;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
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

  viewInstallation(installation: Installation): void {
    console.log('View Installation:', installation);
    // Add your Angular navigation here.
  }

  editInstallation(installation: Installation): void {
    console.log('Edit Installation:', installation);
    // Add your Angular navigation here.
  }

  printInstallation(installation: Installation): void {
    console.log('Print Installation:', installation);
    // Add your printable installation view navigation here.
  }

  generateInvoice(installation: Installation): void {
    console.log('Generate Invoice:', installation);
    // Add your invoice creation/navigation here.
  }
}
