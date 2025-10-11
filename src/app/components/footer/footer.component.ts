import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // ✅ Import RouterLink

@Component({
  selector: 'app-footer',
  standalone: true,  // ✅ Make sure it’s standalone
  imports: [CommonModule, RouterLink],  // ✅ Add RouterLink here
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // ✅ use styleUrls (plural)
})
export class FooterComponent {}
