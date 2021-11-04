import { Tr, Td } from "@chakra-ui/table";
import { Image } from "@chakra-ui/image";
import React from "react";

const Coin = ({ coin }) => {
  return (
    <>
      <Tr>
        <Td d="flex" alignItems="center" fontWeight="700">
          <Image src={coin.image} maxH="30px" m="0" pr="5px" />
          {coin.name}
        </Td>
        <Td isNumeric>${coin.current_price.toLocaleString()}</Td>
        <Td isNumeric>
          $
          {coin.price_change_percentage_1h_in_currency
            .toFixed(2)
            .toLocaleString()}
        </Td>
        <Td isNumeric>
          {coin.price_change_percentage_24h.toFixed(1).toLocaleString()}%
        </Td>
        <Td isNumeric>${coin.market_cap.toLocaleString()}</Td>
      </Tr>
    </>
  );
};

export default Coin;