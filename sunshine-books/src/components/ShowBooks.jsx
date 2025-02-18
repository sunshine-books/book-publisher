import { Link } from "react-router";



function ShowBooks(props) {

    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Array without the latest book in the array
    const booksWithoutLatest =[...props.arrOfBooks].slice(0, -1);

    // Shuffle the books array and slice the first 2 books
    const booksToShow = shuffleArray([...booksWithoutLatest]).slice(0, 2);
    
    return(
        <div className="books-list">
            {booksToShow.map((booksDetails) => {
                console.log(booksDetails)
                return (
                    <div className="card" key={booksDetails.id} >
                        <h1>Title {booksDetails.title}</h1>
                        <img src={booksDetails["cover-img"]} alt={booksDetails.title} />
                        <Link to="/books/:bookId">More details</Link>
                        {/* <Link to={`/books/${booksDetails.id}`}>More details</Link> */}
                    </div>
                );
            })}
        </div>
    )
}

export default ShowBooks