function About({ data }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-10">
      <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
        <span className="w-1 h-8 bg-black rounded-full"></span>
        About Me
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {data.summary}
      </p>
    </div>
  );
}

export default About;