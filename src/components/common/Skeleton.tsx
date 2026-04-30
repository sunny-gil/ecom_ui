export const CardSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 animate-pulse flex flex-col h-[380px]">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 shrink-0"></div>
        
        {/* Content Placeholder */}
        <div className="flex-1 flex flex-col">
          {/* Badge/Category */}
          <div className="h-4 bg-gray-200 rounded-full w-1/3 mb-3"></div>
          
          {/* Title */}
          <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
          
          <div className="mt-auto">
            {/* Price / Meta */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-50">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-8 bg-gray-200 rounded-full w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const DetailSkeleton = () => (
  <div className="min-h-screen bg-gray-50 py-12 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="h-6 bg-gray-200 rounded w-24 mb-8"></div>
      
      <div className="flex flex-col md:flex-row gap-12 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
        {/* Left Side: Large Image */}
        <div className="md:w-1/2">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-2xl"></div>
        </div>
        
        {/* Right Side: Content */}
        <div className="md:w-1/2 flex flex-col pt-2">
          {/* Meta/Badge */}
          <div className="flex gap-2 mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-24"></div>
            <div className="h-6 bg-gray-200 rounded-full w-32"></div>
          </div>
          
          {/* Title */}
          <div className="h-10 bg-gray-300 rounded w-full mb-3"></div>
          <div className="h-10 bg-gray-300 rounded w-3/4 mb-6"></div>
          
          {/* Price */}
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
          
          {/* Description Lines */}
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mt-auto">
            <div className="h-12 bg-gray-300 rounded-xl w-1/2"></div>
            <div className="h-12 bg-gray-200 rounded-xl w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="w-full h-screen min-h-[600px] bg-gray-50 flex flex-col md:flex-row overflow-hidden relative">
    {/* Left Side (Text content) */}
    <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-20 z-10 animate-pulse pt-20 md:pt-0">
      <div className="h-4 bg-gray-200 rounded w-32 mb-6"></div>
      <div className="h-14 md:h-20 bg-gray-300 rounded w-full mb-4"></div>
      <div className="h-14 md:h-20 bg-gray-300 rounded w-4/5 mb-8"></div>
      
      <div className="space-y-3 mb-10">
        <div className="h-5 bg-gray-200 rounded w-full"></div>
        <div className="h-5 bg-gray-200 rounded w-5/6"></div>
      </div>
      
      <div className="flex gap-4">
        <div className="h-12 bg-gray-300 rounded-xl w-40"></div>
        <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
      </div>
      
      <div className="flex gap-8 mt-12">
        <div className="h-10 bg-gray-200 rounded w-20"></div>
        <div className="h-10 bg-gray-200 rounded w-20"></div>
        <div className="h-10 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
    
    {/* Right Side (Image area) */}
    <div className="hidden md:flex w-1/2 h-full items-center justify-center relative animate-pulse">
      {/* Circle Placeholder */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gray-200/50"></div>
      {/* Main Image Placeholder */}
      <div className="relative z-10 w-[400px] h-[400px] bg-gray-300 rounded-2xl rotate-3"></div>
      {/* Floating Card Placeholders */}
      <div className="absolute top-1/4 right-20 w-48 h-24 bg-white rounded-xl shadow-sm z-20 border border-gray-100"></div>
      <div className="absolute bottom-1/4 left-10 w-56 h-20 bg-white rounded-xl shadow-sm z-20 border border-gray-100"></div>
    </div>
  </div>
);