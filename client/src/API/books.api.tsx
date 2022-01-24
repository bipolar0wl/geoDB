import { $host, $authHost } from "./index";

export const addBook = async (body: object) => {
  const response = await $authHost.post("books", body);
  return response;
};

export const updateBook = async (id: number, body: object) => {
  const response = await $authHost.post(`books/${id}`, body);
  return response;
};

export const fetchBooks = async () => {
  const { data } = await $host.get(`books`);
  return data;
};

export const fetchOneBook = async (id: number) => {
  const { data } = await $host.get(`books/${id}`);
  return data;
};
