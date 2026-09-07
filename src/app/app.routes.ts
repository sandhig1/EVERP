import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { HomeLanding } from './components/homelanding/homelanding';
import { Home } from './components/home/home';
import { Dashboardadmin } from './components/dashboardadmin/dashboardadmin';

export const routes: Routes = [
    {path:'', component:HomeLanding},
    {path:'login', component:Login},
    {path:'', component:Home, 
        children:[
            {path:'dashboard-admin', component:Dashboardadmin},
        ]
    }
    ]
;
