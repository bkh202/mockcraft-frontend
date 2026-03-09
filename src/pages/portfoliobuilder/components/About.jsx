function About({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
        <span className="w-1 h-8 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></span>
        About Me
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        {data.summary}
      </p>
    </div>
  );
}

export default About;