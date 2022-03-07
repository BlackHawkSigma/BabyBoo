import MainLayout from './MainLayout'

export const logedIn = () => {
  mockCurrentUser({ id: 1, name: 'John', email: 'john@example.com' })

  return <MainLayout />
}

export default { title: 'Layouts/MainLayout' }
