export default function OrdersLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-400">Loading your orders...</span>
      </div>
    </div>
  );
}