import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { globalMenus } from '../../../constants/global.constant'
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
//import { Userservice } from '../../services/userservice/userservice';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, MatIcon, MatIconModule, MatButtonModule, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isSidebarCollapsed = false;

  // ==========================================================
  // SUBMENU STATES
  // ==========================================================

  mastersExpanded = false;
  
  crmExpanded = false;

  siteSurveyExpanded = false;

  salesExpanded = false;

  procurementExpanded = false;

  inventoryExpanded = false;

  installationExpanded = false;

  financeExpanded = false;

  settingsExpanded = false;

  reportsExpanded = false;



  toggleSidebar(): void {

    this.isSidebarCollapsed =
      !this.isSidebarCollapsed;

  }

  toggleCRM(): void {
  this.crmExpanded = !this.crmExpanded;
}

toggleSiteSurvey(): void {
  this.siteSurveyExpanded = !this.siteSurveyExpanded;
}

toggleSales(): void {
  this.salesExpanded = !this.salesExpanded;
}

toggleProcurement(): void {
  this.procurementExpanded = !this.procurementExpanded;
}

toggleInventory(): void {
  this.inventoryExpanded = !this.inventoryExpanded;
}

toggleInstallation(): void {
  this.installationExpanded = !this.installationExpanded;
}

toggleFinance(): void {
  this.financeExpanded = !this.financeExpanded;
}

   // ==========================================================
  // MASTERS
  // ==========================================================

  toggleMasters(): void {

    this.mastersExpanded =
      !this.mastersExpanded;

  }

  // ==========================================================
  // SETTINGS
  // ==========================================================

  toggleSettings(): void {

    this.settingsExpanded =
      !this.settingsExpanded;

  }

  // ==========================================================
  // REPORTS
  // ==========================================================

  toggleReports(): void {

    this.reportsExpanded =
      !this.reportsExpanded;

  }

  router = inject(Router);

  /*Code for Filtered Menu based on User Role*/
  userName = localStorage.getItem("UserName");
  userRole = localStorage.getItem("UserRole");

  filteredMainMenus = globalMenus.mainMenu.filter((m:any)=>m.allowRoles.includes(this.userRole));
  filteredMenus = globalMenus.menuItems.filter((m:any)=>m.allowRoles.includes(this.userRole));

  

  /*Code for Subject and BehaviorSubject*/
  selectedRole:string = "";
  
  //userServ = inject(Userservice);

  
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
