import React from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        onChange(form.search.value.trim());
    };

  return (
    <form onSubmit={handleSubmit}>
        <input
            name="search"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="off"
            placeholder="Search movies"
        />
        <button type="submit">Search</button>
    </form>
  );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};