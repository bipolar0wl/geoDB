import { $host, $authHost } from "./index";

export const addTextType = async (name: string) => {
  const response = await $authHost.post("text-types", {
    name: name,
  });
  return response;
};

export const fetchTextTypes = async () => {
  const { data } = await $host.get(`text-types`);
  return data;
};

export const fetchOneTextType = async (id: number) => {
  const { data } = await $host.get(`text-types/${id}`);
  return data;
};
