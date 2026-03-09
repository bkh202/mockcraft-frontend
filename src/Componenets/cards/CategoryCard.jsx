import { useNavigate } from "react-router-dom";

// ✅ FIX: Link → useNavigate
// Link = <a> tag banata hai
// Agar parent mein bhi Link/a ho → nested <a> error
// useNavigate = programmatic navigation, koi <a> tag nahi
function CategoryCard({ title, count, color = "bg-blue-600", link = "#" }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation(); // parent onClick se conflict nahi hoga
    if (link && link !== "#") {
      navigate(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow hover:border-blue-300 cursor-pointer"
    >
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <span className="text-white text-xl">
          {title.includes("Aptitude")    ? "📝" :
           title.includes("Goverment")   ? "💰" :
           title.includes("Engineering") ? "🔧" : "🏥"}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{count}</p>

      <div className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-lg transition-colors text-center">
        Start Practice
      </div>
    </div>
  );
}

export default CategoryCard;