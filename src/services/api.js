// API通信サービス

const BASE_URL = process.env.VUE_APP_API_URL || 'https://api.example.com'

/**
 * HTTPリクエストの基本設定
 */
const defaultHeaders = {
  'Content-Type': 'application/json'
}

/**
 * 認証トークンを取得
 */
function getAuthToken() {
  return localStorage.getItem('authToken')
}

/**
 * リクエストヘッダーを構築
 */
function buildHeaders(customHeaders = {}) {
  const token = getAuthToken()
  return {
    ...defaultHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
    ...customHeaders
  }
}

/**
 * エラーハンドリング
 */
function handleError(error) {
  console.error('API Error:', error)
  
  if (error.response) {
    // サーバーからのエラーレスポンス
    const { status, data } = error.response
    switch (status) {
      case 401:
        // 認証エラー
        localStorage.removeItem('authToken')
        window.location.href = '/login'
        break
      case 403:
        // 権限エラー
        throw new Error('アクセス権限がありません')
      case 404:
        // リソースが見つからない
        throw new Error('リソースが見つかりません')
      case 500:
        // サーバーエラー
        throw new Error('サーバーエラーが発生しました')
      default:
        throw new Error(data.message || 'エラーが発生しました')
    }
  } else if (error.request) {
    // ネットワークエラー
    throw new Error('ネットワークエラーが発生しました')
  } else {
    // その他のエラー
    throw new Error('予期しないエラーが発生しました')
  }
}

/**
 * GETリクエスト
 */
export async function get(endpoint, params = {}) {
  try {
    const url = new URL(`${BASE_URL}${endpoint}`)
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key])
      }
    })

    const response = await fetch(url, {
      method: 'GET',
      headers: buildHeaders()
    })

    if (!response.ok) {
      throw { response }
    }

    return await response.json()
  } catch (error) {
    handleError(error)
  }
}

/**
 * POSTリクエスト
 */
export async function post(endpoint, data = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw { response }
    }

    return await response.json()
  } catch (error) {
    handleError(error)
  }
}

/**
 * PUTリクエスト
 */
export async function put(endpoint, data = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: buildHeaders(),
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw { response }
    }

    return await response.json()
  } catch (error) {
    handleError(error)
  }
}

/**
 * DELETEリクエスト
 */
export async function del(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: buildHeaders()
    })

    if (!response.ok) {
      throw { response }
    }

    return await response.json()
  } catch (error) {
    handleError(error)
  }
}

/**
 * ファイルアップロード
 */
export async function uploadFile(endpoint, file, onProgress = null) {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const xhr = new XMLHttpRequest()
    
    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener('progress', (event) => {
        if (onProgress && event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100
          onProgress(progress)
        }
      })

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject({ response: { status: xhr.status, data: xhr.responseText } })
        }
      })

      xhr.addEventListener('error', () => {
        reject(new Error('アップロードに失敗しました'))
      })

      xhr.open('POST', `${BASE_URL}${endpoint}`)
      const token = getAuthToken()
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      }
      xhr.send(formData)
    })
  } catch (error) {
    handleError(error)
  }
}

// 具体的なAPIエンドポイント
export const todoAPI = {
  getAll: () => get('/todos'),
  getById: (id) => get(`/todos/${id}`),
  create: (todo) => post('/todos', todo),
  update: (id, todo) => put(`/todos/${id}`, todo),
  delete: (id) => del(`/todos/${id}`)
}

export const userAPI = {
  login: (credentials) => post('/auth/login', credentials),
  register: (userData) => post('/auth/register', userData),
  logout: () => post('/auth/logout'),
  getProfile: () => get('/user/profile'),
  updateProfile: (profile) => put('/user/profile', profile)
} 