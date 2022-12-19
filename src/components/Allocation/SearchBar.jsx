import { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar({ assets, setAssets }) {
  const handleChange = (selectedAssets) => {
    // AsyncSelect component provides argument
    // which can be set as new state directly
    setAssets(selectedAssets);
  };

  const promiseOptions = (inputValue) => {
    return fetch(`https://api.publicapis.org/entries?title=${inputValue}`)
      .then((response) => response.json())
      .then((data) =>
        data.entries.map((e) => ({
          value: e,
          label: e.API,
        }))
      );
  };

  return (
    <>
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
