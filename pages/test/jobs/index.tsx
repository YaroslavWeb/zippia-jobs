import React from 'react'

import { getJobs } from 'services/Zippia'
import { IDataJobs, IJob } from 'interfaces/jobs'
import { BaseLayout } from 'layouts/Base'
import JobsContainer from 'containers/jobs'

interface JobsPageProps {
  data: IDataJobs
}

export default function JobsPage({ data }: JobsPageProps) {
  return (
    <BaseLayout title="Jobs">
      <JobsContainer data={data} />
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getJobs()

  // Pass data to the page via props
  return { props: { data } }
}
