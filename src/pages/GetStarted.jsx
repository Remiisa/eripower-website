import emailjs from "@emailjs/browser";

export default function GetStarted() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aerrm7n",        // service ID kau
      "template_28vmqqh",  // tukar nanti
      e.target,
      "R7fysxNkmuh-9Ac17"    // tukar nanti
    )
    .then(() => {
      alert("Berjaya hantar!");
    })
    .catch(() => {
      alert("Gagal hantar");
    });
  };

  return (
    <div className="pt-28 px-6 text-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Get Started</h1>

      {/* FORM */}
      <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">

        <input 
          name="name"
          className="w-full p-3 border rounded 
          bg-white text-black 
          dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Name" 
          required 
        />

        <input 
          name="contact" 
          className="w-full p-3 border rounded 
          bg-white text-black 
          dark:bg-gray-800 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Contact"
        />

        <input 
          name="email"
          type="email"
          className="w-full p-3 border rounded 
          bg-white text-black 
          dark:bg-gray-800 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Email" 
          required
        />

        <textarea 
          name="message" 
          className="w-full p-3 border rounded h-32 
          bg-white text-black 
          dark:bg-gray-800 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Message"
          ></textarea>

        <button 
          type="submit"
          className="bg-gradient-to-r from-red-500 to-red-700
          text-white px-5 py-2 rounded-xl
          hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
          transition"
          >
            Submit
        </button>

      </form>
    </div>
  );
}