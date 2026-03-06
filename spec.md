# ERP Solutions Website

## Current State
New project. No existing pages or components.

## Requested Changes (Diff)

### Add
- Full single-page corporate website for an ERP Solutions & Change Management Consulting organisation
- Hero section: bold headline, subheadline, two CTAs (Get a Demo, Learn More)
- About Us section: mission statement, founding story, expertise summary, key stats (years of experience, clients served, projects delivered)
- Services section with three service pillars:
  - ERP Implementation (with vertical cards: Manufacturing, Education, Service Industry)
  - ERP Hosting & Managed Services
  - Change Management Consulting
- Industries We Serve section: Manufacturing, Education, Service Industry — each with icon, title, brief description
- Why Choose Us section: 4-6 differentiator cards (e.g. deep domain expertise, end-to-end delivery, dedicated support, proven methodology)
- Testimonials / Trust section: 3 client testimonials with name, company, quote; plus trust badges / logos row
- Contact Us section: form with fields for Name, Email, Company, Industry (select), Message, and a Submit button; also office address/phone/email info
- Sticky top navigation bar with logo, section links, and a CTA button
- Footer with links, social icons, copyright

- Backend: contact form submission storage (store name, email, company, industry, message, timestamp); query submissions for admin review

### Modify
None.

### Remove
None.

## Implementation Plan
1. Generate Motoko backend with `ContactSubmission` record type and two methods: `submitContactForm` (public) and `getSubmissions` (admin query)
2. Build React frontend:
   - Navbar (sticky, with smooth scroll links)
   - HeroSection
   - AboutSection
   - ServicesSection (tabbed or card layout)
   - IndustriesSection
   - WhyChooseUsSection
   - TestimonialsSection
   - ContactSection (wired to backend submitContactForm)
   - Footer
3. Apply corporate design: blues, whites, light grays; professional typography; subtle shadows and gradients
4. Add deterministic `data-ocid` markers to all interactive elements
5. Validate and deploy
