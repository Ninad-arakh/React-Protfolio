import { SESClient } from "@aws-sdk/client-ses";

const REGION = "ap-south-1";

export const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_SES_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SES_SECRET_KEY,
  },
});


