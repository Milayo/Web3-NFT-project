import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
  item: any;
};

const externalImageLoader = ({ src }: { src: string }) =>
  `https://static2.taglivros.com/${src}`;

const NFTCard = ({ item }: CardProps) => {
  console.log(item);
  const { description, title, media } = item;
  return (
    <div className={styles.cardcontainer}>
      <Image src={media[0].gateway} width={400} height={200} />
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <button className={styles.cardBtn}>View Details</button>
      </div>
    </div>
  );
};

export default NFTCard;
