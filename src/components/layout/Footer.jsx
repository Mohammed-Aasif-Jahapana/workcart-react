const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              WorkCart
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Your one-stop destination for electronics, fashion,
              beauty, groceries and much more. Shop smarter with
              WorkCart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Today's Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Customer Support
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-sm">
              <li>📍 Chennai, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@workcart.com</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-600"
              >
                🌐
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-600"
              >
                📘
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-600"
              >
                📸
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-600"
              >
                🐦
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} WorkCart. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;