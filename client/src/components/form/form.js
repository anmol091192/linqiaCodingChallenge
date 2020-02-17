import React, { useState } from 'react';
import SearchQueryInfo from './search-query-info';
import SearchResults from './search-results';
import './styles.css';


export default function TwitterApp () {
    const [hashtags, setHashtags] = useState('');
    const [count, setCount] = useState(5);
    const [results,setResults] = useState();
    const [sortBy, setSortBy] = useState('favourites');
    const [order, setOrder] = useState('asc');

    const fetchData = () => {
        let hashs = encodeURIComponent(hashtags.trim());
        let url = `/search?hashtags=${hashs}&count=${count}`;
        fetch(url)
        .then(res => res.json())
        .then((myJson) => {
            setResults(myJson);
        })
        .catch((err) => console.log('error',err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    const resetValue = () => {
        setHashtags('');
        setCount(5);
        setResults();
        setSortBy('favourites');
        setOrder('asc');
    }

    const handleChange = (event) => {
        if(event.target.name === 'sortBy')
            setSortBy(event.target.value);
        else
            setOrder(event.target.value);
    };

    return (
        <div className="container">
            <h2>Twitter Content Lab</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="search-group">
                    <label className="search-label">Search :</label>
                    <input
                        type='text'
                        placeholder='Enter hashtags Eg. #hashtag1 #hashtag2'
                        name='hashtags'
                        className="hashtags"
                        value={hashtags}
                        required
                        onChange={(event) => setHashtags(event.target.value)}
                    />
                </div>
                <div className="count-group">
                    <label className="count-label">Count :</label>
                    <input
                        type='number'
                        placeholder='Enter number of tweets(1 - 100)'
                        name='count'
                        className="count"
                        value={count}
                        min="1" 
                        max="100"
                        onChange={(event => setCount(event.target.value))}
                    />
                </div>
                <button className="submit">Submit</button>
                <button className="submit" type="button" onClick={() => resetValue()}>Reset</button>
            </form>
            {hashtags && hashtags.length > 0 && <SearchQueryInfo hashtags={hashtags} />}
            {results && results.length > 0 &&
            <div>
            <h3>Tweets</h3>
            <div className="sort-container">
                <div className="group">
                    <label className="sort-label">Sort by :</label>
                    <select 
                    className="sort" 
                    name='sortBy'
                    defaultValue="favourites"
                    onChange={handleChange}
                    >
                        <option value="favourites">Favourites</option>
                        <option value="retweets">Retweeted</option>
                        <option value="followers">Followers</option>
                    </select>
                </div>
                <div className="group">
                    <label className="order-label">Order :</label>
                    <select 
                    className="order" 
                    name="order"
                    defaultValue="asc"
                    onChange={handleChange}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            </div>
            }
            {results  && results.length > 0 ? <SearchResults statuses={results} sort={sortBy} order={order}/> : <span>No results available</span>}
        </div>
    );
}
