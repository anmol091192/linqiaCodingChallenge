import React from 'react';
import './style.css';
var _ = require('lodash');


const SearchResults = (
    {statuses,
    sort,
    order}    
) => {
    console.log("statuses----",statuses,sort,order);
    const renderResults = (statuses) => {
        let sorted = _.orderBy(statuses,[sort],[order]);
        console.log("sorted",sorted);
        return (
            <>
                {sorted.map((status) => 
                    <div className="results">{status.text}</div>
                )}
            </>
        );
    };

    return (
        <div>
            <h3>Tweets :</h3>
            <div className="searchResults">
                {renderResults(statuses)}
            </div>
        </div>
    );
}

export default SearchResults;