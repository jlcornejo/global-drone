import mongoose from "mongoose";

export interface IMediaItem {
  title: string;
  type: "image" | "video";
  category: string;
  description: string;
  url: string;
  thumbnail: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const MediaItemSchema = new mongoose.Schema<IMediaItem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Minería",
        "Agricultura",
        "Construcción",
        "Comercial",
        "Infraestructura",
        "Topografía",
      ],
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.MediaItem ||
  mongoose.model<IMediaItem>("MediaItem", MediaItemSchema);
