import { $host, $authHost } from "./index";

export const fetchSectionAnalysis = async () => {
  const { data } = await $host.get(`section-analysis`);
  return data;
};

export const fetchOneSectionAnalysis = async (id: number) => {
  const { data } = await $host.get(`section-analysis/${id}`);
  return data;
};
