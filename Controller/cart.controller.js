import cartModel from "../Model/cart.model.js";
import productsModel from "../Model/products.model.js";

export async function addToCart(req, res) {
  const { productId, quantity } = req.body;

  try {
    const product = await productsModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const newCartItem = new cartModel({
      productId,
      quantity: quantity || 1,
    });

    const savedItem = await newCartItem.save();

    console.log("Cart item added:", savedItem);

    res.status(201).json(savedItem);
  } catch (err) {
    console.log(" Failed to add item to cart:", err.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

export async function updateCartItem(req, res) {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedItem = await cartModel.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );

    if (!updatedItem) {
      console.log("Cart item not found for update:", id);
      return res.status(404).json({ message: "Cart item not found" });
    }

    console.log("Cart item updated:", updatedItem);

    res.send(updatedItem);
  } catch (err) {
    console.log("Failed to update cart item:", err.message);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
}

export async function deleteCartItem(req, res) {
  const { id } = req.params;

  try {
    const deleteItem = await cartModel.findByIdAndDelete(id);

    if (!deleteItem) {
      console.log("Cart item not found for deletion:", id);
      return res.status(404).json({ message: "cart item not found" });
    }

    console.log(" Cart item deleted:", deleteItem);

    res.send(deleteItem);
  } catch (err) {
    console.log("Failed to delete cart item:", err.message);
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
}
