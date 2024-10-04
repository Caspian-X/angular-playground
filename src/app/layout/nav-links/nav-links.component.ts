import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [RouterModule, SidebarModule],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
	menuOpen = false;

	toggleMenu() {
	  	this.menuOpen = !this.menuOpen;
	}

	closeMenu() {
		this.menuOpen  =  false;
	}
}
