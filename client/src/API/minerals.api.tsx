import { $host, $authHost } from "./index";

export const addMineral = async (name: string) => {
  const response = await $authHost.post("minerals", {
    name: name,
  });
  return response;
};

export const fetchMinerals = async () => {
  const { data } = await $host.get(`minerals`);
  return data;
};

export const fetchOneMineral = async (id: number) => {
  const { data } = await $host.get(`minerals/${id}`);
  return data;
};
