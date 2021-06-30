import { useCallback, useEffect, useState } from 'react'
import { differenceInDays } from 'date-fns'

import { IDataJobs, IJob } from 'interfaces/jobs'
import { AppCarousel } from 'components/app-carousel'
import { AppButton } from 'components/app-button'
import { AppSwitch } from 'components/app-switch'
import {
  Hero,
  JobCard,
  JobCardTitle,
  JobCardName,
  JobCardDescription,
} from './styles'

// Variable for filter jobs by days
const lastDays = 3

interface JobsContainerProps {
  data: IDataJobs
}

export default function JobsContainer({ data }: JobsContainerProps) {
  // Show first 10 jobs
  const [visibleJobs, setVisibleJobs] = useState<IJob[]>([])

  // Search input value
  const [searchInput, setSearchInput] = useState<string>('')

  // Flag for filter Newest and all
  const [isAllJobs, setAllJobs] = useState(true)

  const onSearch = useCallback(
    (item): boolean => {
      return item.companyName.includes(searchInput)
    },
    [searchInput]
  )

  const onFilter = useCallback((item): boolean => {
    return (
      lastDays > differenceInDays(new Date(), new Date(item.OBJpostingDate))
    )
  }, [])

  // Searching for the jobs
  const filterJobs = useCallback(
    (checked = isAllJobs) => {
      const searchableJobs = data.jobs
        .filter((item) =>
          checked ? onSearch(item) : onSearch(item) && onFilter(item)
        )
        .slice(0, 10)
      setVisibleJobs(searchableJobs)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isAllJobs, onFilter, onSearch]
  )

  // On switcher change
  const onChangeFilter = useCallback(
    (checked: boolean) => {
      filterJobs(checked)
      setAllJobs(checked)
    },
    [filterJobs]
  )

  useEffect(() => {
    setVisibleJobs(data.jobs.slice(0, 10))
  }, [data])

  return (
    <div>
      <Hero>
        <div>
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
            placeholder="Enter comapany name😘"
          />
          <AppButton onClick={filterJobs}>Find company 🔍</AppButton>
        </div>
        <AppSwitch onChange={onChangeFilter} options={['All', 'Newest']} />
      </Hero>
      <div>
        <AppCarousel gap={12}>
          {visibleJobs.map((job) => (
            <JobCard key={job.jobId}>
              <JobCardTitle>{job.jobTitle}</JobCardTitle>
              <JobCardName>{job.companyName}</JobCardName>
              <JobCardDescription>{job.shortDesc}</JobCardDescription>
            </JobCard>
          ))}
        </AppCarousel>
      </div>
    </div>
  )
}
