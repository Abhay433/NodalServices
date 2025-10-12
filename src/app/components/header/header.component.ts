import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lastScrollTop = 0;
  navbar: HTMLElement | null = null;
  openDropdown: string | null = null;
  openSubDropdown: string | null = null;

  // Mobile specific
  isMobileMenuOpen = false;
  openMobileSubMenu: string | null = null;
  openNestedSubMenu: string | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.navbar = this.el.nativeElement.querySelector('nav');
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  const st = window.scrollY || document.documentElement.scrollTop; // ✅ Updated line
  if (this.navbar && window.innerWidth >= 992) {
    if (st > this.lastScrollTop && st > 100) {
      this.navbar.style.top = '-180px';
    } else {
      this.navbar.style.top = '0';
    }
  }
  this.lastScrollTop = st <= 0 ? 0 : st;
}


  // Desktop dropdown
  showDropdown(name: string) { this.openDropdown = name; }
  hideDropdown(name: string) {
    if (this.openDropdown === name) {
      this.openDropdown = null;
      this.openSubDropdown = null;
    }
  }

  showSubDropdown(name: string) { this.openSubDropdown = name; }
  hideSubDropdown(name: string) {
    if (this.openSubDropdown === name) this.openSubDropdown = null;
  }


  // Mobile sidebar controls
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openMobileSubMenu = null;
    this.openNestedSubMenu = null;
  }

  toggleNestedSubMenu(menu: string) {
    this.openNestedSubMenu = this.openNestedSubMenu === menu ? null : menu;
  }

  toggleSubMenu(menu: string) {
    this.openMobileSubMenu = this.openMobileSubMenu === menu ? null : menu;
  }

}
