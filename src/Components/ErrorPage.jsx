import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-tahiti">
      <h1 className="text-5xl mb-5">Oops!</h1>
      <p className="text-3xl mb-4 italic">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-2xl text-dark-peach">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
