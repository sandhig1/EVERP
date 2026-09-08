import { DecimalPipe, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { pipe } from 'rxjs';

@Component({
  imports: [FormsModule, MatIcon, DecimalPipe, NgIf],
  selector: 'app-dashboardadmin',
  styleUrl: './dashboardadmin.css',
  templateUrl: './dashboardadmin.html',
})
export class Dashboardadmin {
  selectedPeriod: string = 'ALL';

fromDate: string = '';
toDate: string = '';

totalEnquiries: number = 125;
totalQuotations: number = 48;
totalCustomers: number = 320;
totalRevenue: number = 1250000;


onPeriodChange(): void {

  console.log('Selected Period:', this.selectedPeriod);

  if (this.selectedPeriod !== 'CUSTOM') {
    this.fromDate = '';
    this.toDate = '';
  }

}


applyFilter(): void {

  if (this.selectedPeriod === 'CUSTOM') {

    if (!this.fromDate || !this.toDate) {
      alert('Please select From Date and To Date.');
      return;
    }

  }

  console.log('Period:', this.selectedPeriod);
  console.log('From Date:', this.fromDate);
  console.log('To Date:', this.toDate);

  // API call can be added here later
}


resetFilter(): void {

  this.selectedPeriod = 'ALL';
  this.fromDate = '';
  this.toDate = '';

}
}
