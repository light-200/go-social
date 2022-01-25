import { useParams } from "react-router-dom";

export default function User() {
  let { user } = useParams();

  return (
    <div>
      <h1>{user}</h1>
      <div>this is yet to be made</div>
    </div>
  );
}
