import { useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar({ assets, setAssets }) {
  const [error, setError] = useState(false);

  const handleChange = (selectedAssets) => {
    // AsyncSelect component provides argument
    // which can be set as new state directly
    setAssets(selectedAssets);
  };

  const promiseOptions = (inputValue) => {
    // Function must return a promise that resolves to an array of objects
    return fetch(`/.netlify/functions/apiSearch?symbol=${inputValue}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((parsed) => {
        console.log(parsed);
        // Map data into object in format required by the AsyncSelect component
        return parsed.data.map((asset) => ({
          value: asset,
          label: `${asset.symbol}  ${asset["instrument_name"]}  ${asset.exchange}`,
        }));
      })
      .catch((error) => {
        setError(true);
      });
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
