import { Tests } from 'src/app/shared/models/Tests/tests';

export module Reports{
  interface GetAverageEndpointsExecutionTimesResponseModel {
    averageEndpointsExecutionTimes: AverageEndpointsExecutionTime[];
  }
  
  interface AverageEndpointsExecutionTime {
    endpoint: Endpoint;
    averageExecutionTimes: AverageExecutionTimes;
  }
  
  interface AverageExecutionTimes {
    databaseTestTime: number;
    applicationTestTime: number;
    apiTestTime: number;
  }
  
  interface Endpoint {
    endpointId: number;
    endpointName: string;
    httpMethod: string;
  }
}