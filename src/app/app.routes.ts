import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { HomeLanding } from './components/homelanding/homelanding';
import { Home } from './components/home/home';
import { Dashboardadmin } from './components/dashboardadmin/dashboardadmin';
import { Dashboarddealer } from './components/dashboarddealer/dashboarddealer';
import { Dashboardtechnician } from './components/dashboardtechnician/dashboardtechnician';
import { Dashboardcustomer } from './components/dashboardcustomer/dashboardcustomer';

export const routes: Routes = [
    {path:'', component:HomeLanding},
    {path:'login', component:Login},
    {path:'', component:Home, 
        children:[
            {path:'dashboard-admin', component:Dashboardadmin},
            {path:'dashboard-dealer', component:Dashboarddealer},
            {path:'dashboard-technician', component:Dashboardtechnician},
            {path:'dashboard-customer', component:Dashboardcustomer},
        ]
    }
    ]
;
