import styles from "./Grid.module.scss";

interface IGridProps {
  children: JSX.Element;
  shrinkWidth?: boolean;
}
function Grid({ children, shrinkWidth }: IGridProps) {
  const beforeAndAfterWidthStyles = {
    "--beforeAndAfterWidth": shrinkWidth ? "100%" : "100vw",
  } as React.CSSProperties;

  return (
    <div className={styles.Grid} style={beforeAndAfterWidthStyles}>
      {children}
      <span className={styles.Grid__corner}></span>
      <span className={styles.Grid__corner}></span>
      <span className={styles.Grid__corner}></span>
      <span className={styles.Grid__corner}></span>
    </div>
  );
}

export default Grid;
