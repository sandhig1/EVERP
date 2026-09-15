import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ProjectAgainst = 'installation' | 'enquiry';

type ProjectStatus =
  | 'Created'
  | 'Approved'
  | 'Cancelled'
  | 'Installation Scheduled'
  | 'Installation Done'
  | 'Under Maintenance';

interface ProjectDetail {
  projectCode: string;
  projectName: string;
  createdOn: string;
  projectAgainst: ProjectAgainst;
  requestNo: string;
  quotationNo: string;
  quotationDate: string;
  party: string;
  projectCost: number;
  projectType: string;
  projectManager: string;
  scheduledStartDate: string;
  scheduleEndDate: string;
  description: string;
  status: ProjectStatus;
}

@Component({
  selector: 'app-projectview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projectview.html',
  styleUrls: ['./projectview.css']
})
export class projectview {

  project: ProjectDetail = {
    projectCode: 'P9221233',
    projectName: 'ABC Motors EV Charging Project',
    createdOn: '2026-09-01',
    projectAgainst: 'installation',
    requestNo: 'INSR-D1223232',
    quotationNo: 'QT-2026-00125',
    quotationDate: '2026-09-02',
    party: 'ABC Motors Pvt. Ltd.',
    projectCost: 485000,
    projectType: 'Commercial',
    projectManager: 'Rahul Sharma',
    scheduledStartDate: '2026-09-15',
    scheduleEndDate: '2026-09-30',
    description: 'Installation of EV charging infrastructure including charger installation, electrical work, testing and commissioning.',
    status: 'Created'
  };

  today = this.getToday();

  printProject(): void {
    window.print();
  }

  goBack(): void {
    window.history.back();
  }

  formatDate(date: string): string {
    if (!date) {
      return '';
    }

    const parts = date.split('-');

    if (parts.length !== 3) {
      return date;
    }

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  formatAmount(amount: number): string {
    return amount.toLocaleString('en-IN');
  }

  getStatusClass(status: ProjectStatus): string {
    switch (status) {
      case 'Created':
        return 'status-created';
      case 'Approved':
        return 'status-approved';
      case 'Cancelled':
        return 'status-cancelled';
      case 'Installation Scheduled':
        return 'status-installation-scheduled';
      case 'Installation Done':
        return 'status-installation-done';
      case 'Under Maintenance':
        return 'status-under-maintenance';
      default:
        return '';
    }
  }

  private getToday(): string {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
}
