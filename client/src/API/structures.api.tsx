import { $host, $authHost } from "./index";

export const addStructure = async (name: string) => {
  const response = await $authHost.post("structures", {
    name: name,
  });
  return response;
};

export const fetchStructures = async () => {
  const { data } = await $host.get(`structures`);
  return data;
};

export const fetchOneStructure = async (id: number) => {
  const { data } = await $host.get(`structures/${id}`);
  return data;
};
