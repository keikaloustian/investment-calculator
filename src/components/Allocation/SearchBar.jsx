import { useState, useRef } from "react";
import "./SearchBar.scss";
import OnClickOutside from "../../hooks/onClickOutside";

export default function SearchBar({ assets, setAssets }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const [error, setError] = useState("");

  // Reference to the searchbar for programatic focusing and blurring
  const searchbarRef = useRef(null);

  // Handler function for when an asset in the results dropdown is selected by way of clicking or Tab navigation followed by Enter
  const resultSelectHandler = (asset) => {
    // Assemble new array of assets to be invested in and set state
    const newAssets = [...assets, asset];
    setAssets(newAssets);

    // Reset the search results and the query for next search
    setResults([]);
    setQuery("");

    // Re-focus the searchbar using the ref
    searchbarRef.current.focus();
  };

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

      {/* OnClickOutside is a component that listens for clicks outside of its DOM subtree and fires the callback passed as prop when it occurs */}
      {/* Necessary because using onBlur on the searchbar conflicted with the Tab press to navigate to the search results */}
      <OnClickOutside
        callback={() => {
          searchbarRef.current.blur();
          setDisplayResults(false);
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
            // Potential feature to show 'Loading...' in dropdown list while results are being fetched
            // if (!results.length) {
            //   set a loading state to true, conditionally render text atop of dropdown list
            // }
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
        />
      </OnClickOutside>

      {/* Conditionally render dropdown list of results when searchbar is focused and there's a query string*/}
      {displayResults && query && (
        <div className="results-wrapper">
          <ul className="results-list">
            {results.map((asset, index) => (
              <li
                className="results-list__result"
                key={index}
                tabIndex={0}
                // The event below prevents the searchbar from blurring which would unmount the results dropdown list and prevent the selected from being added to AssetList
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
    </>
  );
}
