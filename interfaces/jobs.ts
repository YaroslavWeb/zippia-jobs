// Interface for the received data

export interface IDataJobs {
  jobs: IJob[]
  totalJobs: number
}

export interface IJob {
  listingHash: string
  jobId: string
  source: string
  showNewJobBedge: boolean
  jobDLPUrl: string
  companyID: number
  location: string
  jobTitle: string
  companyName: string
  companyInitial: string
  companyLogo: string
  estimatedSalary: string
  socode: string
  postedDate: string
  sponsorFlag: any
  contactEmailsFlag: boolean
  easyApplyFlag: boolean
  skillsets: string[]
  originalCPC: any
  cpc: number
  companyZippiaOverallScore: number
  OBJcountry: string
  OBJcity: string
  OBJstate: string
  OBJcompanyID: number
  OBJcompanyDisplay: string
  OBJindustry: string
  OBJpostingDate: string
  OBJtitle: string
  OBJtitleDisplay: string
  OBJurl: string
  OBJzipcode: string
  OBJjobTags: string[]
  shortDesc: string
}
