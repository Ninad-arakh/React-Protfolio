import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./sesClient";

const createSendEmailCommand = (
  toAddress,
  fromAddress,
  name,
  email,
  message
) => {
  return new SendEmailCommand({
    Destination: {
      CcAddresses: [],
      ToAddresses: [toAddress],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
          <main>
            <h1>Message</h1>
            <h2>Name: ${name}</h2>
            <p>Message: ${message}</p>
            <h2>Email: ${email}</h2>
          </main>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "SOMEONE JUST CONTACTED YOU.",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [],
  });
};

const run = async (name, email, message) => {
  const sendEmailCommand = createSendEmailCommand(
    "ninad.emails@gmail.com",
    "arakhninad@gmail.com",
    name,
    email,
    message
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") {
      /** @type { import('@aws-sdk/client-ses').MessageRejected} */
      const messageRejectedError = caught;
      return messageRejectedError;
    }
    throw caught;
  }
};

export { run };
