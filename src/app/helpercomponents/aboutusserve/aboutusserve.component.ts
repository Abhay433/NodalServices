import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-what-we-serve',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aboutusserve.component.html',
  styleUrls: ['./aboutusserve.component.css']
})
export class AboutusserveComponent implements OnInit {
  services = [
    { 
      title: 'Web Development', 
      description: 'Building fast, scalable, and reliable web applications tailored to your business needs.', 
      icon: 'bi bi-laptop'
    },
    { 
      title: 'Mobile App Development', 
      description: 'Creating seamless mobile experiences that bring your ideas to life on Android and iOS.', 
      icon: 'bi bi-phone'
    },
    { 
      title: 'UI/UX Design', 
      description: 'Crafting intuitive and visually stunning interfaces that elevate user engagement.', 
      icon: 'bi bi-brush'
    },
    { 
      title: 'Automation Solutions', 
      description: 'Boosting productivity with intelligent process automation and data-driven systems.', 
      icon: 'bi bi-gear'
    },
    { 
      title: 'Maintenance & Support', 
      description: 'Providing continuous monitoring, updates, and optimization to keep your systems running smoothly.', 
      icon: 'bi bi-wrench-adjustable'
    },
    { 
      title: 'Third-Party Integration', 
      description: 'Seamless integration of APIs and external tools to enhance your digital ecosystem.', 
      icon: 'bi bi-puzzle'
    }
  ];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
