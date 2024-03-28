const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="h-screen flex justify-center items-center gap-3">
        {children}
      </div>
    </div>
  );
};

export default layout;
