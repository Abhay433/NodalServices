import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-dotnet',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent implements OnInit {
  features = [
    { icon: '.NET', title: 'Enterprise Solutions', desc: 'Develop robust, scalable, and secure applications using the .NET framework.' },
    { icon: '⚡', title: 'High Performance', desc: 'Optimized backend services and APIs for enterprise-grade performance.' },
    { icon: '🛡️', title: 'Secure Code', desc: 'Follow best security practices to protect your applications and data.' },
  ];

  processSteps = ['Requirement Analysis', 'Design & Architecture', 'Development', 'Testing & Deployment'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
