from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from stocks_service import get_stock_data


app = FastAPI(title="Invercenter Stocks API")

# Allow any origin so the React frontend can call us locally or in prod.
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_methods=["*"],
  allow_headers=["*"],
  allow_credentials=True,
)


@app.get("/")
async def healthcheck():
  """Simple probe endpoint."""
  return {"status": "stocks API running"}


@app.get("/stocks")
def stocks(symbols: str | None = None):
  default_symbols = ["AAPL", "MSFT", "TSLA", "AMZN", "SPY", "QQQ", "NVDA", "NKE", "BABA"]
  tickers = symbols.split(",") if symbols else default_symbols
  return get_stock_data(tickers)
