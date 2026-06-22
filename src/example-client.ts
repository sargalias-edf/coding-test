import { BookSearchApiClient } from "./BookSearchApiClient";

const client = new BookSearchApiClient();

try {
  // There's no real API behind this URL, so a live run will throw — that's
  // expected. It's here to show how the client is used.
  const books = await client.getBooksByAuthor("Shakespeare", 10);
  console.log(books);
} catch (error) {
  console.log(error);
}
