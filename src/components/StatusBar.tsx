import React from "react";
import styles from "./StatusBar.module.scss";

const labels = ["Perception", "SLAM", "Planning", "Prediction", "Control", "Simulation"];

export function StatusBar() {
  return (
    <div className={styles.statusBar}>
      {labels.map((label, i) => (
        <React.Fragment key={label}>
          {i > 0 && <span className={styles.divider} />}
          <div className={styles.chip}>
            <span className={styles.dot} />
            <span>{label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
