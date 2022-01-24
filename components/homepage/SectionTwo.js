import { useEffect } from "react";
import s from "../../styles/components/homepage/SectionTwo.module.scss";

export default function SectionTwo() {
  useEffect(() => {
    const height = window.innerHeight;
    const comb = document.getElementById("comb");
    const currentX = -30;
    const currentY = -40;

    window.onscroll = function () {
      const posY = window.pageYOffset;
      const percent = (100 * posY) / height;
      const newX = currentX + (percent / 100) * 32.5;
      const newY = currentY + (percent / 100) * 55;

      if (posY <= height) {
        comb.style.top = `${newY}vh`;
        comb.style.right = `${newX}vw`;
      }

      if (comb.offsetTop > 50 && !comb.classList[1]) {
        comb.classList.add(s.visible);
      }
    };
  }, []);

  function handleCombClick() {
    window.scrollTo(0, window.innerHeight);
  }

  return (
    <section className={s.section} id="sectionTwo">
      <div className={s.comb} id="comb">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
          onClick={handleCombClick}
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </div>
      <h1 className={s.title}>
        A real honey,
        <br />
        <span>sweet'n'tasty !</span>
      </h1>
      <div className={s.contentContainer}>
        <div className={s.card}>
          <h1 className={s.cardTitle}>PURE NATURAL HONEY</h1>
          <p className={s.cardText}>
            My honey is not like the one you can find in the supermarket. Mine
            is not fake, diluted or mixed. This is why you might find some
            different texture or taste, depending on which pot you bought.
          </p>
        </div>
        <div className={s.card}>
          <h1 className={s.cardTitle}>WITH HEALING PROPERTIES</h1>
          <p className={s.cardText}>
            Did you know ? When honey is pure ( like mine hehe ), it has some
            special properties, that can, for example, heal your throat,
            sanitize a wound, etc .. It is also a really good energy{" "}
            <strike>drink</strike> boost !
          </p>
        </div>
        <div className={s.card}>
          <h1 className={s.cardTitle}>MADE BY HEALTHY BEES</h1>
          <p className={s.cardText}>
            Unfortunately, bees are more and more the victims of our ecological
            crisis, and it becomes harder to find a place for beekeeping in a
            good sanitary condition ( shame on pesticides ). Lucky for you, my
            honey is produced in one of the remaining places that are not
            polluted. None of my bees get sick during the year, and I really
            care about them ( as they are kind of my entire life now ).
          </p>
        </div>
      </div>
    </section>
  );
}
