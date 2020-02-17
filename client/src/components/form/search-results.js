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
                    <div key={status.id} className="results">
                        <p>{status.text}</p>
                        <hr/>
                        <p>Favourites count : {status.favourites}</p>
                        <p>Retweet count: {status.retweets}</p>
                        <p>Followers count: {status.followers}</p>
                    </div>
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