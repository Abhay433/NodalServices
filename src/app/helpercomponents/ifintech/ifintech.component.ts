import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fintech',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ifintech.component.html',
  styleUrls: ['./ifintech.component.css']
})
export class IfintechComponent {
  // Features or solutions we provide for Fintech
  features = [
    {
      icon: 'bi bi-currency-dollar',
      title: 'Digital Payments',
      desc: 'Develop secure, fast, and scalable digital payment systems.'
    },
    {
      icon: 'bi bi-bank',
      title: 'Banking Solutions',
      desc: 'Streamline banking processes with automation and AI-driven insights.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Financial Analytics',
      desc: 'Analyze financial data to improve decision-making and detect fraud.'
    }
  ];

  // Benefits or Process
  processSteps = [
    'Requirement Analysis & Compliance Check',
    'System Architecture & Development',
    'Integration & Testing',
    'Launch & Continuous Monitoring'
  ];

  // Additional Section (Innovation or Trends)
  trends = [
    {
      icon: 'bi bi-shield-lock',
      title: 'Security & Compliance',
      desc: 'Ensure secure transactions and compliance with financial regulations.'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Innovative Fintech Solutions',
      desc: 'Implement AI, blockchain, and automation to enhance financial services.'
    }
  ];
}
