// components
import Error from "../Error/Error";

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Error onAction={resetErrorBoundary} text={error.message} />
);

export default ErrorFallback;
