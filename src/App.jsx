import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value || "",   // optional
      businessName: form.businessName.value,
      city: form.city.value,
    };

    try {
      await fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("Thank you! We will contact you soon.");
      form.reset();
    } catch (error) {
      alert("Error! Try again.");
      console.error(error);
    }

    setLoading(false);
  };



  return (
    <div className="font-sans p-6">

      {/* HEADER */}
      <header className="p-6 bg-black text-white">
        <h1 className="text-3xl font-bold">Digital Reputation Management</h1>
      </header>

      {/* TAGLINE */}
      <section className="p-12 text-center bg-gray-100">
        <h2 className="text-2xl">
          Grow your business with Google Business Profile management.
        </h2>
      </section>

      {/* SERVICES (you will add later) */}
      {/* WHY CHOOSE US */}
      <section className="p-10 bg-white">
        <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>Increase visibility on Google Maps</li>
          <li>Daily support for GBP changes & updates</li>
          <li>Organic lead improvement without ads</li>
          <li>Real-time performance tracking</li>
        </ul>
      </section>

      {/* CONTACT CTA */}
      <section className="p-12 text-center bg-black text-white">
        <h3 className="text-2xl font-bold mb-2">Let's Grow Your Business</h3>
        <p className="mb-4">We help businesses dominate local search and drive real customers.</p>
        <a href="#leadForm" className="bg-white text-black px-6 py-3 font-semibold">
          Get Started
        </a>
      </section>


      {/* FORM */}
      <section className="p-10 bg-gray-50">
        <h3 className="text-xl font-semibold mb-4">Get a Free Consultation</h3>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Name" className="border p-2 w-full mb-2" />
          <input name="phone" placeholder="Phone" className="border p-2 w-full mb-2" />
          <input name="email" placeholder="Email" className="border p-2 w-full mb-2" />
          <input name="businessName" placeholder="Business Name" className="border p-2 w-full mb-2" />
          <input name="city" placeholder="City" className="border p-2 w-full mb-2" />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 w-full mt-2 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>


        </form>
      </section>

    </div>
  );
}

export default App;
