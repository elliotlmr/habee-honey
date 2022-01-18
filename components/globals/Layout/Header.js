import s from "../../../styles/components/globals/Layout/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <header className={s.container}>
      <Link href="/" passHref>
        <img src="./assets/HH-logo2.svg" className={s.logo} />
      </Link>
      <nav className={s.navigation}>
        <Link href="/journey" passHref>
          <a
            className={
              router.pathname === "/journey"
                ? `${s.navlink} ${s.active}`
                : s.navlink
            }
          >
            Journey
          </a>
        </Link>
        <Link href="/shop" passHref>
          <a
            className={
              router.pathname === "/shop"
                ? `${s.navlink} ${s.active}`
                : s.navlink
            }
          >
            Shop
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a
            className={
              router.pathname === "/contact"
                ? `${s.navlink} ${s.active}`
                : s.navlink
            }
          >
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
}
