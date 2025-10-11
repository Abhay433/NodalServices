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
  body: HTMLElement | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.navbar = this.el.nativeElement.querySelector('nav');
    this.body = document.body;
  
    const collapseEl = this.el.nativeElement.querySelector('#navbarNav');
  
    collapseEl?.addEventListener('show.bs.collapse', () => {
      this.animateBodyMargin(collapseEl.scrollHeight);
    });
    collapseEl?.addEventListener('hide.bs.collapse', () => {
      this.animateBodyMargin(0);
    });
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (this.navbar) {
      if (st > this.lastScrollTop && st > 100) {
        // Scroll down
        this.navbar.style.top = '-80px';
      } else {
        // Scroll up
        this.navbar.style.top = '0';
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  // toggleNavbar() {
  //   const collapseEl = this.el.nativeElement.querySelector('#navbarNav');
  //   if (collapseEl) {
  //     collapseEl.classList.toggle('show'); // Toggle Bootstrap collapse manually
  //   }
  // }

  closeNavbar() {
    const collapseEl = this.el.nativeElement.querySelector('#navbarNav');
    if (collapseEl?.classList.contains('show')) {
      collapseEl.classList.remove('show');
      this.adjustBodyMargin(0); 
    }
  }

  adjustBodyMargin(margin: number) {
    if (this.body) {
      this.body.style.marginTop = `${80 + margin}px`; // 80px is navbar height
    }
  }


  animateBodyMargin(targetMargin: number) {
    if (!this.body) return;
  
    const current = parseFloat(getComputedStyle(this.body).marginTop);
    const difference = targetMargin + 80 - current; // 80 = navbar height
    const duration = 300; // milliseconds
    const startTime = performance.now();
  
    const step = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      this.body!.style.marginTop = `${current + difference * progress}px`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  }
  

  
}
