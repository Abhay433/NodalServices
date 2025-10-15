import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-python',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  features = [
    { icon: '🐍', title: 'Versatile Applications', desc: 'Develop web apps, automation scripts, and data-driven solutions using Python.' },
    { icon: '⚡', title: 'Rapid Development', desc: 'Quick and efficient backend development using frameworks like Django and Flask.' },
    { icon: '🛡️', title: 'Secure Code', desc: 'Follow industry best practices to deliver safe and reliable Python applications.' },
  ];

  processSteps = ['Requirement Analysis', 'Design & Architecture', 'Python Development', 'Testing & Deployment'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
