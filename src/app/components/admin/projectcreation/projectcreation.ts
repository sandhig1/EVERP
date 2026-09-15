import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Quotation {
  quotationNo: string;
  quotationDate: string;
  quotationAmt: string;
  quotationAgainst: 'Installation Request' | 'Enquiry Request';
  referenceNo: string;
  party: string;
}

@Component({
  selector: 'app-projectcreation',
  imports: [FormsModule, NgClass, NgFor, NgIf],
  templateUrl: './projectcreation.html',
  styleUrls: ['./projectcreation.css']
})
export class projectcreation {
  router = inject(Router);

  quotationNo = '';
  quotationDate = '';
  quotationAmt = '';
  quotationAgainst: 'Installation Request' | 'Enquiry Request' = 'Installation Request';
  referenceNo = '';
  party = '';

  projectName = '';
  projectCode = '';
  projectType = '';
  projectManager = '';
  projectCost = '';
  scheduledStartDate = '';
  scheduleEndDate = '';
  description = '';

  quotations: Quotation[] = [
    { quotationNo:'QT-2026-00125', quotationDate:'2026-09-11', quotationAmt:'₹ 12,50,000', quotationAgainst:'Installation Request', referenceNo:'INSR-D1223232', party:'ABC Motors Pvt. Ltd.' },
    { quotationNo:'QT-2026-00126', quotationDate:'2026-09-10', quotationAmt:'₹ 18,75,000', quotationAgainst:'Enquiry Request', referenceNo:'ENQ-D1223232', party:'XYZ EV Solutions' },
    { quotationNo:'QT-2026-00127', quotationDate:'2026-09-09', quotationAmt:'₹ 15,20,000', quotationAgainst:'Installation Request', referenceNo:'INSR-D1223233', party:'Green Mobility India' },
    { quotationNo:'QT-2026-00128', quotationDate:'2026-09-08', quotationAmt:'₹ 22,40,000', quotationAgainst:'Enquiry Request', referenceNo:'ENQ-D1223233', party:'PowerDrive Energy' }
  ];

  onQuotationSelect(): void {
    const selected = this.quotations.find(q => q.quotationNo === this.quotationNo);

    if (!selected) {
      this.quotationDate = '';
      this.quotationAmt = '';
      this.quotationAgainst = 'Installation Request';
      this.referenceNo = '';
      this.party = '';
      this.projectCost = '';
      return;
    }

    this.quotationDate = selected.quotationDate;
    this.quotationAmt = selected.quotationAmt;
    this.projectCost = selected.quotationAmt;
    this.quotationAgainst = selected.quotationAgainst;
    this.referenceNo = selected.referenceNo;
    this.party = selected.party;
  }

  goToProjectList(): void {
    // Add project-list route here if required.
    this.router.navigate(['/project-list']);
  }

  saveProject(): void {
    Swal.fire({
      icon:'success',
      title:'Project Created Successfully',
      text:'Project code #P9221233 is generated',
      confirmButtonText:'OK',
      confirmButtonColor:'#075dc9',
      customClass:{
        popup:'project-success-popup',
        title:'project-success-title',
        htmlContainer:'project-success-text'
      }
    });
  }

  onCancel(): void {
    window.history.back();
  }
}
