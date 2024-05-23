import { PropsWithChildren } from "react";

type ForProps = {
  collection: React.ReactNode[];
};

const For = (params: PropsWithChildren<ForProps>) => {
  return <div>For</div>;
};

export default For;
