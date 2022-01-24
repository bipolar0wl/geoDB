import { $host, $authHost } from "./index";

export const addLangType = async (name: string) => {
  const response = await $authHost.post("lang-types", {
    name: name,
  });
  return response;
};

export const fetchLangTypes = async () => {
  const { data } = await $host.get(`lang-types`);
  return data;
};

export const fetchOneLangType = async (id: number) => {
  const { data } = await $host.get(`lang-types/${id}`);
  return data;
};
