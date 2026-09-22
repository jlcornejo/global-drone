import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import CarouselItem from "@/models/CarouselItem";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();
    const carouselItems = await CarouselItem.find({ isActive: true }).sort({
      order: 1,
    });

    return NextResponse.json(carouselItems);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching carousel items" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const carouselItem = new CarouselItem(body);
    await carouselItem.save();

    return NextResponse.json(carouselItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating carousel item" },
      { status: 500 }
    );
  }
}
