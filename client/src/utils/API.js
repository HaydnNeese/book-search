import axios from "axios";

export default {
  getSavedBooks: function () {
    return axios("/api/books");
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function (id) {
    return axios.delete("api/books/" + id)
  }
};