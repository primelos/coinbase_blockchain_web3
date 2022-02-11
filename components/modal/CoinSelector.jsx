import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityToken,
  thirdWebTokens,
  walletAddress,
}) => {
  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
        {sanityToken.map((token, i) => (
          <CoinItem
            key={i}
            token={token}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdWebTokens={thirdWebTokens}
            sanityToken={sanityToken}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelector;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
