"use server";

import {
  Client,
  TextSearchResponse,
} from "@googlemaps/google-maps-services-js";

export type FetchPlacesDataValidationErrors = {
  query?: string[];
};

type FetchPlacesDataState = {
  validationErrors?: FetchPlacesDataValidationErrors;
  error?: string;
  data?: TextSearchResponse;
};

const client = new Client({});

export async function fetchPlacesData(
  formData: FormData,
): Promise<FetchPlacesDataState> {
  const query = formData.get("query") as string;

  if (!query) {
    return {
      validationErrors: {
        query: ["Query missing!"],
      },
    };
  }

  try {
    const data = await client.textSearch({
      params: {
        query: query,
        key: process.env.GOOGLE_PLACES_API_KEY as string,
      },
    });

    return {
      data,
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}
