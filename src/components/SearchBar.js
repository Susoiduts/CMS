import { useState } from 'react';
import { createClient } from 'contentful';
import { useNavigate } from "react-router-dom";

const client = createClient({
    space: "62lmtlm7lbg7",
    accessToken: "QR3HFbCqEVnm8I_KfCCS26hgoKPvKUkO_zd2RJ3jG7Q",
  });

function SearchBar({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const res = await client.getEntries({
        'fields.title[match]': searchQuery,
        content_type: 'movie',
    });
    setSearchResults(res.items);
    console.log(res.items)
    navigate("/results");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {/* {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result, i) => (
            <li key={i}>{result.fields.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )} */}
    </>
  );
}

export default SearchBar;