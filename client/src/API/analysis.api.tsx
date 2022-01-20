import { $host, $authHost } from "./index";

export const fetchAnalysis = async () => {
  const { data } = await $host.get(`sample-analysis`);
  return data;
};

export const fetchOneAnalysis = async (id: number) => {
  const { data } = await $host.get(`sample-analysis/${id}`);
  return data;
};
