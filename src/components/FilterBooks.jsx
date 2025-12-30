import { useDispatch } from "react-redux";

const FilterBooks = () => {
  const dispatch = useDispatch();
  
  const makeAllBooks = () => {

  }
  return (
    <div className="flex items-center space-x-4">
      <button className="lws-filter-btn active-filter">All</button>
      <button className="lws-filter-btn">Featured</button>
    </div>
  );
};

export default FilterBooks;
