import styles from "./homepage.module.scss"
import Image from "next/image";
import HomeImage from "../../assets/cryptocurrency-art.png";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.hometitle}>
        <p>Discover and Manage your NFTs Collections with Seer.</p>
      </div>
      <Image src={HomeImage} alt="HomeImage" width={500} height={450}/>
    </div>
  );
}

export default HomePage