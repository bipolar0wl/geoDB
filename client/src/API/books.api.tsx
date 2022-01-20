import { $host, $authHost } from "./index";

export const fetchBooks = async () => {
  const { data } = await $host.get(`books`);
  return data;
};

export const fetchOneBook = async (id: number) => {
  const { data } = await $host.get(`books/${id}`);
  return data;
};
