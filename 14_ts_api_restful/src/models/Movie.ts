import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
    rating: { type: String },
    description: { type: String },
    director: { type: String },
    starts: { type: Array },
    poster: { type: String }
  },
  {
    timestamps: true
  }
);

export const MoviModel = model("Movie", movieSchema);
