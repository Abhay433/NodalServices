import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-thirdparty',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sthirdparty.component.html',
  styleUrls: ['./sthirdparty.component.css']
})
export class SthirdpartyComponent implements OnInit {
  features = [
    { icon: '🔗', title: 'Seamless Integration', desc: 'Connect your applications with third-party services efficiently and securely.' },
    { icon: '⚡', title: 'Enhanced Functionality', desc: 'Leverage external APIs to expand your system capabilities and features.' },
    { icon: '🛡️', title: 'Secure Connections', desc: 'Ensure safe and reliable communication with external platforms.' },
  ];

  processSteps = ['Requirement Gathering', 'API Selection', 'Integration Development', 'Testing & Deployment'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
