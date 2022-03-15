import React, { useState } from "react";
import { ADD_CARD } from "../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

//export and calling function
export default function Profile() {

     const addCard = useMutation(ADD_CARD)
//targeting formState and then setFormState
// allows to setup the form for the values so that consologging will work
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
//form state targets specific event values
  const handlechange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
    console.log(formState)

    const handleFormSubmit = async event => {
        event.preventDefault();
        // use try/catch instead of promises to handle errors
        try {
          const { data } = await addCard({
            variables: { ...formState }
          });
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };

    return(
        //adding css into the js file instead of using a css file
        <div id="biz-profile">
        
            <p i-right-wrapper className="biz-card">
                {/* missing picture of the business card */}
            *business card*
            </p>
            {/* form for business card  */}
            <form onSubmit={handleFormSubmit}>
        <input 
            placeholder="firstname"
            onChange={handlechange}
            name="firstname"
            value={formState.firstname}
        />
         <input 
            placeholder="lastname"
            onChange={handlechange}
            name="lastname"
            value={formState.lastname}
        />
         <input 
            placeholder="pronouns"
            onChange={handlechange}
            name="pronouns"
            value={formState.pronouns}
        />
        <input 
            placeholder="title"
            onChange={handlechange}
            name="title"
            value={formState.title}
        />
        <input 
            placeholder="tagline"
            onChange={handlechange}
            name="tagline"
            value={formState.tagline}
        />
        <input 
            placeholder="email"
            onChange={handlechange}
            name="email"
            value={formState.email}
        />
         <input 
            placeholder="phone"
            onChange={handlechange}
            name="phone"
            value={formState.phone}
        />
        <input 
            placeholder="company"
            onChange={handlechange}
            name="company"
            value={formState.company}
        />
         <input 
            placeholder="website"
            onChange={handlechange}
            name="website"
            value={formState.website}
        />
        <input 
            placeholder="LinkedIn"
            onChange={handlechange}
            name="LinkedIn"
            value={formState.LinkedIn}
        />
        <input 
            placeholder="Twitter"
            onChange={handlechange}
            name="Twitter"
            value={formState.Twitter}
        />
        <input 
            placeholder="Instagram"
            onChange={handlechange}
            name="Instagram"
            value={formState.Instagram}
        />
            </form>
        <button
              onClick={() => {
                this.setState({ editing: true });
              }}
            >
              Save Edit
            </button>
     </div>
    );
}








//all imports for user profile
// import { Redirect, useParams } from 'react-router-dom';
// import ThoughtForm from '../components/ThoughtForm';
// import ThoughtList from '../components/ThoughtList';
// import FriendList from '../components/FriendList';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
// import Auth from '../utils/auth';

//for profile  purposes so that username links with userParams
// const Profile = (props) => {
//     const { username: userParam } = useParams();
  
//     const [addFriend] = useMutation(ADD_FRIEND);
//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//       variables: { username: userParam },
//     });
  
//     const user = data?.me || data?.user || {};
  
//     // redirect to personal profile page if username is yours
//     if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//       return <Redirect to="/profile" />;
//     }
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (!user?.username) {
//       return (
//         <h4>
//           You need to be logged in to see this. Use the navigation links above to
//           sign up or log in!
//         </h4>
//       );
//     }

    {/* <div className="flex-row mb-3">
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
      <div className="mb-3">{!userParam && <ThoughtForm />}</div> */}
