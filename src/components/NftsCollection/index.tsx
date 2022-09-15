import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";
import { useEffect } from "react";

import styles from "./nftcollection.module.scss";

const config = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const NftCollection = () => {
const { isConnected, address } = useAccount();

const fetchNfts = async () => {
const userAddress: string = "0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1";

const nfts = await alchemy.nft.getNftsForOwner(userAddress);

const nftItems = nfts["ownedNfts"];
    console.log(nftItems);
    
  };

  useEffect(() => {
    if (isConnected) { fetchNfts() }
  }, [isConnected]);

  return (<div className={styles.collectionpage}>

  </div>);
};

export default NftCollection;
