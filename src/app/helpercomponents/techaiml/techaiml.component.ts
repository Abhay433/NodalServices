import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-aiml',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './techaiml.component.html',
  styleUrls: ['./techaiml.component.css']
})
export class TechaimlComponent implements OnInit {

  aimlServices = [
    {
      icon: 'bi bi-gear',
      title: 'Predictive Analytics',
      desc: 'Gain actionable insights with predictive modeling to make data-driven decisions.'
    },
    {
      icon: 'bi bi-robot',
      title: 'Intelligent Automation',
      desc: 'Automate repetitive processes with AI bots to improve efficiency and reduce costs.'
    },
    {
      icon: 'bi bi-diagram-3',
      title: 'Deep Learning',
      desc: 'Utilize neural networks to analyze patterns, images, and natural language at scale.'
    },
    {
      icon: 'bi bi-eye',
      title: 'Computer Vision',
      desc: 'Empowering systems to interpret and understand visual data intelligently.'
    },
    {
      icon: 'bi bi-chat-dots',
      title: 'NLP Solutions',
      desc: 'Enhance customer experience with AI-driven chatbots and sentiment analysis.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'AI Consulting',
      desc: 'Strategic guidance for integrating AI into your products and workflows effectively.'
    }
  ];

  // AI/ML Features
  aiMlFeatures = [
    {
      icon: 'bi bi-robot',
      title: 'Predictive Modeling',
      desc: 'Build intelligent models to forecast trends and outcomes.'
    },
    {
      icon: 'bi bi-bar-chart-line',
      title: 'Data Analysis',
      desc: 'Extract meaningful insights from large datasets efficiently.'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'AI Innovation',
      desc: 'Leverage AI techniques to optimize processes and decisions.'
    }
  ];

  // AI/ML Process
  aiMlProcessSteps = [
    'Data Collection & Cleaning',
    'Feature Engineering',
    'Model Training & Evaluation',
    'Deployment & Monitoring'
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
