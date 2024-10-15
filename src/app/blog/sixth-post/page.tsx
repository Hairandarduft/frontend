import Header from "@/components/Header/Header";
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import styles from './Sixth-post.module.scss';

export default function SixthPost() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Our Partners!</h2>
          <p className={styles.date}>Published on: October 6, 2024</p>
          <p className={styles.author}>Author:<br />WwFromHairAndarduft</p>
            <img
                src="/assets/images/banner.jpg"
                alt="Andarduft Logo Image"
            />
          <p>
        Discover how our valued partners are incorporating the powerful Andarduft plant into their own innovative products! In this blog post, we explore the unique ways they're harnessing Andarduft's refreshing menthol properties to create various miracle-like products!
          <br />
          <br />
          {/* <strong>
              <Link href="https://andarduftfairycinals.tech/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                AndarduftFairycinals
              </Link>
            </strong>
            <br />
            Discover Andarduft's prenium muscle supplements like protein powders, creatine, BCAA, and pre-workouts. Build troll-like strength with their unique products tailored for bodybuilders and fitness enthusiasts.
          <br /> */}
          <br />
          <strong>
                <Link href="https://standarduft.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Standarduft
              </Link>
              </strong>
              <br />
            Explore their exclusive selection of Andarduft-infused potions and herbal remedies, and enjoy their special discounts on natural solutions for mind, body and soul. (Guaranteed Legal)
          <br />
          <br />
          <strong>
            <Link href="https://wonderduft.odoo.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Wonderduft
              </Link>
              </strong>
              <br />
            Discover Wonderduf's healthy organic drinks crafted with Andarduft and others natural herbs, aromatics and plants.
          <br />
          </p>
        </div>

        <Link href="/blog">
          <span className={styles.backLink}>Back to Blog</span>
        </Link>
      </div>
    </>
  );
}
