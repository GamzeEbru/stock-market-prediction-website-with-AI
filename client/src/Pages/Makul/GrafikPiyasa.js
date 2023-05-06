import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({symbol}) {
  const onLoadScriptRef = useRef();


  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_05157') && 'TradingView' in window) {
          new window.TradingView.widget({
            width: 1300,
            height: 610,
            symbol: "FX:" +symbol,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "2",
            locale: "tr",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: true,
            withdateranges: true,
            allow_symbol_change: true,
            container_id: "tradingview_05157"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_05157' />
      <div className=" h-full tradingview-widget-copyright">
        <a href="https://tr.tradingview.com/symbols/BIST-THYAO/" rel="noopener" target="_blank"><span className="blue-text"> THYAO </span></a> Borsa Endeksi için <a href="https://tr.tradingview.com" rel="noopener" target="_blank"><span className="blue-text">TradingView</span></a>
      </div>
    </div>
  );
}
