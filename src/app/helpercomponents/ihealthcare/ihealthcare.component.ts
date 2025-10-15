import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ihealthcare.component.html',
  styleUrls: ['./ihealthcare.component.css']
})
export class IhealthcareComponent {
  // Features or solutions we provide for Healthcare
  features = [
    {
      icon: 'bi bi-heart-pulse',
      title: 'Patient Management Systems',
      desc: 'Efficiently manage patient records, appointments, and communication digitally.'
    },
    {
      icon: 'bi bi-cloud-arrow-up',
      title: 'Telemedicine Solutions',
      desc: 'Enable remote consultations and healthcare services with secure telemedicine apps.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Healthcare Analytics',
      desc: 'Analyze medical data to improve outcomes and optimize hospital operations.'
    }
  ];

  // Process / Methodology
  processSteps = [
    'Requirement Analysis & Compliance Check',
    'System Architecture & Development',
    'Integration & Testing',
    'Launch & Continuous Monitoring'
  ];

  // Trends / Innovation
  trends = [
    {
      icon: 'bi bi-shield-lock',
      title: 'Data Security & Compliance',
      desc: 'Ensure patient data privacy and comply with healthcare regulations.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovative Healthcare Tech',
      desc: 'Integrate AI, IoT, and automation to improve patient care and hospital efficiency.'
    }
  ];
}
