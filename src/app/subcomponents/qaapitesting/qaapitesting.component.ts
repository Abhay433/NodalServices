import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-apitesting',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './qaapitesting.component.html',
  styleUrls: ['./qaapitesting.component.css']
})
export class QaapitestingComponent {

  features = [
    { icon: '🔗', title: 'Reliable APIs', desc: 'Ensure your APIs work flawlessly and deliver expected results under all conditions.' },
    { icon: '⚡', title: 'Performance Testing', desc: 'Measure response times, throughput, and scalability to maintain optimal performance.' },
    { icon: '🛡️', title: 'Security Testing', desc: 'Verify authentication, authorization, and data protection for all endpoints.' },
  ];

  processSteps = ['Requirement Analysis', 'Test Planning', 'Test Execution', 'Reporting & Optimization'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
