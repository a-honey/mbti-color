import styles from "./Button.module.css";

export default function Button({ className = "", ...props }) {
  const className = `${styles.button} ${className}`;
  return <button className={className} {...props} />;
}
