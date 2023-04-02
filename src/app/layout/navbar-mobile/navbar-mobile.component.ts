import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements AfterViewInit {

  isNavbarCollapsed: undefined | boolean = undefined;

  onWindowScroll(): void {
    if (this.isNavbarCollapsed) {
      this.changeHamburgerIconState();
    }

    const navDomEl = document.querySelector('.mobile-nav');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(navDomEl) {
        navDomEl.classList.add('mobile-nav_scrolled');
      }
    } else {
      navDomEl?.classList.remove('mobile-nav_scrolled');
    }
  }

  constructor(private _eref: ElementRef) { }

  ngAfterViewInit(): void {
    document.addEventListener('scroll', (evt) => {
      this.onWindowScroll();
    }, true);
  }

  onClick(event: { target: ElementRef }): void {
    if (!this._eref.nativeElement.contains(event.target) && this.isNavbarCollapsed === true) {
      this.changeHamburgerIconState();
     }
  }

  changeHamburgerIconState(): void {
    if (this.isNavbarCollapsed === undefined) {
      this.isNavbarCollapsed = false;
    }
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
