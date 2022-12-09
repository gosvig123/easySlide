import {
  jest,
  describe,
  expect,
  test,
  beforeAll,
  afterAll,
} from "@jest/globals";
import { Server } from "http";
import axios, { AxiosInstance } from "axios";
import startServer from "../app";
import prisma from "../lib/prisma";

let server: Server;
let api: AxiosInstance;

jest.setTimeout(60000);

beforeAll(async () => {
  server = await startServer();
  const addressInfo = server.address();
  if (typeof addressInfo === "string" || addressInfo === null) {
    console.error(
      "Port is null. This is possibly because the server is not running."
    );
    process.exit(1);
  }
  api = axios.create({
    baseURL: `http://localhost:${addressInfo.port}`,
  });
});

afterAll(() => {
  const deletePresentations = prisma.presentation.deleteMany();

  Promise.all([deletePresentations])
    .then(() => {
      prisma.$disconnect();
    })
    .then(() => {
      server.close();
    });
});

describe("API", () => {
  describe("/presentation", () => {
    test("create presentation", async () => {
      const res = await api.post("/presentations", {
        name: "test presentation",
      });

      expect(res.status).toBe(201);
      expect(res.data.name).toBe("test presentation");
    });

    test("get all presentations", async () => {
      const res = await api.get("/presentations");
      const result = res.data[0];

      expect(res.status).toBe(200);
      expect(result.id).toEqual(expect.any(Number));
      expect(result).toEqual(
        expect.objectContaining({
          name: "test presentation",
        })
      );
    });

    test("get presentation by id", async () => {
      const presentation = await api.post("/presentations", {
        name: "test presentation",
      });

      const id = presentation.data.id;
      const res = await api.get(`/presentations/${id}`);

      expect(res.status).toBe(200);
      expect(res.data.id).toEqual(id);
      expect(res.data).toEqual(
        expect.objectContaining({
          id: id,
          name: "test presentation",
        })
      );
    });
  });
});
