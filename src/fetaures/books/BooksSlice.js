const { createSlice } = require("@reduxjs/toolkit");
const { v4: uuidv4 } = require("uuid");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "John", author: "21" },
    { id: uuidv4(), title: "Josh", author: "31" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    //add book reducer
    addBook: (state, action) => {
      console.log("action of add",action)
      console.log("state of add",state)

      state.books.push(action.payload);
    },
    //update book reducer
    updateBook: (state, action) => {
      const { idE, titleE, authorE } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === idE);
      if (isBookExist) {
        isBookExist[0].title = titleE;
        isBookExist[0].author = authorE;
      }
    },
    //delete reducer
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const {  addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
