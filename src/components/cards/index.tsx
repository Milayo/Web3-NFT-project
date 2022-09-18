import styles from "./card.module.scss";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  item: any;
};

const NFTCard = ({ item }: CardProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  console.log(item);
  const { description, title, media } = item;

  const handleBtnClick = () => {
    setOpenDetails(!openDetails);
  };
  return (
    <div className={styles.cardcontainer}>
      <Image unoptimized src={media[0]?.gateway} width={300} height={250} />
      <div className={styles.cardContent}>
        <div className={styles.flexDiv}>
          <div className={styles.cardTitle}>{title}</div>
          <button className={styles.cardBtn} onClick={handleBtnClick}>
            {openDetails ? "Hide Details" : "View Details"}
          </button>
        </div>
        {openDetails && (
          <div className={styles.cardDescription}>{description}</div>
        )}
      </div>
    </div>
  );
};

export default NFTCard;
