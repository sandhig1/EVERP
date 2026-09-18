import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

type ProjectAgainst = 'all' | 'installation' | 'enquiry';

interface Project {
  projectName: string;
  createdOn: string;
  projectAgainst: ProjectAgainst;
  requestNo: string;
  quotationNo: string;
  quotationDate: string;
  party: string;
  projectCost: number;
  status: 'Created' | 'Approved' | 'Cancelled' | 'Installation Scheduled' | 'Installation Done' | 'Under Maintenance';
  scheduleDate: string;
}

@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './projectlist.html',
  styleUrls: ['./projectlist.css']
})
export class projectlist {
  projectName = '';
  projectAgainst: ProjectAgainst = 'all';
  installationRequest = '';
  enquiryRequest = '';
  customer = '';
  dealer = '';
  allRequest = '';
  allParty = '';
  fromDate = '';
  toDate = '';
  status = '';

  router = inject(Router);

  installationRequests = ['INSR-D1223232','INSR-D1223233','INSR-D1223234'];
  enquiryRequests = ['ENQ-D1223232','ENQ-D1223233','ENQ-D1223234'];
  allRequests = [...this.installationRequests, ...this.enquiryRequests];

  customers = ['ABC Motors Pvt. Ltd.','Green Mobility India','EV Power Systems'];
  dealers = ['XYZ EV Solutions','PowerDrive Energy','Future Charge Dealers'];
  allParties = [...this.customers, ...this.dealers];

  statuses = ['Created','Approved','Cancelled','Installation Scheduled','Installation Done','Under Maintenance'];

  projects: Project[] = [
    {projectName:'ABC Motors EV Charging Project',createdOn:'2026-09-01',projectAgainst:'installation',requestNo:'INSR-D1223232',quotationNo:'QT-2026-00125',quotationDate:'2026-09-02',party:'ABC Motors Pvt. Ltd.',projectCost:485000,status:'Created',scheduleDate:'2026-09-15'},
    {projectName:'XYZ Dealer Charging Hub',createdOn:'2026-09-03',projectAgainst:'enquiry',requestNo:'ENQ-D1223232',quotationNo:'QT-2026-00126',quotationDate:'2026-09-03',party:'XYZ EV Solutions',projectCost:725000,status:'Approved',scheduleDate:'2026-09-18'},
    {projectName:'Green Mobility Fast Charger',createdOn:'2026-09-05',projectAgainst:'installation',requestNo:'INSR-D1223233',quotationNo:'QT-2026-00127',quotationDate:'2026-09-05',party:'Green Mobility India',projectCost:610000,status:'Installation Scheduled',scheduleDate:'2026-09-20'},
    {projectName:'PowerDrive Commercial Station',createdOn:'2026-09-07',projectAgainst:'enquiry',requestNo:'ENQ-D1223233',quotationNo:'QT-2026-00128',quotationDate:'2026-09-07',party:'PowerDrive Energy',projectCost:895000,status:'Installation Done',scheduleDate:'2026-09-12'},
    {projectName:'EV Fleet Charging Project',createdOn:'2026-09-09',projectAgainst:'installation',requestNo:'INSR-D1223234',quotationNo:'QT-2026-00129',quotationDate:'2026-09-09',party:'EV Power Systems',projectCost:540000,status:'Under Maintenance',scheduleDate:'2026-09-14'},
    {projectName:'Metro EV Charging Facility',createdOn:'2026-09-10',projectAgainst:'enquiry',requestNo:'ENQ-D1223234',quotationNo:'QT-2026-00130',quotationDate:'2026-09-10',party:'Future Charge Dealers',projectCost:680000,status:'Cancelled',scheduleDate:'2026-09-22'}
  ];

  filteredProjects: Project[] = [...this.projects];

  get resultCountText(): string { return `Showing ${this.filteredProjects.length} projects`; }
  get paginationText(): string {
    const total = this.filteredProjects.length;
    return total ? `Showing 1 to ${total} of ${total} projects` : 'Showing 0 to 0 of 0 projects';
  }

  ngOnInit(): void { this.applyFilters(); }

  onAgainstChange(): void {
    this.installationRequest = '';
    this.enquiryRequest = '';
    this.customer = '';
    this.dealer = '';
    this.allRequest = '';
    this.allParty = '';
  }

  applyFilters(): void {
    if (this.fromDate && this.toDate && this.fromDate > this.toDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Date Range',
        text: 'Scheduled From date cannot be later than Scheduled To date.',
        confirmButtonColor: '#075dc9'
      });
      return;
    }

    const name = this.projectName.trim().toLowerCase();

    this.filteredProjects = this.projects.filter(project => {
      const matchesName =
        !name || project.projectName.toLowerCase().includes(name);

      const matchesAgainst =
        this.projectAgainst === 'all' ||
        project.projectAgainst === this.projectAgainst;

      let matchesRequest = true;
      let matchesParty = true;

      if (this.projectAgainst === 'installation') {
        matchesRequest =
          !this.installationRequest ||
          project.requestNo === this.installationRequest;

        matchesParty =
          !this.customer ||
          project.party === this.customer;
      } else if (this.projectAgainst === 'enquiry') {
        matchesRequest =
          !this.enquiryRequest ||
          project.requestNo === this.enquiryRequest;

        matchesParty =
          !this.dealer ||
          project.party === this.dealer;
      } else {
        matchesRequest =
          !this.allRequest ||
          project.requestNo === this.allRequest;

        matchesParty =
          !this.allParty ||
          project.party === this.allParty;
      }

      const matchesStatus =
        !this.status || project.status === this.status;

      const matchesFrom =
        !this.fromDate || project.scheduleDate >= this.fromDate;

      const matchesTo =
        !this.toDate || project.scheduleDate <= this.toDate;

      return (
        matchesName &&
        matchesAgainst &&
        matchesRequest &&
        matchesParty &&
        matchesStatus &&
        matchesFrom &&
        matchesTo
      );
    });
  }

  resetFilters(): void {
    this.projectName = '';
    this.projectAgainst = 'all';
    this.installationRequest = '';
    this.enquiryRequest = '';
    this.customer = '';
    this.dealer = '';
    this.allRequest = '';
    this.allParty = '';
    this.fromDate = '';
    this.toDate = '';
    this.status = '';
    this.applyFilters();
  }

  viewProject(project: Project): void {
    Swal.fire({icon:'info', title:'View Project', text:`Project: ${project.projectName}`, confirmButtonColor:'#075dc9'});

    this.router.navigate(['/project-view']);
  }

  editProject(project: Project): void {
    //Swal.fire({icon:'info', title:'Edit Project', text:`Project: ${project.projectName}`, confirmButtonColor:'#075dc9'});
    this.router.navigate(['project-edit']);
  }

  cancelProject(project: Project): void {
    Swal.fire({
      icon:'warning', title:'Cancel Project?', text:`Are you sure you want to cancel "${project.projectName}"?`,
      showCancelButton:true, confirmButtonText:'Yes, Cancel', cancelButtonText:'No',
      confirmButtonColor:'#c43d3d', cancelButtonColor:'#6c757d'
    }).then(result => {
      if (result.isConfirmed) {
        project.status = 'Cancelled';
        this.applyFilters();
        Swal.fire({icon:'success', title:'Project Cancelled', text:`${project.projectName} has been cancelled.`, confirmButtonColor:'#075dc9'});
      }
    });
  }

  scheduleInstallation(project: Project): void {
    //Swal.fire({icon:'info', title:'Create Project', text:`Create project from quotation ${project.quotationNo}.`, confirmButtonColor:'#075dc9'});
    this.router.navigate(["/project-creation"]);
  }

  createInvoice(project: Project): void {
    Swal.fire({icon:'info', title:'Generate Invoice', text:`Generate invoice for ${project.projectName}.`, confirmButtonColor:'#075dc9'});
  }

  createNewProject(): void {
    //aqSwal.fire({icon:'info', title:'Create Project', text:'Open the Create Project page.', confirmButtonColor:'#075dc9'});
    this.router.navigate(["/project-creation"]);
  }

  getStatusClass(status: Project['status']): string {
    switch (status) {
      case 'Created': return 'status-created';
      case 'Approved': return 'status-approved';
      case 'Cancelled': return 'status-cancelled';
      case 'Installation Scheduled': return 'status-installation-scheduled';
      case 'Installation Done': return 'status-installation-done';
      case 'Under Maintenance': return 'status-under-maintenance';
      default: return '';
    }
  }

  formatDate(date: string): string {
    const parts = date.split('-');
    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : date;
  }

  formatAmount(amount: number): string {
    return amount.toLocaleString('en-IN');
  }
}
