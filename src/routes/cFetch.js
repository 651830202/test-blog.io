import qs from 'qs'
// import { message } from 'antd'
import fetchIntercept from 'fetch-intercept'


fetchIntercept.register({
  request (url, config) {
    const las = url.indexOf('http') < 0 && url.indexOf('api2') < 0 ?  url : url
    return [las, config]
  }
})

const cFetch = async (url, options) => {
  try {
    let res = await fetch(url, options)
    if (res.ok) {
      res = await res.json()
      return res
    } else {
      return {message: res.statusText, success: false }
    }
  } catch (err) {
    return {message: err.message, success: false }
  }
}



export const fGet = (url, query) => {
  query = qs.stringify(query)
  query = query ? '?' + query : ''
  return cFetch(url + query, {
    credentials: 'same-origin',
    method: 'GET'
  })
}

export const fPost = (url, body, opts) => {
  const options = {
    credentials: 'same-origin',
    method: opts ? opts.method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return cFetch(url, body ? Object.assign(options, { body: JSON.stringify(body) }) : options)
}



