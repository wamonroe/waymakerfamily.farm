import Button from "@/components/Button";

export type HttpErrorProps = {
  status: string | undefined;
  message: string;
  details: string;
};

const HttpError = ({ status, message, details }: HttpErrorProps) => {
  return (
    <div className="text-center my-16">
      <p className="text-2xl font-semibold sm:text-3xl">{status}</p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl text-gray-900 dark:text-white">
        {message}
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">{details}</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button to="/">Take me out of here!</Button>
      </div>
    </div>
  );
};

export default HttpError;
