import { Link } from "react-router-dom";

function TestIndex() {
  return (
    <>
      <h1 className="text-cyan-400">Test Module</h1>
      <Link to="/login">login</Link>
    </>
  );
}

export default TestIndex;
