import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface RequestData {
  requestNo: string;
  dealerName: string;
  customerName: string;
}

interface ItemMaster {
  itemName: string;
  description: string;
  rate: number;
}

interface QuotationItem {
  itemName: string;
  description: string;
  quantity: number;
  rate: number;
  totalAmount: number;
}

@Component({
  selector: 'app-quotationcreation',
  imports:[FormsModule, DecimalPipe, NgFor, NgIf],
  templateUrl: './quotationcreation.html',
  styleUrls: ['./quotationcreation.css']
})
export class quotationcreation {

  router = inject(Router);

  quotation = {
    quotationNo: this.generateQuotationNo(),
    quotationDate: this.getTodayDate(),
    quotationAgainst: 'Installation Request',
    requestNo: '',
    items: [] as QuotationItem[]
  };

  installationRequests: RequestData[] = [
    {
      requestNo: 'INSR-D1223232',
      dealerName: 'ABC EV Solutions',
      customerName: 'Rajesh Kumar'
    },
    {
      requestNo: 'INSR-D1223245',
      dealerName: 'Green Charge Motors',
      customerName: 'Amit Sharma'
    },
    {
      requestNo: 'INSR-D1223261',
      dealerName: 'EV Power Hub',
      customerName: 'Neha Patil'
    }
  ];

  enquiryRequests: RequestData[] = [
    {
      requestNo: 'ENQ-D1002341',
      dealerName: 'ABC EV Solutions',
      customerName: 'Vikram Singh'
    },
    {
      requestNo: 'ENQ-D1002357',
      dealerName: 'Green Charge Motors',
      customerName: 'Priya Mehta'
    },
    {
      requestNo: 'ENQ-D1002389',
      dealerName: 'EV Power Hub',
      customerName: 'Suresh Joshi'
    }
  ];

  itemMaster: ItemMaster[] = [
    {
      itemName: 'DC Fast Charger 60kW',
      description: 'High Power DC Charger',
      rate: 850000
    },
    {
      itemName: 'DC Fast Charger 120kW',
      description: 'High Power DC Charger',
      rate: 1250000
    },
    {
      itemName: 'AC EV Charger 22kW',
      description: 'Three Phase AC Charger',
      rate: 95000
    },
    {
      itemName: 'AC EV Charger 7.4kW',
      description: 'Single Phase AC Charger',
      rate: 42000
    }
  ];

  selectedDealerName = '';
  selectedCustomerName = '';

  showItemPopup = false;

  newItem: QuotationItem = {
    itemName: '',
    description: '',
    quantity: 1,
    rate: 0,
    totalAmount: 0
  };

  goToQuotationList(){
    this.router.navigate(['/quotation-list']);
  }

  get requestList(): RequestData[] {
    return this.quotation.quotationAgainst === 'Installation Request'
      ? this.installationRequests
      : this.enquiryRequests;
  }

  get grandTotal(): number {
    return this.quotation.items.reduce(
      (total, item) => total + Number(item.totalAmount || 0),
      0
    );
  }

  private getTodayDate(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${today.getFullYear()}-${month}-${day}`;
  }

  private generateQuotationNo(): string {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `Q${randomNumber}`;
  }

  onQuotationAgainstChange(): void {
    this.quotation.requestNo = '';
    this.selectedDealerName = '';
    this.selectedCustomerName = '';
  }

  onRequestChange(): void {
    const selectedRequest = this.requestList.find(
      request => request.requestNo === this.quotation.requestNo
    );

    if (selectedRequest) {
      this.selectedDealerName = selectedRequest.dealerName;
      this.selectedCustomerName = selectedRequest.customerName;
    } else {
      this.selectedDealerName = '';
      this.selectedCustomerName = '';
    }
  }

  openItemPopup(): void {
    this.resetNewItem();
    this.showItemPopup = true;
  }

  closeItemPopup(): void {
    this.showItemPopup = false;
    this.resetNewItem();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeItemPopup();
    }
  }

  onItemSelected(): void {
    const selected = this.itemMaster.find(
      item => item.itemName === this.newItem.itemName
    );

    if (selected) {
      this.newItem.description = selected.description;
      this.newItem.rate = selected.rate;
      this.calculateItemTotal();
    } else {
      this.newItem.description = '';
      this.newItem.rate = 0;
      this.newItem.totalAmount = 0;
    }
  }

  calculateItemTotal(): void {
    const quantity = Number(this.newItem.quantity) || 0;
    const rate = Number(this.newItem.rate) || 0;

    this.newItem.totalAmount = quantity * rate;
  }

  saveItem(): void {
    if (!this.newItem.itemName) {
      Swal.fire({
        icon: 'warning',
        title: 'Item Required',
        text: 'Please select an item.',
        confirmButtonColor: '#1467d7'
      });
      return;
    }

    if (!this.newItem.quantity || this.newItem.quantity <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Quantity Required',
        text: 'Please enter a quantity greater than 0.',
        confirmButtonColor: '#1467d7'
      });
      return;
    }

    if (this.newItem.rate < 0 || this.newItem.rate === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Rate Required',
        text: 'Please enter a valid rate.',
        confirmButtonColor: '#1467d7'
      });
      return;
    }

    this.calculateItemTotal();

    this.quotation.items.push({
      itemName: this.newItem.itemName,
      description: this.newItem.description,
      quantity: Number(this.newItem.quantity),
      rate: Number(this.newItem.rate),
      totalAmount: Number(this.newItem.totalAmount)
    });

    this.closeItemPopup();
  }

  removeItem(index: number): void {
    Swal.fire({
      icon: 'warning',
      title: 'Remove Item?',
      text: 'Are you sure you want to remove this item?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Remove',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d'
    }).then(result => {
      if (result.isConfirmed) {
        this.quotation.items.splice(index, 1);
      }
    });
  }

  private validateQuotation(): boolean {
    if (!this.quotation.quotationDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Quotation Date Required',
        text: 'Please select quotation date.',
        confirmButtonColor: '#1467d7'
      });
      return false;
    }

    if (!this.quotation.quotationAgainst) {
      Swal.fire({
        icon: 'warning',
        title: 'Quotation Against Required',
        text: 'Please select quotation against.',
        confirmButtonColor: '#1467d7'
      });
      return false;
    }

    if (!this.quotation.requestNo) {
      Swal.fire({
        icon: 'warning',
        title: 'Request Required',
        text: `Please select ${
          this.quotation.quotationAgainst === 'Installation Request'
            ? 'Installation Request'
            : 'Enquiry Request'
        }.`,
        confirmButtonColor: '#1467d7'
      });
      return false;
    }

    if (this.quotation.items.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Item Required',
        text: 'Please add at least one item to the quotation.',
        confirmButtonColor: '#1467d7'
      });
      return false;
    }

    return true;
  }

  saveAsDraft(): void {
    if (!this.validateQuotation()) {
      return;
    }

    const quotationData = {
      ...this.quotation,
      status: 'Draft',
      dealerName: this.selectedDealerName,
      customerName: this.selectedCustomerName,
      totalAmount: this.grandTotal
    };

    // Replace this section with your API/service call.
    console.log('Quotation saved as Draft:', quotationData);

    Swal.fire({
      icon: 'success',
      title: 'Quotation successfully saved as draft..',
      html: `<span class="swal-quotation-no">Quotation No. #${this.quotation.quotationNo} generated.</span>`,
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text'
      },
      confirmButtonText: 'OK',
      confirmButtonColor: '#1467d7'
    });
  }

  saveQuotation(): void {
    if (!this.validateQuotation()) {
      return;
    }

    const quotationData = {
      ...this.quotation,
      status: 'Generated',
      dealerName: this.selectedDealerName,
      customerName: this.selectedCustomerName,
      totalAmount: this.grandTotal
    };

    // Replace this section with your API/service call.
    console.log('Quotation saved as Generated:', quotationData);

    Swal.fire({
      icon: 'success',
      title: 'Quotation successfully saved as successfully..',
      html: `<span class="swal-quotation-no">Quotation No. #${this.quotation.quotationNo} generated.</span>`,
      customClass: {
        title: 'swal-title',
        htmlContainer: 'swal-text'
      },
      confirmButtonText: 'OK',
      confirmButtonColor: '#1467d7'
    });
  }

  cancelQuotation(): void {
    Swal.fire({
      icon: 'question',
      title: 'Cancel Quotation?',
      text: 'All entered quotation details will be cleared.',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel',
      cancelButtonText: 'Stay',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d'
    }).then(result => {
      if (result.isConfirmed) {
        this.resetQuotation();
      }
    });
  }

  private resetNewItem(): void {
    this.newItem = {
      itemName: '',
      description: '',
      quantity: 1,
      rate: 0,
      totalAmount: 0
    };
  }

  private resetQuotation(): void {
    this.quotation = {
      quotationNo: this.generateQuotationNo(),
      quotationDate: this.getTodayDate(),
      quotationAgainst: 'Installation Request',
      requestNo: '',
      items: []
    };

    this.selectedDealerName = '';
    this.selectedCustomerName = '';
    this.closeItemPopup();
  }
}