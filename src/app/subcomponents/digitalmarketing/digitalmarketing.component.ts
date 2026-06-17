import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-digitalmarketing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './digitalmarketing.component.html',
  styleUrls: ['./digitalmarketing.component.css']
})
export class DigitalmarketingComponent implements OnInit {

  services = [
  { name: 'Social Media Mgmt', icon: 'fas fa-share-alt' },
  { name: 'Meta Ads', icon: 'fab fa-facebook-f' },
  { name: 'Google Ads', icon: 'fab fa-google' },
  { name: 'Video Production', icon: 'fas fa-video' },
  { name: 'SEO', icon: 'fas fa-search' },
  { name: 'Content Creation', icon: 'fas fa-edit' },
  { name: 'Email Marketing', icon: 'fas fa-envelope' },
  { name: 'Influencer', icon: 'fas fa-star' },
  { name: 'Analytics', icon: 'fas fa-chart-line' },
  { name: 'Branding', icon: 'fas fa-crown' }
];

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      once: true,
      offset: 100
    });
  }
}