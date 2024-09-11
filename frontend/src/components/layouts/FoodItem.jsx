import React from "react";
import { useAlert } from "react-alert";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartAction";
import { addItemToCart } from "../../actions/cartAction";

export default function FoodItem({ fooditem, restaurant }) {
  const [quantity, setQuantity] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const cartItem = cartItems.find(
      (item) => item.foodItem._id === fooditem._id
    );
    if (cartItem) {
      setShowButtons(true);
      setQuantity(cartItem.quantity);
    } else {
      setShowButtons(false);
      setQuantity(1);
    }
  }, [cartItems, fooditem]);

  const increaseQty = () => {
    if (quantity < fooditem.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      alert.error("This item is out of stock");
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      setShowButtons(false);
      dispatch(removeItemFromCart(fooditem._id));
    }
  };

  const addToCartHandler = () => {
    if (!isAuthenticated && !user) {
      return navigate("/users/login");
    }
    if (fooditem && fooditem._id) {
      dispatch(addItemToCart(fooditem._id, restaurant, quantity, alert));
      setShowButtons(true);
    } else {
      console.error("Food item id is not defined");
    }
  };

  return (
    <div className="food-item-container col-sm-12 col-md-6 col-lg-3 my-2">
      <div className="food-item-card">
        <img
          src={fooditem.images[0].url}
          alt={fooditem.name}
          className="food-item-img"
        />
        <div className="food-item-body">
          <h5 className="food-item-title">{fooditem.name}</h5>
          <p className="food-item-des">{fooditem.description}</p>
          <div className="fixed-layout">
            <p className="food-item-price">
              <FaIndianRupeeSign /> {fooditem.price}
            </p>
            {!showButtons ? (
              <button
                type="button"
                id="cart-btn"
                className="btn btn-cart"
                disabled={fooditem.stock === 0}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            ) : (
              <div className="quantity-control">
                <span className="btn quantity-btn minus" onClick={decreaseQty}>
                  <FaMinus />
                </span>
                <span className="quantity-number">{quantity}</span>
                <span className="btn quantity-btn plus" onClick={increaseQty}>
                  <FaPlus />
                </span>
              </div>
            )}
            <p className="stock-status">
              {fooditem.stock ? "Available Now" : "Currently Unavailable"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
