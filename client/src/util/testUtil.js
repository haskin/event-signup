import React from 'react';
// import {render} from '@testing-library/react'
import {render} from '@testing-library/react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import {initialState as updateInitialState, updateReducer} from '../reducers/updateReducer'
import {intialState as updateInitialState, updateReducer} from '../reducers/updateReducer';

function customRender(ui, {
    initialState = updateInitialState,
    store = createStore(updateReducer, updateInitialState),
    ...renderOptions
    } = {}){

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'


// override render method
export { customRender as render }

// {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
// }