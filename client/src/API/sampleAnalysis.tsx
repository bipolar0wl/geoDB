import { $host, $authHost } from "./index";

export const fetchSampleAnalysis = async () => {
  const { data } = await $host.get(`sample-analysis`);
  return data;
};

export const fetchOneSampleAnalysis = async (id: number) => {
  const { data } = await $host.get(`sample-analysis/${id}`);
  return data;
};
