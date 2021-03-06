import { $host, $authHost } from "./index";

export const addAnalysis = async (
  analysis: string,
  analysisType: any,
  substances: any
) => {
  const response = await $authHost.post("section-analysis", {
    name: analysis,
    analysisType: analysisType,
    substances: substances,
  });
  return response;
};

export const fetchAnalysis = async () => {
  let data: any = [];
  data = data.concat(await $host.get(`sample-analysis`));
  data = data.concat(await $host.get(`section-analysis`));
  return data;
};

export const fetchOneAnalysis = async (id: number) => {
  const { data } = await $host.get(`sample-analysis/${id}`);
  return data;
};
