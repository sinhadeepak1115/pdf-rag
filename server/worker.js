import { Worker } from "bullmq";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "@langchain/textsplitters";

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

    //Load the pdf
    const loader = new PDFLoader(data.path);
    const docs = await loader.load();

    const textSplitter = new CharacterTextSplitter({
      chunkSize: 300,
      chunkOverlap: 0,
    });
    const texts = await textSplitter.splitText(document);
    console.log(texts);
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: "6379",
    },
  },
);
