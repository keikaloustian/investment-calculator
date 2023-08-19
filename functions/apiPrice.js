/*
It is not necessary to require dotenv because it is already integrated into
the local Netlify dev environment and the Netlify deployment environment.
The local .env file needs to be included in the .gitignore file and the same
variables need to be defined in the Netlify Build environment variables
*/

import fetch from "node-fetch";

// Include markets available from Finage's free API tier
const countryCodes = {
  "United States": "trade/stock/",
  Canada: "stock/canada/",
  "United Kingdom": "stock/uk/",
  Russia: "stock/moex/",
  India: "stock/in/",
};

const handler = async (event) => {
  let endpoint = "https://api.finage.co.uk/last/";

  // Capture ticker and exchange from request
  const { symbol, country, instrumentType } = event.queryStringParameters;

  // Lookup url code for country to which asset belongs
  const market = countryCodes[country];

  if (!market && instrumentType !== "ETF") {
    return { statusCode: 200, body: JSON.stringify({ price: "unavailable" }) };
  }

  // Assemble different request url depending on whether instrument is an ETF or not
  if (instrumentType === "ETF") {
    endpoint += `etf/${symbol}`;
  } else {
    endpoint += `${market}${symbol}`;
  }

  try {
    const response = await fetch(
      `${endpoint}?apikey=${process.env.PRICE_API_KEY}`
    );

    // If response status is not ok, send status text as response body
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify(response.statusText),
      };
    }

    // The response object from fetch() is a representation of the entire HTTP response
    // the JSON body content must be extracted using the .json() method
    const parsed = await response.json();

    // Return object containing status code and body (recommended by Netlify's Functions Docs)
    return { statusCode: 200, body: JSON.stringify(parsed) };

    // If fetch promise rejects (network failure/request did not complete), send message as response body
  } catch (error) {
    // Output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error.message),
    };
  }
};

module.exports = { handler };
