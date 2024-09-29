import Header from "@/components/Header/Header";
import css from './Blog.module.scss';

export function Blog() {
  return (
    <>
      <Header />
        <div className={css.container}>
          <h1>Blog page content</h1>
        </div>
    </>
  );
}

export default Blog;