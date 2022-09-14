import styles from "./header.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>seer</div>
      <ConnectButton showBalance={false} />
    </div>
  );
};

export default Header;
