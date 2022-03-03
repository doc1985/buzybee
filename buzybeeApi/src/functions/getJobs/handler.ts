import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { JobService } from '../../services/jobService';

const getJobs: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  const jobService = new JobService()
  const jobs = await jobService.getJobs()
  return formatJSONResponse({
    jobs
  });
};

export const main = middyfy(getJobs);