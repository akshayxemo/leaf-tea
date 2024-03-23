import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container pb-20 pt-36">{children}</div>;
};

export default layout;
