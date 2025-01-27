import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 h-full flex flex-col justify-between">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Food Buddy Online
        </h1>
        <p className="text-lg text-center mb-6">
          Welcome to <span className="font-semibold">Food Buddy Online</span> –
          your trusted partner in discovering delicious food experiences!
          Whether you're craving a quick snack or a gourmet meal, we've got you
          covered.
        </p>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At Food Buddy Online, our mission is simple: to bring people closer
            to the food they love. We aim to make food discovery and delivery
            effortless and enjoyable, while supporting local restaurants and
            food vendors in connecting with a broader audience.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Curated restaurant listings to satisfy every craving.</li>
            <li>User-friendly interface for browsing menus and reviews.</li>
            <li>
              Convenient search filters for top-rated and nearby eateries.
            </li>
            <li>Exclusive offers and discounts for our loyal foodies.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="mb-6">
            Food Buddy Online is more than just a food delivery platform; it’s a
            community. We’re dedicated to connecting people through the love of
            food. With our reliable service and extensive options, we ensure
            every meal is a memorable one.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out
            to us anytime at{" "}
            <a
              href="mailto:support@foodbuddyonline.com"
              className="text-blue-600 underline"
            >
              support@foodbuddyonline.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
