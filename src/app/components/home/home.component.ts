import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  highlights = [
    { icon: '💻', title: 'Web Development', desc: 'Building responsive and modern web applications.' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform mobile apps for Android and iOS.' },
    { icon: '☕', title: 'Java Solutions', desc: 'Enterprise-grade, scalable Java applications.' },
    { icon: '🔧', title: 'Software Maintenance', desc: 'Keeping your systems up-to-date and bug-free.' },
  ];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
