import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  ngAfterViewInit() {
    const carouselEl = document.querySelector('#projectsCarousel');
    const carousel1 = new (window as any).bootstrap.Carousel(carouselEl, {
      interval: 4000, // 4 seconds per slide
      pause: 'hover'
    });


    const carouselEl2 = document.querySelector('#projectsCarousel2');
    const carousel2 = new (window as any).bootstrap.Carousel(carouselEl2, {
      interval: 4000, // 4 seconds per slide
      pause: 'hover'
    });


  }
  

}
