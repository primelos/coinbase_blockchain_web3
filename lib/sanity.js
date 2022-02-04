import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "5e5cfjc0",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sk4T8UUJ0zlBpqPEvXA1ADAgPWSnM107ZeMSx9QzYia0nkTXMIloCI3iu1cRn4L0NLNd1lXNF9H60OqaS1g66mTBfi6fRqCQYTMQUZj6mOcRw8MgYp3wObCrhsNAV7hT5ABmEuhFZgLUU4mFf3fT4GL80f6FSCupLC5cCoiNoI2wcZkC2KtJ",
  useCdn: false,
});
