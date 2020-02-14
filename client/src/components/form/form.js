import React, { useState, useCallback } from 'react';
import SearchQueryInfo from './search-query-info';
import SearchResults from './search-results';

export default function TwitterApp () {
    const [hashtags, setHashtags] = useState('');
    const [count, setCount] = useState(10);
    const [results,setResults] = useState();
    const [sortBy, setSortBy] = useState('Favorites');
    const [order, setOrder] = useState('Ascending');

    const fetchData = () => {
        let url = `/search?hashtags=${encodeURIComponent(hashtags)}&count=${count}`;
        fetch(url)
        .then(res => res.json())
        .then((myJson) => {
            setResults(myJson);
        })
        .catch((err) => console.log('error',err));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("data is : ", hashtags, count, sortBy, order);
        fetchData();
    };

    const handleChange = (event) => {
        if(event.target.name === 'sortBy')
            setSortBy(event.target.value);
        else
            setOrder(event.target.value);
    };

    return (
        <div>
            <h1>Twitter Content Lab</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter hashtags'
                    name='hashtag'
                    value={hashtags}
                    onChange={(event) => setHashtags(event.target.value)}
                />
                <input
                    type='number'
                    placeholder='Enter number of tweets'
                    name='count'
                    value={count}
                    onChange={(event => setCount(event.target.value))}
                />
                <button>Update</button>
            </form>
            <hr/>
            {hashtags && hashtags.length > 0 && <SearchQueryInfo hashtags={hashtags} />}
            <hr/>
            <div className="form-group">
                <label>Sort by</label>
                <select 
                className="sort" 
                name='sortBy'
                onChange={handleChange}
                >
                    <option value="favorites">Favorites</option>
                    <option value="retweets">Retweeted</option>
                    <option value="followers">Followers</option>
                </select>
            </div>
            <div className="form-group">
                <label>Order</label>
                <select 
                className="order" 
                name="order"
                onChange={handleChange}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            {results  && results.length > 0 && <SearchResults statuses={results} sort={sortBy} order={order}/>}
        </div>
    );
}
