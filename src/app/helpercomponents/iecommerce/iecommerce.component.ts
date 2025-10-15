import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './iecommerce.component.html',
  styleUrls: ['./iecommerce.component.css']
})
export class IecommerceComponent {
  // Features or solutions we provide for E-Commerce
  features = [
    {
      icon: 'bi bi-cart4',
      title: 'Online Store Development',
      desc: 'Create scalable, user-friendly online stores with seamless checkout experience.'
    },
    {
      icon: 'bi bi-bag-check',
      title: 'Order & Inventory Management',
      desc: 'Efficiently track orders, inventory, and logistics with automation tools.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'E-Commerce Analytics',
      desc: 'Gain insights into customer behavior, sales trends, and optimize marketing strategies.'
    }
  ];

  // Benefits or Process
  processSteps = [
    'Requirement Analysis & Strategy Planning',
    'UI/UX Design & Development',
    'Integration & Testing',
    'Launch & Growth Optimization'
  ];

  // Additional Section (Trends / Innovations)
  trends = [
    {
      icon: 'bi bi-phone',
      title: 'Mobile Commerce',
      desc: 'Optimize shopping experience for mobile users with responsive design and apps.'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Innovative Solutions',
      desc: 'Implement AI, recommendation engines, and automation to enhance conversions.'
    }
  ];
}
