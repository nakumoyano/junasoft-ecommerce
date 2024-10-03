import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  activeTab: string = ''; // Inicializa con el tab por defecto

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeTab = 'todas';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  // f*************************************** FUNCION PARA CAMBIAR DE TAB ****************************
  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
