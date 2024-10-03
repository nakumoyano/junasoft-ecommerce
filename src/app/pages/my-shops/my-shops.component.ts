import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-shops',
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.css'],
})
export class MyShopsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
