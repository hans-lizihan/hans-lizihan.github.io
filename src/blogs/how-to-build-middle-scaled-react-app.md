---
title: Tips for making a mid-scale react application
date: '2018-08-04 13:45'
---

There are already quite a lot of medium tutorials teaching people out there for how to make a proper react application using react + redux stack. And people even developed some great ideas like [dva](https://dvajs.com/) to reduce boilerplate and pain to setup the whole stack.

[dva](https://dvajs.com/) is really nice, I loved the concept of it so much, It reminds me of ruby on rails a few years ago. However, besides the great benefits full-featured store management libraries could provide us, it has it's own shorthands as well.

1. libs like [dva](https://dvajs.com/) is a bit **over-encapsulated**. so new joiner hardly know how does this magically work unless he/she spend quite sometime doing todo-lists following another tutorial.
2. **Modularity design is not straight forward**. e.g. user as a module, orders as a module etc. It seems very ideal, you could even do code splitting by doing this, and only load necessary reducers / sagas whenever necessary. But in the end module-module communication/dependencies will become a headache.
3. **Modularity design does not fit "page centric" designs**. It turns out that in medium sized application, people are more focused on "What will this page do" rather than "what will this chunk of section in the page will do".
4. **Cannot find a way to integrate with other popular libraries**. e.g. redux-form

**So what's the solution?**

We could use all small pieces of react ecosystem to build the suitable framework of our own! The process is super hard, but finally I have found a way to keep everything under control.

## TL;DR; 

1. Use **sock drawer** design rather than modular design for your store and folder structure
2. Use **pages** folder to control pages and one time components
3. Put **route configs in one file**
4. Generalize **restful http calls by "resource"**
5. Control the flow using **redux-saga**
6. If you encountered any form, **just use redux-form** (or formik). Trust me.
7. **Use url to control page state** as much as possible
8. **Control # of action types** and reducers being mounted to the rootReducer.

## Sock drawer Project Layout

```
app
├── Root.jsx
├── actions
│   ├── loading.js
│   ├── messages.js
│   ├── queryParams.js
│   ├── resources.js
│   └── user.js
├── app.jsx
├── components
│   ├── Bundle
│   ├── Form
│   ├── Comonent1
│   ├── Comonent2
│   └── Message
├── constants
│   ├── ActionTypes.js
│   ├── Forms.js
│   ├── Loadings.js
│   ├── Modals.js
│   ├── Resources.js
├── pages
│   ├── DashboardPage
│   ├── OrdersPage
│   ├── AuthPages
│   └── NotFound
├── polyfill.js
├── reducers
│   ├── index.js
│   ├── loadings.js
│   ├── messages.js
│   └── resources
├── sagas
│   ├── resource.js
│   ├── auth
│   ├── index.js
├── selectors
│   ├── getResource.js
│   ├── getResources.js
│   ├── getSearch.js
│   └── isLoading.js
├── stores
│   └── index.js
├── styles
│   ├── breakpoints.scss
│   └── variables.scss
└── utils
    ├── network.js
    └── redirect.js
```

as shown in the gist above, the project structure is purely **sock drawer design**.

There is one folder that is quite interesting: `pages` folder. It's similar to the traditional `containers` if you came from the redux-todo-list tutorial. They serve the same functionality, but differs in a few aspects:

1. **allow non-container components to be presented in this folder**. We found that some top level page components may **not** have to do anything with `connect` HoC
2. **nest a components folder inside the page folder**, allowing further reusable page level components.

## Pages folder

```
app/pages
├── AppPages
│   ├── Layout.jsx
│   ├── Dashboard
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.scss
│   │   ├── __tests__
│   │   │   ├── Dashboard.spec.jsx
│   │   │   └── __snapshots__
│   │   └── index.js
│   ├── __tests__
│   │   └── Layout.spec.jsx
│   └── components
│       ├── ToastMessages
│       │   ├── Messages.jsx
│       │   ├── Messages.scss
│       │   ├── __test__
│       │   └── index.js
│       └── TopNavbar
│           ├── TopNavbar.jsx
│           └── index.js
├── AuthPages
│   ├── Layout.jsx
│   ├── Layout.scss
│   ├── AuthPages.scss
│   ├── ForgotPassword
│   │   ├── ForgotPassword.jsx
│   │   ├── ForgotPasswordForm.jsx
│   │   ├── __tests__
│   │   │   ├── ForgotPassword.spec.jsx
│   │   │   ├── ForgotPasswordForm.spec.jsx
│   │   │   └── __snapshots__
│   │   └── index.js
│   ├── Login
│   │   ├── Login.jsx
│   │   ├── LoginForm.jsx
│   │   ├── __tests__
│   │   │   ├── Login.spec.jsx
│   │   │   ├── LoginForm.spec.jsx
│   │   │   └── __snapshots__
│   │   └── index.js
│   ├── Register
│   │   ├── Register.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── __tests__
│   │   │   ├── Register.spec.jsx
│   │   │   ├── RegisterForm.spec.jsx
│   │   │   └── __snapshots__
│   │   └── index.js
│   ├── ResetPassword
│   │   ├── ResetPassword.jsx
│   │   ├── ResetPasswordForm.jsx
│   │   └── index.js
│   ├── VerifyEmail
│   │   ├── VerifyEmail.jsx
│   │   ├── __tests__
│   │   │   ├── VerifyEmail.spec.jsx
│   │   │   └── __snapshots__
│   │   └── index.js
│   └── components
│       └── CollapsibleMessages
│           ├── CollapsibleMessages.jsx
│           └── index.js
└── NotFound
    ├── NotFound.jsx
    ├── __tests__
    │   └── NotFound.spec.jsx
    └── index.js

```

In real life, we wanted to encourage to group similar functionalities using components. But here is an embarrassing situation:

1. some of the components is **specific to a page**
2. some of the components need to **access redux store**
3. some of the components need to **access URL**

If any component falls into above 3 categories, it indicates that the component should be place in the `pages` folder. Based on a simple rule: make private first, then protected, finally public.

1. if a component is only used by a page, put that in `pages/XXXPage/components` folder
2. if a component is being shared by 2 pages, extra 1 layer up to the top. `pages/components`
3. if a component is being shared by 3 pages, and not accessing the store, put it in the `app/components` folder.

I found that following those simple rules make our application much readable, and encourage engineers to split code in a more organized way. Previously when we did not have this rules built in, I found that we easily achieve a 1000 lines container components which is absolutely horrible…

In such case, to do code splitting is relatively simpler as well. Because each folder has it's own index.js, you could choose to use `react-lodable` (updated: use `loadale-component` now)

```js
export default (loader, loaderProps = {}) => Loadable({
  import('./Dashboard' /* webpackChunkName: "dashboard-page" */),
  loading: (props) => <Loading {...props} />,
});
```

## Put router config in one file

`react-router@4` enables us to write routes in a very flexible way. It unlocks the power of extremely modular way to do routing. But in my personal experience, I found that gathering all route config in one single file is much easier for new comers / looking back into an old project to get all the routes.

```js
export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/verify-email" exact component={VerifyEmail} />
      <Route path="/reset-password" exact component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/orders/:id" exact component={OrderDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
```

In such way it's crystal clear that what feature is enabled in the application.

## Generalize restful http calls with resources

GraphQL is already out there for a while. I think up to this moment, if you are building an application **from scratch**, I strongly recommend **using GraphQL** as the server/frontend interface.

However, not all applications have this luxury of using GraphQL, most of the legacy projects still need to utilise good old restful API.

So if your restful API has some consistent convention, it'll be best to find a way to generalise it.
90% of the cases, typical request goes through those steps

1. resource request (from `componentDidMount`, `useEffect`, `handleClick` etc.)
2. start loading
3. make the request
4. display a toast message (success / failure)
5. handle global http response error based on error code if there were an error
6. tell store that resource is fetched and need to run reducer to update the store
7. end loading
8. component need to select the resource / loading status out of the store using selector

We could see that step 1, 2, 4, 6, 7 clearly needs an action attached to them.

Therefore i invented this concept called resources to systematically handle those common actions.

First i will create a file named `constant/Resources.js` , I will give each resource a name. But as we could see, each resource actually have at least 5 actions related. Here comes a very small yet handy utility: makeResource .

```js
export default function makeResource(resource, opts = '') {
  const resourceUpper = resource.toUpperCase()

  const resourceConstants = {
    RESOURCE: resource,
    LOADING: `${resourceUpper}_LOADING`,
    CLEAR: `CLEAR_${resourceUpper}`,
  }

  if (opts.includes('C')) {
    Object.assign(resourceConstants, {
      CREATE_DONE: `CREATE_${resourceUpper}_DONE`,
      CREATE_REQUEST: `CREATE_${resourceUpper}_REQUEST`,
    })
  }

  if (opts.includes('R')) {
    Object.assign(resourceConstants, {
      FETCH_DONE: `FETCH_${resourceUpper}_DONE`,
      FETCH_REQUEST: `FETCH_${resourceUpper}_REQUEST`,
    })
  }

  if (opts.includes('U')) {
    Object.assign(resourceConstants, {
      UPDATE_DONE: `UPDATE_${resourceUpper}_DONE`,
      UPDATE_REQUEST: `UPDATE_${resourceUpper}_REQUEST`,
    })
  }

  if (opts.includes('D')) {
    Object.assign(resourceConstants, {
      DELETE_DONE: `DELETE_${resourceUpper}_DONE`,
      DELETE_REQUEST: `DELETE_${resourceUpper}_REQUEST`,
    })
  }

  return resourceConstants
}
```

to use it, just do sth like

```js
const ORDERS = makeResource('order', 'CRUD')

// {
//   RESOURCE: 'order',
//   FETCH_REQUEST: 'FETCH_ORDER_REQUEST',
//   FETCH_DONE: 'FETCH_ORDER_DONE',
//   CREATE_REQUEST: 'FETCH_ORDER_DONE',
//   CREATE_DONE: 'CREATE_ORDER_DONE',
//   UPDATE_REQUEST: 'UPDATE_ORDER_DONE',
//   UPDATE_DONE: 'UPDATE_ORDER_DONE',
//   DELETE_REQUEST: 'DELETE_ORDER_DONE',
//   DELETE_DONE: 'DELETE_ORDER_DONE',
// }
```

next, we need to have a suite of generic actions that will accept those special constants

```js
export const update = resource => payload => ({
  type: resource.UPDATE_REQUEST,
  payload,
})

update.done = resource => payload => ({
  type: resource.UPDATE_DONE,
  payload,
})

export const create = resource => payload => ({
  type: resource.CREATE_REQUEST,
  payload,
})

create.done = resource => payload => ({
  type: resource.CREATE_DONE,
  payload,
})

export const remove = resource => payload => ({
  type: resource.DELETE_REQUEST,
  payload,
})

remove.done = resource => payload => ({
  type: resource.DELETE_DONE,
  payload,
})

export const fetch = resource => payload => ({
  type: resource.FETCH_REQUEST,
  payload,
})

fetch.done = resource => payload => ({
  type: resource.FETCH_DONE,
  payload,
})

export const clear = resource => () => ({
  type: resource.CLEAR,
})
```

for the reducer, actually it's quite easy to generalize as well, but the detailed implementation is related to how the restful API is being designed, so i will make a very extensible reducer

```js
import { combineReducers } from 'redux'
import * as resources from 'app/constants/Resources'

import order from './order'

const extensions = {
  [resources.CONNECTION.ORDER]: order,
}

const resourceReducers = Object.keys(resources).reduce((acc, cur) => {
  const resource = resources[cur]
  if (resource.FETCH_DONE) {
    acc[resource.RESOURCE] = createResourceReducer(
      resource,
      extensions[resource.RESOURCE]
    )
  } else {
    acc[resource.RESOURCE] = extensions[resource.RESOURCE]
  }
  return acc
}, {})

export default combineReducers(resourceReducers)

export function createResourceReducer(resource, extension) {
  const { FETCH_DONE, CLEAR } = resource
  return function reducer(state = {}, action) {
    // those actions are ensured to be in the resource
    switch (action.type) {
      case FETCH_DONE:
        return action.payload
      case CLEAR:
        return {}
      default:
        return extension ? extension(state, action) : state
    }
  }
}
```

In reality, the API that responses data could be quite different, so a very flexible and pluggable reducer is needed here.

In components, upon dispatching a request, you just simply do this.

```js
componentDidMount() {
  this.props.fetchOrder()
}
connect(null, {
  fetchOrder: fetch(Order)
})(YourComponent)
```

this vastly simplified the tedious job to have a dedicated action type for `FETCH_ORDER_REQUEST` and attach an useless action `fetchOrderRequest` for it.

## Control the flow using redux-saga

we have covered the content resource in the previous section. It seems like the we need a tool to control the call sequence and centralize the management of it. Therefore we need redux-saga

With the powerful resource concept, the flow we mentioned above is really easy


```js
import { put, call, fork } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { addMessage } from 'app/actions/messages'
import { startLoading, endLoading } from 'app/actions/loading'
import { ORDER } from 'app/constants/Resources'
import { fetch } from 'app/actions/resources'
import { apiClient } from 'app/utils/network'

export function* fetchOrder() {
  yield put(startLoading(ORDER))

  try {
    const response = yield call(apiClient, {
      method: 'GET',
      url: '/api/order/' + action.payload.id,
    })
    yield put(fetch.done(ORDER)(payload.data))
  } catch (error) {
    yield put(
      addMessage({
        style: 'danger',
        message: payload.message,
        details: payload.details,
      })
    )
  }

  yield put(endLoading(ORDER))
}

export default function*() {
  yield fork(takeLatest, ORDER.FETCH_REQUEST, fetchOrder)
}
```

loud and clear

## redux-form

When it comes to form, usually it's very complicated with React. However, redux-form ease the pain.

here is a complete example of how a form could be handled together with redux-form. I won't be going through the details in redux-form usages

```jsx
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootststrap'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

import isLoading from 'app/selectors/isLoading'
import getResource from 'app/selectors/getResource'
import { USER } from 'app/constants/Resources'
import { PROFILE_FORM } from 'app/constants/Forms'
import { fetch, update } from 'app/actions/resources'

import gridFormGroup from 'app/components/Form/gridFormGroup'
import { InputField } from 'app/components/Form/ReduxFormFields'
import { email, maxLength, required } from 'app/components/Form/validators'

const InputGroup = gridFormGroup(InputField)

const validateEmail = [
  required('Invalid email'),
  email('Invalid email'),
  maxLength(254),
]

const validateName = [maxLength(200)]

class AccountProfileForm extends PureComponent {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <Form horizontal onSubmit={this.props.handleSubmit}>
        <Field
          name="name"
          validate={validateName}
          maxLength="200"
          component={InputGroup}
          label="Full Name"
          placeholder="(Optional)"
        />

        <Field
          name="email"
          validate={validateEmail}
          component={InputGroup}
          maxLength="254"
          info="Email address"
          required
          label="Email"
        />

        <Field
          disabled
          name="password"
          type="password"
          component={InputGroup}
          info={<Link to="/edit-password">Change Password</Link>}
          label="Password"
          placeholder="• • • • • • • •"
        />
      </Form>
    )
  }
}

const getInitialValues = user => ({
  name: user.name,
  email: user.email,
})

const transformPayload = formData => ({
  name: formData.name,
  email: formData.email,
})

const mapStatesToProps = state => ({
  isLoading: isLoading(state, USER),
  initialValues: getInitialValues(getResource(state, USER)),
})

const mapDispatchToProps = {
  onSubmit: formData => update(USER)(transformPayload(formData)),
  fetchUser: fetch(USER),
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(
  reduxForm({
    enableReinitialize: true,
    form: PROFILE_FORM,
  })(AccountProfileForm)
)
```

A few concepts to highlight

1. use `enableReinitialize` is a power flag empowers async data workflow. e.g. for those forms needs to be edited by user, you could use this option to hydrate data into the form
2. `getInitialValues` is a common function I usually use for transforming the raw API response to what the form needs. In some cases, we may need to map raw API response to our frontend form like `name` -> `firstName` + `lastName`
3. `transformPayload` is a common function I usually make for transforming the form value to what we need to post back to API. It allows us to opt in other hidden / inferred values. e.g. `firstName` + `lastName` -> `name`.
4. try to make validation functions as atom as possible, most of the times you could do a chain of validations like `[required, minLength(50), maxLength(250)]`
5. try to build a HoC like `gridFormGroup` to consolidate error messages, hints, horizontal form layout etc, see below

### gridFormGroup HoC

```jsx
export default function gridFormGroup(
  ReduxFormField, 
  grid = { 
    label: {sm: 3}, 
    input: {sm: 9}, 
    help: {smOffset: 3, sm: 9},
) {
  class ReduxFormGroup extends PureComponent {
    render() {
      const {
        input,
        meta,
        label,
        info,
        ...rest
      } = this.props;

      const { touched, error } = meta;
      const displayError = touched && error;

      const errorMessage = error && error.size ? error.join(' ') : error;

      return (
        <FormGroup
          {...formGroupProps}
          controlId={input.name}
          validationState={displayError ? 'error' : null}
        >
          <Col
            as={ControlLabel}
            {...grid.label}
          >
            {label}
          </Col>
          <Col {...grid.input}>
            <ReduxFormField
              input={input}
              meta={meta}
              {...rest}
            />
          </Col>
          {displayError && <Col {...grid.help}><HelpBlock variant="error">{errorMessage}</HelpBlock></Col>}
          {info && <Col {...grid.help}><HelpBlock>{info}</HelpBlock></Col>}
        </FormGroup>
      );
    }
  }

  return ReduxFormGroup;
}
```

## Use URL to control state as much as possible

when an action is taken, we need to display some intermediate UI element to let the user perform some actions. We found that for cases like

1. open /close modal
2. tab change
3. filter change in a list page

it will be the best to purely use URL to control them

### For a modal

```jsx
<Route path="/orders/:id/delete" exact>
  {({ match }) => (
    <DeleteOrderModal
      show={Boolean(match)}
      connection={{ id: match && match.params && match.params.id }}
    />
  )}
</Route>
<Button danger to={`/orders/${orders.id}/delete`}>Delete Order</Button>
```

In such case, to open the modal, you just point the user to specific route, no hassle at all, and it's completely under control

### For Tabs

```jsx
// in route.jsx
<Route path="/settings/profile" exact component={ProfileSettingsPage} />
<Route path="/settings/notifications" exact component={NotificationsSettingsPage} />
// in settings page
<Tabs>
  <Route path="/settings/profile" exact>
    {(match) => 
      <Tab active={!!match} to="/settings/profile">Profile</Tab>
    }
   </Route>
  <Route path="/settings/notifications" exact>
    {(match) => 
      <Tab active={!!match} to="/settings/notifications">Notifications</Tab>
    }
  </Route>
</Tabs>
```

### For Filters

```jsx
// in route.jsx
<Route path="/orders" exact component={OrdersPage} />
// in OrdersPage.jsx
class OrdersPage {
  componentDidUpdate() {
    const query = querystring.parse(this.props.location.search.slice(1));
    this.fetchOrders({
      page: query.page,
    })
  }

  handlePageChange = (page) => {
    this.props.history.push(`/orders?page=${page}`);
  }
  
  render() {
    const query = querystring.parse(this.props.location.search.slice(1));
    const page = query.page || 0;
    return <Orders currentPage={page} onPageChange={this.handlePageChange} />
  }
}
```

So when you need to change filter / pagination, you route will change from `/orders` to `/orders?page=2`, and you could catch that change in the `componentDidUpdate` lifecycle hook and refetch it based on the route change.

one big pro for this approach is that you get `go back` action in browser for free! imagine that you are building an e-commerce app, when user goes inside into the details of the order and wants to update some order details, he / she may just click `go back` on browser without intention to lose the previous filters, control those filter state on route suites perfectly into this situation.

Another pro is by using URL to control filters, even if the user refreshes the browser, he / she won't loose the selected statuses

## control # of root reducers

with all of the concept and tips above, actually we have made our store very clean normally the store will look like this

```js
export default combineReducers({
  form,
  loadings,
  messages,
  router,
  resources,
})
```

1. all http request / response are squashed to the `resources` namespace
2. displaying loading or not could be purely controlled by the `loadings` reducer
3. `messages` will be used to show / hide toast messages / error message on the page
4. `router`, usually with aid of `connected-react-router` we could bind redux state with actually router
5. `form` is controlled by redux-form

Limiting # of root reducers helps your to tidy up the store in a much cleaner way, rather than putting 100 keys at the root, when you get the redux-state tree, you always know where to find what.
