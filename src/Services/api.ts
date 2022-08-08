import axios from 'axios'
import { Config } from '@/Config'

export enum PostContentType {
  FORM_DATA = 'multipart/form-data',
  JSON = 'application/json',
  FORM_URLENCODED = 'application/x-www-form-urlencoded',
}

function GET(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  return axios
    .get(targetUrl, {
      params: params,
    })
    .then(res => res)
}

function POST(
  url: string,
  params: {},
  type = PostContentType.JSON,
  header?: object,
) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  let dataPrams = params
  return axios
    .post(targetUrl, dataPrams, {
      headers: {
        ...header,
        'Content-Type': type,
      },
    })
    .then(res => {
      return res
    })
}

function PUT(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  return axios.put(targetUrl, params).then(res => res)
}

function DELETE(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  return axios.delete(targetUrl, params).then(res => res)
}

function isOk(result: any) {
  return result.status === 200 || result.status === 201 || result.status === 202
}

export const Api = {
  GET,
  POST,
  PUT,
  DELETE,
  isOk,
}
