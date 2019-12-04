export module Tests {

  interface GetTestsParametersResponse {
    testsParameters: TestParameters[]
  }



  interface TestParameters {
    testParametersId: number;
    testName: string;
    numberOfUsers: number;
    numberOfRequests: number;
    minBuyPrice: number;
    maxBuyPrice: number;
    minSellPrice: number;
    maxSellPrice: number;
  }
}


