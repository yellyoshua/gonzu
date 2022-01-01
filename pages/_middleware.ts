import { NextResponse, NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, _: NextFetchEvent) {
  const { nextUrl: url, geo, ip } = req;
  const country = geo?.country || "EC";
  const city = geo?.city || "Quito";
  const region = geo?.region || "Quito";

  console.info(
    `geolocation-logger IP: ${ip}, Country: ${country}, City: ${city}, Region: ${region}`
  );

  url.searchParams.set("country", country);
  url.searchParams.set("city", city);
  url.searchParams.set("region", region);

  return NextResponse.next();
}
