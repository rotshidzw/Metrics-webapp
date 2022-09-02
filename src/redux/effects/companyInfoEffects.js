const companyInfoEffectCleanData = ({ payload }) => payload.map((company) => ({
  image: company.image,
  companyName: company.companyName,
  ceo: company.ceo,
  address: company.address,
  zip: company.zip,
  symbol: company.symbol,
  currency: company.currency,
  StockPrice: company.price,
  changes: company.changes,
  description: company.description,
  website: company.website,
}));

export default companyInfoEffectCleanData;
