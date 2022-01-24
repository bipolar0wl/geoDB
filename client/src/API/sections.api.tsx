import { $host, $authHost } from "./index";

export const addSection = async (name: string) => {
  const response = await $authHost.post("sections", {
    name: name,
  });
  return response;
};

export const fetchSections = async () => {
  const { data } = await $host.get(`sections`);
  return data;
};

export const fetchOneSection = async (id: number) => {
  const { data } = await $host.get(`sections/${id}`);
  return data;
};
