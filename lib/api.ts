const API_BASE_URL = 'http://localhost:8082'
// Token 存储的 key
const TOKEN_KEY = 'auth_token'

// 获取 token（从 localStorage）
export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY)
  }
  return null
}

// 设置 token（保存到 localStorage）
export function setToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token)
  }
}

// 清除 token（登出时使用）
export function clearToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY)
  }
}
export async function apiFetch(path: string, options?: RequestInit) {
  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path}`

  const token = getToken()

  // 构建 headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...options?.headers
  }
  // 如果有 token，自动添加到 headers
  if (token) {
    ;(headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }
  return fetch(url, {
    ...options,
    headers
  })
}
