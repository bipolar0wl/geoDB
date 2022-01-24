import { $host, $authHost } from "./index";

export const addSectionAnalysis = async (
  analysis: string,
  analysisType: any,
  substances: any
) => {
  const response = await $authHost.post("section-analysis", {
    name: analysis,
    analysisType: analysisType,
    substances: substances,
  });
  console.log(response);
  // const formData = new FormData();
  // formData.append("name", name.value);
  // formData.append("text", text.value);
  // formData.append("artist", artist.value);
  // formData.append("picture", picture);
  // formData.append("audio", audio);
  // $authHost
  //   .post(`section-analysis`, formData)
  //   .catch((e) => console.log(e));
};

export const fetchSectionAnalysis = async () => {
  const { data } = await $host.get("section-analysis");
  return data;
};

export const fetchOneSectionAnalysis = async (id: number) => {
  const { data } = await $host.get(`section-analysis/${id}`);
  return data;
};
