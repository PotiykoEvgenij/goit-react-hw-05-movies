import React, { useState }  from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        };
    };

    const handleSearch = () => {
      onSearch(query);
    }; 

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} />
          <button onClick={handleSearch}>Search</button>
        </div>
    );
};

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
};