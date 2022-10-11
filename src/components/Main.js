import React from "react";
import Sidebar from "./Sidebar";
import pic from "./image1.png"
import pic1 from "./image3.png"
import pic2 from "./image4.png"
import pic3 from "./image5.png"

const Main = () => {
    return (

    <div>

      <div className="article" id="article">
        <div className="upload" id="upload">
          <font size="+3">Uploading a File </font>
          <p>So what means uploading a file ?<br></br>
            Choosing a file from the clients machine and that being uploaded on the server.For example,same as you uploading your resume on the company 
            <br></br>platforms or sites.<br></br><br></br>
            So,here let us learn about uploading a file!<br></br>
            To perform this uploading files we need to install a package called <sup>*</sup><u><b>axios</b></u><br></br><br></br>
            Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints.This library is very useful to perform
            <br></br> <b>CRUD</b>(Create,read,update,delete or drop) operations.<br></br>
            This popular library is used to communicate with the backend.Axios supports the Promise API, native to JS ES6.<br></br>
            Using Axios we make API requests in our application.Once the request is made we get the data in Return, and then we use this data in our project.<br></br>
          </p>
          <p>
            So as we need data(ie file)from the client we use this axios<br></br>
            The Steps here we include are:<br></br>
            STEP-1:Add tag to our component,this tag should have type attribute as file.<br></br>
            STEP-2:Now we need a event handler,so that it trigger whenever we try to upload a file in the state.<br></br>
            STEP-3:So after storing the selected file in the state we need to send it to server which we generally do by axios.<br></br>
            STEP-4:By then the file is sent to the service wrapped in a FormData object.<br></br>
          </p><br></br>
          <div className="in-bold"><b>CODE:</b></div>
          <div className="inc-pic">
            <img src={pic}/>
          </div><br></br>
          <div className="in-bold"><b>OUTPUT:</b></div>
          <div className="inc-pic1">
            <img src={pic1}/>
          </div>
        </div>
        <br></br><br></br>
        <div className="download" id="download">
        <font size="+3">Downloading a File </font>
        <p>Generally doenloading means getting data from the server.For example getting a university brochure<br></br><br></br>
        So,here let us learn about uploading a file!<br></br>
        Especially like uploading a file we need not install any external module.So simply by the <b>fetch()</b> method we can perform this operation.<br></br>
        </p>
        <p>
        The Steps here we include are:<br></br>
        STEP-1:As we are considering ourselves as both server and client let us make sure any file we fetch is in public folder.<br></br>
        STEP-2:So after making sure that required folder is in your particular public folder we will use the fetch() method provided by Java Script and <br></br>
        directly send the file name as a parameter.<br></br>
        STEP-3:Here we are using blob which is
        <br></br> The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a 
        <br></br>ReadableStream so its methods can be used for processing the data.<br></br>
        STEP-4:Creating a new object of file and on click the pdf will be downloaded on your system.
        </p><br></br>
        <div className="in-bold"><b>CODE:</b></div>
        <div className="inc-pic">
          <img src={pic2}/>
        </div><br></br>
        <div className="in-bold"><b>OUTPUT:</b></div>
        <div className="inc-pic2">
          <img src={pic3}/>
        </div>
        <h5>.</h5>
        </div>
      </div>
      <Sidebar />

    </div>
    )
};

export default Main;