import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BrowserService {
	private roleSubject = new BehaviorSubject<string>("user");

	constructor() {
		const defaultUser = this.getRole() || "user";
		this.roleSubject.next(defaultUser);
	}

	sendRoleValue(value: string) {
		this.roleSubject.next(value);
		this.setRole(value);
	}

	getRoleObservable() {
		return this.roleSubject.asObservable();
	}

	getRole() {
		return window.localStorage.getItem("farmyard_role");
	}

	setRole(role: string) {
		window.localStorage.setItem("farmyard_role", role);
	}
}
