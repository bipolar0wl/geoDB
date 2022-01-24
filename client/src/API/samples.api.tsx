import { $host, $authHost } from "./index";

export const addSample = async (name: string) => {
  const response = await $authHost.post("samples", {
    name: name,
  });
  return response;
};

export const fetchSamples = async () => {
  const { data } = await $host.get(`samples`);
  return data;
};

export const fetchOneSample = async (id: number) => {
  const { data } = await $host.get(`samples/${id}`);
  return data;
};
