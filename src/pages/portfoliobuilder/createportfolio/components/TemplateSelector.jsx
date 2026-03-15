const templates = [
  { id: 4, layout: "modern", name: "Modern", description: "Clean cards & gradients", thumbnail: "/images/modern.png" },
  { id: 5, layout: "minimal", name: "Minimal", description: "Simple & elegant", thumbnail: "/images/minimal.png" },
  { id: 6, layout: "creative", name: "Creative", description: "Bold & artistic", thumbnail: "/images/creative.png" },
  { id: 7, layout: "sidebar", name: "Sidebar", description: "Fixed sidebar layout", thumbnail: "/images/sidebar.png" },
  { id: 8, layout: "cyber", name: "Cyberpunk", description: "Hacker terminal timeline", thumbnail: "/images/cyber.png" },
  { id: 9, layout: "editorial", name: "Editorial", description: "Notion style grid", thumbnail: "/images/editorial.png" },
  { id: 10, layout: "bento", name: "Bento Box", description: "Dense block-style UI", thumbnail: "/images/bento.png" },
  { id: 11, layout: "neumorphic", name: "Premium", description: "Vibrant gradient glass", thumbnail: "/images/neumorphic.png" },
  { id: 12, layout: "holographic", name: "Holographic", description: "Spatial Apple-vision UI", thumbnail: "/images/holographic.png" },
  { id: 13, layout: "vibrant", name: "Vibrant Startup", description: "Modern colorful gradients & premium glass UI", thumbnail: "/images/vibrant.png" },
  { id: 14, layout: "synthwave", name: "Synthwave Retro", description: "80s neon grid, retro arcade vibes & glitch effects", thumbnail: "/images/synthwave.png" },
{ id: 15, layout: "matrix", name: "Matrix Terminal", description: "Hacker green phosphor, CRT scanlines & typewriter UI", thumbnail: "/images/matrix.png" },
{ id: 16, layout: "luxury", name: "Luxury Gold", description: "Dark editorial, shimmer gold accents & serif elegance", thumbnail: "/images/luxury.png" },
{ id: 17, layout: "space", name: "Deep Space", description: "Live starfield canvas, nebula blobs & cosmic orbit UI", thumbnail: "/images/space.png" },
{ id: 18, layout: "brutal", name: "Brutal Type", description: "Raw typographic brutalism, noise texture & bold contrasts", thumbnail: "/images/brutal.png" },
{ id: 19, layout: "aurora", name: "Aurora Lights", description: "Northern lights animated blobs & conic gradient glow", thumbnail: "/images/aurora.png" },
{ id: 20, layout: "tokyoneon", name: "Tokyo Neon", description: "Japanese street neon, kanji decor & rain drop effects", thumbnail: "/images/tokyoneon.png" },
{ id: 21, layout: "paper", name: "Paper Craft", description: "Warm paper texture, sticky notes & handwritten fonts", thumbnail: "/images/paper.png" },
{ id: 22, layout: "artdeco", name: "Art Deco", description: "1920s geometric luxury, gold diamonds & spinning ornaments", thumbnail: "/images/artdeco.png" },
{ id: 23, layout: "quantum", name: "Quantum", description: "Live particle canvas, physics connections & scan line UI", thumbnail: "/images/quantum.png" },
];

export default function TemplateSelector({ selectedTemplate, onSelect }) {
  return (
    <div className="mt-12 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
        Choose a Design Template
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((template) => {
          const imageUrl = template.thumbnail || "https://placehold.co/600x400/e2e8f0/475569?text=Preview";
          return (
            <div
              key={template.id}
              onClick={() => onSelect(template.id)}
              className={`
                relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 flex flex-col bg-white border-2
                ${selectedTemplate === template.id
                  ? "border-indigo-600 shadow-lg transform -translate-y-1"
                  : "border-gray-200 hover:border-indigo-300 hover:shadow-md hover:-translate-y-1"
                }
              `}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-3 right-3 z-20 bg-indigo-600 text-white rounded-full p-1.5 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              <div className="h-40 w-full bg-gray-50 relative overflow-hidden border-b border-gray-100">
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-indigo-900/10 z-10"></div>
                )}
                <img
                  src={imageUrl}
                  alt={`${template.name} preview`}
                  className={`w-full h-full object-cover transition-transform duration-500 ${selectedTemplate === template.id ? 'scale-105' : 'group-hover:scale-110'
                    }`}
                />
              </div>
              <div className="p-4 flex flex-col grow">
                <h4 className={`font-bold text-lg mb-1 ${selectedTemplate === template.id ? 'text-indigo-700' : 'text-gray-800'}`}>
                  {template.name}
                </h4>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {template.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}