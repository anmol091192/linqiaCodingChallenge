import React from 'react';
import './style.css';

const SearchQueryInfo = (
    {hashtags},
) => {
    const renderHashtag = (hashtags) => {
        console.log(' input hastags ', hashtags);
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
        <div className="searchQuery">
            <h3>
                Hashtags are:
            </h3>
            <div className="hashtagsWrapper">
                {renderHashtag(hashtags)}
            </div>
        </div>
    );
}

export default SearchQueryInfo;