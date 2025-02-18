import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import axios from "axios";
import '../App.css'
import { Link } from "react-router";



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

    // Function to shuffle the array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // Shuffle the books array and slice the first 3 books
    const booksToShow = shuffleArray([...booksToDisplay]).slice(0, 2);


    return (
        <div className="books-list">
            {booksToShow.map((booksDetails, i) => {
                console.log(booksDetails)
                return (
                    <div className="book-card" key={booksDetails.id} >
                        <h1 className="book-title">Title {booksDetails.title}</h1>
                        <h3 className="book-author">Author: {booksDetails.author}</h3>
                        <h3>ISBN: {booksDetails.ISBN}</h3>
                        <Link to="/books/:bookId">More details</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;