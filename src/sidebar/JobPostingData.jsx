import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    // converting time to day

    const twentyFourHoursAgoday = twentyFourHoursAgo.toISOString().slice(0,10); 
    const sevenDaysAgoday = sevenDaysAgo.toISOString().slice(0,10); 
    const thirtyDaysAgoday = thirtyDaysAgo.toISOString().slice(0,10); 
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value='' onChange={handleChange}/>
            <span className='checkmark'></span>All time
        </label>
        <InputField handleChange={handleChange} value={twentyFourHoursAgoday} title="Last 24 hours" name="test"/>
        <InputField handleChange={handleChange} value={sevenDaysAgoday} title="Last 7 days" name="test"/>
        <InputField handleChange={handleChange} value={thirtyDaysAgoday} title="Last month" name="test"/>
    </div>
  )
}

export default JobPostingData