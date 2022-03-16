import React from "react";
import { Link } from "react-router-dom";
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import me from "../../MOCK_ME.json";
import "./profile.css";

const Profile = () => {
  let myId = "";
  let myCards = [];
  const { data } = useQuery(QUERY_ME);
  if (data) {
    myId = data.me._id;
    myCards = data.me.cards;
  }

  console.log(myCards.length);

  if (myCards.length === 0) {
    return (
      <>
        <Link to="/editform">
          <div className="create-link">Create my QRad</div>
        </Link>
      </>
    );
  }

  return (
    <div>
      <Link to="/editform">Update my QRad</Link>
      <br />
      <Link to={`/card/${myId}`}>View my QRad</Link>
    </div>
  );
};

export default Profile;
