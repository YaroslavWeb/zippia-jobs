import React, { useCallback, useEffect, useState } from 'react'
import { differenceInDays } from 'date-fns'

import { IDataJobs, IJob } from 'interfaces/jobs'
import { AppCarousel } from 'components/app-carousel'
import { AppButton } from 'components/app-button'
import { AppSwitch } from 'components/app-switch'
import { InputText } from 'components/input-text'
import { Divider } from 'styles/component'
import {
  TopSection,
  SearchWrapper,
  JobCard,
  JobCardTitle,
  JobCardName,
  JobCardDescription,
} from './styles'
import { getJobs } from 'services/Zippia'
import { AnimatePresence } from 'framer-motion'

interface JobsContainerProps {
  data: IDataJobs
}

export default function JobsContainer({ data }: JobsContainerProps) {
  // Show first 10 jobs
  const [visibleJobs, setVisibleJobs] = useState<IJob[]>([])

  // Search input value
  const [searchInput, setSearchInput] = useState<string>('')

  // Error message after search. if no job exist
  const [errorSearch, setErrorSearch] = useState<string>('')

  // Flag for filter Newest and all
  const [isAllJobs, setAllJobs] = useState(true)

  // It is activated after the work type switch. Returns filtered data by search and date
  const handleFilter = useCallback(
    async (checked: boolean) => {
      setVisibleJobs([])
      setErrorSearch('')
      setAllJobs(checked)
      const data = await getJobs({
        companyName: searchInput,
        onlyLast: !checked,
      })
      setVisibleJobs(data.jobs)
      !data.jobs.length && setErrorSearch('No result')
    },
    [searchInput]
  )

  // It is activated after the button search. Returns filtered data by search and date
  const handleSearch = useCallback(async () => {
    setVisibleJobs([])
    setErrorSearch('')
    const data = await getJobs({
      companyName: searchInput,
      onlyLast: !isAllJobs,
    })
    setVisibleJobs(data.jobs)
    !data.jobs.length && setErrorSearch('No result')
  }, [isAllJobs, searchInput])

  useEffect(() => {
    setVisibleJobs(data.jobs)
  }, [data])

  return (
    <div>
      <TopSection>
        <SearchWrapper>
          <InputText
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
            placeholder="Enter comapany name😘"
          />
          <AppButton onClick={handleSearch}>Find 🔍</AppButton>
        </SearchWrapper>
        <AppSwitch
          activeValue={isAllJobs}
          onChange={handleFilter}
          options={['All', 'Newest']}
        />
      </TopSection>
      <Divider height={64} />
      <div>
        <AnimatePresence>
          {errorSearch ? (
            <span>{errorSearch}</span>
          ) : visibleJobs.length ? (
            <AppCarousel>
              {visibleJobs.map((job) => (
                <JobCard
                  key={job.jobId}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <JobCardTitle>{job.jobTitle}</JobCardTitle>
                  <JobCardName>{job.companyName}</JobCardName>
                  <JobCardDescription>{job.shortDesc}</JobCardDescription>
                  <span>{job.postedDate}</span>
                </JobCard>
              ))}
            </AppCarousel>
          ) : (
            <span>Loading...</span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
