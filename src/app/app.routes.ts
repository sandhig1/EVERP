import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { HomeLanding } from './components/homelanding/homelanding';
import { Home } from './components/home/home';
import { Dashboardadmin } from './components/dashboardadmin/dashboardadmin';
import { Dashboarddealer } from './components/dashboarddealer/dashboarddealer';
import { Dashboardtechnician } from './components/dashboardtechnician/dashboardtechnician';
import { Dashboardcustomer } from './components/dashboardcustomer/dashboardcustomer';
import { Signup } from './components/signup/signup';
import { Installationreqdealer } from './components/dealer/installationreqdealer/installationreqdealer';
import { Installationreqlistdealer } from './components/dealer/installationreqlistdealer/installationreqlistdealer';
import {Installationreqlistadmin } from './components/admin/installationreqlistadmin/installationreqlistadmin';
import { Enquirycreationcustomer } from './components/customer/enquirycreationcustomer/enquirycreationcustomer';
import { EnquiryListCustomer } from './components/customer/enquirylistcustomer/enquirylistcustomer';
import { enquiryviewcustomer } from './components/customer/enquiryviewcustomer/enquiryviewcustomer';
import { enquirylistadmin } from './components/admin/enquirylistadmin/enquirylistadmin';
import { enquiryviewadmin } from './components/admin/enquiryviewadmin/enquiryviewadmin';
import { leadgeneration } from './components/admin/leadgeneration/leadgeneration';
import { leadlist } from './components/admin/leadlist/leadlist';

export const routes: Routes = [
    {path:'', component:HomeLanding},
    {path:'login', component:Login},
    {path:'signup', component:Signup},
    {path:'', component:Home, 
        children:[
            {path:'dashboard-admin', component:Dashboardadmin},
            {path:'dashboard-dealer', component:Dashboarddealer},
            {path:'dashboard-technician', component:Dashboardtechnician},
            {path:'dashboard-customer', component:Dashboardcustomer},
            {path:'installation-request-dealer', component:Installationreqdealer},
            {path:'installation-request-list-dealer', component:Installationreqlistdealer},
            {path:'installation-request-list-admin', component:Installationreqlistadmin},
            {path:'enquiry-creation-customer', component:Enquirycreationcustomer},
            {path:'enquiry-list-customer', component:EnquiryListCustomer},
            {path:'enquiry-view-customer', component:enquiryviewcustomer},
            {path:'enquiry-list-admin', component:enquirylistadmin},
            {path:'enquiry-view-admin', component:enquiryviewadmin},
            {path:'lead-generation', component:leadgeneration},
            {path:'lead-list', component:leadlist},
            
        ]
    }
    ]
;
