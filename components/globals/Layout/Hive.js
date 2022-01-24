import s from "../../../styles/components/globals/Layout/Hive.module.scss";

export default function Hive(props) {
  return (
    <div
      className={props.hidden ? `${s.hive} ${s.hidden}` : s.hive}
      style={{ width: props.hiveWidth }}
    >
      <div
        className={props.hidden ? `${s.hexagon} ${s.hidden}` : s.hexagon}
        style={{
          width: `${props.combWidth}vw`,
          height: `${props.combWidth * 1.732}vw`,
        }}
      />
      <div
        className={props.hidden ? `${s.hexagon} ${s.hidden}` : s.hexagon}
        style={{
          width: `${props.combWidth}vw`,
          height: `${props.combWidth * 1.732}vw`,
        }}
      />
      <div
        className={props.hidden ? `${s.hexagon} ${s.hidden}` : s.hexagon}
        style={{
          width: `${props.combWidth}vw`,
          height: `${props.combWidth * 1.732}vw`,
        }}
      />
    </div>
  );
}
