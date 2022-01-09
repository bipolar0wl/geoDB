import { $host, $authHost } from "./index";

export const fetchAnalysis = async () => {
  const { data } = await $host.get(`analysis`);
  return data;
};

export const fetchOneAnalysis = async (id: number) => {
  const { data } = await $host.get(`analysis/${id}`);
  return data;
};
