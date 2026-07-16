function HeroSection({ data }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-4">
          {data.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 font-light max-w-2xl mx-auto">
          {data.title}
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <span className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium border border-gray-200">
            Available for work
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;