const DarkLightMode = ({theme}) => {
  const [isDark, setIsDark] = theme

  const handleToggle = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", !isDark);
  };

  return (
    <div className="flex justify-center items-center">
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="relative w-[52px] sm:w-[56px] h-[26px] sm:h-[28px] rounded-full transition-all duration-500 peer-checked:bg-gradient-to-r peer-checked:from-blue-900/60 peer-checked:to-purple-900/60 bg-gradient-to-r from-amber-300/70 to-sky-300/70 backdrop-blur-sm border border-white/30 dark:border-white/10 shadow-inner">
          <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`} style={{
            boxShadow: isDark ? 'inset 0 0 12px rgba(59,130,246,0.15)' : 'none'
          }} />
          <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`} style={{
            boxShadow: !isDark ? 'inset 0 0 16px rgba(251,191,36,0.18)' : 'none'
          }} />
          <div className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full flex items-center justify-center transition-all duration-500 ${
            isDark
              ? 'translate-x-[26px] sm:translate-x-[28px] bg-gray-800 shadow-[0_0_8px_rgba(99,102,241,0.3)]'
              : 'translate-x-0 bg-white shadow-[0_0_12px_rgba(251,191,36,0.35)]'
          }`}>
            {isDark ? (
              <svg className="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default DarkLightMode
