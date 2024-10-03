import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinksComponent } from '../nav-links/nav-links.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
