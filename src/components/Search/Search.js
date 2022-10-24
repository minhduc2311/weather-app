import React from "react";
import { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions } from "../../utils/api";
import axios from "axios";

import "./Search.css";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "90%",
    margin: "auto",
    borderRadius: "24px",
    
  }),
}

function Search({ onSearchChange }) {
  const [search, setSearch] = useState();

  const loadOptions = (inputValue) => {
    return axios
      .request(geoApiOptions(inputValue))
      .then((response) => {
        console.log(response);
        return {
          options: response.data.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        styles={customStyles}
        loadOptions={loadOptions}
        
      />
    </div>
  );
}

export default Search;
