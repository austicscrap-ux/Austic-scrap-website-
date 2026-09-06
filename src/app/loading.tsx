export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-[#127749]/20 border-t-[#127749] rounded-full animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
