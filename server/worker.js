import { Worker } from "bullmq";

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    console.log(`Job:`, job.data);
    const data = JSON.parse(job.data);
    //NOTE: Path: data.path
    //TODO:read the pdf from path,
    //TODO:chunk the pdf,
    //WARNING:call the openai embedding model for every chunck
    //FIX:store the data in a db
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: "6379",
    },
  },
);
