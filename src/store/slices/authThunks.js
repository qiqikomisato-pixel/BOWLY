import { createAsyncThunk } from '@reduxjs/toolkit'

// Мок-запросы (потом реальный fetch)

const mockRequest = async (endpoint, data) => {
  await new Promise(r => setTimeout(r, 500))

  if (endpoint === 'login') {
    const isAdmin = data.email === 'admin@gmail.com' && data.password === 'admin123'
    if (!data.email || !data.password) {
      throw { error_code: 'validation.required', status: 400 }
    }
    return {
      name: isAdmin ? 'Администратор' : 'Пользователь',
      email: data.email,
      role: isAdmin ? 'admin' : 'user',
    }
  }

  if (endpoint === 'register') {
    if (!data.name || !data.email || !data.password) {
      throw { error_code: 'validation.required', status: 400 }
    }
    if (data.password !== data.confirmPassword) {
      throw { error_code: 'auth.passwordMismatch', status: 400 }
    }
    return {
      name: data.name,
      email: data.email,
      role: 'user',
    }
  }

  if (endpoint === 'logout') {
    return null
  }

  if (endpoint === 'check') {
    const saved = localStorage.getItem('user')
    if (!saved) throw { error_code: 'auth.unauthorized', status: 401 }
    return JSON.parse(saved)
  }

  throw { error_code: 'server.500', status: 500 }
}

// Thunk'и — асинхронные действия
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    return await mockRequest('login', credentials)
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  try {
    return await mockRequest('register', data)
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    return await mockRequest('logout')
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const checkAuth = createAsyncThunk('auth/check', async (_, { rejectWithValue }) => {
  try {
    return await mockRequest('check')
  } catch (err) {
    return rejectWithValue(err)
  }
})