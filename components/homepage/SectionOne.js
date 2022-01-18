import s from "../../styles/components/homepage/SectionOne.module.scss";

export default function SectionOne() {
  return (
    <section className={s.section} id="home-section-one">
      <div className={s.sloganOne}>
        <div className={s.letter} id={`${s.l1}`}>
          H
        </div>
        <div className={s.letter} id={`${s.l2}`}>
          A
        </div>
        <div className={`${s.letter} ${s.yellow}`} id={`${s.l3}`}>
          <span>B</span>
          <span>P</span>
        </div>
        <div className={`${s.letter} ${s.yellow}`} id={`${s.l4}`}>
          <span>E</span>
          <span>B</span>
          <span>P</span>
        </div>
        <div className={`${s.letter} ${s.yellow}`} id={`${s.l5}`}>
          <span>E</span>
          <span>Y</span>
        </div>
      </div>
      <div className={s.sloganTwo}>
        <div className={s.hive}>
          <div className={s.hexagon} />
          <div className={s.hexagon} />
          <div className={s.hexagon} />
        </div>
        <p className={s.honey}>HONEY</p>
      </div>
    </section>
  );
}
