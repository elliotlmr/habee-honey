import s from "../../styles/components/homepage/SectionTwo.module.scss";

export default function SectionTwo() {
  function handleCombClick() {
    //do something
  }

  return (
    <section className={s.section}>
      <div className={s.comb}>
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
        A real honey, sweety and <span>tasty !</span>
      </h1>
    </section>
  );
}
