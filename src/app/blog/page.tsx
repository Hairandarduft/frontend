// import Header from "@/components/Header/Header";
// import css from './Blog.module.scss';

// export function Blog() {
//   return (
//     <>
//       <Header />
//         <div className={css.container}>
//           <h1>Blog page content</h1>
//         </div>
//     </>
//   );
// }

// export default Blog;
import Header from "@/components/Header/Header";
import css from './Blog.module.scss';
import { Colors } from '@/constants/colors';
import Link from 'next/link';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Andarduft & Benefits',
      author: 'NawelleFromHairAndarduft',  // Added author
      cover: '/assets/images/andarduft.jpg', // Ensure correct path for the cover image
      link: '/blog/first-post'  // Correct link to the blog post
    },
    {
      id: 2,
      title: 'Second Blog Post',
      author: 'Author 2', // Placeholder author
      cover: '/images/blog2.jpg',
      link: '/blog/second-post'
    },
    {
      id: 3,
      title: 'Third Blog Post',
      author: 'Author 3', // Placeholder author
      cover: '/images/blog3.jpg',
      link: '/blog/third-post'
    },
    {
      id: 4,
      title: 'Fourth Blog Post',
      author: 'Author 4', // Placeholder author
      cover: '/images/blog4.jpg',
      link: '/blog/fourth-post'
    },
    {
      id: 5,
      title: 'Fifth Blog Post',
      author: 'Author 5', // Placeholder author
      cover: '/images/blog5.jpg',
      link: '/blog/fifth-post'
    },
  ];

  return (
    <>
      <Header />
      <div className={css.container}>
        <h1 style={{ color: Colors.primary }}>Welcome to the Blog</h1>
        <div className={css.blogGrid}>
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.id} className={css.blogCard} style={{ backgroundColor: Colors.white }}>
              <img src={post.cover} alt={post.title} className={css.coverImage} />
              <div className={css.blogContent}>
                <h2 style={{ color: Colors.text }}>{post.title}</h2>
                <p style={{ color: Colors.secondaryText }}>Author: {post.author}</p> {/* Displaying the author */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;