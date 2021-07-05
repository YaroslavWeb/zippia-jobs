import { differenceInDays } from 'date-fns'
import { IDataJobs, IJob } from 'interfaces/jobs'

// The service that receives data from the Zippia server filters it and sends it back

/* 
  Example filter: {
    companyName: 'Apex', // Search by company name
    onlyLast: true       // Show vacancies for the last three days
  }
*/

interface IFilter {
  companyName?: string
  onlyLast?: boolean
}

const filterByCompanyName = (companyName: string = '', job: IJob) => {
  return job.companyName.includes(companyName)
}

const filterByOnlyLast = (job: IJob) => {
  return 3 > differenceInDays(new Date(), new Date(job.OBJpostingDate))
}

export const getJobs = async (filter: IFilter = {}) => {
  const body = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  }

  const res = await fetch(`https://www.zippia.com/api/jobs/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data: IDataJobs = await res.json()

  // filters array. Can include search by company name and by date
  const filters: { (job: IJob): boolean; (job: IJob): boolean }[] = []

  // Adding filters for array
  if (filter.companyName) {
    filters.push((job: IJob) => filterByCompanyName(filter.companyName, job))
  }
  if (filter.onlyLast) {
    filters.push(filterByOnlyLast)
  }

  // Filtring the data
  if (filters.length) {
    data.jobs = data.jobs.filter((job) => {
      for (const filter of filters) {
        if (!filter(job)) {
          return false
        }
      }
      return true
    })
  }

  // get the first 10 jobs
  data.jobs = data.jobs.slice(0, 10)

  return data
}
