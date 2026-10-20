import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../api/api'
import { setUser } from '../../store/slices/authSlice'
import pageStyles from '../../styles/page.module.css'
import styles from './Auth.module.css'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [login, { isLoading }] = useLoginMutation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError(t('errors.validation.required'))
      return
    }

    try {
      const result = await login({ email, password }).unwrap()
      dispatch(setUser(result.user))
      navigate(from, { replace: true })
    } catch (err) {
      const code = err?.data?.error_code || 'server.500'
      setError(t(`errors.${code}`))
    }
  }

  return (
    <div className={pageStyles.container}>
      <div className={styles.authBox}>
        <h1 className={pageStyles.title}>{t('auth.login')}</h1>
        <p className={pageStyles.subtitle}>{t('auth.loginSubtitle')}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>{t('auth.email')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.ru"
              required
            />
          </div>

          <div className={styles.field}>
            <label>{t('auth.password')}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isLoading}
          >
            {isLoading ? 'Вход...' : t('auth.login')}
          </button>

          <p className={styles.switch}>
            {t('auth.noAccount')} <Link to="/register">{t('auth.registerLink')}</Link>
          </p>
        </form>
      </div>
    </div>
  )
}