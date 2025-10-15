import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './smaintanance.component.html',
  styleUrls: ['./smaintanance.component.css']
})
export class SmaintananceComponent implements OnInit {
  features = [
    { icon: '🛠️', title: 'Regular Updates', desc: 'Keep your software up-to-date with the latest features and security patches.' },
    { icon: '🔧', title: 'Bug Fixes', desc: 'Quickly identify and fix issues to ensure smooth and stable performance.' },
    { icon: '📊', title: 'Performance Optimization', desc: 'Optimize your systems to enhance speed, reliability, and user experience.' },
  ];

  processSteps = ['System Audit', 'Planning & Scheduling', 'Implementation', 'Monitoring & Support'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
