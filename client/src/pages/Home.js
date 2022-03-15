import React from 'react';
import me from "../MOCK_ME.json";
import Card from '../components/Card';
import Auth from '../utils/auth';
import '../components/Card/style.css';
import {HiOutlineMailOpen } from 'react-icons/hi';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {IoIosBusiness} from 'react-icons/io';
import {CgWebsite} from 'react-icons/cg';
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {MdOutlineBusinessCenter} from 'react-icons/md';



import { } from '../utils/queries';

const Home = () => {


  if (!Auth.loggedIn()) {
    return(
          <div className="card">
              <div className='intro'>
                  <h4>Delores Deville</h4>
                      <p className="pronouns">(she/her)</p>

                      <p className="tagline">It's business time! </p>
              </div>

              <div className='card-img'>
                  <img alt ="delores-photo" src="https://i.pinimg.com/originals/75/3d/54/753d54f1c9137aca6bb000234b6abeb4.jpg"/>
              </div>

              <ul>
                      <li>
                          <IoIosBusiness /> 
                          Good const
                      </li>
                      <li>
                          <MdOutlineBusinessCenter />
                          Librarian
                      </li>
                  <li>
                      <HiOutlineMailOpen /> delores@goodco.com
                  </li>
                      <li>
                          <BsFillTelephoneForwardFill /> 
                          (999)999-999
                      </li>
                      <li>
                          <CgWebsite />
                          goodco.com/delores
                      </li>
                      <li>
                          <AiOutlineLinkedin /> 
                          linkedin.com/deloresdeville
                      </li>
                      <li>
                          <AiFillInstagram />  
                          instagram.com/deloresdeville777
                      </li>
              </ul>            
          </div>
      )  
  }

  return (
    <>
    {me && 
      <Card data={me}/>
    }
   
    </>
  );
};

export default Home;
