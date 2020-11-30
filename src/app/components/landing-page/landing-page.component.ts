import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gotoLogin(event) {
    this.route.navigate(['login']);
  }
}
