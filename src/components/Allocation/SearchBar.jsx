import { useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar({ assets, setAssets }) {
  const [error, setError] = useState(false);

  const handleChange = (selectedAssets) => {
    // AsyncSelect component provides argument
    // which can be set as new state directly
    setAssets(selectedAssets);
  };

  const promiseOptions = async (inputValue) => {
    setError("");
    // Function must return a promise that resolves to an array of objects
    try {
      const response = await fetch(
        `/.netlify/functions/apiSearch?symbol=${inputValue}`
      );
      // If response isn't ok, throw Error to be caught
      if (!response.ok) {
        throw new Error(
          `There's been an error (${response.status} - ${response.statusText})`
        );
      }
      // If response is ok, parse body
      const parsed = await response.json();
      // Map parsed data into object in format required by the AsyncSelect component
      return parsed.data.map((asset) => ({
        value: asset,
        label: `${asset.symbol}  ${asset["instrument_name"]}  ${asset.exchange}`,
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
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
