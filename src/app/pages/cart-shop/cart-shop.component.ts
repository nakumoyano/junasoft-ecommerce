import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css'],
})
export class CartShopComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
