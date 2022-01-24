import { $host, $authHost } from "./index";

export const addSampleAnalysis = async (
  analysis: string,
  analysisType: any,
  substances: any
) => {
  const response = await $authHost.post("sample-analysis", {
    name: analysis,
    analysisType: analysisType,
    substances: substances,
  });
  console.log(response);
};

export const fetchSampleAnalysis = async () => {
  const { data } = await $host.get(`sample-analysis`);
  return data;
};

export const fetchOneSampleAnalysis = async (id: number) => {
  const { data } = await $host.get(`sample-analysis/${id}`);
  return data;
};
