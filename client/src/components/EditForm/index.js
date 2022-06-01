import React, { useState } from "react";
import { ADD_CARD } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
// import Auth from "../../utils/auth";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import {v4 as uuidv4} from 'uuid';

//export and calling function
export default function EditForm() {
  const [addCard] = useMutation(ADD_CARD);
  //targeting formState and then setFormState
  // allows to setup the form for the values so that consologging will work
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    pronouns: "",
    title: "",
    company: "",
    tagline: "",
    email: "",
    phone: "",
    website: "",
    linkedIn: "",
    instagram: "",
  });
  const [selectedImg, setSelectedImg] = useState(null);
  //form state targets specific event values
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const previewImg = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImg(readerEvent.target.result);
    };
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    const uploadImg = ref(storage, `/image/${uuidv4()}`);
    try {
      await uploadString(uploadImg, selectedImg, "data_url").then(
        async (snapshot) => {
          const profileURL = await getDownloadURL(uploadImg);
          console.log(profileURL);
          await addCard({
            variables: { ...formState, avatar: profileURL },
          });
          window.location.assign('/profile');
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    //adding css into the js file instead of using a css file
    <div id="biz-profile">
      {/* form for business card  */}
      <form onSubmit={handleFormSubmit}>

        <div classname="input-container">
          <label>
              Firstname:
            </label>          
              <input
                placeholder="firstname"
                onChange={handlechange}
                name="firstName"
                value={formState.firstName}
              />          
        </div>
 
        <div classname="input-container">
          <label>
            Lastname:
          </label>          
            <input
              placeholder="lastname"
              onChange={handlechange}
              name="lastName"
              value={formState.lastName}
            />          
        </div>

        <div classname="input-container">
          <label>
            Pronouns:
          </label>          
            <input
              placeholder="pronouns"
              onChange={handlechange}
              name="pronouns"
              value={formState.pronouns}
            />          
        </div>

        <div classname="input-container">
          <label>
            Title:
          </label>          
            <input
              placeholder="title"
              onChange={handlechange}
              name="title"
              value={formState.title}
            />          
        </div>

        <div classname="input-container">
          <label>
            Tagline:
          </label>          
            <input
              placeholder="tagline"
              onChange={handlechange}
              name="tagline"
              value={formState.tagline}
            />          
        </div>

        <div classname="input-container">
          <label>
            Email:
          </label>          
            <input
              placeholder="email"
              onChange={handlechange}
              name="email"
              value={formState.email}
            />          
        </div>

        <div classname="input-container">
          <label>
            Phone:
          </label>          
            <input
              placeholder="phone"
              onChange={handlechange}
              name="phone"
              value={formState.phone}
            />          
        </div>

        <div classname="input-container">
          <label>
            Company:
          </label>          
            <input
              placeholder="company"
              onChange={handlechange}
              name="company"
              value={formState.company}
            />          
        </div>

        <div classname="input-container">
          <label>
            Website:
          </label>          
            <input
              placeholder="website"
              onChange={handlechange}
              name="website"
              value={formState.website}
            />          
        </div>

        <div classname="input-container">
          <label>
            LinkedIn:
          </label>          
            <input
              placeholder="linkedIn"
              onChange={handlechange}
              name="linkedIn"
              value={formState.LinkedIn}
            />          
        </div>

        <div classname="input-container">
          <label>
            Instagram:
          </label>          
            <input
              placeholder="instagram"
              onChange={handlechange}
              name="instagram"
              value={formState.Instagram}
            />          
        </div>


        <input type="file" onChange={previewImg} />
        {selectedImg ? <img src={selectedImg} name={selectedImg} alt="preview" /> : ""}
      </form>
      <button onClick={handleFormSubmit}>Save Edit</button>
    </div>
  );
}
