import { useState } from "react";
import AsyncSelect from "react-select/async";
import "./SearchBar.scss";

export default function SearchBar({ assets, setAssets }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const [error, setError] = useState("");

  // const handleChange = (selectedAssets) => {
  //   // The argument is provided by the AsyncSelect component
  //   // which can be set as the new state directly
  //   setAssets(selectedAssets);
  // };

  // Function responsible for fetching the results for the search bar
  const useApiSearch = async (inputValue) => {
    setError("");

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
      setResults(parsed.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="search-error">{error}</p>}

      <input
        type="text"
        name="searchbar"
        className="searchbar"
        placeholder={"Search assets"}
        value={query}
        onInput={(event) => {
          if (!displayResults) {
            setDisplayResults(true);
          }
          setQuery(event.target.value);
          useApiSearch(event.target.value);
        }}
        autoFocus
        onFocus={() => {
          if (query) {
            setDisplayResults(true);
          }
        }}
        onBlur={() => setDisplayResults(false)}
      />

      {displayResults && query && (
        <div className="results-wrapper">
          <ul className="results-list">
            {results.map((asset, index) => (
              <li key={index}>{asset.symbol}</li>
            ))}
          </ul>
        </div>
      )}

      {/* <AsyncSelect
        className="searchbar"
        placeholder={"Search assets"}
        value={assets}
        onChange={handleChange}
        loadOptions={promiseOptions}
        openMenuOnClick={false}
        isMulti
        isClearable
        noOptionsMessage={() => "No assets found"}
        unstyled
        classNamePrefix={"searchbar"}
        autoFocus
      /> */}
    </>
  );
}
