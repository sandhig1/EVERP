import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelanding',
  imports: [],
  templateUrl: './homelanding.html',
  styleUrl: './homelanding.css',
})
export class HomeLanding {
  protected readonly title = signal('Angular-Tutorial');
  constructor(private router:Router) {};
  //private router1 = inject(Router);

  loginNow(){
      this.router.navigate(['/login']);
  }

  signUp(){
      this.router.navigate(['/signup']);
  }
}
