import React, {useState} from 'react'
import {jQuery} from 'jquery';
// import loadable from '@loadable/component'
import axios from 'axios'


const Contact = (props) => {
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newSubject, setNewSubject] = useState('')
    const [newMessage, setNewMessage] = useState('')

    if(props){
        var contactMessage = props.contactmessage
        var name = props.name;
        var city = props.city;
        var phone= props.phone;
        var email = props.email;        
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setNewEmail(event.target.value)
    }
    const handleSubjectChange = (event) => {
        setNewSubject(event.target.value)
    }
    const handleMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

    const handleReset = (event) => {
        setNewName("")
        setNewEmail("")
        setNewSubject("")
        setNewMessage("")
        jQuery(document).ready(function($) {
            $('#message-warning').fadeOut();
        })
    }

    const handleClick = () => {
        jQuery(document).ready(function($) {
            $('#image-loader').fadeIn();
            
            if(newName === "" || !newEmail.includes("@") || newSubject === "" || newMessage === ""){
                alert("Message failed to send.")
                $('#image-loader').fadeOut();
                $('#message-warning').fadeIn();
                return false;
            }

            var name = $('#contactForm #contactName').val();
            var email = $('#contactForm #contactEmail').val();
            var subject = $('#contactForm #contactSubject').val();
            var message = $('#contactForm #contactMessage').val();
      
            var data = {
               name: name,
               email: email,
               subject: subject,
               message: message,
            }
      
            // {
            //    method: "POST", 
            //    url:"http://localhost:3002/send", 
            //    data:  data
            //  }
                    axios.post('https://eric-sabag-resume.herokuapp.com/send', data).then((response)=>{
                        console.log(data)
                        if (response.data.status === 'success'){
                          alert("Message Sent."); 
                          setNewName("")
                          setNewEmail("")
                          setNewSubject("")
                          setNewMessage("")
                           $('#image-loader').fadeOut();
                           $('#message-warning').hide();
                           $('#contactForm').fadeOut();
                           $('#message-success').fadeIn();
                        }else{
                           alert("Message failed to send.")
                           $('#image-loader').fadeOut();
                           //$('#message-warning').html(msg);
                            $('#message-warning').fadeIn();
                        }
                      })
        })
        return false;
    }
    return(
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>envlope</span></h1>
                </div>

                    <p className="lead">{contactMessage}
                    <span className="warning">Please make sure that you fill all the fields</span></p>
            </div>
            <div className="row">
            <div className="eight columns">
                <form id="contactForm">

                    <fieldset>
                        <div>
                            <label>Name:</label><input type="text" value={newName} id= "contactName" name="contactName" onChange={handleNameChange}></input>
                        </div>
                        <div>
                            <label>Email:</label><input type="text" value={newEmail} id= "contactEmail" name="contactEmail" onChange={handleEmailChange}></input>
                        </div>
                        <div>
                            <label>Subject:</label><input type="text" value={newSubject} id= "contactSubject" name="contactSubject" onChange={handleSubjectChange}></input>
                        </div>
                        <div>
                            <label>Message:</label><textarea cols="50" rows="13" type="text" value={newMessage} size="60" id= "contactMessage" name="contactMessage" onChange={handleMessageChange}></textarea>
                        </div>
                        <div className="container">
                            <button className="submit" type="button" onClick={handleClick}>Submit</button>
                            <button type="reset" value="Reset" className="clear" onClick={handleReset}>Clear</button>
                        </div>
                    </fieldset>

                </form>
                <div className="message-warning" id="message-warning">There was an error. Please check that you filled all the inputs and the mail is valid!</div>
				<div id="message-success">
                    <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
				</div>
            </div>
                <aside className="details">
                <span className="mark">Contact Info</span><br/>
                {name} <br/>
                {city}  <br/>
                {phone} <br/>
                {email}
                </aside>
            </div>
        </section>
    )
}

export default Contact;
