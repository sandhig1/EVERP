import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [FormsModule],
  selector: 'app-enquirycreationcustomer',
  styleUrl: './enquirycreationcustomer.css',
  templateUrl: './enquirycreationcustomer.html',
})
export class Enquirycreationcustomer {
   router = inject(Router);

  enquiry = {
    chargerType: '',
    preferredDate: null,
    siteAddress: '',
    city: '',
    state: '',
    requirementDetails: ''
  };

  goToEnquiryList(): void {
  // Replace with your actual route
  this.router.navigate(['/enquiry-list-customer']);
}

  submitEnquiry(): void {
    debugger;
    Swal.fire({
    icon: 'success',

    html: `
      <div class="success-message">
        <div class="success-title">
          Enquiry Submitted Successfully!!!
        </div>

        <div class="success-request-no">
          Enquiry No. #E12332211 Generated.
        </div>
      </div>
    `,

    showConfirmButton: true,
    confirmButtonText: 'Close',
    confirmButtonColor: '#079b72',

    allowOutsideClick: false,
    allowEscapeKey: false,

    customClass: {
      popup: 'enquiry-success-popup',
      confirmButton: 'enquiry-success-button'
    }
  });

  }


  cancelEnquiry(): void {

    this.enquiry = {
        chargerType: '',
      preferredDate: null,
      siteAddress: '',
      city: '',
      state: '',
      requirementDetails: ''
    };

  }

}
