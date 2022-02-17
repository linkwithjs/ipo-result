import React, { useState, useEffect } from "react";

const Bulk = () => {
  const [boid, setBoid] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // storing input name
    const saved = localStorage.getItem(boid);
    if (saved) {
      setData(saved);
    }
  }, [boid]);

  console.log(data);

  const handleChange = (e) => {
    localStorage.setItem("boid", JSON.stringify(boid));
    // alert("saved");
  };

  return (
    <>
      <div className='h-100 w-full flex items-center justify-center bg-teal-lightest font-sans'>
        <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
          <form>
            <div className='mb-4'>
              <h1 className='text-grey-darkest'>BOID List</h1>
              <div className='flex mt-4'>
                <input
                  type='number'
                  className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
                  placeholder='Add 16-Digit BOID'
                  onChange={(e) => setBoid(e.target.value)}
                />
                <button
                  className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-sky-600 hover:bg-sky-700'
                  onClick={handleChange}>
                  Add
                </button>
              </div>
            </div>
            <div>
              <div className='flex mb-4 items-center'>
                <p className='w-full text-grey-darkest'>
                  Add another component to Tailwind Components
                </p>

                <button className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red bg-sky-600 hover:bg-sky-700'>
                  Remove
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Bulk;
