import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on e-mail box on page load
  const eMailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    eMailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.eMail,
      name: data.name,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
      navigate(routes.home())
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="eMail"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    E-Mail
                  </Label>
                  <EmailField
                    name="eMail"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={eMailRef}
                    validation={{
                      pattern: {
                        value: /^[^@]+@[^.]+\..+$/,
                        message: 'Please enter a valid email address',
                      },
                      required: {
                        value: true,
                        message: 'E-Mail is required',
                      },
                    }}
                  />
                  <FieldError name="eMail" className="rw-field-error" />

                  <Label
                    name="name"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Nickname
                  </Label>
                  <TextField
                    name="name"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                  />
                  <FieldError name="name" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
