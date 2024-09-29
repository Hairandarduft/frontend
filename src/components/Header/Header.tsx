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
      <div className={css.contact}>
        <div style={{ fontSize: "18px" }}>
          Contact us
        </div>
      </div>
      <div className={css.nav}>
        <div className={css.logo}>
          <img src="/logo.svg" alt="Logo" style={{ height: "50px" }} />
          <div style={{ color: Colors.white, fontSize: "30px" }}>
            Hairandarduft
          </div>
        </div>
        <div className={css.cart}>
          <div style={{ fontSize: "20px" }}>
            Cart
          </div>
          <div style={{ fontSize: "20px" }}>
            My account
          </div>
        </div>
      </div>
      <div className={css.links}>
        {pages.map((page) => (
          <Link style={{ fontSize: "20px" }}
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
