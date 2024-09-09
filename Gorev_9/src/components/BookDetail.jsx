import PropTypes from 'prop-types';

const BookDetail = ({ title, author, publishYear, publisher }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Published Year:</strong> {publishYear}</p>
            <p><strong>Publisher:</strong> {publisher}</p>
        </div>
    );
};

BookDetail.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishYear: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    publisher: PropTypes.string.isRequired
};

export default BookDetail;
