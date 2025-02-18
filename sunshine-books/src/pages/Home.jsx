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
    const booksToShow = shuffleArray([...booksToDisplay]).slice(0, 4);


    return (
        <div className="books-list">
            {booksToShow.map((booksDetails, i) => {
                console.log(booksDetails)
                return (
                    <div className="book-card " key={booksDetails.id} >
                        <div
                            className="w-64 h-64 bg-cover bg-center rounded-lg"
                            // style={{ backgroundImage: `url(${booksDetails.coverImg})` }} // need to be change as is in cover-img
                            style={{ backgroundImage: `url(https://edit.org/img/blog/yrm-1024-plantillas-ebook-gratis-editables-online.webp)` }}> // need to be change as is in cover-img
                        <div>
                            New in the collection
                        </div>
                        </div>
                        <div className="flex flex-col gap-2">
                        <h1 className="book-title">{booksDetails.title}</h1>
                        <h3 className="book-author">{booksDetails.author}</h3>
                        <h3>ISBN: {booksDetails.ISBN}</h3>
                        <Link to="/books/:bookId" className="bg-green-600 text-white text-center block hover:bg-green-700 px-3 py-2 rounded transition">More details</Link>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default Home;