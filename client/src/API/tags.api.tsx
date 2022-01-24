import { $host, $authHost } from "./index";

export const addTag = async (name: string) => {
  const response = await $authHost.post("tags", {
    name: name,
  });
  return response;
};

export const fetchTags = async () => {
  const { data } = await $host.get(`tags`);
  return data;
};

export const fetchOneTag = async (id: number) => {
  const { data } = await $host.get(`tags/${id}`);
  return data;
};
