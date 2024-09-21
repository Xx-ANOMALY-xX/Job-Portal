import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.skills = selectedOptions;
    console.log(data);
    try {
      const response = await fetch('http://localhost:8000/api/jobs/post-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Job created successfully:', result);
        alert('Job created successfully!');
        navigate('/my-job');
      } else {
        console.error('Failed to create job:', result.message);
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Error creating job. Please try again later.');
    }
  };

  const options = [
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Express', label: 'Express' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'Next.js', label: 'Next.js' },
    { value: 'Figma', label: 'Figma' },
    { value: 'UI Design', label: 'UI Design' },
    { value: 'UX Design', label: 'UX Design' },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={'Web developer'}
                {...register('jobTitle')}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register('companyName')}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Mininmum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register('minPrice')}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register('maxPrice')}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register('salaryType')} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register('jobLocation')}
                className="create-job-input"
              />
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-09-20"
                {...register('postingDate')}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register('experienceLevel')}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value="No Experience">No Experience</option>
                <option value="Any Experience">Any experience</option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect
              options={options}
              defaultValue={selectedOptions}
              {...register('skills')}
              onChange={setSelectedOptions}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL"
                {...register('companyLogo')}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register('employmentType')}
                className="create-job-input"
              >
                <option value="">Select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              {...register('description')}
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={6}
              placeholder="Job Description"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="rmail"
              placeholder="Your email"
              {...register('postedBy')}
              className="create-job-input"
            />
          </div>

          <div className="w-full text-right">
            <input
              className="my-5 inline-block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;