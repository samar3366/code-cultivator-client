import React from "react";

import Layout from "./layout";
import { Problem } from "./pages";

const Coder: React.FC<any> = (props) => {
  return (
    <Layout>
      <Problem />
    </Layout>
  );
};

export default Coder;
