import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name    = '';
  email   = '';
  phone   = '';
  message = '';

  private serviceID  = 'service_ish6aaz';
  private templateID = 'template_8ugwpor';
  private publicKey  = 'o2XFhxmkye1AqVuqa';

  isLoading   = false;
  isSubmitted = false;
  formSuccess = false;
  formError   = false;

  async sendEmail(form: NgForm, event: Event) {
    event.preventDefault();
    this.isSubmitted = true;
    this.formSuccess = false;
    this.formError   = false;

    if (form.invalid) return;

    this.isLoading = true;

    try {
      await emailjs.send(
        this.serviceID,
        this.templateID,
        {
          name:    this.name,
          email:   this.email,
          phone:   this.phone,
          message: this.message
        },
        this.publicKey
      );

      this.formSuccess = true;
      form.resetForm();
      this.isSubmitted = false;

      // Auto-hide success pill after 4s
      setTimeout(() => (this.formSuccess = false), 4000);

    } catch (error) {
      console.error(error);
      this.formError = true;
      setTimeout(() => (this.formError = false), 5000);

    } finally {
      this.isLoading = false;
    }
  }

  // kept for backward compat — not used in new UI
  showToast(message: string, bgClass: string) {
    const toastEl  = document.getElementById('emailToast')!;
    const msgEl    = document.getElementById('toastMessage')!;
    msgEl.textContent = message;
    toastEl.className = 'toast align-items-center text-white border-0';
    toastEl.classList.add(bgClass);
    new Toast(toastEl, { delay: 3000 }).show();
  }
}