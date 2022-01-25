import React from "react";
import firebase from '../FirebaseConfig';

const Mobile = () =>{
    const contactForm = firebase.database().ref('contactMessages');
    const contactFormSubmit = () => {
        var name = getElementVal('nameField')
        var email = getElementVal('emailField')
        var msg = getElementVal('msgcontent')

        saveMessages(name, email, msg);        
    };
    const saveMessages = (name, email, msg) =>{
        var newContactFormRef = contactForm.push();
        newContactFormRef.set({
            name: name,
            email: email,
            msg: msg,
        })
    }
    const getElementVal = (id) => {
        return document.getElementById(id).value;

    };
    return(
        <div>
            <div className="dial">
                <h3 className="no">Call Now: <a href="tel:+91 9876543210">+919876543210</a></h3>
            </div>
            <div>
            <section className="development-cards">
     <div class="section-containerrr">
         <div class="columnsss contenttt ">
            <div class="content-containerrr">
               <h6>Mobile Development</h6>
               <h5>Teacher</h5>
               <p>
               Java, XML, Firebase, API<br/>
               12 weeks, 2 Projects
               </p>
               <a href="">$40</a>
            </div>
         </div>
         <div class="colsss imggg"><img src="img/web.jpg"style={{width:"90%"}} />
            &nbsp;
         </div>
      </div>
      <div >
          
</div>

     </section>
            </div>
        <div class="container">
        <section className="contact section" id="contact">
            
            <h2>Want Free Classes...</h2>
            <div className="contactContainer bd_grid">
                <form id="contact_form" className="contact_form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" id="nameField" className="contact_input"/>
                    <input type="text" placeholder="Email" id="emailField" className="contact_input"/>
                    <textarea id="msgcontent" cols="0" rows="10" className="contact_input"></textarea>
                    <input type="submit" value="Send" className="button contact" onClick={contactFormSubmit}/>
                    
                </form>
            </div>

        </section>
        </div>
        <div className="blue"></div>
        </div>
    );
}
export default Mobile;