import s from "../../../styles/components/globals/Layout/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.mainMenu}>
        <li>
          <Link href="/">- HOMEPAGE</Link>
        </li>
        <li>
          <Link href="/journey">- JOURNEY</Link>
        </li>
        <li>
          <Link href="/shop">- SHOP</Link>
        </li>
        <li>
          <Link href="/contact">- CONTACT</Link>
        </li>
      </ul>
      <ul className={s.subMenu}>
        <li>
          <Link href="/disclaimer">- DISCLAIMER</Link>
        </li>
        <li>
          <Link href="https://shiro-e-portfolio.vercel.app/" passHref>
            <a target="_blank">- CREATOR</a>
          </Link>
        </li>
      </ul>
      <p className={s.copyright}>©2022 Shiro-e "Elliot Lemaire"</p>
    </footer>
  );
}
