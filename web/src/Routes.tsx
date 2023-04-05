// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import WhileLoadingAuth from 'src/components/WhileLoadingAuth/WhileLoadingAuth'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import WeightsLayout from 'src/layouts/WeightsLayout'

import FeedingLayout from './layouts/FeedingLayout/FeedingLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" prerender />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" prerender />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" prerender />

      <Private unauthenticated="login" wrap={MainLayout} whileLoadingAuth={() => <WhileLoadingAuth />}>
        <Route path="/diaperchange" page={DiaperChangePage} name="diaperChange" />

        <Set wrap={WeightsLayout}>
          <Route path="/weights/new" page={WeightNewWeightPage} name="newWeight" prerender />
          <Route path="/weights/{id:Int}/edit" page={WeightEditWeightPage} name="editWeight" />
          <Route path="/weights" page={WeightWeightsPage} name="weights" prerender />
        </Set>

        <Set wrap={FeedingLayout}>
          <Route path="/fuettern/start" page={StartFeedingPage} name="startFeeding" />
          <Route path="/fuettern/{id:Int}" page={FeedingPage} name="feeding" />
          <Route path="/fuettern" page={FeedingsPage} name="feedings" />
        </Set>

        <Route path="/user" page={UserPage} name="user" />
        <Route path="/" page={HomePage} name="home" prerender />
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
