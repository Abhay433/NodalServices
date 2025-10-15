import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qaautomation.component.html',
  styleUrls: ['./qaautomation.component.css']
})
export class QautomationComponent implements OnInit {
  features = [
    { icon: '🤖', title: 'Faster Test Execution', desc: 'Automate repetitive test cases to save time and ensure consistency.' },
    { icon: '📊', title: 'Accurate Results', desc: 'Minimize human error and get reliable test results every time.' },
    { icon: '⚙️', title: 'Integration Ready', desc: 'Easily integrate automation with CI/CD pipelines for seamless deployment.' },
  ];

  processSteps = ['Test Script Design', 'Automation Framework Setup', 'Test Execution', 'Reporting & Optimization'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
