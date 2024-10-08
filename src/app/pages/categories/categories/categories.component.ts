import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
