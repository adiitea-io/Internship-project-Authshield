import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import {ForgotPassword} from './pages/forgot-password/forgot-password';
import { Dashboard } from './pages/dashboard/dashboard';
export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },

    {
        path: 'register',
        component: Register,
    },

    {
        path: 'forgot-password',
        component: ForgotPassword,
    },

    {
        path: 'dashboard',
        component: Dashboard,
    }

   
];

