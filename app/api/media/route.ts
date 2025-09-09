import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import MediaItem from "@/models/MediaItem";

export async function GET() {
  try {
    await dbConnect();
    const mediaItems = await MediaItem.find({ isActive: true }).sort({
      order: 1,
      createdAt: -1,
    });

    return NextResponse.json(mediaItems);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching media items" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    const mediaItem = new MediaItem(body);
    await mediaItem.save();

    return NextResponse.json(mediaItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating media item" },
      { status: 500 }
    );
  }
}
