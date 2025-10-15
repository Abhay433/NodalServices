import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blockchain',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './techblockchain.component.html',
  styleUrls: ['./techblockchain.component.css']
})
export class TechblockchainComponent {
  // Blockchain Features
  features = [
    {
      icon: 'bi bi-shield-lock',
      title: 'Secure Transactions',
      desc: 'Ensure tamper-proof and encrypted digital transactions.'
    },
    {
      icon: 'bi bi-link-45deg',
      title: 'Decentralized Network',
      desc: 'Eliminate intermediaries and increase transparency with distributed ledgers.'
    },
    {
      icon: 'bi bi-gear-wide-connected',
      title: 'Smart Contracts',
      desc: 'Automate agreements with self-executing smart contracts on blockchain.'
    }
  ];

  // Blockchain Process
  processSteps = [
    'Requirement Analysis & Feasibility',
    'Blockchain Architecture Design',
    'Development & Deployment',
    'Monitoring & Optimization'
  ];
}
