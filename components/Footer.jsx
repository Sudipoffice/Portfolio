const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 overflow-hidden">
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 bg-[length:200%_100%] animate-shimmer" />

      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 order-3 sm:order-1">
            &copy; {year}{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              Sudip Mandal
            </span>
            . All rights reserved.
          </p>

          <p className="text-[10px] sm:text-xs order-1 sm:order-3 tracking-wider uppercase font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Designed &amp; Built by Sudip Mandal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
