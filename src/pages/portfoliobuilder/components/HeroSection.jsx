function HeroSection({ data }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 p-1">
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-pink-600 mb-4">
            {data.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {data.title}
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;