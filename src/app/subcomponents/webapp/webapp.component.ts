import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-webapp',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './webapp.component.html',
  styleUrl: './webapp.component.css'
})
export class WebappComponent {

  techs = [
    { name: 'Angular', img: 'assets/icons/angular.svg' },
    { name: 'React', img: 'assets/icons/react.svg' },
    { name: 'Node.js', img: 'assets/icons/node.svg' },
    { name: 'Spring Boot', img: 'assets/icons/springboot.svg' },
    { name: 'Python', img: 'assets/icons/python.svg' },
    { name: 'AWS', img: 'assets/icons/aws.svg' },
  ];

  ngOnInit() {
    AOS.init({ duration: 800, once: true });
  }
}
