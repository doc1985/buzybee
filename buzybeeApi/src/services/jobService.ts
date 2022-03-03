import db from "../db/dbConnection"
import { Job } from "../db/job"

export class JobService {
    getJobs = async () => {
        await db()
        return Job.find()
    }
}