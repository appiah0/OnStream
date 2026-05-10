import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const endpoint = req.nextUrl.searchParams.get("endpoint");
  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }

  const apiKey = process.env.TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const url = `${baseUrl}${endpoint}${endpoint.includes("?") ? "&" : "?"}api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
