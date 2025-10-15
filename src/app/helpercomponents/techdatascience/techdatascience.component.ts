import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-science',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './techdatascience.component.html',
  styleUrls: ['./techdatascience.component.css']
})
export class TechDataScienceComponent implements OnInit {

  features = [
    { icon: 'bi bi-graph-up', title: 'Predictive Analytics', desc: 'Gain actionable insights with predictive modeling to make data-driven decisions.' },
    { icon: 'bi bi-cpu', title: 'Machine Learning', desc: 'Implement intelligent models to automate decisions and predictions.' },
    { icon: 'bi bi-database', title: 'Big Data Management', desc: 'Efficiently process and analyze large datasets for meaningful insights.' },
  ];

  processSteps = ['Data Collection', 'Data Cleaning & Processing', 'Modeling & Analysis', 'Visualization & Reporting'];

  constructor() { }

  ngOnInit(): void { }

}
