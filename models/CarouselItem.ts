import mongoose from "mongoose";

export interface ICarouselItem {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const CarouselItemSchema = new mongoose.Schema<ICarouselItem>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Ver Más",
    },
    buttonLink: {
      type: String,
      default: "#contacto",
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

export default mongoose.models.CarouselItem ||
  mongoose.model<ICarouselItem>("CarouselItem", CarouselItemSchema);
