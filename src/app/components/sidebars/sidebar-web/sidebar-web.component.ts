import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-web',
  templateUrl: './sidebar-web.component.html',
  styleUrls: ['./sidebar-web.component.css'],
})
export class SidebarWebComponent implements OnInit {
  currentUrl: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;
      }
    });
  }

  ngOnInit() {}

  dropdownStates: { [key: string]: boolean } = {
    'dropdown-example': false,
    'dropdown-proyecto': false,
  };

  sidebarOpen: boolean = false;
  toggleSidebar() {
    // Alternar el estado del sidebar
    this.sidebarOpen = !this.sidebarOpen;
  }

  navigateToMiPerfil() {
    this.router.navigate(['/mi-perfil']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  toggleDropdown(id: string): void {
    this.dropdownStates[id] = !this.dropdownStates[id];
  }

  // isLinkActive(link: string): boolean {
  //   return this.currentUrl.includes(link);
  // }
  isLinkActive(links: string[]): boolean {
    return links.some((link) => this.currentUrl.startsWith(link));
  }
}
