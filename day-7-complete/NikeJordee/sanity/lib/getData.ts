import { client } from "./client";
import { bannerQuery, getEssentialsKidsQuery, getEssentialsMensQuery, getEssentialsWomensQuery, menBannerQuery } from "./queries";

export const getBannersData = async () => {
    const bannersData = await client.fetch(bannerQuery);
    return bannersData;
  };
  
  export const getManBannersData = async () => {
    const bannersData = await client.fetch(menBannerQuery);
    return bannersData;
  };
  
  export const getEssentialsMensData = async () => {
    const bannersData = await client.fetch(getEssentialsMensQuery );
    return bannersData;
  };
  
  export const getEssentialsWomensData = async () => {
    const bannersData = await client.fetch(getEssentialsWomensQuery);
    return bannersData;
  };
  
  export const getEssentialsKidsData = async () => {
    const bannersData = await client.fetch(getEssentialsKidsQuery);
    return bannersData;
  };
  