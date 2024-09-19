import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-1">
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Subscribe to receive the latest job openings directly in your inbox.
          Be the first to know about new opportunities that match your skills
          and interests.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={'subscribe'}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* Get noticed faster */}

      <div className="mt-24">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-1">
          <FaRocket /> Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Upload your resume to get noticed by top employers faster. Highlight
          your skills and experience to stay ahead in the job market.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={'Upload your resume'}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;