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
                    <div className="">{status.text}</div>
                )}
            </>
        );
    };

    return (
        <>
            <div>
                Result is:
            </div>
            <div className="hashtagsWrapper">
                {renderResults(statuses)}
            </div>
        </>
    );
}

export default SearchResults;