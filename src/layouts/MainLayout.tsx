import { ReactNode } from "react";
import { Footer } from "@/components";
import Header from "@/components/Header/Header";

export function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div style={{ marginTop: "200px"}}>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

interface Props {
  children?: ReactNode;
}