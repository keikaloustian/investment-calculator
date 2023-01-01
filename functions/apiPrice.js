/*
It is not necessary to require dotenv because it is already integrated into
the local Netlify dev environment / the Netlify deployment environment.
The local .env file needs to be included in the .gitignore file and the same
variables need to be defined in the Netlify Build environment variables
*/

import fetch from "node-fetch";

const countryCodes = {
  "United States": "trade/stock/",
  Canada: "stock/canada/",
  "United Kingdom": "stock/uk/",
  Russia: "stock/moex/",
  India: "stock/in/",
};

const handler = async (event) => {
  // Capture ticker and exchange from request
  const { symbol, country } = event.queryStringParameters;

  // Lookup url code for country where to which asset belongs
  const market = countryCodes[country];

  try {
    const response = await fetch(
      `${process.env.PRICE_API_ENDPOINT}${market}${symbol}?apikey=${process.env.PRICE_API_KEY}`
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
