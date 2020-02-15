import React, { useState } from 'react';
import SearchQueryInfo from './search-query-info';
import SearchResults from './search-results';
import './styles.css';


export default function TwitterApp () {
    const [hashtags, setHashtags] = useState('');
    const [count, setCount] = useState(5);
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
        fetchData();
    };

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
                        placeholder='Enter number of tweets'
                        name='count'
                        className="count"
                        value={count}
                        onChange={(event => setCount(event.target.value))}
                    />
                </div>
                <button className="submit">Submit</button>
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
                    onChange={handleChange}
                    >
                        <option value="favorites">Favorites</option>
                        <option value="retweets">Retweeted</option>
                        <option value="followers">Followers</option>
                    </select>
                </div>
                <div className="group">
                    <label className="order-label">Order :</label>
                    <select 
                    className="order" 
                    name="order"
                    onChange={handleChange}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
            </div>
            }
            {results  && results.length > 0 && <SearchResults statuses={results} sort={sortBy} order={order}/>}
        </div>
    );
}
