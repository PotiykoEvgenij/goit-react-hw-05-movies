import React from "react";

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