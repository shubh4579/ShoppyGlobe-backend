import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
});

const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;
