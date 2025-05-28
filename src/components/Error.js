import { useRouteError } from "react-router"

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
        <h3>{error.status}</h3>
        <h4>{error.data}</h4>
    </div>
  )
}

export default Error