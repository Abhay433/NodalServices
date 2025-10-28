import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aboutuspolicies.component.html',
  styleUrls: ['./aboutuspolicies.component.css']
})
export class AboutuspoliciesComponent implements OnInit {

  policies = [
    {
      icon: 'bi bi-shield-lock',
      title: 'Data Privacy',
      desc: 'We strictly protect your data and follow all global privacy standards including GDPR compliance.'
    },
    {
      icon: 'bi bi-lock',
      title: 'Security First',
      desc: 'Our systems are built with multi-layered security, regular audits, and encryption standards.'
    },
    {
      icon: 'bi bi-hand-thumbs-up',
      title: 'Client Commitment',
      desc: 'We are committed to transparency, clear communication, and long-term relationships.'
    },
    {
      icon: 'bi bi-people',
      title: 'Workplace Ethics',
      desc: 'Our culture is rooted in honesty, inclusivity, and respect for every individual and partner.'
    },
    {
      icon: 'bi bi-check2-circle',
      title: 'Quality Assurance',
      desc: 'Each project goes through strict testing, validation, and quality control to ensure excellence.'
    },
    {
      icon: 'bi bi-people',
      title: 'Equal Opportunity',
      desc: 'We promote a fair, inclusive workplace where every individual is treated with respect and given equal opportunities to grow.'
    }
  ];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
