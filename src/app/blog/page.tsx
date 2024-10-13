import Header from "@/components/Header/Header";
import css from './Blog.module.scss';
import { Colors } from '@/constants/colors';
import Link from 'next/link';
import { MainLayout } from "@/layouts";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Andarduft & Benefits',
      author: 'NawelleFromHairAndarduft',
      cover: '/assets/images/andarduft.jpg',
      link: '/blog/first-post'
    },
    {
      id: 2,
      title: 'Andarduft Color Protection Shampoo',
      author: 'BobFromHairAndarduft',
      cover: '/assets/products/14.webp',
      link: '/blog/second-post'
    },
    {
      id: 3,
      title: 'Andarduft Everyday Shampoo',
      author: 'HaileyFromHairAndarduft',
      cover: '/assets/products/7.webp',
      link: '/blog/third-post'
    },
    {
      id: 4,
      title: 'Andarduft Intense Repair Hair Mask',
      author: 'TaylerFromHairAndarduft',
      cover: '/assets/products/6.webp',
      link: '/blog/fourth-post'
    },
    {
      id: 5,
      title: 'Andarduft Curl Enhancing Cream',
      author: 'PercyFromHairAndarduft',
      cover: '/assets/products/10.webp',
      link: '/blog/fifth-post'
    },
    {
      id: 6,
      title: 'Our Partners!',
      author: 'WwFromHairAndarduft',
      cover: '/assets/images/banner.jpg',
      link: '/blog/sixth-post'
    },
  ];

  return (
    <MainLayout children={
      <div className={css.container}>
        <h1 style={{ color: Colors.primary }}>Welcome to the Blog</h1>
        <div className={css.blogGrid}>
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className={css.blogCard} style={{ backgroundColor: Colors.white }}>
              <img src={post.cover} alt={post.title} className={css.coverImage} />
              <div className={css.blogContent}>
                <h2 style={{ color: Colors.text }}>{post.title}</h2>
                <p style={{ color: Colors.secondaryText }}>Author:<br />{post.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    } />
  );
}