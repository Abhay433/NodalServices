import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-clouds',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './techcloud.component.html',
  styleUrls: ['./techcloud.component.css']
})
export class TechcloudComponent implements OnInit {

  cloudServices = [
    {
      icon: 'bi bi-cloud-upload',
      title: 'Cloud Migration',
      desc: 'Seamlessly move your workloads to the cloud with minimal downtime and maximum performance.'
    },
    {
      icon: 'bi bi-shield-lock',
      title: 'Cloud Security',
      desc: 'Robust protection and compliance for your data across all cloud environments.'
    },
    {
      icon: 'bi bi-hdd-network',
      title: 'Infrastructure Management',
      desc: 'Automate and monitor cloud infrastructure to ensure optimal efficiency and uptime.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Performance Optimization',
      desc: 'Enhancing application performance through intelligent resource scaling and monitoring.'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Serverless Solutions',
      desc: 'Build scalable apps without managing servers — efficient, cost-effective, and fast.'
    },
    {
      icon: 'bi bi-gear-fill',
      title: 'Cloud DevOps',
      desc: 'Streamlining CI/CD pipelines and deployments for continuous integration and delivery.'
    }
  ];

    // Cloud Features
    cloudFeatures = [
      {
        icon: 'bi bi-cloud-upload',
        title: 'Scalable Storage',
        desc: 'Secure, scalable, and cost-effective storage solutions.'
      },
      {
        icon: 'bi bi-server',
        title: 'Cloud Computing',
        desc: 'High-performance computing resources on-demand.'
      },
      {
        icon: 'bi bi-shield-lock',
        title: 'Secure Infrastructure',
        desc: 'Enterprise-level security for your applications and data.'
      }
    ];

    // Cloud Process
  cloudProcessSteps = [
    'Requirement Analysis',
    'Architecture Design',
    'Deployment & Configuration',
    'Monitoring & Optimization'
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
