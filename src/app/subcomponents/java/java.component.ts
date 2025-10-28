import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
  features = [
    { icon: '☕', title: 'Robust Applications', desc: 'Build stable and scalable Java applications for web and enterprise solutions.' },
    { icon: '⚡', title: 'High Performance', desc: 'Optimized backend services and APIs for fast and reliable performance.' },
    { icon: '🛡️', title: 'Secure Code', desc: 'Implementing best security practices in every stage of development.' },
  ];

  processSteps = ['Requirement Analysis', 'Design & Architecture', 'Development', 'Testing & Deployment'];


  ngOnInit() {
    AOS.init({ duration: 800, once: true });
  }
}
