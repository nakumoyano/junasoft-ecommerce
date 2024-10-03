import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/home/header/header.component';
import { HelpComponent } from './pages/help/help.component';
import { SearchComponent } from './pages/search/search.component';
import { CartShopComponent } from './pages/cart-shop/cart-shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home'
  { path: 'home', component: HeaderComponent },
  { path: 'ayuda', component: HelpComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'carrito-de-compras', component: CartShopComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
