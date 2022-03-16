import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { ADD_CONTACT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const Profile = () => {
  const [addContact] = useMutation(ADD_CONTACT);
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>You need to be logged in to see this page. Log in or sign up!</h4>
    );
  }

  const handleClick = async () => {
    try {
      await addContact({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} card.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Contact
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          {/* this will be the card */}
        </div>
      </div>

      <div className="mb-3">{!userParam}</div>
    </div>
  );
};

export default Profile;
