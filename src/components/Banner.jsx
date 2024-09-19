import { FiMapPin, FiSearch } from 'react-icons/fi';

const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Where new <span className="text-blue">careers</span> are born
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Every career is a journey, and the right opportunity is the first step.
        Whether you're a graduate, experienced professional, or seeking a
        change, we connect you with the right jobs and employers. Start here,
        and let your career grow with us.
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-1 gap-4">
          <div className="flex md:rounded-s-md shadow-sm ring ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What postion you're looking for?"
              onChange={handleInputChange}
              value={query}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex md:rounded-s-none shadow-sm ring ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;