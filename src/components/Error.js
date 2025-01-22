import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorElement = useRouteError();
  return <div>{errorElement}</div>;
};

export default Error;
