import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./components/LazyComponent"));

const App = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
