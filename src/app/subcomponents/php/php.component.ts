import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-php',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {
  features = [
    { icon: '💻', title: 'Dynamic Websites', desc: 'Build highly interactive and dynamic PHP websites tailored to your business.' },
    { icon: '⚡', title: 'Fast Backend', desc: 'Efficient server-side scripting for quick response and scalable PHP applications.' },
    { icon: '🛡️', title: 'Secure Code', desc: 'Follow best security practices to safeguard your applications from vulnerabilities.' },
  ];

  processSteps = ['Requirement Gathering', 'Architecture & Design', 'PHP Development', 'Testing & Deployment'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
