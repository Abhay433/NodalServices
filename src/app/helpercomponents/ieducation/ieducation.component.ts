import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ieducation.component.html',
  styleUrls: ['./ieducation.component.css']
})
export class IeducationComponent {
  // Features or solutions we provide for Education
  features = [
    {
      icon: 'bi bi-laptop',
      title: 'E-Learning Platforms',
      desc: 'Develop interactive and scalable e-learning platforms for students and educators.'
    },
    {
      icon: 'bi bi-bar-chart-line',
      title: 'Data Analytics for Education',
      desc: 'Analyze student performance data to improve learning outcomes and strategies.'
    },
    {
      icon: 'bi bi-people',
      title: 'Student Management',
      desc: 'Manage student records, attendance, and communication efficiently.'
    }
  ];

  // Benefits or Process
  processSteps = [
    'Requirement Gathering & Analysis',
    'Platform Design & Development',
    'Integration & Testing',
    'Launch & Continuous Improvement'
  ];

  // Additional Section (Trends or Innovation)
  trends = [
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovative Learning',
      desc: 'Incorporate AI, gamification, and immersive experiences to enhance engagement.'
    },
    {
      icon: 'bi bi-cloud',
      title: 'Cloud-Based Solutions',
      desc: 'Provide scalable, accessible solutions with cloud-hosted educational apps.'
    }
  ];
}
