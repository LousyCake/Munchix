import React, { useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { fetchCartItems, updateCartQuantity, removeItemFromCart } from "../../actions/cartAction";
import { payment } from "../../actions/orderAction";

const Cart = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { cartItems, restaurant } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems(alert));
  }, [dispatch, alert]);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id, alert));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (newQty > stock) {
      alert.error("Exceeded stock limit");
    }
    dispatch(updateCartQuantity(id, newQty, alert));
  };

  const decreaseQty = (id, quantity) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCartQuantity(id, newQty, alert));
    } else {
      alert.error("Minimum quantity reached");
    }
  };

  const checkoutHandler = () => {
    dispatch(payment(cartItems, restaurant));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is empty</h2>
      ) : (
        <>
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>
          <h3 className="mt-5">
            Restaurant: <b>{restaurant.name}</b>
          </h3>

          <div className="row cartt">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <div className="cart-item" key={item._id}>
                  <img
                    src={item.foodItem.images[0].url}
                    alt={item.foodItem.name}
                    className="rounded-image"
                  />
                  <div className="cart-item-details-wrapper">
                    <div className="cart-item-details">
                      <p className="item-name single-line">{item.foodItem.name}</p>
                      <p id="card_item_price">
                        <LiaRupeeSignSolid />
                        {item.foodItem.price}
                      </p>
                    </div>
                    <div className="cart-item-quantity-wrapper">
                      <div className="stockCounter">
                        <span className="minus" onClick={() => decreaseQty(item.foodItem, item.quantity)}>-</span>
                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                        />
                        <span className="plus" onClick={() => increaseQty(item.foodItem, item.quantity, item.stock)}>+</span>
                      </div>
                      <i
                        id="delete_cart_item"
                        className="fa fa-trash"
                        onClick={() => removeCartItemHandler(item.foodItem)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-3">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}
                    (Units)
                  </span>
                </p>
                <p>
                  Total:
                  <span className="order-summary-values">
                    <LiaRupeeSignSolid />
                    {cartItems
                      .reduce(
                        (acc, item) =>
                          acc + item.quantity * item.foodItem.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={checkoutHandler}
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
