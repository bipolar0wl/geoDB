import { $host, $authHost } from "./index";

export const fetchAnalysisType = async () => {
  const { data } = await $host.get(`analysis-type`);
  return data;
};

export const fetchOneAnalysisType = async (id: number) => {
  const { data } = await $host.get(`analysis-type/${id}`);
  return data;
};
