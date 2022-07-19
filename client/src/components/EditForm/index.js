import React, { useEffect, useState } from "react";
import { ADD_CARD } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import {v4 as uuidv4} from 'uuid';
import '../EditForm/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

//export and calling function
export default function EditForm() {

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

  const [addCard] = useMutation(ADD_CARD);

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
      
        <p>
          Enter the info here that you would like displayed on your QRad
        </p>

        <div className="input-container">
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
 
        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
          <label>
            LinkedIn:
            <br />
            <div className="example-text">
              <span className="grey-out">example: www.linkedin.com/in/</span>
              <span className="key-text">delilah-dean </span>              
            </div>
          </label>          
            <input
              placeholder="linkedIn handle"
              onChange={handlechange}
              name="linkedIn"
              value={formState.LinkedIn}
            />          
        </div>

        <div className="input-container">
          <label>
            Instagram handle:
            <br />
            <div className="example-test">
              <span className="grey-out">example: www.instagram.com/</span>
              <span className="key-text"> deedee </span>              
            </div>

          </label>          
            <input
              placeholder="instagram handle"
              onChange={handlechange}
              name="instagram"
              value={formState.Instagram}
            />          
        </div>

        <div>
          <label id="select-img">
            Select Image
            <FontAwesomeIcon id='camera-icon' icon={ faCamera } />
              <input id="file-input" type="file" onChange={previewImg} />
            {selectedImg ? <img src={selectedImg} name={selectedImg} alt="preview" /> : ""}              
          </label>
      
        </div>


        <button className="ombre-btn" onClick={handleFormSubmit}>Save</button>

      </form>

    </div>
  );
}
