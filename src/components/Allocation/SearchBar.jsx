import { useState } from "react";
import AsyncSelect from "react-select/async";

export default function SearchBar() {
  const promiseOptions = (inputValue) => {
    return fetch(`https://api.publicapis.org/entries?title=${inputValue}`)
      .then((response) => response.json())
      .then((data) => data);
  };

  return (
    <AsyncSelect
      placeholder={"Search asset"}
      loadOptions={promiseOptions}
      isClearable
    />
  );
}
