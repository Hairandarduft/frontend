import Header from "@/components/Header/Header";
import css from './AboutUs.module.scss';

export function AboutUs() {
  return (
    <>
      <Header />
        <div className={css.container}>
          <h1>About us page content</h1>
        </div>
    </>
  );
}

export default AboutUs;