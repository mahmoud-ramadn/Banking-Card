export default function Footer() {
  return (
    <div className="mx-auto px-7 pt-24 text-white md:max-w-[1420px] md:px-11 md:pt-48">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-y-9 md:mb-32">
        <div className="space-y-8 md:max-w-80">
          <img src="logo.webp" alt="logo" className="max-w-30" />
          <p className="text-sm text-white/55">
            We build readymade websites, mobile applications, and elaborate online business
            services.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:basis-3/5 md:grid-cols-2 md:justify-around  justify-between md:p-6 lg:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="text-white/55">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">SERVICES</h3>
            <ul className="text-white/55">
              <li>Mobile Banking App</li>
              <li>NetBanking</li>
              <li>ATM funds transfer</li>
              <li>Cash/Change</li>
              <li>Auto-debit facility</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">INSIGHTS</h3>
            <ul className="text-white/55">
              <li>News & Blogs</li>
              <li>Privacy Policy</li>
              <li>Best Offers</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="border-t-1 border-white pt-8 text-center font-medium text-white">
        © 2024- OPUL
      </p>
    </div>
  );
}
