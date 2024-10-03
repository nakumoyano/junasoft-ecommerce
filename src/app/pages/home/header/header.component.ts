import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab: string = ''; // Inicializa con el tab por defecto
  fechaFormateada: string = '';
  diasSemana: string[] = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  diaActual: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeTab = 'principiante';

    this.mostrarFecha();
    this.obtenerDiaActual();
    this.setupInfiniteScroll();
  }

  // f*************************************** FUNCION PARA CAMBIAR DE TAB ****************************
  selectTab(tab: string) {
    this.activeTab = tab;
  }

  // f*************************************** FUNCION PARA MOSTRAR FECHA ****************************
  mostrarFecha(): void {
    const fechaActual = new Date(); // Obtiene la fecha actual
    const opciones: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    // Formatear la fecha como "día de mes de año" (por ejemplo, 29 de septiembre de 2024)
    this.fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);
  }

  // f*************************************** FUNCION PARA OBTENER DIA ACTUAL ****************************
  obtenerDiaActual(): void {
    const fechaActual = new Date();
    this.diaActual = fechaActual.getDay(); // Obtiene el día de la semana (0 para domingo, 1 para lunes, etc.)
  }

  navigateToDetailsEjercice() {
    this.router.navigate(['/detalle-del-ejercicio']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  navigateToCategories() {
    this.router.navigate(['/categorias']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  setupInfiniteScroll(): void {
    const carousel = document.getElementById('carousel');

    if (carousel) {
      carousel.addEventListener('animationiteration', () => {
        // Logica adicional si necesitas reiniciar o modificar el carrusel.
        // Podrías duplicar los primeros elementos, por ejemplo.
      });
    }
  }
}
