import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Add this line
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ change styleUrl → styleUrls
})
export class AppComponent {
  title = 'company';
}
