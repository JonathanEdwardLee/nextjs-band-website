import React from "react";

const GamesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Games
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          We're working on something exciting. Check back later!
        </p>
      </div>
    </div>
  );
};

export default GamesPage;
