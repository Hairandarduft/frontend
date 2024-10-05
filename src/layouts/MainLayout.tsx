import { ReactNode } from "react";
import { Footer } from "@/components";
import Header from "@/components/Header/Header";
import css from "./MainLayout.module.scss";

export function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className={css.wrapper}>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

interface Props {
  children?: ReactNode;
}