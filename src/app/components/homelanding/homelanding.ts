import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelanding',
  imports: [FormsModule],
  templateUrl: './homelanding.html',
  styleUrl: './homelanding.css',
})
export class HomeLanding {
  protected readonly title = signal('Angular-Tutorial');
  constructor(private router:Router) {};
  //private router1 = inject(Router);

  login(){
      this.router.navigate(['/login']);
  }

  signUp(){
      this.router.navigate(['/signup']);
  }

  activeTab: string = 'home';

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  onSubmit(): void {
    if (this.contactData.name && this.contactData.email) {
      alert(`Thank you, ${this.contactData.name}! Your message has been sent.`);
      this.contactData = { name: '', email: '', subject: '', message: '' };
    } else {
      alert('Please fill in required fields.');
    }
  }
}
