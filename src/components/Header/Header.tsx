import { Colors } from '@/constants/colors';
import Link from 'next/link';
import css from './Header.module.scss';

const pages = [
  {
    name: "Home",
    link: '/'
  },
  {
    name: "Shop",
    link: '/shop'
  },
  {
    name: "About us",
    link: '/about_us'
  },
  {
    name: "Contact",
    link: '/contact'
  },
  {
    name: "Blog",
    link: '/blog'
  }
];

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.nav}>
        <div className={css.logo}>
          <img src="/logo.svg" alt="Logo" />
          <div className={css.logoText}>
            Hairandarduft
          </div>
        </div>
        <div className={css.cart}>
          <div>
            Cart
          </div>
          <div>
            My account
          </div>
        </div>
      </div>
      <div className={css.links}>
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.link}
            className={css.link}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
