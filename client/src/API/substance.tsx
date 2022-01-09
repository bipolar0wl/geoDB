import { $host, $authHost } from "./index";

export const fetchSubstance = async () => {
  const { data } = await $host.get(`substance`);
  return data;
};

export const fetchOneSubstance = async (id: number) => {
  const { data } = await $host.get(`substance/${id}`);
  return data;
};
