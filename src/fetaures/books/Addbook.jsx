import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";
import Popup from "../../layouts/Popup";
import { Typography, Grid, Button, Card } from "@mui/material";
import { updateBook } from "./BooksSlice";
import BackspaceIcon from '@mui/icons-material/Backspace';
import './AddBook.css'

const AddBook = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [titleE, setTitleE] = useState("");

  const [idE, setIdE] = useState("")
  const [authorE, setAuthorE] = useState("");
  const [openPopup, setOpenPopup] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [idT, setIdT] = useState();
  // const [titleT, setTitleT] = useState(location.state.title);
  // const [authorT, setAuthorT] = useState(location.state.author);
  const books = useSelector((state) => state.booksReducer.books);
  console.log("boooks lsi is ", books)
  const [editCase, setEditCase] = useState(false)
  const handleEdit = (id, author, title) => {
    console.log("title", title)
    console.log("id", id)
    setIdE(id)
    console.log("author", author)
    setEditCase(true)
    setTitleE(title)
    setAuthorE(author)



  }
  const handleEditSubmit = (e) => {

    e.preventDefault();

    console.log("titleE", titleE)
    console.log("authore", authorE)
    // const book = { id: uuidv4(), titleE, authorE };

    //dispatch(updateBook(titleE,authorE));
    dispatch(updateBook({ idE, titleE, authorE }));
    setEditCase(false)



  }
  const handleDelete = (id) => {

    setOpenPopup(true)
    setIdT(id)
    //dispatch(deleteBook(books.id));
    //  dispatch(deleteTodo(todo.id))
  }

  const areYouSure = (choise) => {

    if (choise) {
      // console.log("duspatch ", book.id)
      dispatch(deleteBook(idT));
      setOpenPopup(false)

    }
    else {
      setOpenPopup(false)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/", { replace: true });
    setTitle('')
    setAuthor("")
  };

  return (
    <div>

      {editCase ?

        <div className="form2">
          <h1 className="title">Update Details </h1>
          <form onSubmit={handleEditSubmit} className="form-edit" >
            <div className="form-field">
              <label htmlFor="title" className="update-name"> Update Age: </label>
              <input
                type="text"
                id="title"
                name="title"
                value={titleE}
                onChange={(e) => setTitleE(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="author" className="update-name"> Update Name: </label>
              <input
                type="text"
                id="author"
                name="author"
                value={authorE}
                onChange={(e) => setAuthorE(e.target.value)}
                required
              />
            </div>
            <button className="button" onClick={() => handleEditSubmit(titleE, authorE)} type="submit">Update Details</button>
          </form>
        </div>

        :
        <div className="form2">
          <h1 className="title"> Add Student</h1>
          <form onSubmit={handleSubmit}  >
            <div className="form-field">
              <label htmlFor="title" className="update-name">Name </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="author" className="update-name"> Age</label>
              <input
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <button className="button" type="submit">Add</button>
          </form>
        </div>
      }
      <h2>List</h2>


      {books &&
        books.map((book) => {
          const { id, title, author } = book;
          return (


            <div key={id} className="items-all">
              <Card classes={{background:"green"}}>
                
                
                <Grid >
                
                  <div className="items">
                    <h1 className="label-name"> {title}</h1>


                    <h1 className="label-name"> {author}</h1>

                  </div>
                </Grid>


                <Grid item xs={6} md={4}>
                 <div className="edit">
                 <Link to="/" state={{ id, title, author }}>
                    <Button  className="edit-button" onClick={() => handleEdit(id, title, author)} variant="contained">Edit</Button>
                  </Link>

                  <BackspaceIcon
                    style={{ padding: "2px", margin: "20px" }}
                    variant="outlined" color="error"

                    onClick={() => {
                      handleDelete(id);
                      console.log("id", id)


                    }

                    }
                  />
                 </div>

                </Grid>
              </Card>





              {/* <td>{id}</td> */}




            </div>
          );
        })}

      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} onDialog={areYouSure} />
    </div>
  );
};

export default AddBook;

// CRUD - > CREATE, READ,
