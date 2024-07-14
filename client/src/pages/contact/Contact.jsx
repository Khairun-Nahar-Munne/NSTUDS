import React from 'react';
import { useContext, useState } from "react";

import {Context } from '../../context/Context';
import "./contact.css"
import axios from "axios";
const Contact = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          userId:user._id,
          email: user.email,
          title,
          desc, 
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          await axios.post("/contact", newPost);
          window.location.reload();
        } catch (err) {}
      };
    return (

      <>
      
      
      <div className="d-flex align-items-center justify-content-center contact-write">

<div className="contact-write-body">
<span className="contact-write-title">Contact with NSTU Debating Society</span> <br /> <br />
<div classname="form">
<form onSubmit={handleSubmit}>


  <input
    placeholder="Title"
    type="text"
    onChange={e=>setTitle(e.target.value)}
    className="form-control"
  ></input>  <br /><br />






{file && (
<img className="writeImg" style={{height: '100px', width: '100px', marginTop: '25px'}} src={URL.createObjectURL(file)} alt="" />
)}


  
  <label className="btn btn-outline-primary-photo " htmlFor="fileInput">
    Add Photo
  </label> <br />
  <input
    type="file"
    id="fileInput"
    style={{ display: "none" }}
    onChange={(e) => setFile(e.target.files[0])}
    className="form-control"
  /> <br />

 

  <textarea
    placeholder="Tell description"
    type="text"
    onChange={e=>setDesc(e.target.value)}
    className="form-control"
  ></textarea> <br />
<div className="text-center md-5">

<button className="btn btn-outline-primary " type="submit">
  Send
</button>



</div>
</form>
</div>
</div>
</div>
      
      
      
      
      
{/*      
        <div className="write container">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <input
              placeholder="Title"
              type="text"
              onChange={e=>setTitle(e.target.value)}
            ></input>      <br /> <br />
            <textarea
              placeholder="Tell description"
              type="text"
              onChange={e=>setDesc(e.target.value)}
            ></textarea> <br />
          <button  type="submit">
            Publish
          </button>
        </form>
      </div> */}


      </>
    );
};

export default Contact;