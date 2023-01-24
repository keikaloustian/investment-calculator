import { useEffect } from "react";

export default function useTickerTape() {
  useEffect(() => {
    finageTickerTape.symbols([
      "cadusd:forex",
      "SHOP:stock",
      "TD:stock",
      // BMO price showing as 0 -Infinity %
      // "BMO:stock",
      "AAPL:stock",
      "MSFT:stock",
      "GOOGL:stock",
      "btcusd:crypto",
    ]);

    finageTickerTape.colors(["", ""]); //background color, text color
    finageTickerTape.theme(["dark-night"]); //pearl-white, midnight, dark-night

    finageTickerTape.initWidget();
  }, []);
}

// "GSPC:index",
// "DJI:index",
// "IXIC:index",
// "GSPTSE:index",
// "RY:stock",
// "LLL:stock",
// "T:stock",
// "L:stock",
