import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['/home']);
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
