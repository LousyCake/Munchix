import React from "react";
import Loader from "../layouts/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

  const { user, loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="profile-card-container">
            <div className="profile-card">
              <div className="profile-header">
                <figure className="avatar avatar-profile">
                  <img
                    className="rounded-circle img-fluid"
                    src={user?.avatar.url}
                    alt={user?.name}
                  />
                </figure>
                <h1 className="welcome-message">Welcome, {user?.name}!</h1>
              </div>
              <p className="wholesome-message">
                We're delighted to serve you. Explore your favorite meals and enjoy a seamless dining experience with us!
              </p>
              <div className="profile-details">
                <h4>Full Name:</h4>
                <p>{user?.name}</p>

                <h4>Email Address:</h4>
                <p>{user?.email}</p>

                <h4>Joined On:</h4>
                <p>{String(user?.createdAt.substring(0,10))}</p>
              </div>
              <Link to="/users/me/update" className="btn-edit-profile">
                Edit Profile
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
