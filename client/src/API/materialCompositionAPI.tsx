import { $host, $authHost } from "./index";

export const fetchMaterialCompositions = async () => {
  const { data } = await $host.get(`api/mineralComposition`);
  return data;
};

export const fetchOneMaterialComposition = async (id: number) => {
  const { data } = await $host.get(`api/mineralComposition/${id}`);
  return data;
};

export const createMaterialComposition = async (MaterialComposition: any) => {
  const { data } = await $host.post(
    `api/mineralComposition`,
    MaterialComposition
  );
  return data;
};

export const updateMaterialComposition = async (MaterialComposition: any) => {
  const { data } = await $host.post(
    `api/mineralComposition`,
    MaterialComposition
  );
  return data;
};

export const removeMaterialComposition = async (MaterialComposition: any) => {
  const { data } = await $host.post(
    `api/mineralComposition`,
    MaterialComposition
  );
  return data;
};
