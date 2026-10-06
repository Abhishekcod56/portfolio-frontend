const SectionTitle = ({ title, description }) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;