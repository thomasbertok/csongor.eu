import { ContactForm } from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <div className="page page-contact">
      <h2 className="page-title hidden md:flex">contact</h2>
      <div className="page-content flex items-start md:items-center">
        <div className="flex flex-col gap-8 md:gap-24 flex-1 flex-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
