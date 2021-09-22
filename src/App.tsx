import * as React from 'react';
import { HeartIcon } from '@heroicons/react/solid';

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-1 items-center justify-center bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
      <div className="flex items-center">
        <h1 className="text-6xl font-bold text-white mr-4">
          Morphosis React Template
        </h1>
        <HeartIcon className="h-10 w-10 text-white" />
      </div>
    </div>
  );
};

export default App;
