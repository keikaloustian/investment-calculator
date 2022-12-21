import { useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar({ assets, setAssets }) {
  const [error, setError] = useState(false);

  const handleChange = (selectedAssets) => {
    // AsyncSelect component provides argument
    // which can be set as new state directly
    setAssets(selectedAssets);
    console.log(selectedAssets);
  };

  const promiseOptions = (inputValue) => {
    // Function must return an array of objects formatted for the AsyncSelect
    // component to display the options
    return (
      fetch(`${import.meta.env.VITE_API_SEARCH_ROUTE}?symbol=${inputValue}`, {
        headers: { Authorization: `apikey ${import.meta.env.VITE_API_KEY}` },
      })
        // Necessary step to parse response
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((parsed) => {
          // console.log(parsed);
          // Map data into object
          return parsed.data.map((asset) => ({
            value: asset,
            label: `${asset.symbol}  ${asset["instrument_name"]}  ${asset.exchange}`,
            key: asset.symbol,
          }));
        })
        .catch((error) => {
          setError(true);
        })
    );
  };

  return (
    <>
      {error && <p>There's been an error</p>}
      <AsyncSelect
        placeholder={"Search assets..."}
        value={assets}
        onChange={handleChange}
        loadOptions={promiseOptions}
        openMenuOnClick={false}
        isMulti
        isClearable
      />
    </>
  );
}
