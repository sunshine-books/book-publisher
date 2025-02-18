import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../config/api";




function NewBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [ISBN, setISBN] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            ISBN: ISBN,
            title: title,
            author: author
        }

        axios.post(`${API_URL}/books.json`, newBook)
            .then(response => {
                navigate("/");
            })
            .catch(e => console.log("Error creating a new project...", e));
    }

    return (
        <div className="AddNewBook">
            <h3>Register New Book</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Author:
                    <input
                        type="text"
                        name="author"
                        placeholder="name of the author"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </label>

                <label>
                    ISBN:
                    <input
                        type="text"
                        name="ISBN"
                        placeholder="name of the ISBN"
                        value={ISBN}
                        onChange={(e) => { setISBN(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </div>
    )
}

export default NewBook;