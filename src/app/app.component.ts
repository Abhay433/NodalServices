import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Add this line
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
   ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ change styleUrl → styleUrls
})
export class AppComponent {
  title = 'company';
}
