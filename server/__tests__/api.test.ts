import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { Server } from 'http';
import axios, { AxiosInstance } from "axios";
import startServer from '../app'

let server: Server
let api: AxiosInstance

beforeAll(async () => {
  server = await startServer()
  const addressInfo = server.address()
  if (typeof addressInfo === "string" || addressInfo === null) {
    console.error(
      "Port is null. This is possibly because the server is not running."
    );
    process.exit(1);
  }
  api = axios.create({
    baseURL: `http://localhost:${addressInfo.port}`,
  });
})


describe('first test', () => {
  test('first test', () => {
    expect("1").toBe("1")
  })
})