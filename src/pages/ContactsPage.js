import ContactList from "../components/contactComponents/ContactList";

const ContactsPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-12"></div>
        <div className="col-lg-8 col-md-8 col-12">
          <ContactList />
        </div>
        <div className="col-lg-2 col-md-2 col-12"></div>
      </div>
    </section>
  );
};

export default ContactsPage;
