import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

const SalaryPage = () => {
    const [searchtext, setSearchtext] = useState("")
    const [salary, setSalary] = useState([])

    useEffect(() => {
    fetch(salary.json).then(res => res.json).then(data => setSalary(data))
    }, [searchtext])
    

    const handleSearch = () => {
        const filter = jobs.filter((job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSalary(filter)
      };
    
  return (
    <div className='max-w-screen-2xl container  mc-auto xl:px-24 px-4'>
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>

        <div className='mt-5'>
            <div className='search-box p-2 text-center mb-2'>
                <input type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e) => setSearchtext(e.target.value)}/>
                <button onClick={handleSearch} className='bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm mb-4'>Seacrh</button>
            </div>
        </div>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
            {
                salary.map((data)=>{
                    <div key={data.id} className='shadow px-4 py-8'>
                        <h4 className='font-semibold text-xl'>{data.title}</h4>
                        <p className='my-2 font-medium text-blue-500 text-lg'>{data.salary}</p>
                        <div className='flex flex-wrap gap-4'>
                            <a href="/" className='underline'>{data.status}</a>
                            <a href="/" className='underline'>{data.Skills}</a>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default SalaryPage