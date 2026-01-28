export default function Loading() {
  return (
    <div className="mt-12 mb-12 padding-x padding-y max-width">
      <h2 className="text-xl font-semibold mb-4">Loading cars...</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-60 rounded-xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
