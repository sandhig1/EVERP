import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, DecimalPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface RequestMaster {
  requestNo:string; customerName:string; dealerName:string;
}
interface Quotation {
  quotationNo:string; quotationDate:string;
  quotationAgainst:'Installation Request'|'Enquiry Request';
  requestNo:string; quotationFor:string; customerName:string;
  dealerName:string; amount:number; status:string;
}

@Component({
  selector:'app-quotationlistadmin',
  standalone:true,
  imports:[FormsModule, NgClass, NgFor, NgIf, DecimalPipe,DatePipe],
  templateUrl:'./quotationlistadmin.html',
  styleUrl:'./quotationlistadmin.css'
})
export class quotationlistadmin {
  constructor(private router:Router){}

  filters={quotationNo:'',quotationAgainst:'',requestNo:'',partyName:'',fromDate:'',toDate:'',status:''};

  statusList=[
    'Generated','Draft','Cancelled','Approved','Rejected','Project Created',
    'Invoice Generated','Installation Scheduled','Installation Done'
  ];

  installationRequests:RequestMaster[]=[
    {requestNo:'INSR-D1223232',customerName:'Rajesh Kumar',dealerName:'ABC EV Solutions'},
    {requestNo:'INSR-D1223245',customerName:'Amit Sharma',dealerName:'Green Charge Motors'},
    {requestNo:'INSR-D1223261',customerName:'Neha Patil',dealerName:'EV Power Hub'},
    {requestNo:'INSR-D1223278',customerName:'Rahul Deshmukh',dealerName:'Charge Point India'},
    {requestNo:'INSR-D1223291',customerName:'Sneha Kulkarni',dealerName:'Electro Mobility Pvt. Ltd.'}
  ];

  enquiryRequests:RequestMaster[]=[
    {requestNo:'ENQ-D1002341',customerName:'Vikram Singh',dealerName:'ABC EV Solutions'},
    {requestNo:'ENQ-D1002357',customerName:'Priya Mehta',dealerName:'Green Charge Motors'},
    {requestNo:'ENQ-D1002389',customerName:'Suresh Joshi',dealerName:'EV Power Hub'},
    {requestNo:'ENQ-D1002402',customerName:'Karan Shah',dealerName:'Charge Point India'},
    {requestNo:'ENQ-D1002418',customerName:'Pooja Nair',dealerName:'Electro Mobility Pvt. Ltd.'}
  ];

  quotations:Quotation[]=[
    {quotationNo:'Q123220092',quotationDate:'2026-09-11',quotationAgainst:'Installation Request',requestNo:'INSR-D1223232',quotationFor:'Rajesh Kumar',customerName:'Rajesh Kumar',dealerName:'ABC EV Solutions',amount:850000,status:'Generated'},
    {quotationNo:'Q123220081',quotationDate:'2026-09-10',quotationAgainst:'Enquiry Request',requestNo:'ENQ-D1002341',quotationFor:'ABC EV Solutions',customerName:'Vikram Singh',dealerName:'ABC EV Solutions',amount:1250000,status:'Draft'},
    {quotationNo:'Q123220075',quotationDate:'2026-09-08',quotationAgainst:'Installation Request',requestNo:'INSR-D1223245',quotationFor:'Amit Sharma',customerName:'Amit Sharma',dealerName:'Green Charge Motors',amount:950000,status:'Approved'},
    {quotationNo:'Q123220069',quotationDate:'2026-09-06',quotationAgainst:'Enquiry Request',requestNo:'ENQ-D1002357',quotationFor:'Green Charge Motors',customerName:'Priya Mehta',dealerName:'Green Charge Motors',amount:1450000,status:'Rejected'},
    {quotationNo:'Q123220061',quotationDate:'2026-09-04',quotationAgainst:'Installation Request',requestNo:'INSR-D1223261',quotationFor:'Neha Patil',customerName:'Neha Patil',dealerName:'EV Power Hub',amount:1125000,status:'Project Created'},
    {quotationNo:'Q123220053',quotationDate:'2026-09-02',quotationAgainst:'Enquiry Request',requestNo:'ENQ-D1002389',quotationFor:'EV Power Hub',customerName:'Suresh Joshi',dealerName:'EV Power Hub',amount:785000,status:'Invoice Generated'},
    {quotationNo:'Q123220047',quotationDate:'2026-08-31',quotationAgainst:'Installation Request',requestNo:'INSR-D1223278',quotationFor:'Rahul Deshmukh',customerName:'Rahul Deshmukh',dealerName:'Charge Point India',amount:620000,status:'Installation Scheduled'},
    {quotationNo:'Q123220041',quotationDate:'2026-08-28',quotationAgainst:'Enquiry Request',requestNo:'ENQ-D1002402',quotationFor:'Charge Point India',customerName:'Karan Shah',dealerName:'Charge Point India',amount:980000,status:'Installation Done'},
    {quotationNo:'Q123220035',quotationDate:'2026-08-25',quotationAgainst:'Installation Request',requestNo:'INSR-D1223291',quotationFor:'Sneha Kulkarni',customerName:'Sneha Kulkarni',dealerName:'Electro Mobility Pvt. Ltd.',amount:475000,status:'Cancelled'},
    {quotationNo:'Q123220028',quotationDate:'2026-08-22',quotationAgainst:'Enquiry Request',requestNo:'ENQ-D1002418',quotationFor:'Electro Mobility Pvt. Ltd.',customerName:'Pooja Nair',dealerName:'Electro Mobility Pvt. Ltd.',amount:1590000,status:'Generated'}
  ];

  filteredQuotations=[...this.quotations];

  get customerList():string[]{return [...new Set(this.installationRequests.map(x=>x.customerName))];}
  get dealerList():string[]{return [...new Set(this.enquiryRequests.map(x=>x.dealerName))];}

  onAgainstChange():void{
    this.filters.requestNo=''; this.filters.partyName='';
  }

  applyFilters():void{
    const f=this.filters;
    const no=f.quotationNo.trim().toLowerCase();

    this.filteredQuotations=this.quotations.filter(q=>{
      const a=!f.quotationAgainst || q.quotationAgainst===f.quotationAgainst;
      const n=!no || q.quotationNo.toLowerCase().includes(no);
      const r=!f.requestNo || q.requestNo===f.requestNo;
      const party=!f.partyName ||
        (q.quotationAgainst==='Installation Request' && q.customerName===f.partyName) ||
        (q.quotationAgainst==='Enquiry Request' && q.dealerName===f.partyName);
      const from=!f.fromDate || q.quotationDate>=f.fromDate;
      const to=!f.toDate || q.quotationDate<=f.toDate;
      const status=!f.status || q.status===f.status;
      return a&&n&&r&&party&&from&&to&&status;
    });
  }

  resetFilters():void{
    this.filters={quotationNo:'',quotationAgainst:'',requestNo:'',partyName:'',fromDate:'',toDate:'',status:''};
    this.filteredQuotations=[...this.quotations];
  }

  getStatusClass(status:string):string{
    const m:any={
      Generated:'status-generated',Draft:'status-draft',Cancelled:'status-cancelled',
      Approved:'status-approved',Rejected:'status-rejected','Project Created':'status-project-created',
      'Invoice Generated':'status-invoice-generated',
      'Installation Scheduled':'status-installation-scheduled',
      'Installation Done':'status-installation-done'
    };
    return m[status]||'status-draft';
  }

  canEdit(q:Quotation):boolean{return ['Draft','Generated','Rejected'].includes(q.status);}
  canCancel(q:Quotation):boolean{return q.status!=='Cancelled'&&q.status!=='Installation Done';}
  canCreateProject(q:Quotation):boolean{return q.status==='Approved';}
  canGenerateInvoice(q:Quotation):boolean{return ['Project Created','Installation Done'].includes(q.status);}

  viewQuotation(q:Quotation):void{
    console.log('View quotation',q);
    this.router.navigate(['/quotation-view-admin',q.quotationNo]);
  }

  editQuotation(q:Quotation):void{
    if(!this.canEdit(q))return;
    console.log('Edit quotation',q);
    this.router.navigate(['/quotation-creation',q.quotationNo]);
  }

  cancelQuotation(q:Quotation):void{
    if(!this.canCancel(q))return;
    Swal.fire({
      icon:'warning',title:'Cancel Quotation?',
      html:`<div style="font-size:13px">Quotation No. <strong>#${q.quotationNo}</strong> will be marked as Cancelled.</div>`,
      showCancelButton:true,confirmButtonText:'Yes, Cancel',cancelButtonText:'No',
      confirmButtonColor:'#d33',cancelButtonColor:'#6c757d'
    }).then(r=>{
      if(r.isConfirmed){q.status='Cancelled';this.applyFilters();}
    });
  }

  createProject(q:Quotation):void{
    if(!this.canCreateProject(q))return;
    Swal.fire({
      icon:'question',title:'Create Project?',
      html:`<div style="font-size:13px">Create project for quotation <strong>#${q.quotationNo}</strong>?</div>`,
      showCancelButton:true,confirmButtonText:'Create Project',cancelButtonText:'Cancel',
      confirmButtonColor:'#6746a9',cancelButtonColor:'#6c757d'
    }).then(r=>{
      if(r.isConfirmed){
        //q.status='Project Created';this.applyFilters();
        this.router.navigate(['/project-creation']);
      }
    });
  }

  generateInvoice(q:Quotation):void{
    if(!this.canGenerateInvoice(q))return;
    Swal.fire({
      icon:'question',title:'Generate Invoice?',
      html:`<div style="font-size:13px">Generate invoice for quotation <strong>#${q.quotationNo}</strong>?</div>`,
      showCancelButton:true,confirmButtonText:'Generate Invoice',cancelButtonText:'Cancel',
      confirmButtonColor:'#197565',cancelButtonColor:'#6c757d'
    }).then(r=>{
      if(r.isConfirmed){q.status='Invoice Generated';this.applyFilters();}
    });
  }

  createQuotation():void{this.router.navigate(['/quotation-creation']);}
}