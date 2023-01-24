import { useEffect } from "react";

export default function useTickerTape() {
  useEffect(() => {
    finageTickerTape.symbols(["btcusd:crypto", "eurusd:forex"]);
    finageTickerTape.colors(["", ""]);
    finageTickerTape.theme(["dark-night"]);
    finageTickerTape.initWidget();
  }, []);
}
