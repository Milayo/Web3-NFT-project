import styles from "./homepage.module.scss";
import Image from "next/image";
import HomeImage1 from "../../assets/home-img1.png";
import HomeImage2 from "../../assets/home-img2.png";
import HomeImage3 from "../../assets/home-img3.png";
import HomeImage4 from "../../assets/home-img4.png";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HomePage = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/collection");
    }
  }, [isConnected, router]);

  return (
    <div className={styles.homepage}>
      <div className={styles.homepageContent}>
        <div className={styles.hometitle}>
          Discover and Manage your NFT Collections.
        </div>
        <div className={styles.subtitle}>
          View your NFT collections with Seer. Connect your wallet to get
          started.
        </div>
      </div>
      <div className={styles.homeimgs}>
        <div className={styles.homeimg}>
          <Image src={HomeImage1} alt="HomeImage" width={156} height={159} />
          <div className={styles.imgtitle}>
            <div>Seer NFT</div>
            <div className={styles.flexDiv}>
              <div>#1234 </div>
              <div> 6.23 ETH</div>
            </div>
          </div>
        </div>
        <div className={styles.homeimg}>
          <Image src={HomeImage2} alt="HomeImage" width={156} height={159} />
          <div className={styles.imgtitle}>
            <div>Seer NFT</div>
            <div className={styles.flexDiv}>
              <div>#1235 </div>
              <div> 7.23 ETH</div>
            </div>
          </div>
        </div>
        <div className={styles.homeimg}>
          <Image src={HomeImage3} alt="HomeImage" width={156} height={159} />
          <div className={styles.imgtitle}>
            <div>Seer NFT</div>
            <div className={styles.flexDiv}>
              <div>#1236 </div>
              <div> 10.23 ETH</div>
            </div>
          </div>
        </div>
        <div className={styles.homeimg}>
          <Image src={HomeImage4} alt="HomeImage" width={156} height={159} />
          <div className={styles.imgtitle}>
            <div>Seer NFT</div>
            <div className={styles.flexDiv}>
              <div>#1237 </div>
              <div> 4.23 ETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
