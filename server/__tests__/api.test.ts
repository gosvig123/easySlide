import { jest, describe, expect, test, beforeAll, afterAll } from '@jest/globals';
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
  console.log(api)
})

afterAll(() => {
  server.close()
})

describe('API/create presentation', () => {
  test('create presentation', async () => {
    const res = await api.post('/presentations', {
      name: 'test presentation',
    })
    expect(res.status).toBe(201)
    expect(res.data.name).toBe('test presentation')
    expect(res.data.slides).toEqual([])
  })
})
