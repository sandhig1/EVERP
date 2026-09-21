import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/* =========================================================
   MODELS
   ========================================================= */

interface BoqItem {
  itemCode: string;
  itemName: string;
  qty: number;
}

interface Project {
  id: string;
  projectName: string;
  projectCode: string;
  scheduleStartDate: string;
  scheduleEndDate: string;
  projectAgainst: 'Enquiry Request' | 'Installation Request';
  requestNo: string;
  requestDate: string;
  dealerName?: string;
  customerName?: string;
  chargerType: string;
  boqItems: BoqItem[];
}

/* =========================================================
   COMPONENT
   ========================================================= */

@Component({
  selector: 'app-installationcreation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf
  ],
  templateUrl: './installationschedulecreation.html',
  styleUrls: ['./installationschedulecreation.css']
})
export class InstallationScheduleCreation {

  /* =======================================================
     CREATED PROJECTS
     Only projects with Status = Created are displayed here.
     ======================================================= */

  createdProjects: Project[] = [
    {
      id: 'P001',
      projectName: 'Pune EV Charging Hub',
      projectCode: 'P9221233',
      scheduleStartDate: '25-Sep-2026',
      scheduleEndDate: '05-Oct-2026',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-10245',
      requestDate: '12-Sep-2026',
      dealerName: 'ABC EV Solutions',
      chargerType: 'DC 60 kW',
      boqItems: [
        {
          itemCode: 'EV-DC-60',
          itemName: 'DC Fast Charger 60 kW',
          qty: 2
        },
        {
          itemCode: 'CAB-120',
          itemName: 'DC Charging Cable',
          qty: 4
        },
        {
          itemCode: 'PDB-100',
          itemName: 'Power Distribution Board',
          qty: 1
        }
      ]
    },
    {
      id: 'P002',
      projectName: 'Mumbai Residential EV Point',
      projectCode: 'P9221234',
      scheduleStartDate: '28-Sep-2026',
      scheduleEndDate: '03-Oct-2026',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223250',
      requestDate: '14-Sep-2026',
      customerName: 'Rajesh Kumar',
      chargerType: 'AC 11 kW',
      boqItems: [
        {
          itemCode: 'EV-AC-11',
          itemName: 'AC EV Charger 11 kW',
          qty: 1
        },
        {
          itemCode: 'CAB-AC-20',
          itemName: 'AC Charging Cable',
          qty: 1
        },
        {
          itemCode: 'MCB-040',
          itemName: 'MCB Protection Unit',
          qty: 1
        }
      ]
    },
    {
      id: 'P003',
      projectName: 'Navi Mumbai Fleet Charging Station',
      projectCode: 'P9221235',
      scheduleStartDate: '01-Oct-2026',
      scheduleEndDate: '15-Oct-2026',
      projectAgainst: 'Enquiry Request',
      requestNo: 'ENQ-10251',
      requestDate: '16-Sep-2026',
      dealerName: 'Green Charge Pvt. Ltd.',
      chargerType: 'DC 120 kW',
      boqItems: [
        {
          itemCode: 'EV-DC-120',
          itemName: 'DC Fast Charger 120 kW',
          qty: 3
        },
        {
          itemCode: 'CAB-240',
          itemName: 'DC Charging Cable',
          qty: 6
        }
      ]
    },
    {
      id: 'P004',
      projectName: 'Thane Commercial Charging Point',
      projectCode: 'P9221236',
      scheduleStartDate: '05-Oct-2026',
      scheduleEndDate: '12-Oct-2026',
      projectAgainst: 'Installation Request',
      requestNo: 'INSR-C1223251',
      requestDate: '17-Sep-2026',
      customerName: 'Priya Enterprises',
      chargerType: 'AC 22 kW',
      boqItems: [
        {
          itemCode: 'EV-AC-22',
          itemName: 'AC EV Charger 22 kW',
          qty: 2
        },
        {
          itemCode: 'CAB-AC-32',
          itemName: 'AC Charging Cable',
          qty: 2
        }
      ]
    }
  ];

  /* =======================================================
     PROJECT SELECTION
     ======================================================= */

  selectedProjectId: string = '';
  selectedProject: Project | null = null;

  /* =======================================================
     INSTALLATION SCHEDULE
     ======================================================= */

  installationScheduleStartDate: string = '';
  installationScheduleEndDate: string = '';

  /* =======================================================
     TECHNICIANS
     ======================================================= */

  technicians: string[] = [
    'Amit Patil',
    'Rahul Sharma',
    'Suresh More',
    'Vijay Kumar',
    'Nitin Jadhav',
    'Prakash Singh',
    'Ramesh Yadav',
    'Akash Deshmukh'
  ];

  technician1: string = '';
  technician2: string = '';
  technician3: string = '';
  technician4: string = '';
  technician5: string = '';
  technician6: string = '';

  /* =======================================================
     REMARKS
     ======================================================= */

  remarks: string = '';

  constructor(
    private router: Router
  ) {}

  /* =======================================================
     PROJECT CHANGE
     ======================================================= */

  onProjectChange(): void {

    this.selectedProject =
      this.createdProjects.find(
        project => project.id === this.selectedProjectId
      ) || null;

    if (!this.selectedProject) {
      this.clearInstallationFields();
      return;
    }

    /*
     * Installation schedule dates are intentionally kept blank.
     * They are entered by the user and are compulsory.
     */
    this.installationScheduleStartDate = '';
    this.installationScheduleEndDate = '';
  }

  /* =======================================================
     SAVE INSTALLATION
     ======================================================= */

  saveInstallation(): void {

    if (!this.selectedProject) {
      alert('Please select Project Name.');
      return;
    }

    if (!this.installationScheduleStartDate) {
      alert('Please select Schedule Start Date.');
      return;
    }

    if (!this.installationScheduleEndDate) {
      alert('Please select Schedule End Date.');
      return;
    }

    if (
      this.installationScheduleStartDate >
      this.installationScheduleEndDate
    ) {
      alert('Schedule End Date cannot be earlier than Schedule Start Date.');
      return;
    }

    if (!this.technician1) {
      alert('Please select Technician 1.');
      return;
    }

    if (!this.remarks.trim()) {
      alert('Please enter Remarks.');
      return;
    }

    if (this.remarks.length > 1000) {
      alert('Remarks cannot exceed 1000 characters.');
      return;
    }

    const installationNo =
      'INS-' +
      new Date().getFullYear() +
      String(Date.now()).slice(-6);

    /*
     * Replace this section with the actual API call.
     */
    console.log('Installation Created:', {
      installationNo,
      project: this.selectedProject,
      installationScheduleStartDate:
        this.installationScheduleStartDate,
      installationScheduleEndDate:
        this.installationScheduleEndDate,
      technicians: [
        this.technician1,
        this.technician2,
        this.technician3,
        this.technician4,
        this.technician5,
        this.technician6
      ].filter(Boolean),
      remarks: this.remarks.trim()
    });

    alert(
      'Installation Created Successfully!!!\n' +
      'Installation No. #' + installationNo + ' generated.'
    );
  }

  /* =======================================================
     RESET
     ======================================================= */

  resetForm(): void {
    this.selectedProjectId = '';
    this.selectedProject = null;
    this.clearInstallationFields();
  }

  private clearInstallationFields(): void {
    this.installationScheduleStartDate = '';
    this.installationScheduleEndDate = '';

    this.technician1 = '';
    this.technician2 = '';
    this.technician3 = '';
    this.technician4 = '';
    this.technician5 = '';
    this.technician6 = '';

    this.remarks = '';
  }

  /* =======================================================
     NAVIGATION
     ======================================================= */

  goToInstallationList(): void {
    this.router.navigate(['/installation-list']);
  }
}
