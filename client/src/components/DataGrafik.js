// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "FX:USDTRY|ALL"
            ],
            [
              "FX:EURTRY|ALL"
            ],
            [
              "BIST:XU100|ALL"
            ]
          ],
          "chartOnly": false,
          "width": "1300",
          "height": 500,
          "locale": "tr",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://tr.tradingview.com/symbols/USDTRY/?exchange=FX" rel="noopener" target="_blank"><span className="blue-text">USD TRY fiyat</span></a> TradingView tarafından</div>
    </div>
  );
}

export default memo(TradingViewWidget);
