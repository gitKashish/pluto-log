import { Component, output, signal } from '@angular/core';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleSidenav = output<void>();
  isLightMode = signal<boolean>(true);
  htmlElement = document.querySelector('html');

  constructor() {
    let userUiMode = localStorage.getItem('uiMode') || 'light';
    if (userUiMode == 'dark') {
      this.isLightMode.set(false);
      this.htmlElement?.classList.add('dark-mode');
    } else {
      this.htmlElement?.classList.remove('dark-mode');
    }
  }

  get uiMode(): string {
    if (!this.isLightMode()) {
      return 'pi pi-sun';
    }
    return 'pi pi-moon'
  }

  toggleUiMode() {
    this.isLightMode.update(value => !value);
    this.htmlElement?.classList.toggle('dark-mode');
    const mode = this.isLightMode() ? 'light' : 'dark';
    localStorage.setItem('uiMode', mode);
  }
}
