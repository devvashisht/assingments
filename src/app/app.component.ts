import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor( private readonly router: Router)
{
  this.router.navigate(['/loginPage']);
}  title = 'my-login';
}
