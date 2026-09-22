import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import MediaItem from "@/models/MediaItem";

export const dynamic = "force-dynamic";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();

    const mediaItem = await MediaItem.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!mediaItem) {
      return NextResponse.json(
        { error: "Media item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(mediaItem);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating media item" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const mediaItem = await MediaItem.findByIdAndDelete(params.id);

    if (!mediaItem) {
      return NextResponse.json(
        { error: "Media item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Media item deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting media item" },
      { status: 500 }
    );
  }
}
