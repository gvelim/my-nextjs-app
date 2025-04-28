// app/api/add-to-cart/route.ts
import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { productId } = body;

    // ... process the request (e.g., update database) ...

    return NextResponse.json({ message: productId + "Item added to cart" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 });
  }
}
