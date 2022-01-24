import { $host, $authHost } from "./index";

export const addAuthor = async (name: string) => {
  const response = await $authHost.post("authors", {
    name: name,
  });
  return response;
};

export const fetchAuthors = async () => {
  const { data } = await $host.get(`authors`);
  return data;
};

export const fetchOneAuthor = async (id: number) => {
  const { data } = await $host.get(`authors/${id}`);
  return data;
};
