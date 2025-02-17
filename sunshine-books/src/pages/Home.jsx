import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import axios from "axios";



function Home() {


    const [booksToDisplay, setBooksToDisplay] = useState(null);



 
    

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

    if (booksToDisplay === null) {
        return (
            <h2>loading</h2>
        )
    }


    return (
        <div className="books-list">
            
            {booksToDisplay.map((booksDetails, i) => {
                console.log(booksDetails)
                return (
                    <div className="card" key={booksDetails.id} >
                        <h1>Title {booksDetails.title}</h1>
                        <h3>Author: {booksDetails.author}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;