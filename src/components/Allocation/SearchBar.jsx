import { useState, useRef } from "react";
import AsyncSelect from "react-select/async";
import "./SearchBar.scss";
import OnClickOutside from "../../hooks/onClickOutside";

export default function SearchBar({ assets, setAssets }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const [error, setError] = useState("");

  // Reference to the searchbar for programatic focusing and blurring
  const searchbarRef = useRef(null);

  const resultSelectHandler = (asset) => {
    const newAssets = [...assets, asset];
    setAssets(newAssets);
    setResults([]);
    setQuery("");
    searchbarRef.current.focus();
  };

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

      <OnClickOutside
        callback={() => {
          searchbarRef.current.blur();
          setDisplayResults(false);
          // console.log("callback");
        }}
      >
        <input
          type="text"
          name="searchbar"
          className="searchbar"
          placeholder={"Search assets"}
          value={query}
          ref={searchbarRef}
          autoFocus
          onInput={(event) => {
            if (!displayResults) {
              setDisplayResults(true);
            }
            setQuery(event.target.value);
            useApiSearch(event.target.value);
          }}
          onFocus={() => {
            if (query) {
              setDisplayResults(true);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              searchbarRef.current.blur();
              setDisplayResults(false);
            }
          }}
          // onBlur={() => setDisplayResults(false)}
        />
      </OnClickOutside>

      {displayResults && query && (
        <div className="results-wrapper">
          <ul className="results-list">
            {results.map((asset, index) => (
              <li
                className="results-list__result"
                key={index}
                tabIndex={0}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  resultSelectHandler(asset);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    resultSelectHandler(asset);
                  }
                }}
              >
                <b className="result__symbol">{asset.symbol}</b>
                <span className="result__instrument">
                  {asset.instrument_name}
                </span>
                <p className="result__exchange">{`(${asset.exchange})`}</p>
              </li>
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
