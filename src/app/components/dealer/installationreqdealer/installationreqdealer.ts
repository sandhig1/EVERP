import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  imports: [FormsModule],
  selector: 'app-installationreqdealer',
  styleUrl: './installationreqdealer.css',
  templateUrl: './installationreqdealer.html',
})
export class Installationreqdealer {

  router = inject(Router);

  request = {
    customer: '',
    chargerType: '',
    preferredDate: null,
    siteAddress: '',
    city: '',
    state: '',
    requirementDetails: ''
  };

  goToInstallationList(): void {
  // Replace with your actual route
  this.router.navigate(['/installation-request-list-dealer']);
}

  submitRequest(): void {
    debugger;
    Swal.fire({
    icon: 'success',

    html: `
      <div class="success-message">
        <div class="success-title">
          Installation request submitted successfull!!
        </div>

        <div class="success-request-no">
          Request No. INSR-D1223232 generated.
        </div>
      </div>
    `,

    showConfirmButton: true,
    confirmButtonText: 'Close',
    confirmButtonColor: '#079b72',

    allowOutsideClick: false,
    allowEscapeKey: false,

    customClass: {
      popup: 'installation-success-popup',
      confirmButton: 'installation-success-button'
    }
  });

  }


  cancelRequest(): void {

    this.request = {
      customer: '',
      chargerType: '',
      preferredDate: null,
      siteAddress: '',
      city: '',
      state: '',
      requirementDetails: ''
    };

  }

}
