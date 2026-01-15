export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-valentine-light to-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-8xl mb-6 loading-heart">❤️</div>
        <h2 className="text-3xl font-heading font-bold text-valentine-red mb-3">
          Mangalam Bakeries
        </h2>
        <p className="text-gray-600 mb-6">Loading delicious cakes...</p>
        
        {/* Loading Animation */}
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-valentine-red rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="w-3 h-3 bg-valentine-pink rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-valentine-gold rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}
