import Footer from "./Footer";
import FormContactMe from "./FormContactMe";

function ContactMe() {
  return (
    <div className="bg-whitebrown">
      <div className="w-full flex flex-col items-center pt-12">
        <FormContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default ContactMe;
