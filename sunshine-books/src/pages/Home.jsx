import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import axios from "axios";
import '../App.css'
import { Link } from "react-router";
import ShowBooks from "../components/ShowBooks";



function Home() {


    const [booksToDisplay, setBooksToDisplay] = useState(null);


    //Getting the data from the API and convert to array
 
    

    useEffect(() => {
        axios.get(`${API_URL}/books.json`)
            .then(response => {
                const booksObj = response.data;
                const booksArr = Object.keys(booksObj).map((id) => ({
                    id,
                    ...booksObj[id]
                }))
                setBooksToDisplay(booksArr);
                console.log(booksArr)
            })
            .catch(e => console.log("Error getting books from the API...", e));
    }, []);


    //loading items 
    if (booksToDisplay === null) {
        return (
            <h2>loading</h2>
        )
    }

    // Get the latest book (last item in the array)
    const latestBook = booksToDisplay[booksToDisplay.length - 1];
    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Shuffle the books array and slice the first 3 books
    const booksToShow = shuffleArray([...booksToDisplay]).slice(0, 4);


    return (
        <div className="latest-book">
            {/* Show the latest book */}
            <h2>Latest Book:</h2>
            <div>
                <h3>{latestBook.title}</h3>
                <p>Author: {latestBook.author}</p>
                <img src={latestBook["cover-img"]} alt={latestBook.title} />
                <Link to={`/books/${latestBook.id}`}>More details</Link>
            </div>

            {/* Show the rest of the books */}
            <ShowBooks arrOfBooks={booksToDisplay} latestBook={latestBook}/>
        </div>
        
    );
}

export default Home;