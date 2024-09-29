import Header from "@/components/Header/Header";
import css from './Contact.module.scss';

export function Contact() {
  return (
    <>
      <Header />
        <div className={css.container}>
          <h1>Contact page content</h1>
        </div>
    </>
  );
}

export default Contact;