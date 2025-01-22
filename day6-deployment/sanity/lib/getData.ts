import { client } from "./client";
import { bannerQuery } from "./queries";

export const getBannersData = async () => {
    const bannersData = await client.fetch(bannerQuery);
    return bannersData;
  };
  