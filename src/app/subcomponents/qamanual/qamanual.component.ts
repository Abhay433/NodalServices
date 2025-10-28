import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './qamanual.component.html',
  styleUrls: ['./qamanual.component.css']
})
export class QamanualComponent implements OnInit {
  features = [
    { icon: '📝', title: 'Thorough Testing', desc: 'Ensure every feature works as intended through detailed manual testing.' },
    { icon: '🔍', title: 'Bug Detection', desc: 'Identify hidden bugs and usability issues that automation may miss.' },
    { icon: '👥', title: 'User-Centric', desc: 'Focus on real-world user experience and application usability.' },
  ];

  processSteps = ['Requirement Analysis', 'Test Planning', 'Test Execution', 'Defect Reporting & Retesting'];

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
