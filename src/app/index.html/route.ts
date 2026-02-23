import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(new URL("/", "https://fansofafrica.com"), 301);
}