import request from '@/utils/request'

export function requestServer(url, method, data) {
  if ((method === 'GET') || method === 'DELETE') {
    return request({
      url: url,
      method: method,
      params: data
    })
  } else if ((method === 'PUT') || (method === 'POST')) {
    return request({
      url: url,
      method: method,
      data
    })
  }
}

export default requestServer
