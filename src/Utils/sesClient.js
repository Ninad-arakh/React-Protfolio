import { SESClient } from "@aws-sdk/client-ses";

const REGION = "ap-south-1";

export const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: "AKIAST6S7CBWCMZ3SPE2",
    secretAccessKey: "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",
  },
});


