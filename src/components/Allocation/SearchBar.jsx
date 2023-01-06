import { useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar({ assets, setAssets }) {
  const [error, setError] = useState(false);

  const handleChange = (selectedAssets) => {
    // The argument is provided by the AsyncSelect component
    // which can be set as the new state directly
    setAssets(selectedAssets);
  };

  // Function responsible for fetching the options for the search bar
  // Receives the inputValue arg from the AsyncSelect component
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
          `Unable to retrieve assets (status ${response.status} - ${response.statusText})`
        );
      }
      // If response is ok, parse body
      const parsed = await response.json();
      // Map parsed data into object in format required by the AsyncSelect component
      // If an asset is selected more than once, it raises the unique id warning
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
      <AsyncSelect
        placeholder={"Search assets"}
        value={assets}
        onChange={handleChange}
        loadOptions={promiseOptions}
        openMenuOnClick={false}
        isMulti
        isClearable
        noOptionsMessage={() => "No assets found"}
        unstyled
      />
      {error && <p>{error}</p>}
    </>
  );
}
