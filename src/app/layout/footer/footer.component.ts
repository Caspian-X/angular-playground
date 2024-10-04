import { Component } from '@angular/core';
import { BrowserService } from '../../services/browser.service';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [],
	template: `
   		<footer class="wrapper column full-center gap-05">
			<p>The Farmyard - Copyright 2024</p>
			<a (click)="switchRole()">switch role</a>
		</footer>
  	`,
	styles: `
		.wrapper {
			width: 100%;
			height: 80px;
			border-top: 1px solid var(--border-color);

			a {
				cursor: pointer;
			}

			a:hover {
				text-decoration: underline;
			}
		}
	`,
	//   templateUrl: './footer.component.html',
	//   styleUrl: './footer.component.css'
})
export class FooterComponent {

	constructor(private browserService: BrowserService) { }

	currentRole = "user";

	ngOnInit() {
		this.browserService.getRoleObservable().subscribe({
			next: (value) => this.currentRole = value,
			complete: () => { },
		});
	}

	switchRole() {
		if (this.currentRole === "user") {
			this.browserService.sendRoleValue("admin");
		} else {
			this.browserService.sendRoleValue("user");
		}
	}

}
