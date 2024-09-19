import React from 'react';

const Jobs = ({ result }) => {
  console.log(result);
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-4">{result.length} Jobs</h3>
        <h3></h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Jobs;