type TechnologyBoxProps = {
  children: React.ReactNode;
};

const TechnologyBox: React.FC<TechnologyBoxProps> = ({
  children,
}) => {
  return (
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
      {children}
    </div>
  );
};

export default TechnologyBox;
