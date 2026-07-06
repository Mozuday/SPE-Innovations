const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <h3 className="text-lg font-bold text-white">
              SPE Innovations
            </h3>

            <p className="text-sm text-slate-400">
              Building Websites, Applications & Careers.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} SPE Innovations.
            All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;