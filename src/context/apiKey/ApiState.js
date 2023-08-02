import ApiContext from "./apiContext";

const ApiState = (props) => {
  const host = process.env.REACT_APP_API_HOST;

  return (
    <ApiContext.Provider value={host}>{props.children}</ApiContext.Provider>
  );
};

export default ApiState;
