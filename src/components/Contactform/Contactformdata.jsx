import Button from "../Button/Button";
import styles from "./Contactformdata.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const Contactformdata = () => {

const[name,setName] = useState("xyz");
const[email,setemail] = useState("xyz@gmail.com");
const[text,settext] = useState("xyz got placement");

const onsubmit = (event) =>{
  event.preventDefault();

  setName(event.target[0].value);
  setemail(event.target[1].value);
  settext(event.target[2].value);
}



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button 
          isOutline={true}
          text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

          <form onSubmit={onsubmit}>
          <div className={styles.form_control}>
            
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          
          </div>

          <div className={styles.form_control}>
            
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />
          
          </div>

          <div className={styles.form_control}>
            
          <label htmlFor="text">Text</label>
          <textarea name="text" rows={8} />
          
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",}
          }>
          <Button text="Submit" />
          </div>
          
          <div>{name + " " + email + " " + text}</div>
          </form>

      </div>
      <div className={styles.contact_image}>
<img src="images/Service 24_7-pana 1.svg" alt="contact_img" />
      </div>
    </section>
  )
}

export default Contactformdata;