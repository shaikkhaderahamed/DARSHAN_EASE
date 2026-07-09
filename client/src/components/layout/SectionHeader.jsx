export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-head">
      <h2 className="title mb-4">{title}</h2>
      <div className="section-divider"></div>
      {subtitle && (
        <p className="subtitle mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
