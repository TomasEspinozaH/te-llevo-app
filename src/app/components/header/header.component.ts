import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'Insert a title';

  constructor(private router: Router) { }

  ngOnInit() { }

  toHome() {
    this.router.navigateByUrl('home');
  }

}
