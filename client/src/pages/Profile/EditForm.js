import React, { useState } from "react";
import { ADD_CARD } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { storage} from '../utils/firebase';
import { ref , getDownloadURL, uploadString} from 'firebase/storage';

//export and calling function
export default function EditForm() {

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
    });
    const [selectedImg, setSelectedImg] = useState(null);
    const [img, setImg] = useState(null);
//form state targets specific event values
  const handlechange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
    console.log(formState)
    const previewImg = (e) => {
      const reader = new FileReader();
      if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        setImg(e.target.files[0]);
      }
      reader.onload = (readerEvent) => {
        setSelectedImg(readerEvent.target.result);
      }
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        // use try/catch instead of promises to handle errors
        const uploadImg = ref(storage, `/image/${img.name}`);
        try {
          await uploadString(uploadImg, selectedImg, 'data_url').then(
            async(snapshot) => {
              const profileURL = await getDownloadURL(uploadImg);
              console.log(profileURL);
              await addCard({
                variables: {...formState, avatar: profileURL}
              })
            }
          )
        } catch(err) {
          console.log(err)
        }
        
        // try {
        //   const { data } = await addCard({
        //     variables: { ...formState, avatar: profileURL }
        //   });
        //   Auth.login(data.addUser.token);
        // } catch (e) {
        //   console.error(e);
        // }
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
        <label>
          Firstname:
        <input 
            placeholder="firstname"
            onChange={handlechange}
            name="firstname"
            value={formState.firstname}
        />
        </label>
        <label>
          Lastname:
        <input 
            placeholder="lastname"
            onChange={handlechange}
            name="lastname"
            value={formState.lastname}
        />
        </label>
        <label>
          Pronouns: 
        <input 
            placeholder="pronouns"
            onChange={handlechange}
            name="pronouns"
            value={formState.pronouns}
        />
        </label>
        <label>
          Title: 
        <input 
            placeholder="title"
            onChange={handlechange}
            name="title"
            value={formState.title}
        />
        </label>
        <label>
          Tagline: 
        <input 
            placeholder="tagline"
            onChange={handlechange}
            name="tagline"
            value={formState.tagline}
        />
        </label>
        <label>
          Email:
        <input 
            placeholder="email"
            onChange={handlechange}
            name="email"
            value={formState.email}
        />
        </label>
        <label>
          Phone: 
        <input 
            placeholder="phone"
            onChange={handlechange}
            name="phone"
            value={formState.phone}
        />
        </label>
        <label>
          Company:
        <input 
            placeholder="company"
            onChange={handlechange}
            name="company"
            value={formState.company}
        />
        </label>
        <label>
          Website: 
          <input 
            placeholder="website"
            onChange={handlechange}
            name="website"
            value={formState.website}
        />
        </label>
        <label>
          LinkedIn: 
        <input 
            placeholder="LinkedIn"
            onChange={handlechange}
            name="LinkedIn"
            value={formState.LinkedIn}
        />
        </label>
        <label>
          Twitter: 
        <input 
            placeholder="Twitter"
            onChange={handlechange}
            name="Twitter"
            value={formState.Twitter}
        />
        </label>
       <label>
         Instagram:
       <input 
            placeholder="Instagram"
            onChange={handlechange}
            name="Instagram"
            value={formState.Instagram}
        />
       </label>
        <input type='file' onChange={previewImg}/>
        { selectedImg ? (
          <img src={selectedImg} alt="preview"/>
        ) : ( "")}
            </form>
        <button onClick={handleFormSubmit}>
              Save Edit
            </button>
     </div>
    );
}