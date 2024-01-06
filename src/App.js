import {Component} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiMessage2Fill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import './App.css'

class App extends Component{
  state={nameProject:"",descriptions:"",isAdd:false}

  onChangeName=(event)=>{
    this.setState({nameProject:event.target.value})
  }
  onChangeDesc=(event)=>{
    this.setState({descriptions:event.target.value})
  }

  onSubmitform=(event)=>{
    event.preventDefault()
    this.setState({isAdd:true})
  }

  render(){


    const {nameProject,descriptions,isAdd}=this.state
    const classname=isAdd?"first-container":"first-container1"
    console.log(classname)
    return(<div className="bg-container">
      <nav className="nav-container">
        <p className="name">Mahendra</p>
        <div className="nav-list-container">
          <a className="about" href="#aboutContainer"><button className='nav-but'>About</button></a>
          <a className="project" href="#projectListContainer"><button className='nav-but'>Projects</button></a>
          <a className="contact" href="#contactSection"><button className='nav-but'>Contact</button></a>
        </div>
      </nav>
      <div className="about-container" id="aboutContainer">
        <div className="profile-container">
          <h1 className="designer-name">UI,UX DESIGNER</h1>
          <p className="intro">Hello, my name is mahendra</p>
          <p className="description">My name is Mandhati Mahendra.I am graduated in mechanical engineering from IIIT  idupulapaya in the year 2019.Later i prepared for compitative exams.I developed interest in coding and software during that time.I joined NXTWAVE to learn tech skills.Now. I have hands on experience on various technologies like HTML,CSS,Javascript,React,Python,SQL.I developed many static and dynamic websites</p>
          <div className="buttons-container">
             <a href="#projectListContainer"><button className="project-button">Projects</button></a>
             <button className="linkedin-button">Linkedin</button>
          </div>
        </div>
        <div className="img-container">
        <img src="https://i.postimg.cc/gcnBssxb/IMG-20240105-WA0018.jpg" alt="text-img" className="img-img"/>
        </div>
        
      </div>
     
      <form className="form-container" id="formContainer" onSubmit={this.onSubmitform}>
        <h1 className="add-project">Add Project</h1>
        <p className="project-title">Project Name</p>
        <input type="text" value={nameProject} className="input-field" onChange={this.onChangeName}/>
        <br/>
        <p className="project-title">Project Link</p>
        <input type="text" className="input-field"/>
        <br/>
        <p className="project-title" value={descriptions}>Description</p>
        <textarea col="20" rows="5" className='input-field1' onChange={this.onChangeDesc}></textarea>
        <br/>
        <button className='form-button' type="submit" >Add</button>

      </form>
      <div className="projects-list-container" id="projectListContainer">
      <h1 className="projects-head">Projects</h1>
        <div className="first-container">
          
          <div className="para-item-2">
            <h1 className="project-name-title-heading">Food Munch</h1>
            <p className='para-heading'>Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers
               Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.
               Implemented product youtube videos by using bootstrap embed and model components.
               <br/>Technologies used: HTML, CSS, Bootstrap
            </p>
            <button className="view-project-button">View Project</button>
          </div>
          <div className="img-container">
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" alt="text-alt" className="img-1"/>


          </div>

        </div>
        <div className="first-container">
          
          <div className="para-item-2">
            <h1 className="project-name-title-heading">Todo List</h1>
            <p className='para-heading'>A comprehensive todo management tool designed to enhance productivity.
               User-friendly interface with HTML, CSS, and Bootstrap for ease of use.
               Effortless task management through JavaScript-based CRUD operations with dynamic UI updates. Your tasks are always safe with local storage methods to ensure task persistence.
               <br/>Technologies used: HTML, CSS, JS, Bootstrap
            </p>
            <button className="view-project-button">View Project</button>
          </div>
          <div className="img-container">
            <img src="https://i.postimg.cc/6Q7yGpns/istockphoto-1092571024-1024x1024.jpg" alt="text-alt" className="img-1"/>


          </div>

        </div>
        <div className="first-container">
          
          <div className="para-item-2">
            <h1 className="project-name-title-heading">Wikipedia Application</h1>
            <p className='para-heading'>Experience a new level of information access with a custom wikipedia search application that simplifies the search process.
               Intuitive search results with HTML list elements, styled with CSS, Bootstrap, and responsive design for a seamless user experience.
               Effortlessly access desired information with asynchronous fetch GET HTTP API calls and the option to open results in a new tab for further exploration.
               <br/>Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap
            </p>
            <button className="view-project-button">View Project</button>
          </div>
          <div className="img-container">
            <img src="https://i.postimg.cc/VvfFSVTp/Wikipedia-logo-v2-svg.png" alt="text-alt" className="img-1"/>


          </div>

        </div>
        <div className={`${classname}`}>
          
          <div className="para-item-2">
            <h1 className="project-name-title-heading">{nameProject}</h1>
            <p className='para-heading'>
              {descriptions}
            </p>
            <button className="view-project-button">View Project</button>
          </div>
          <div className="img-container">
          <FaReact  className="img-1"/>


          </div>

        </div>
        
      </div>
      <div className="contact-container" id="contactSection">
        <div className="contact-icons">
           <BiLogoInstagramAlt className="icon-insta" />
           <FaLinkedin className="icon-insta"/>
           <RiMessage2Fill className="icon-insta" />
        </div>
        <p className="copy-right">copyright @ 2024.All rights reserved</p>
      </div>
    </div>)
  }
}

export default App