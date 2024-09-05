// app/api/google-places/route.ts
import { NextResponse } from "next/server";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client({});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
    const response = await client.textSearch({
      params: {
        query: query,
        key: process.env.GOOGLE_PLACES_API_KEY as string,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Google Places API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
