import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-uiux',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.css']
})
export class UiuxComponent implements OnInit {
  features = [
    { icon: '🎨', title: 'Intuitive Design', desc: 'Craft visually appealing and user-friendly interfaces for web and mobile apps.' },
    { icon: '⚡', title: 'Smooth Experience', desc: 'Enhance user engagement with seamless interactions and navigation.' },
    { icon: '🛠️', title: 'Prototyping & Testing', desc: 'Validate designs early with prototypes and iterative testing.' },
  ];

  processSteps = ['Research & Analysis', 'Wireframing & Design', 'Prototyping', 'Testing & Delivery'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
