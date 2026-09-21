import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ProjectAgainst = 'Installation Request' | 'Enquiry Request';
type ProjectStatus =
  | 'Created'
  | 'Approved'
  | 'Cancelled'
  | 'Installation Scheduled'
  | 'Installation Done'
  | 'Under Maintenance';

interface BoqItem {
  itemCode: string;
  itemName: string;
  rate: string;
  qty: number;
  tax: string;
  amount: string;
}

interface MaintenanceContract {
  contractNo: string;
  contractPeriod: string;
  contractCost: string;
  totalService: number;
  pending: number;
  completed: number;
  serviceCost: string;
}

interface ServiceDetail {
  serviceNo: string;
  serviceDate: string;
  contractNo: string;
  serviceDetail: string;
  serviceCost: string;
}

@Component({
  selector: 'app-projectview',
  standalone: true,
  imports: [FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './projectview.html',
  styleUrls: ['./projectview.css']
})
export class projectview {
  projectCode = 'PRJ-2026-00125';
  projectName = 'ABC Motors EV Charging Project';
  projectType = 'Commercial';
  projectManager = 'Rahul Sharma';
  projectCost = '₹ 12,50,000';
  status: ProjectStatus = 'Created';

  createdOn = '2026-09-01';
  createdBy = 'Admin User';
  scheduledStartDate = '2026-09-15';
  scheduledEndDate = '2026-10-15';
  projectStartDate = '2026-09-16';
  projectEndDate = '2026-10-14';

  projectAgainst: ProjectAgainst = 'Installation Request';
  referenceNo = 'INSR-D1223232';
  partyName = 'ABC Motors Pvt. Ltd.';
  siteAddress = 'Plot No. 24, MIDC Industrial Area,\nNashik, Maharashtra - 422007';
  projectDetail =
    'Installation of EV charging infrastructure with AC and DC charging stations, electrical works and commissioning.';

  quotationNo = 'QT-2026-00125';
  quotationDate = '2026-09-02';
  quotationAmt = '₹ 12,50,000';

  boqItems: BoqItem[] = [
    { itemCode: 'EV-AC-022', itemName: 'AC EV Charger 22kW', rate: '₹ 1,45,000', qty: 4, tax: '₹ 1,04,400', amount: '₹ 6,84,400' },
    { itemCode: 'EV-DC-060', itemName: 'DC Fast Charger 60kW', rate: '₹ 4,25,000', qty: 1, tax: '₹ 76,500', amount: '₹ 5,01,500' },
    { itemCode: 'CAB-001', itemName: 'Charging Cable & Accessories', rate: '₹ 32,000', qty: 1, tax: '₹ 5,760', amount: '₹ 37,760' }
  ];

  boqTotal = '₹ 11,02,000';
  totalTax = '₹ 1,86,660';
  subtotal = '₹ 9,15,340';
  discount = '₹ 0';
  grandTotal = '₹ 9,15,340';

  installationNo = 'INST-2026-00451';
  installationDate = '2026-09-16';
  installationStatus = 'Scheduled';
  technicianName = 'Suresh Patil';
  technicianAssignedOn = '2026-09-12';
  installationScheduleDate = '2026-09-20';
  installationEndDate = '2026-09-22';

  maintenanceContracts: MaintenanceContract[] = [
    { contractNo: 'MC-2026-0018', contractPeriod: '01 Year', contractCost: '₹ 75,000', totalService: 4, pending: 2, completed: 2, serviceCost: '₹ 18,000' },
    { contractNo: 'MC-2027-0021', contractPeriod: '01 Year', contractCost: '₹ 82,000', totalService: 4, pending: 4, completed: 0, serviceCost: '₹ 0' }
  ];

  totalContractCost = '₹ 1,57,000';
  totalService = 8;
  totalPending = 6;
  totalCompleted = 2;
  totalServiceCost = '₹ 18,000';

  serviceDetails: ServiceDetail[] = [
    {
      serviceNo: 'SRV-2026-00021',
      serviceDate: '2026-09-10',
      contractNo: 'MC-2026-0018',
      serviceDetail: 'Quarterly preventive maintenance and charger inspection',
      serviceCost: '₹ 9,000'
    },
    {
      serviceNo: 'SRV-2026-00028',
      serviceDate: '2026-09-14',
      contractNo: 'MC-2026-0018',
      serviceDetail: 'Connector inspection, cleaning and functional testing',
      serviceCost: '₹ 9,000'
    }
  ];

  formatDate(date: string): string {
    const p = date.split('-');
    return p.length === 3 ? `${p[2]}-${p[1]}-${p[0]}` : date;
  }

  getStatusClass(status: ProjectStatus): string {
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

  printProject(): void {
    window.print();
  }
}
