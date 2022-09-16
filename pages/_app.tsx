import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { NftProvider } from "use-nft";
import { ethers } from "ethers";
import Layout from "../src/components/layout";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Seer App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const network = "homestead";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NftProvider
          fetcher={[
            "ethers",
            {
              provider: ethers.getDefaultProvider(network, {
                alchemy: process.env.ALCHEMY_ID,
              }),
            },
          ]}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NftProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
