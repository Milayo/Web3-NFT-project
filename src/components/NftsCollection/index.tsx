import { useAccount } from "wagmi";
import { Alchemy, Network, Nft } from "alchemy-sdk";
import { useEffect, useState } from "react";

import styles from "./nftcollection.module.scss";
import NFTCard from "../cards";
import Loader from "../loader";

const config = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(config);

const NftCollection = () => {
  const [Nfts, setNfts] = useState<Nft[]>();
  const [loading, setLoading] = useState(true);

  const { isConnected, address } = useAccount();

  const NFTArray: Nft[] = [];

  const fetchNfts = async () => {
    const userAddress: string = address || "";

    const nfts = await alchemy.nft.getNftsForOwner(userAddress);

    const nftItems = nfts["ownedNfts"];

    const filteredItems = nftItems.filter((item) => {
      return (
        item.contract.address ===
          "0x1ed25648382c2e6da067313e5dacb4f138bc8b33" ||
        item.contract.address === "0x3cd266509d127d0eac42f4474f57d0526804b44e"
      );
    });

    for (let item of filteredItems) {
      const tokenId = item.tokenId;
      const nftAddress = item.contract.address;
      const response = await alchemy.nft.getNftMetadata(nftAddress, tokenId);
      NFTArray.push(response);
    }
    setNfts(NFTArray);
    setLoading(false);
  };

  useEffect(() => {
    if (isConnected) {
      fetchNfts();
    }
  }, [isConnected]);

  return (
    <div className={styles.collectionpage}>
      <div className={styles.collectiontitle}>NFT Collections</div>
      {loading && <Loader />}
      {loading === false && Nfts?.length === 0 ? (
        <div className={styles.emptyNft}>
          You have no Learnweb3DAO or Buildspace Nfts. Complete a course to get
          one!
        </div>
      ) : (
        <div className={styles.nftCards}>
          {Nfts?.map((item) => (
            <NFTCard key={item.tokenId} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NftCollection;

//things to be done
//PAGE went blank
//error handling
//remove unused items
//code revamp
//verify if app is working
//push
//deploy
// - Code readability
// - Code reusability
// - UI/UX
// - Project structure
// - Approach used to perform the desired tasks
// - Alternatives that were considered and rejected for XYZ reasons

// change adrress
// empty NftCollection
// wrong network
