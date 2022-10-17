import { useParams } from "react-router-dom";

function Bye() {
  const params = useParams();
  return <div className="App">{params.tgwing}</div>;
}

export default Bye;
