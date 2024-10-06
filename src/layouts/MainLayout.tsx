import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import css from "./MainLayout.module.scss";
import Footer from "@/components/Footer/Footer";

export function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className={css.wrapper}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

interface Props {
  children?: ReactNode;
}