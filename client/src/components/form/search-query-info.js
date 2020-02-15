import React from 'react';
import './styles.css';

const SearchQueryInfo = (
    {hashtags},
) => {
    const renderHashtag = (hashtags) => {
        const hashtagValue = hashtags ? hashtags.split(' ') : [];
        return (
            <>
                {hashtagValue.map((hashtag) => hashtag.length > 0
                    ? <div className="hashtag">{hashtag}</div>
                    : null
                )}
            </>
        );
    };

    return (
        <div className="search-query">
            <h4>
                Hashtags are:
            </h4>
            <div className="hashtags-wrapper">
                {renderHashtag(hashtags)}
            </div>
        </div>
    );
}

export default SearchQueryInfo;