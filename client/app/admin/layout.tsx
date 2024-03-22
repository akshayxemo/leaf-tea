const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      layout
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
