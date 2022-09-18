import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import NftCollection from "../src/components/NftsCollection";

const CollectionPage = () => {
  const { isConnected} = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);

  return (
    <div>
      <NftCollection />
    </div>
  );
};

export default CollectionPage;
