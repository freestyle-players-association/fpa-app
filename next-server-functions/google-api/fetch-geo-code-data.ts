"use server";

import { Client, LatLngLiteral } from "@googlemaps/google-maps-services-js";

export type FetchGeoLocationDataValidationErrors = {
  placeId?: string[];
};

export type GeoCodeData = {
  placeId: string;
  latLng: LatLngLiteral;
  fullAddress: string;
};

type FetchGeoCodeDataState = {
  validationErrors?: FetchGeoLocationDataValidationErrors;
  error?: string;
  data?: GeoCodeData;
};

const client = new Client({});

export async function fetchGeoCodeData(
  placeId: string,
): Promise<FetchGeoCodeDataState> {
  if (!placeId) {
    return { validationErrors: { placeId: ["Place Id is required"] } };
  }

  try {
    const data = await client.geocode({
      params: {
        place_id: placeId,
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      },
    });

    return {
      data: {
        placeId: data.data.results[0].place_id,
        latLng: data.data.results[0].geometry.location,
        fullAddress: data.data.results[0].formatted_address,
      },
    };
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    return {
      error: "Something went wronglow",
    };
  }
}
