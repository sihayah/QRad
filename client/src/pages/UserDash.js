import React, { useState } from "react";

// all imports for user profile
import { Redirect, useParams } from 'react-router-dom';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FriendList from '../components/FriendList';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

// for profile  purposes so that username links with userParams
const Profile = (props) => {
    const { username: userParam } = useParams();
  
    const [addFriend] = useMutation(ADD_FRIEND);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });
  
    const user = data?.me || data?.user || {};
  
    // redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Redirect to="/profile" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }

const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };




//export and calling function
// export default function Dash() {
//    const editCard = document.querySelector(".edit-card")
//    function addForm () {
//     editCard.addEventListener("click", addForm  => {

//     })
//    }
//targeting formState and then setFormState
   const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    pronouns: "",
    title: "",
    tagline: "",
    email: "",
    phone: "",
    website: "",
    LinkedIn: "",
    Twitter: "",
    Instagram: ""
    })
//form state targets events value
  const handlechange = e => {
      const {firstname, lastname, pronouns, title, tagline, email, phone, website, LinkedIn, Twitter, Instagram, value} = e.target
      setFormState(
      {
          ...formState, 
        [firstname]: value,
        ...formState, 
        [lastname]: value,
        ...formState, 
        [pronouns]: value,
        ...formState, 
        [title]: value,
        ...formState, 
        [tagline]: value,
        ...formState, 
        [email]: value,
        ...formState, 
        [phone]: value,
        ...formState, 
        [website]: value,
        ...formState, 
        [LinkedIn]: value,
        ...formState, 
        [Twitter]: value,
        ...formState, 
        [Instagram]: value

      }    
      )
      console.log(formState)
    }
    return(
        //adding css into the js file instead of using a css file
        <div id="biz-profile">
            <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      </div>
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
          />
        </div>
        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
            {/* <p i-right-wrapper className="biz-card">
            *missing photo*
            </p> */}
            <form>
        <input 
            onChange={handlechange}
            value={"firstname"}
        />
         <input 
            onChange={handlechange}
            name={"lastname"}
        />
         <input 
            onChange={handlechange}
            name={"pronouns"}
        />
        <input 
            onChange={handlechange}
            name={"title"}
        />
        <input 
            onChange={handlechange}
            name={"tagline"}
        />
        <input 
            onChange={handlechange}
            name={"email"}
        />
         <input 
            onChange={handlechange}
            name={"phone"}
        />
         <input 
            onChange={handlechange}
            name={"website"}
        />
        <input 
            onChange={handlechange}
            name={"LinkedIn"}
        />
        <input 
            onChange={handlechange}
            name={"Twitter"}
        />
        <input 
            onChange={handlechange}
            name={"Instagram"}
        />
            </form>
          {/* <p i-left-wrapper className="biz-temp">
       {/* Name:(first and last) */}
       {/* pronouns:
       title:
       <br /> 
       {/* personal statement (tag-line) */}
       {/* <br /> 
       email:
       phone:
       website:
       LinkedIn:
       Twitter:
       Instagram: */}
        {/* </p> */}
        {/* <button onClick={addForm} className="edit-card">Edit Card</button> */}
        <button type="submit">Save Edit</button>
     </div>
        );
    };
    export default Profile;
