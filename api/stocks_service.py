from __future__ import annotations

from typing import Iterable, List, Dict

import yfinance as yf


def get_stock_data(tickers: Iterable[str]) -> List[Dict]:
  """
  Fetch market data for the provided tickers using Yahoo Finance.

  Each ticker is requested via yfinance.Tickers to reuse HTTP calls.
  Every record includes price, previous close, change, change pct, currency,
  plus indicative bid/ask values when Yahoo provides them.
  """
  sanitized = [symbol.strip().upper() for symbol in tickers if symbol.strip()]
  if not sanitized:
    return []

  tickers_bundle = yf.Tickers(" ".join(sanitized))
  results: List[Dict] = []

  for symbol in sanitized:
    ticker = tickers_bundle.tickers.get(symbol)
    if not ticker:
      results.append({"symbol": symbol, "error": "Symbol not found"})
      continue

    try:
      fast_info = ticker.fast_info
      price = float(getattr(fast_info, "last_price", None) or fast_info.get("last_price"))  # type: ignore[arg-type]
      prev_close = float(
        getattr(fast_info, "previous_close", None) or fast_info.get("previous_close")  # type: ignore[arg-type]
      )
      bid_raw = getattr(fast_info, "bid", None)
      if bid_raw is None:
        bid_raw = fast_info.get("bid")
      bid = float(bid_raw) if bid_raw is not None else None

      ask_raw = getattr(fast_info, "ask", None)
      if ask_raw is None:
        ask_raw = fast_info.get("ask")
      ask = float(ask_raw) if ask_raw is not None else None

      change = price - prev_close if (price is not None and prev_close is not None) else None
      change_pct = (change / prev_close * 100) if change is not None and prev_close else None

      results.append(
        {
          "symbol": symbol,
          "price": round(price, 2) if price is not None else None,
          "prev_close": round(prev_close, 2) if prev_close is not None else None,
          "change": round(change, 2) if change is not None else None,
          "change_pct": round(change_pct, 2) if change_pct is not None else None,
          "currency": getattr(fast_info, "currency", None) or fast_info.get("currency", "USD"),
          "bid": round(bid, 2) if bid is not None else None,
          "ask": round(ask, 2) if ask is not None else None,
        }
      )
    except Exception as exc:  # noqa: BLE001
      results.append({"symbol": symbol, "error": str(exc)})

  return results
