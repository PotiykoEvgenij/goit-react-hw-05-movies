import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.css'

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
        <div className={styles.searchBox}>
            <input
                className={styles.searchInput}
                placeholder="Search for a movie"
                type="text"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} />
          <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    );
};

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired,
};