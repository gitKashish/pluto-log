import { Component, input, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';


@Component({
  selector: 'app-sidenav',
  imports: [PanelMenu],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  items = signal<MenuItem[]>([
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Templates', icon: 'pi pi-objects-column', routerLink: '/templates' },
    {
      label: 'More',
      icon: 'pi pi-bars',
      items: [
        { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
        { label: 'Help', icon: 'pi pi-question', routerLink: '/help' },
      ],
    },
  ]);
}
