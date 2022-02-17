import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { getList } from "../services/api";

const Home = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);
  const [companyShareId, setCompanyShareId] = useState("");
  const [boid, setBoid] = useState("");

  useEffect(() => {
    getList().then((res) => {
      setList(res.body);
      setData(res);
    });
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        companyShareId: companyShareId,
        boid: boid,
      }),
    );

    try {
      let res = await fetch(
        "https://nepshare-api.herokuapp.com/api2?id=21&boid=1301760000388241",
        {
          method: "POST",
          // mode: "no-cors",
          // cache: "no-cache",
          // credentials: "same-origin",
          // redirect: "follow",
          // referrer: "no-referrer",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            companyShareId: companyShareId,
            boid: boid,
          }),
        },
      );

      //   console.log(res);
      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 200) {
        setCompanyShareId("");
        setBoid("");
        setMessage(res.message);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100 drop-shadow-md'>
        <div className='px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3'>
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-20 h-20 text-blue-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>
          </div>
          <h3 className='text-2xl font-bold text-center'>Join us</h3>

          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <div>
                <select
                  className='form-select w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                  aria-label='Default select example'
                  onChange={(e) => setCompanyShareId(e.target.value)}>
                  {data.success === true ? (
                    list.map((item, i) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {`${item.name}  (${item.scrip}) `}
                        </option>
                      );
                    })
                  ) : (
                    <option value='1'>Loading...</option>
                  )}
                </select>
              </div>
              <div className='mt-4'>
                <label className='block' htmlFor='boid'>
                  BOID
                </label>
                <input
                  type='number'
                  value={boid}
                  onChange={(e) => setBoid(e.target.value)}
                  placeholder='Enter 16-digit BOID'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                />
              </div>

              <div className='flex'>
                <button
                  type='submit'
                  className='w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                  value='submit'>
                  Check Result
                </button>
              </div>

              <div className='mt-6 text-grey-dark'>
                <span style={{ color: "red" }}>{message}</span>
              </div>

              <div className='mt-6 text-grey-dark'>
                Do you want to mult check?
                <a className='text-blue-600 hover:underline' href='#'>
                  Add mult BOID.
                </a>
              </div>

              <div className='floaters'>
                <div className='floating__card' style={{ display: "none" }}>
                  <a className='bulk__check' href='/bulk'>
                    Bulk Check
                  </a>
                  <a className='saved__accounts' href='#'>
                    Saved Accounts
                  </a>
                </div>
                <div
                  className='floating__button bg-blue-600 rounded-lg hover:bg-sky-700'
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(45, 45, 216)",
                  }}>
                  <Link to='/bulk'>+</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
