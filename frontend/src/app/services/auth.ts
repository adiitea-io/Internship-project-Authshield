import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class Auth {
    constructor(private http: HttpClient) { }
    login(email: string, password: string) {
        return this.http.post('http://localhost:3000/auth/login', { email, password })

    }

    register(name: string, email: string, password: string) {
        return this.http.post('http://localhost:3000/auth/register', { name, email, password })
    }

}
