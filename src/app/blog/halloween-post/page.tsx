"use client";
import Header from "@/components/Header/Header";
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import styles from './Halloween-post.module.scss';
import usePageMetadata from "@/app/metadata";

export default function HalloweenPost() {
  usePageMetadata('Andarduft & Halloween - Hairandarduft', 'As the nights grow longer and the air turns crisp, it\'s time to give your hair some special treatment this Halloween! Andarduft’s spooky edition is here to ensure your locks are as healthy and vibrant as ever, even during the most chilling of nights.');
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Andarduft & Halloween</h2>
          <p className={styles.date}>Published on: October 31, 2024</p>
          <p className={styles.author}>Author:<br />LorenzoFromHairAndarduft</p>
          <img
            src="/assets/images/halloween-andarduft.webp"
            alt="Andarduft Halloween Image"
          />
          <p>
            As the nights grow longer and the air turns crisp, it's time to give your hair some special treatment this Halloween! Andarduft’s spooky edition is here to ensure your locks are as healthy and vibrant as ever, even during the most chilling of nights.
            <br /><br /><strong>Spooky Scalp Soother</strong><br />
            Just like a witch’s brew, Andarduft is packed with menthol, delivering a cooling sensation to soothe your scalp from any itchiness or irritation. Perfect for when the weather gets chilly and your scalp needs a little extra care.
            <br /><br /><strong>Strengthen Your Hair</strong><br />
            Halloween may be full of frights, but weak and brittle hair shouldn’t be one of them! Packed with essential nutrients, Andarduft helps fortify your strands, ensuring they remain strong even as the winds of October howl.
            <br /><br /><strong>Cleanse Away the Creeps</strong><br />
            With all the Halloween parties and fun, it's easy to accumulate dirt and product buildup. Andarduft’s deep-cleansing properties help remove impurities and excess oil from your scalp and hair, leaving you feeling refreshed and ready to take on the night.
            <br /><br /><strong>Perfect for Dry and Curly Hair</strong><br />
            Andarduft also works wonders for curly hair, keeping it hydrated and frizz-free. No matter how wild your Halloween costume gets, your curls will stay defined and moisturized throughout the night.
            <br /><br /><strong>Protect Your Hair Color</strong><br />
            If you're rocking a bold hair color this season, Andarduft has your back. It helps lock in moisture and keeps your vibrant hues from fading. Whether you’re going for witchy purple or pumpkin orange, your color will last through the spooky season.
            <br /><br /><strong>By Trolls for Humans</strong><br />
            Trolls have long relied on the magical properties of Andarduft to keep their wild hair in check. Now, you too can benefit from the plant’s natural goodness, with this special edition crafted for humans. Keep your hair looking its best, no matter how many ghouls you encounter!
            <br /><br /><strong><u>Conclusion</u></strong><br />
            Whether you're preparing for a haunted Halloween night or just need a little extra care for your hair, Andarduft's Halloween edition is here to help. With its cooling, soothing, and nourishing properties, it’s the perfect addition to your hair care routine this spooky season.
          </p>
        </div>

        <Link href="/blog">
          <span className={styles.backLink}>Back to Blog</span>
        </Link>
      </div>
    </>
  );
}
