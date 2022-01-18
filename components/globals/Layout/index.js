import s from "../../../styles/components/globals/Layout/Layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={s.container}>{children}</main>
      <Footer />
    </>
  );
}
