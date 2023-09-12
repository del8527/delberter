import styles from "./IconContainer.module.scss";

interface IIconContainerProps {
  children: JSX.Element;
}
function IconContainer({ children }: IIconContainerProps) {
  return <div className={styles.IconContainer}>{children}</div>;
}

export default IconContainer;
