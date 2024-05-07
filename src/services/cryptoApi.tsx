const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'ba5688f021msha0d796fca062bc0p17d3c2jsn460f3f5601a9',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  