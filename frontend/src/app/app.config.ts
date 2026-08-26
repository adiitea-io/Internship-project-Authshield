import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import AuthShieldPreset from './app-theme';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    providePrimeNG({
      theme: {
        preset: AuthShieldPreset,

        options: {
          darkModeSelector: false
        }
      }
    })
  ]
};
