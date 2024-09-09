import { useState, useEffect } from 'react';
import BookDetail from './BookDetail.jsx';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const fetchBooks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&page=${page}`);
            const data = await response.json();
            setBooks(data.docs);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching books:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            fetchBooks();
        }
    }, [page]);

    const handleSearch = () => {
        setPage(1);
        fetchBooks();
    };

    return (
        <div>
            <h1>Book List</h1>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for books..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book.key}>
                            <BookDetail 
                                title={book.title} 
                                author={book.author_name ? book.author_name.join(', ') : 'Unknown'} 
                                publishYear={book.first_publish_year || 'Unknown'}
                                publisher={book.publisher ? book.publisher.join(', ') : 'Unknown'}
                            />
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={page === 1}>
                    Previous Page
                </button>
                <span>Page {page}</span>
                <button onClick={() => setPage((prevPage) => prevPage + 1)}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default BookList;
