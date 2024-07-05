import React from "react";
import styles from "./../page.module.css";

const Box = (props) => {
  return (
    <div className={styles.box} onClick={props.onClick}>
      <h4>{props.value}</h4>
    </div>
  );
};
export default Box;
