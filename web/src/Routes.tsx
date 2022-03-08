// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import WeightsLayout from 'src/layouts/WeightsLayout'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={WeightsLayout}>
        <Route path="/weights/new" page={WeightNewWeightPage} name="newWeight" />
        <Route path="/weights/{id:Int}/edit" page={WeightEditWeightPage} name="editWeight" />
        <Route path="/weights/{id:Int}" page={WeightWeightPage} name="weight" />
        <Route path="/weights" page={WeightWeightsPage} name="weights" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="login" wrap={MainLayout}>
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/gewicht" page={WeightPage} name="weight" />
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
