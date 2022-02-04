import "../styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportChainId = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportChainId={supportChainId}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
