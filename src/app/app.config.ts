import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { providePrimeNG } from "primeng/config";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Noir from "./app.preset";
import Aura from "@primeng/themes/aura"
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Noir,
        options: {
            darkModeSelector: '.dark-mode',
        }
      }
    })
  ],
};
