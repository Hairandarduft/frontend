import Link from "next/link";
import { OpeningHours, SocialIcons } from "@/components";

export function Footer() {
  return (
    <div className="border-t-8 border-yellow-500 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-10 mb-8">
          <div>
            <p className="text-3xl font-bold uppercase mb-4">hairandarduft</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores saepe ratione vero, rerum cum quo aspernatur
              non beatae fugiat!
            </p>
          </div>
          <div>
            <OpeningHours />
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-wrap items-center justify-center text-sm gap-4">
          <p>&copy; Copyright {new Date().getFullYear()}</p>
          <Link href="/terms" className="text-gray-400 underline hover:no-underline" scroll={false}>Terms &amp; Conditions</Link>
          <Link href="/privacy-policy" className="text-gray-400 underline hover:no-underline" scroll={false}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
