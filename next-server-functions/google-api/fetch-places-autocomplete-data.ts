"use server";

import {
  Client,
  PlaceAutocompleteResult,
} from "@googlemaps/google-maps-services-js";

export type FetchPlacesDataValidationErrors = {
  query?: string[];
};

type FetchPlacesDataState = {
  validationErrors?: FetchPlacesDataValidationErrors;
  error?: string;
  places?: PlaceAutocompleteResult[];
};

const client = new Client({});

export async function fetchPlacesAutocompleteData(
  address: string,
): Promise<FetchPlacesDataState> {
  if (!address) {
    return {
      validationErrors: {
        query: ["Address missing!"],
      },
    };
  }

  try {
    const data = await client.placeAutocomplete({
      params: {
        input: address,
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      },
    });
    return { places: data.data.predictions };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
}
