import { useGetBooksQuery } from "../features/api/apiSlice";
import SingleBook from "./SingleBook";

const BookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>Error occur when getting books</h1>;
  }

  if (!isLoading && !isError && books.length === 0) {
    content = <h1>No books</h1>;
  }

  if (!isLoading && !isError && books.length !== 0) {
    content = (
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <SingleBook book={book} key={book.id} />
        ))}
      </div>
    );
  }
  return content;
};

export default BookList;
