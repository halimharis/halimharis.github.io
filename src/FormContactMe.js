import mailbox from "./images/mailbox.png";
import emailjs from "emailjs-com";

function FormContactMe() {
  // let [name, setName] = useState("");

  // useEffect(() => {
  //   console.log("Search message inside useEffect: ", name);
  // }, [name]);

  // function handleChange(event) {
  //   setName(event.target.value);
  // }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmtuyon",
        "template_9qgz0g4",
        e.target,
        "ibyqNNhAbfoTdnxbQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="flex flex-col lg:flex-row lg:items-center mx-8 md:mx-32 lg:mx-0 h-full">
      <div className="flex flex-col text-xl font-black pb-12 lg:pb-0 lg:w-3/5">
        <h1 className="lg:text-left lg:text-2xl text-center">
          How Can I Help You Today?
        </h1>
        <p className="font-normal text-base lg:text-xl text-center lg:text-left">
          ingin bekerja bersama, bertanya atau apapun itu bisa langsung
          menghubungi saya dengan form berikut ini, atau dengan kontak pada
          bagian bawah
        </p>
        <img className="w-48 mt-24 self-center" alt="" src={mailbox} />
      </div>
      <form
        onSubmit={sendEmail}
        className="flex flex-col font-coba pb-12 lg:w-2/5 lg:pl-12"
      >
        <label className="w-max text-blackbrown pl-2">Nama</label>
        <input
          name="name"
          placeholder="Abdul Haris Halim"
          className="p-4 font-coba rounded-xl mb-4"
          type="text"
        />
        <label className="w-max text-blackbrown pl-2">Email Anda</label>
        <input
          name="email"
          placeholder="example@gmail.com"
          className="p-4 font-coba rounded-xl mb-4"
          type="text"
        />
        <label className="w-max text-blackbrown pl-2">Pesan Anda</label>
        <textarea
          name="isi"
          placeholder="Aku ingin bekerja sama, kira kira bisa kapan?"
          className="p-4 h-48 font-coba rounded-xl mb-4"
          type="text"
        />
        <button
          type="submit"
          className="border-2 border-darkbrown py-2 rounded-xl hover:bg-darkbrown hover:text-whitebrown"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default FormContactMe;
