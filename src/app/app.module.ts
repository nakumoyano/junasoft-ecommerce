import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarWebComponent } from './components/sidebars/sidebar-web/sidebar-web.component';
import { SidebarPanelComponent } from './components/sidebars/sidebar-panel/sidebar-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { MyProfileComponent } from './configuration/my-profile/my-profile.component';
import { HelpComponent } from './pages/help/help.component';
import { SearchComponent } from './pages/search/search.component';
import { CartShopComponent } from './pages/cart-shop/cart-shop.component';
import { MyShopsComponent } from './pages/my-shops/my-shops.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarWebComponent,
    SidebarPanelComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    MyProfileComponent,
    HelpComponent,
    SearchComponent,
    CartShopComponent,
    MyShopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
