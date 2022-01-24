import { $host, $authHost } from "./index";

export const addAnalysisType = async (name: string) => {
  const response = await $authHost.post("analysis-type", {
    name: name,
  });
  return response;
};

export const fetchAnalysisType = async () => {
  const { data } = await $host.get(`analysis-type`);
  return data;
};

export const fetchOneAnalysisType = async (id: number) => {
  const { data } = await $host.get(`analysis-type/${id}`);
  return data;
};
