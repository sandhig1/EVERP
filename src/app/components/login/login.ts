import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

//import { Authservice } from '../../services/authservice/authservice';


@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule, MatButtonModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly title = signal('ev Installation - ERP');

  selectedUserType = 'Admin';

  username:string ="";
  password:string ="";

  rememberMe = false;

  hidePassword = true;


  selectUserType(type: string): void {
    this.selectedUserType = type;
  }

  //authServ = inject(Authservice);

  
  private router1 = inject(Router);

  loggedInFlag=false;

  login(){
    debugger;

    /*var loginRequest = { UserName: this.username.trim(), Password: this.password.trim(), UserType:"a" };

    if (this.username.trim() == ""){
      alert("Please Enter User Name")
    }
    else if (this.password.trim() == "") {
      alert("Please Enter Password")
    } 
    else{

      if (this.username.trim() == "superadmin"){
        if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "Super Admin");
          localStorage.setItem("UserRole", "sa");

          this.router1.navigate(['/dashboard']);
        }
        else{
          alert("Invalid Credentials"); 
        }
      }
      else if (this.username.trim() == "admin"){        
        
        this.authServ.login(loginRequest).subscribe({
          next:(res:any)=>{
            this.loggedInFlag = true;
            localStorage.setItem("UserName", "Admin");
            localStorage.setItem("UserRole", "a");

            this.router1.navigate(['/lessonhome']);  
          }
        });

        /*if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "Admin");
          localStorage.setItem("UserRole", "a");

          this.router1.navigate(['/dashboard']);
        }
        else{
          alert("Invalid Credentials");
        }*/
      /*}
      else if (this.username.trim() == "sandhi"){
        /*if (this.password.trim() == "admin"){
          this.loggedInFlag = true;
          localStorage.setItem("UserName", "sandhi");
          localStorage.setItem("UserRole", "e");

          this.router1.navigate(['/lessonhome']);
        }
        else{
          alert("Invalid Credentials"); 
        }*/
       /*this.authServ.login(loginRequest).subscribe({
          next:(res:any)=>{
            if (res.status){
              this.loggedInFlag = true;
              

              this.router1.navigate(['/lessonhome']);  
            }
            else{
              alert(res.msg);
            }
          }
        });
      }
      else{
        alert("Invalid Credentials");
      }
      
    }*/

   

      if (this.selectedUserType=='Admin'){
        localStorage.setItem("UserType", "Admin");
        this.router1.navigate(['/dashboard-admin']);
      }else if (this.selectedUserType=='Dealer'){
        localStorage.setItem("UserType", "Dealer");
        this.router1.navigate(['/dashboard-dealer']);
      }else if (this.selectedUserType=='Technician'){
        localStorage.setItem("UserType", "Technician");
        this.router1.navigate(['/dashboard-technician']);
      }else if (this.selectedUserType=='Customer'){
        localStorage.setItem("UserType", "Customer");
        this.router1.navigate(['/dashboard-customer']);
      }
      

  } //End login() function

  forgotPassword(): void {

    console.log('Forgot password clicked');

  } //End forgotPassword() function

} //end Login component
