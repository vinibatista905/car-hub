const CarCatalogueSkeleton = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container mb-6">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-48 bg-gray-200 rounded mt-2 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-60 rounded-xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
};

export default CarCatalogueSkeleton;
