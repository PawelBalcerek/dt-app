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
  
  
  //--------USER------

  interface GetEndpointsResponseModel{
    endpoints: Endpoint[];
  }

  interface GetUsersEndpointExecutionTimes{
    usersEndpointExecutionTimes: UserEndpointExecutionTimes[]
  }

  interface ExecutionTimesWithStamp {
        timeStamp: Date;
        databaseTestTime: number;
        applicationTestTime: number;
        apiTestTime: number;
  }

  interface UserEndpointExecutionTimes {
      userId: number;
      endpoint: Endpoint;
      executionTimesWithStamps: ExecutionTimesWithStamp[];
  }

}