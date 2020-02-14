import React from 'react';
import './style.css';

const SearchQueryInfo = (
    {hashtags},
) => {
    const renderHashtag = (hashtags) => {
        console.log(' input hastags ', hashtags);
        const hashtagValue = hashtags ? hashtags.split(',') : [];
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
        <>
            <div>
                Hashtags are:
            </div>
            <div className="hashtagsWrapper">
                {renderHashtag(hashtags)}
            </div>
        </>
    );
}

export default SearchQueryInfo;