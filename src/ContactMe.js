import Footer from "./Footer";
import FormContactMe from "./FormContactMe";

function ContactMe() {
  return (
    <div className="flex flex-col lg:h-screen max-w-screen-lg  mt-24 lg:mt-0">
      <FormContactMe />
      <Footer />
    </div>
  );
}

export default ContactMe;
