import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 👈 add this
import { TestimonialsComponent } from '../../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,TestimonialsComponent], // 👈 add this
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // 👈 also fix to styleUrls (plural)
})
export class HomeComponent { }
