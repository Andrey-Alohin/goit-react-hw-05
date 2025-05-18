import toast from "react-hot-toast";
import css from "./SearchForm.module.css";

function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();
    if (searchQuery === "") {
      toast.error("This field cannot be empty. Please enter a movie title.", {
        duration: 1000,
      });
      return;
    }
    onSubmit(searchQuery);
  };
  return (
    <div className={css.formContainer}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="search"
          placeholder="Enter the movie title you want to find..."
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
