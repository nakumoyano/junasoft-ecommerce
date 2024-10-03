import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/home/header/header.component';
import { HelpComponent } from './pages/help/help.component';
import { SearchComponent } from './pages/search/search.component';
import { CartShopComponent } from './pages/cart-shop/cart-shop.component';
import { MyShopsComponent } from './pages/my-shops/my-shops.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { OffersComponent } from './pages/offers/offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home'
  { path: 'home', component: HeaderComponent },
  { path: 'ayuda', component: HelpComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'carrito-de-compras', component: CartShopComponent },
  { path: 'mis-compras', component: MyShopsComponent },
  { path: 'categorias', component: CategoriesComponent },
  { path: 'ofertas', component: OffersComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
