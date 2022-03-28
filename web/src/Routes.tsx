// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout/MainLayout'
import WeightsLayout from 'src/layouts/WeightsLayout'
import FeedingLayout from './layouts/FeedingLayout/FeedingLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Private unauthenticated="login" wrap={MainLayout}>
        <Route path="/diaperchange" page={DiaperChangePage} name="diaperChange" />

        <Set wrap={WeightsLayout}>
          <Route path="/weights/new" page={WeightNewWeightPage} name="newWeight" />
          <Route path="/weights/{id:Int}/edit" page={WeightEditWeightPage} name="editWeight" />
          <Route path="/weights/{id:Int}" page={WeightWeightPage} name="weight" />
          <Route path="/weights" page={WeightWeightsPage} name="weights" />
        </Set>

        <Set wrap={FeedingLayout}>
          <Route path="/fuettern/start" page={StartFeedingPage} name="startFeeding" />
          <Route path="/fuettern/{id:Int}" page={FeedingPage} name="feeding" />
          <Route path="/fuettern" page={FeedingsPage} name="feedings" />
        </Set>

        <Route path="/home" page={HomePage} name="home" />
        <Route path="/gewicht" page={WeightPage} name="weight" />
        <Route path="/user" page={UserPage} name="user" />
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
