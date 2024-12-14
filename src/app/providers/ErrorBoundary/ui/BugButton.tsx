import React from "react";
import Button from "shared/ui/AppLink/Button/Button";

const BugButton = () => {
  const [error, setError] = React.useState(false);

  const throwError = () => setError(true);

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwError}>throw error</Button>;
};

export default BugButton;
