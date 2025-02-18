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

    //items-center md:items-start w-full md:w-auto text-center md:text-left
    return (
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 p-2 md:p-4">
            {/* Show the latest book */}
            <div className="latest-book"
                style={{ backgroundImage: `url(${latestBook["cover-img"]})` }}>
                <div className="text-center flex flex-col w-xl bg-orange-500 gap-2 p-4 block ">
                    <h1 className="text-4xl text-white font-bold">New in the collection</h1>
                    <h3 className=" text-white font-bold">{latestBook.title}</h3>
                    <p className="text-white">by {latestBook.author}</p>
                    <Link
                        className="btn-green hover:bg-green-800"
                        to={`/books/${latestBook.id}`}>
                        More details
                    </Link>
                </div>

            </div>

            {/* Show the rest of the books */}
            <div className="flex flex-col content-between p-8 gap-8">
                <div className="flex flex-col p-4 h-48 justify-center text-center text-2xl font-bold gap-8 rounded shadow-xl">
                    Do you want to add a new book to our collection?
                    <Link to="/NewBook" className="btn-orange">Register a Book</Link>
                </div>
                <ShowBooks arrOfBooks={booksToDisplay} latestBook={latestBook} />
            </div>
        </div>


    );
}

export default Home;