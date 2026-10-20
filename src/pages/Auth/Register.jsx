import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from '../../api/api'
import { setUser } from '../../store/slices/authSlice'
import pageStyles from '../../styles/page.module.css'
import styles from './Auth.module.css'

export default function Register() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const [register, { isLoading }] = useRegisterMutation()

  const from = location.state?.from?.pathname || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password) {
      setError(t('errors.validation.required'))
      return
    }

    if (password !== confirmPassword) {
      setError(t('errors.auth.passwordMismatch'))
      return
    }

    try {
      const result = await register({ name, email, password, confirmPassword }).unwrap()
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
        <h1 className={pageStyles.title}>{t('auth.register')}</h1>
        <p className={pageStyles.subtitle}>{t('auth.registerSubtitle')}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>{t('auth.name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              required
            />
          </div>

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

          <div className={styles.field}>
            <label>{t('auth.confirmPassword')}</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isLoading ? 'Регистрация...' : t('auth.register')}
          </button>

          <p className={styles.switch}>
            {t('auth.hasAccount')} <Link to="/login">{t('auth.loginLink')}</Link>
          </p>
        </form>
      </div>
    </div>
  )
}