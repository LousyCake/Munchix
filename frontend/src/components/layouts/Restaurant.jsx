import React from "react";
import { Link } from "react-router-dom";

export default function Restaurant({ restaurant }) {
  return (
    <div className="custom-col my-3"> {/* Custom column class for 5 cards per row */}
      <div className="card">
        <Link
          to={`/eats/stores/${restaurant._id}/menus`}
          style={{ padding: 0, border: 'none' }} /* Remove padding and border */
        >
          <img
            src={restaurant.images[0].url}
            alt={restaurant.name}
            className="card-img-top"
          />
        </Link>

        {/* heading and address */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/eats/stores/${restaurant._id}/menus`}>
              {restaurant.name}
            </Link>
          </h5>
          <p className="card-text">{restaurant.address}</p>
          {/* reviews and rating */}

          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(restaurant.ratings / 5) * 100}%` }}
              ></div>
            </div>

            <span id="no_of_reviews">
              ({restaurant.numOfReviews} reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
