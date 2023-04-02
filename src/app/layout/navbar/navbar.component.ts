import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.addEventListener('scroll', (evt) => {
      this.onWindowScroll();
    }, true);
  }

  onWindowScroll() {
    const navDomEl = document.querySelector('.navbar');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(navDomEl) {
        navDomEl.classList.add('navbar__scrolled');
      }
    } else {
      navDomEl?.classList.remove('navbar__scrolled');
    }
  }

}
