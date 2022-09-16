import { useAccount } from "wagmi";
import { Alchemy, Network, Nft } from "alchemy-sdk";
import { useEffect, useState } from "react";

import styles from "./nftcollection.module.scss";
import NFTCard from "../cards";

const config = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(config);

const NftCollection = () => {
  const [Nfts, setNfts] = useState<Nft[]>();

  const { isConnected, address } = useAccount();

  const NFTArray: Nft[] = [];

  const fetchNfts = async () => {
    const userAddress: string = "0x18a40393569aA99a15C9Ac58e7BFfB67347fD50f";

    const nfts = await alchemy.nft.getNftsForOwner(userAddress);

    const nftItems = nfts["ownedNfts"];

    for (let item of nftItems) {
      const tokenId = item.tokenId;
      const nftAddress = item.contract.address;
      const response = await alchemy.nft.getNftMetadata(nftAddress, tokenId);

      NFTArray.push(response);
    }
    setNfts(NFTArray);
  };

  useEffect(() => {
    if (isConnected) {
      fetchNfts();
    }
  }, [isConnected]);

  return (
    <div className={styles.collectionpage}>
      <div className={styles.collectiontitle}>NFT Collections</div>
      <div className={styles.filterBtns}>
        <button className={styles.filterBtn}>All NFTs</button>
        <button className={styles.filterBtn}>LearnWeb3DAO</button>
        <button className={styles.filterBtn}>BuildSpace</button>
      </div>
      <div className={styles.nftCards}>
        {Nfts?.map((item, index) => (
          <NFTCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NftCollection;
