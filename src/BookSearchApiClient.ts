// Legacy code in need of a refactor. Treat the structure here as a starting
// point, not a template — change whatever you like.
export class BookSearchApiClient {
  async getBooksByAuthor(authorName: string, limit: number): Promise<any[]> {
    const result: any[] = [];

    const response = await fetch(
      "http://api.book-seller-example.com/by-author?q=" +
        authorName +
        "&limit=" +
        limit
    );

    if (response.status === 200) {
      const json = (await response.json()) as any[];
      for (let i = 0; i < json.length; i++) {
        result.push({
          title: json[i].book.title,
          author: json[i].book.author,
          isbn: json[i].book.isbn,
          quantity: json[i].stock.quantity,
          price: json[i].stock.price,
        });
      }
      return result;
    } else {
      throw new Error("Request failed. Returned status of " + response.status);
    }
  }
}
