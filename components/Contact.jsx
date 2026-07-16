import Resume from "../src/assets/files/SudipMandalResume.pdf";

const contactCards = [
  {
    label: "Phone",
    value: "+91 7003071143",
    href: "tel:+917003071143",
    accent: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    )
  },
  {
    label: "Email",
    value: "mandalsudipoffice@gmail.com",
    href: "mailto:mandalsudipoffice@gmail.com",
    accent: "from-purple-500 to-pink-500",
    glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
  },
  {
    label: "Location",
    value: "Kolkata, India",
    href: "https://maps.google.com/?q=Kolkata,India",
    accent: "from-amber-500 to-orange-500",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] dark:hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
    filled: true,
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    )
  }
];

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-300/20 dark:bg-pink-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="relative flex justify-center text-5xl sm:text-6xl md:text-8xl font-extenda40 mb-10 sm:mb-14 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        ` CONTACT `
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {contactCards.map((card) => {
            const isExternal = card.href && (card.href.startsWith("http") || card.href.startsWith("tel") || card.href.startsWith("mailto"));
            const Comp = card.href ? "a" : "div";
            return (
            <Comp
              key={card.label}
              {...(card.href ? { href: card.href } : {})}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex flex-col backdrop-blur-md bg-white/60 dark:bg-gray-700/20 border border-white/30 dark:border-gray-600/10 rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.glow}`}
            >
              <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-2xl bg-white/70 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 mb-4 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:group-hover:shadow-[0_0_20px_rgba(96,165,250,0.25)] group-hover:bg-blue-50/80 dark:group-hover:bg-gray-600/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/20">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" {...(card.filled ? { fill: "currentColor" } : { fill: "none", stroke: "currentColor" })} viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {card.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 break-all">
                  {card.value}
                </p>
              </div>
            </Comp>
          );
          })}
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-10 sm:mt-14">
          {[
            {
              href: "https://www.linkedin.com/in/sudipmandal/",
              hoverBg: "hover:bg-blue-500/15 dark:hover:bg-blue-400/15",
              hoverText: "hover:text-blue-500 dark:hover:text-blue-400",
              glow: "hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_16px_rgba(96,165,250,0.4)]",
              path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            },
            {
              href: "https://github.com/Sudipoffice",
              hoverBg: "hover:bg-gray-500/15 dark:hover:bg-gray-300/15",
              hoverText: "hover:text-gray-800 dark:hover:text-gray-200",
              glow: "hover:shadow-[0_0_16px_rgba(107,114,128,0.5)] dark:hover:shadow-[0_0_16px_rgba(209,213,219,0.3)]",
              path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            },
            {
              href: "https://api.whatsapp.com/send?phone=917003071143",
              hoverBg: "hover:bg-green-500/15 dark:hover:bg-green-400/15",
              hoverText: "hover:text-green-500 dark:hover:text-green-400",
              glow: "hover:shadow-[0_0_16px_rgba(34,197,94,0.5)] dark:hover:shadow-[0_0_16px_rgba(74,222,128,0.4)]",
              path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }
          ].map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/70 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm border border-white/30 dark:border-gray-600/20 ${social.hoverBg} ${social.hoverText} ${social.glow}`}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Resume Download */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <a
            href={Resume}
            download="SudipMandal_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
