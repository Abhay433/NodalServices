import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aboutusleadership.component.html',
  styleUrls: ['./aboutusleadership.component.css']
})
export class AboutusLeadershipComponent implements OnInit {
  leaders = [
    { name: 'Mohammad Asif', position: 'CEO', image: 'assets/leadership/john.png', bio: 'Visionary leader driving innovation and growth.' },
    { name: 'Nihaludddin', position: 'CTO', image: 'assets/leadership/jane.png', bio: 'Expert in technology strategy and architecture.' },
    { name: 'Zohaib Tahir', position: 'COO', image: 'assets/leadership/mike.png', bio: 'Ensuring smooth operations and delivery excellence.' }
  ];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
