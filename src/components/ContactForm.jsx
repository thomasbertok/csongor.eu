import { useState } from "react";
import emailjs from "@emailjs/browser";
import Check from "../assets/img/check.svg";

export const ContactForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [interests, setInterests] = useState([]);

  const [pending, setPending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setPending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("message sent successfully!");
          setMessageSent(true);
          setPending(false);
        },
        (error) => {
          console.error("FAILED: ", error);
          setPending(false);
          setHasErrors(true);
        }
      )
      .catch((error) => {
        console.error("ERROR: ", error);
        setHasErrors(true);
      });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((e) => e !== value));
    }
  };

  return (
    <>
      <h2 className="title-2 text-center blur-in">what are you interested in?</h2>

      <form
        name="contact-form"
        id="contact-form"
        method="post"
        action=""
        className="flex flex-col gap-6 sm:gap-8 lg:gap-24 items-center"
        onSubmit={handleFormSubmit}>
        <div className="checkbox-group text-xs md:text-md">
          <div className="label-check">
            <input
              type="checkbox"
              name="user_interface"
              id="user_interface"
              value="User Interface"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="user_interface">
              <img src={Check} alt="" />
              <span>user interface</span>
            </label>
          </div>
          <div className="label-check">
            <input
              type="checkbox"
              name="logo_identity"
              id="logo_identity"
              value="Logo & Identity"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="logo_identity">
              <img src={Check} alt="" />
              <span>logo & identity</span>
            </label>
          </div>
          <div className="label-check">
            <input
              type="checkbox"
              name="desktop_publishing"
              id="desktop_publishing"
              value="Desktop Publishing"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="desktop_publishing">
              <img src={Check} alt="" />
              <span>desktop publishing</span>
            </label>
          </div>
          <div className="label-check">
            <input
              type="checkbox"
              name="website_design"
              id="website_design"
              value="Website Design"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="website_design">
              <img src={Check} alt="" />
              <span>website design</span>
            </label>
          </div>
          <div className="label-check">
            <input
              type="checkbox"
              name="rebranding"
              id="rebranding"
              value="Rebranding"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="rebranding">
              <img src={Check} alt="" />
              <span>rebranding</span>
            </label>
          </div>
          <div className="label-check">
            <input
              type="checkbox"
              name="consultancy"
              id="consultancy"
              value="Consultancy"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="consultancy">
              <img src={Check} alt="" />
              <span>consultancy</span>
            </label>
          </div>
        </div>

        <div className="flex gap-6 sm:gap-8 md:gap-16 flex-wrap items-center justify-center">
          <div className="input-group">
            <input
              type="text"
              name="message_name"
              id="message_name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className={`${senderName !== "" ? "filled" : ""}`}
            />
            <label htmlFor="message_name">name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="message_email"
              id="message_email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className={`${senderEmail !== "" ? "filled" : ""}`}
            />
            <label htmlFor="message_email">email</label>
          </div>
        </div>

        <button className="btn btn-primary" type="submit" disabled={pending}>
          {!pending && <span>Send message</span>}
          {pending && <span>Sending...</span>}
        </button>

        {messageSent && <p>Message successfully sent. Thank you!</p>}
        {hasErrors && <p>Oopsie, some error occured.</p>}
      </form>
    </>
  );
};
