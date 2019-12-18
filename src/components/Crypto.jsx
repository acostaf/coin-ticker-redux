import React from 'react';
import styled, { keyframes } from 'styled-components';

const customTicker = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1000%, 0, 0);
  }
`;

const CryptosWrapper = styled.div`
  background: #123962;
  overflow: hidden;
`;

const TickerWrap = styled.div`
  display: flex;
  overflow: hidden;
`;

const CryptoWrapper = styled.div`
  color: white;
  flex: 1 0 100px;
  animation: ${customTicker} 7s infinite;
  animation-timing-function: linear;
`;

const Currency = styled.span`
  color: #5d81a6;
`;

const Heading = styled.p`
  font-size: 12px;
`;

export const Crypto = ({ items }) => {
  return (
    <CryptosWrapper>
      <TickerWrap>
        {items &&
          items.map((crypto, index) => {
            return (
              <CryptoWrapper key={index}>
                <Heading>{crypto.symbol}/USD</Heading>
                <p>
                  {parseFloat(crypto.priceUsd)
                    .toFixed(2)
                    .toLocaleString('en-US')}{' '}
                  <Currency>USD</Currency>
                </p>
              </CryptoWrapper>
            );
          })}
      </TickerWrap>
    </CryptosWrapper>
  );
};
