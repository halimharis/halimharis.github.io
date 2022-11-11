import Footer from "./Footer";
import FormContactMe from "./FormContactMe";

function ContactMe() {
  return (
    <div className="flex flex-col h-screen max-w-screen-lg px-4 sm:px-8">
      <FormContactMe />
      <Footer />
    </div>
  );
}

export default ContactMe;
