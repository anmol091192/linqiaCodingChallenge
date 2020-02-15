import React from 'react';
import './styles.css';
var _ = require('lodash');


const SearchResults = (
    {statuses,
    sort,
    order}    
) => {
    const renderResults = (statuses) => {
        let sorted = _.orderBy(statuses,[sort],[order]);
        return (
            <>
                {sorted.map((status) => 
                    <div className="results">{status.text}</div>
                )}
            </>
        );
    };

    return (
        <div className="search-results">
            {renderResults(statuses)}
        </div>   
    );
}

export default SearchResults;