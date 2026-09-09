import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadgeneration',
  imports:[CommonModule, FormsModule],
  templateUrl: './leadgeneration.html',
  styleUrls: ['./leadgeneration.css']
})
export class leadgeneration {

  lead = {
    leadId: '',
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    leadSource: '',
    requirement: '',
    estimatedValue: null as number | null,
    leadStatus: 'New',
    assignedSalesTeam: '',
    expectedCloseDate: ''
  };


  constructor(private router: Router) {
    this.generateLeadId();
  }


  /* =========================================================
     GENERATE LEAD ID
     ========================================================= */

  generateLeadId(): void {

    const randomNumber =
      Math.floor(1000 + Math.random() * 9000);

    this.lead.leadId =
      'LD-2025-' + randomNumber;
  }


  /* =========================================================
     SUBMIT LEAD
     ========================================================= */

  submitLead(form: NgForm): void {

    if (form.invalid) {

      Object.keys(form.controls).forEach(control => {
        form.controls[control].markAsTouched();
      });

      return;
    }


    /*
      Here you can call your API service.

      Example:

      this.leadService.createLead(this.lead).subscribe({
        next: (response) => {
          ...
        }
      });
    */


    Swal.fire({
      icon: 'success',
      title: 'Lead Generated Successfully!!!',
      html: `
        <div class="success-message">
          <div class="success-lead-no">
            Lead No. #${this.lead.leadId} Generated.
          </div>
        </div>
      `,
      confirmButtonText: 'OK',
      confirmButtonColor: '#00a85a',
      width: '400px'
    }).then(() => {

      /*
        Navigate to Lead List after successful creation.
        Change the route according to your application.
      */

      this.router.navigate(['/lead-list']);

    });

  }


  /* =========================================================
     RESET FORM
     ========================================================= */

  resetForm(form: NgForm): void {

    form.resetForm({
      leadId: this.generateNewLeadId(),
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      leadSource: '',
      requirement: '',
      estimatedValue: null,
      leadStatus: 'New',
      assignedSalesTeam: '',
      expectedCloseDate: ''
    });

  }


  /* =========================================================
     GENERATE NEW LEAD ID
     ========================================================= */

  generateNewLeadId(): string {

    const randomNumber =
      Math.floor(1000 + Math.random() * 9000);

    return 'LD-2025-' + randomNumber;
  }


  /* =========================================================
     GO TO LEAD LIST
     ========================================================= */

  goToLeadList(): void {

    this.router.navigate(['/lead-list']);

  }

}