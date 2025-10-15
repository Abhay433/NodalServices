import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './techdevops.component.html',
  styleUrls: ['./techdevops.component.css']
})
export class TechdevOpsComponent {
  // DevOps Features
  features = [
    {
      icon: 'bi bi-arrow-repeat',
      title: 'Continuous Integration',
      desc: 'Automate builds and testing to deliver high-quality software faster.'
    },
    {
      icon: 'bi bi-cloud-upload',
      title: 'Continuous Deployment',
      desc: 'Seamlessly deploy applications to multiple environments with minimal downtime.'
    },
    {
      icon: 'bi bi-gear',
      title: 'Infrastructure Automation',
      desc: 'Manage and provision infrastructure efficiently using automation tools.'
    }
  ];

  // DevOps Process
  processSteps = [
    'Planning & Requirement Analysis',
    'CI/CD Pipeline Setup',
    'Automated Testing & Deployment',
    'Monitoring & Optimization'
  ];
}
