const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/gDfvXSJg3RxHluKO3q8X';

const getAllBooksApi = async () => {
  const data = await fetch(`${API_URL}/books`);
  const dataResponse = await data.json();
  return dataResponse;
};

export default getAllBooksApi;
