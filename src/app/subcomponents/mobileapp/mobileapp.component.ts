import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-mobileapp',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent {
  features = [
    {
      icon: '📱',
      title: 'Cross-Platform Apps',
      desc: 'We develop apps that work seamlessly on Android and iOS using Flutter and React Native.'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      desc: 'Our optimized code ensures smooth user experiences and fast performance.'
    },
    {
      icon: '🛡️',
      title: 'Security First',
      desc: 'Every app we build includes strong data protection and privacy compliance.'
    }
  ];

  ngOnInit() {
    AOS.init({ duration: 800, once: true });
  }
}
