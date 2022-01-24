import s from "../../../styles/components/globals/Layout/Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Hive from "../Layout/Hive";

export default function Header() {
  const router = useRouter();

  return (
    <header className={s.container} id="header">
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
            <Hive
              hiveWidth="100%"
              combWidth="1"
              hidden={router.pathname === "/journey" ? false : true}
            />
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
            <Hive
              hiveWidth="100%"
              combWidth="1"
              hidden={router.pathname === "/shop" ? false : true}
            />
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
            <Hive
              hiveWidth="100%"
              combWidth="1"
              hidden={router.pathname === "/contact" ? false : true}
            />
          </a>
        </Link>
      </nav>
    </header>
  );
}
