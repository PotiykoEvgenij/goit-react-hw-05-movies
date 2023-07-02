import React from "react";
import PropTypes from "prop-types";

export const Genres = ({ genres }) => {
    return (
        <div>
            {genres.map((genre, index) => (
                <span key={index}>
                    {genre}
                </span>
            ))}
        </div>
    );
};

Genres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};