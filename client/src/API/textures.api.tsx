import { $host, $authHost } from "./index";

export const addTexture = async (name: string) => {
  const response = await $authHost.post("textures", {
    name: name,
  });
  return response;
};

export const fetchTextures = async () => {
  const { data } = await $host.get(`textures`);
  return data;
};

export const fetchOneTexture = async (id: number) => {
  const { data } = await $host.get(`textures/${id}`);
  return data;
};
