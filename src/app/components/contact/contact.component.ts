import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  // Your EmailJS configuration
  private serviceID: string = 'service_ish6aaz';   // SMTP service ID
  private templateID: string = 'template_8ugwpor';
  private publicKey: string = 'o2XFhxmkye1AqVuqa';

  sendEmail(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    const templateParams = {
      name: this.name,
      email: this.email,       // user email shown in message body
      phone: this.phone,
      message: this.message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then(() => {
        this.showToast('Message sent successfully!', 'bg-success');
        form.resetForm();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        this.showToast('Oops! Something went wrong, please try again.', 'bg-danger');
      });
  }


  showToast(message: string, bgClass: string) {
    const toastEl = document.getElementById('emailToast')!;
    const toastMessageEl = document.getElementById('toastMessage')!;
    toastMessageEl.textContent = message;

    // Remove previous bg-* classes
    toastEl.className = 'toast align-items-center text-white border-0';
    toastEl.classList.add(bgClass);

    const toast = new Toast(toastEl, { delay: 3000 });
    toast.show();
  }
}
