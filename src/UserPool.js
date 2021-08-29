import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_dntRMIrmQ",
  ClientId: "1ksfrjb01v375l8kgsfsvfefpc",
};

export default new CognitoUserPool(poolData);
