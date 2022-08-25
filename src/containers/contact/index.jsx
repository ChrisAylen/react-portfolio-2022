import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import PageFooterContent from "../../components/pageFooterContent";
import { RiContactsFill } from "react-icons/ri";
import "./styles.scss";

//TODO: Make the contact us form do something
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>
        <div className="contact__content__form">
          <div className="contact__content__form__controlsWrapper">
            <div className="nameWrapper">
              <input name="name" type="text" className="inputName" />
              <label htmlFor="name" className="nameLabel">
                Name
              </label>
            </div>

            <div className="emailWrapper">
              <input name="email" type="text" className="inputEmail" />
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
            </div>
            <div className="descriptionWrapper">
              <textarea
                name="description"
                type="text"
                className="inputDescription"
                rows={"5"}
                style={{ resize: "none" }}
              />
              <label htmlFor="edescription" className="descriptionLabel">
                Description
              </label>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
