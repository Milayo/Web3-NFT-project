import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
  item: any;
};

const NFTCard = ({ item }: CardProps) => {
  console.log(item);
  const { description, title, media } = item;
  return (
    <div className={styles.cardcontainer}>
      <Image unoptimized src={media[0]?.gateway} width={300} height={200} />
      <div className={styles.cardContent}>
        <div className={styles.flexDiv}>
          <div className={styles.cardTitle}>{title}</div>
          <button className={styles.cardBtn}>View Details</button>
        </div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    </div>
  );
};

export default NFTCard;
