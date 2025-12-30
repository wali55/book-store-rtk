import { useDispatch, useSelector } from "react-redux";
import { showFeatured } from "../features/booksSlice";

const FilterBooks = () => {
  const dispatch = useDispatch();
  const {isFeatured} = useSelector((state) => state.books);

  let allClass;
  if (isFeatured) {
    allClass = "lws-filter-btn"
  } else {
    allClass = "lws-filter-btn active-filter"
  }

  let featuredClass;
  if (isFeatured) {
    featuredClass = "lws-filter-btn active-filter"
  } else {
    featuredClass = "lws-filter-btn"
  }
  
  const makeAllBooks = () => {
    dispatch(showFeatured(false));
  }

  const makeFeaturedBooks = () => {
    dispatch(showFeatured(true));
  }


  return (
    <div className="flex items-center space-x-4">
      <button onClick={makeAllBooks} className={allClass}>All</button>
      <button onClick={makeFeaturedBooks} className={featuredClass}>Featured</button>
    </div>
  );
};

export default FilterBooks;
