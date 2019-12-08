import { MessageType } from "../enums/message-type.enum";

export module Tests {


  //requests

  interface RunTestRequest {
    testParametersId: number;
  }


  //responses

  interface GetTestsParametersResponse {
    testsParameters: TestParameters[]
  }


  interface AddTestParametersResponse {
    addedTestParameters: TestParameters
  }


  interface TestParameters {
    testParametersId?: number;
    testName: string;
    numberOfUsers: number;
    numberOfRequests: number;
    minBuyPrice: number;
    maxBuyPrice: number;
    minSellPrice: number;
    maxSellPrice: number;
  }

  interface MessageBox {
    type: MessageType;
    message: string;
  }
}


