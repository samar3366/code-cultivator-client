import React from "react";
import { Container } from "react-bootstrap";
import MonacoEditor from "react-monaco-editor";

const Problem: React.FC<any> = (props) => {
  const options = {
    selectOnLineNumbers: true,
  };
  const code = "// type your code...";
  return (
    <Container>
      <MonacoEditor
        width="800"
        height="500"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={() => console.log("change")}
      />
    </Container>
  );
};

export default Problem;
