"use client";
import Header from "@/components/Header/Header";
import css from './Contact.module.scss';
import { MainLayout } from "@/layouts";
import usePageMetadata from "../metadata";

export default function Contact() {
  usePageMetadata('Contact Us - Hairandarduft', 'Feel free to reach out to us using the form below or contact us directly: Email: contact@andarduft.com');
  return (
    <MainLayout children={
      <div className={css.container}>
        <h1 className={css.title}>Contact Us</h1>
        <div className={css.contactInfo}>
          <p>Feel free to reach out to us using the form below or contact us directly:</p>
          <ul>
            <li><strong>Email:</strong> contact@hairandarduft.com</li>
            <li><strong>Phone:</strong> 04 90 90 90 90</li>
            <li><strong>Address:</strong> 123 Shampoo Lane, Imaginary City</li>
          </ul>
        </div>
        <form className={css.contactForm}>
          <div className={css.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className={css.inputField} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className={css.inputField} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message" className={css.textareaField}></textarea>
          </div>

          <button type="submit" className={css.submitButton}>Send Message</button>
        </form>
      </div>
    } />
  );
}
