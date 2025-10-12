import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 👈 add this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // 👈 add this
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // 👈 also fix to styleUrls (plural)
})
export class HomeComponent { }
