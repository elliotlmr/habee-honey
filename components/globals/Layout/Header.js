import s from "../../../styles/components/globals/Layout/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={s.container}>
      <Link href="/" passHref>
        <img src="./assets/HH-logo2.svg" className={s.logo} />
      </Link>
      <nav className={s.navigation}>
        <Link href="/journey" passHref>
          <a className={s.navlink}>Journey</a>
        </Link>
        <Link href="/shop" passHref>
          <a className={s.navlink}>Shop</a>
        </Link>
        <Link href="/contact" passHref>
          <a className={s.navlink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
}
