import { Colors } from "@/constants/colors";
import Link from "next/link";
import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.content}>
        All rights reserved &copy; {new Date().getFullYear()}
      </div>
      <div className={css.content}>Educational purposes only</div>
    </div>
  );
}
