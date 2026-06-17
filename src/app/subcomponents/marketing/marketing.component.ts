import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';
import { Toast } from 'bootstrap';

export interface ProductHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface Product {
  img: string;
  title: string;
  category: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  liveUrl?: string;
  techStack: string[];
  features: string[];
  highlights?: ProductHighlight[];
}

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {

  private serviceID = 'service_ish6aaz';
  private templateID = 'template_8ugwpor';
  private publicKey = 'o2XFhxmkye1AqVuqa';

  auditName = '';
  auditCompany = '';
  auditEmail = '';
  auditPhone = '';
  auditMessage = '';
  isAuditLoading = false;
  isAuditSubmitted = false;

  selectedProduct: Product | null = null;

  // ─────────────────────────────────────────────
  // SERVICES (Website Dev focused)
  // ─────────────────────────────────────────────
  services = [
    {
      icon: 'fas fa-laptop-code',
      name: 'Custom Web Development',
      desc: 'Full-stack web applications built with React, Next.js, Angular and Node.js — scalable, fast and production-ready.'
    },
    {
      icon: 'fas fa-shopping-cart',
      name: 'E-Commerce Development',
      desc: 'End-to-end online stores with payment gateway integration (Razorpay, Stripe), inventory, orders and delivery management.'
    },
    {
      icon: 'fas fa-paint-brush',
      name: 'UI/UX Design',
      desc: 'Modern, conversion-optimised interfaces designed for real users. Wireframes, prototypes and production-quality UI.'
    },
    {
      icon: 'fas fa-hotel',
      name: 'Hotel & Restaurant POS',
      desc: 'Custom POS and management systems with role-based access, room management, billing and real-time analytics.'
    },
    {
      icon: 'fas fa-graduation-cap',
      name: 'School ERP Systems',
      desc: 'Complete institution management: admissions, attendance, fees, exams, timetables and parent-teacher portals.'
    },
    {
      icon: 'fas fa-search',
      name: 'SEO & Digital Marketing',
      desc: 'Rank higher on Google, run targeted ads and grow your brand online with data-driven strategies that convert.'
    }
  ];

  // ─────────────────────────────────────────────
  // STATS
  // ─────────────────────────────────────────────
  stats = [
    { icon: 'fas fa-rocket',     value: '20+',  label: 'Projects Delivered' },
    { icon: 'fas fa-users',      value: '15+',  label: 'Happy Clients' },
    { icon: 'fas fa-globe',      value: '3',    label: 'Countries Served' },
    { icon: 'fas fa-smile',      value: '100%', label: 'Client Satisfaction' }
  ];

  // ─────────────────────────────────────────────
  // CASE STUDIES — Real Products
  // ─────────────────────────────────────────────
  caseStudies: Product[] = [
    {
      img: 'assets/projects/khilat.png',          // <-- apni image yahan add karo
      title: 'Khilat — E-Commerce Platform',
      category: 'E-Commerce',
      icon: 'fas fa-shopping-bag',
      shortDesc: 'A full-featured online shopping platform with Razorpay payments, real-time order tracking and seller dashboard.',
      fullDesc: 'Khilat is a production-ready e-commerce platform built to handle the complete buyer-seller journey — from product browsing and cart management to secure checkout via Razorpay, order dispatch, delivery tracking and automated email notifications. The admin dashboard provides full control over inventory, orders, users and analytics.',
      liveUrl: 'http://72.61.229.22/',
      techStack: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'JWT', 'Tailwind CSS', 'Cloudinary', 'Nodemailer'],
      features: [
        'Razorpay payment gateway integration',
        'Real-time order status: Placed → Dispatched → Delivered',
        'Admin dashboard — orders, inventory, users',
        'Product search, filter & category browsing',
        'Cart, wishlist & secure checkout flow',
        'JWT-based authentication & RBAC',
        'Cloudinary image uploads for products',
        'Automated order confirmation emails',
        'Mobile-responsive UI',
        'Deployed on Vercel (frontend) & live server'
      ],
      highlights: [
        { icon: 'fas fa-credit-card', label: 'Payment Gateway', value: 'Razorpay' },
        { icon: 'fas fa-server',      label: 'Deployment',      value: 'Vercel + Live Server' },
        { icon: 'fas fa-shield-alt',  label: 'Auth',            value: 'JWT + RBAC' }
      ]
    },
    {
      img: 'assets/projects/fusionpos.jpg',        // <-- apni image yahan add karo
      title: 'FusionPOS — Hotel & Restaurant Management',
      category: 'POS / SaaS',
      icon: 'fas fa-utensils',
      shortDesc: 'A complete hotel & restaurant management system with POS, role-based access, room management and real-time kitchen display.',
      fullDesc: 'FusionPOS is a SaaS-grade Hotel & Restaurant Management System built on Next.js. It covers the full hotel operations stack — from front desk and room booking to restaurant POS, kitchen orders, billing and reporting. The system supports multiple roles: Super Admin, Admin, Cashier and Kitchen Staff, each with their own tailored dashboard and permissions.',
      liveUrl: 'https://fusionpos.in',
      techStack: ['Next.js', 'React.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'TypeScript', 'JWT', 'Tailwind CSS', 'Socket.io'],
      features: [
        'Super Admin, Admin, Cashier, Kitchen Staff roles',
        'Hotel management — rooms, bookings, check-in/out',
        'Restaurant POS — table orders, menu, billing',
        'Real-time kitchen display system (KDS)',
        'Multi-branch / multi-hotel support',
        'Daily sales reports and revenue analytics',
        'Inventory & stock management',
        'Invoice generation and print support',
        'Live data sync with Socket.io',
        'Deployed and live at fusionpos.in'
      ],
      highlights: [
        { icon: 'fas fa-users-cog', label: 'Roles Supported', value: '4 (Super Admin → Staff)' },
        { icon: 'fas fa-globe',     label: 'Live URL',         value: 'fusionpos.in' },
        { icon: 'fas fa-bolt',      label: 'Real-Time',        value: 'Socket.io KDS' }
      ]
    },
    {
      img: 'assets/projects/schoolerp.jpg',        // <-- apni image yahan add karo
      title: 'SMS — School Management ERP',
      category: 'ERP / EdTech',
      icon: 'fas fa-school',
      shortDesc: 'A comprehensive school ERP covering admissions, attendance, fees, exams, timetables and role-based dashboards for teachers, students and admins.',
      fullDesc: 'The School Management System (SMS) is a full-featured ERP built with Angular (TypeScript + SCSS) on the frontend and Java Spring Boot on the backend. It supports all institution management workflows — student admissions, teacher management, class & section setup, attendance tracking, fee collection, exam scheduling, result management and parent communication. Each role (Admin, Teacher, Student, Parent) gets a dedicated dashboard with relevant access.',
      liveUrl: 'http://72.61.229.22/sms/',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'REST API', 'Nginx'],
      features: [
        'Admin, Teacher, Student, Parent role dashboards',
        'Student admissions & profile management',
        'Classes, sections & timetable management',
        'Attendance tracking — daily & monthly reports',
        'Fee management & payment records',
        'Exam scheduling & result management',
        'Teacher assignment & subject mapping',
        'Parent-teacher communication portal',
        'Nginx reverse proxy — deployed on live server',
        'JWT auth with role-based route guards'
      ],
      highlights: [
        { icon: 'fas fa-users',    label: 'Roles',       value: 'Admin, Teacher, Student, Parent' },
        { icon: 'fas fa-server',   label: 'Backend',     value: 'Java Spring Boot + MySQL' },
        { icon: 'fas fa-globe',    label: 'Deployment',  value: 'Live @ 72.61.229.22/sms/' }
      ]
    }
  ];

  // ─────────────────────────────────────────────
  // WHY US
  // ─────────────────────────────────────────────
  whyUs = [
    {
      icon: 'fas fa-code',
      title: 'Clean, Scalable Code',
      desc: 'Production-grade architecture — no shortcuts, no spaghetti code.'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'On-Time Delivery',
      desc: 'We commit to deadlines and deliver. Always.'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'Scalable Systems',
      desc: 'Built to grow — from 10 users to 10,000 without a rewrite.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Dedicated Support',
      desc: 'A dedicated developer for updates, questions and post-launch support.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Premium UI/UX',
      desc: 'Interfaces that look great and convert visitors into customers.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Full-Stack Expertise',
      desc: 'React, Next.js, Angular, Node.js, Java — we cover the full stack.'
    }
  ];

  // ─────────────────────────────────────────────
  // PROCESS
  // ─────────────────────────────────────────────
  process = [
    {
      title: 'Discovery & Planning',
      desc: 'We understand your business goals, target users and technical requirements in depth.'
    },
    {
      title: 'Design & Architecture',
      desc: 'UI/UX wireframes, system architecture and database schema before a single line of code.'
    },
    {
      title: 'Development & Testing',
      desc: 'Agile sprints with regular demos, QA testing and client feedback loops.'
    },
    {
      title: 'Deploy & Support',
      desc: 'Production deployment, performance optimisation and ongoing support post-launch.'
    }
  ];

  // ─────────────────────────────────────────────
  // TESTIMONIALS
  // ─────────────────────────────────────────────
  testimonials = [
    {
      text: 'NodalXPoint built our entire e-commerce platform from scratch in just 6 weeks. The quality, speed and communication were outstanding. Highly recommend!',
      name: 'Rahul Sharma',
      role: 'Founder, Khilat Online Store',
      initials: 'RS'
    },
    {
      text: 'FusionPOS transformed how we manage our restaurant. The kitchen display system and POS are exactly what we needed. The team was professional throughout.',
      name: 'Priya Mehta',
      role: 'Owner, The Grand Dining, Mumbai',
      initials: 'PM'
    },
    {
      text: 'The School ERP they built handles everything — fees, attendance, exams, timetables. Our admin workload dropped by 70%. Amazing product.',
      name: 'Amir Hassan',
      role: 'Principal, Bright Future Academy',
      initials: 'AH'
    }
  ];

  // ─────────────────────────────────────────────
  // MODAL
  // ─────────────────────────────────────────────
  openProduct(product: Product) {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeProduct() {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  // ─────────────────────────────────────────────
  // EMAIL
  // ─────────────────────────────────────────────
  async sendAuditEmail(form: NgForm, event: Event) {
    event.preventDefault();
    this.isAuditSubmitted = true;
    if (form.invalid) return;

    this.isAuditLoading = true;
    try {
      await emailjs.send(
        this.serviceID,
        this.templateID,
        {
          name: this.auditName,
          email: this.auditEmail,
          phone: this.auditPhone,
          message: `[PROJECT CONSULTATION REQUEST]\nCompany: ${this.auditCompany}\n\n${this.auditMessage}`
        },
        this.publicKey
      );
      this.showToast('✅ Request sent! We\'ll get back to you shortly.', 'bg-success');
      form.resetForm();
      this.isAuditSubmitted = false;
    } catch (error) {
      console.error(error);
      this.showToast('❌ Something went wrong, please try again.', 'bg-danger');
    } finally {
      this.isAuditLoading = false;
    }
  }

  showToast(message: string, bgClass: string) {
    const toastEl = document.getElementById('dmToast')!;
    const msgEl = document.getElementById('dmToastMessage')!;
    msgEl.textContent = message;
    toastEl.className = 'toast align-items-center text-white border-0';
    toastEl.classList.add(bgClass);
    new Toast(toastEl, { delay: 4000 }).show();
  }
}