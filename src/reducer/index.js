import * as ActionTypes from './types'

const initialState = {
  dataRows: [
    { id: '771158731', title: 'fix(router): correctly deactivate children with componentless parent', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-18T21:41:45Z', updated: '2020-12-18T21:41:45Z' },
    { id: '771113520', title: 'docs: HTTP in HttpClient should not be written in uppercase', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-18T20:44:06Z', updated: '2020-12-18T20:44:06Z' },
    { id: '771058404', title: 'docs: an animation for the lifecycle hooks SpyDirective example doesn\'t match to an actual behavior', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-11T19:50:02Z', updated: '2020-12-11T19:59:42Z' },
    { id: '771043691', title: 'fix(localize): ensure extracted messages are serialized in a consistent order', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-18T19:23:53Z', updated: '2020-12-18T19:23:53Z' },
    { id: '770998350', title: 'Angular animations leak', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-18T17:19:55Z', updated: '2020-12-18T17:19:55Z' },
    { id: '770912579', title: 'Docs: Transfer in-memory-web-api into main repo', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-11T19:50:02Z', updated: '2020-12-18T18:08:17Z' },
    { id: '770819755', title: 'docs: No Id\'s in products.ts in the getting started guide', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', created: '2020-12-18T18:01:17Z', updated: '2020-12-18T18:01:17Z' },
  ]
}

const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ROW:
      return {
        ...state,
        dataRows: [...state.dataRows, action.payload]
      }
    case ActionTypes.EDIT_ROW: {
      const targetIndex = state.dataRows.findIndex(v => v.id === action.payload.id)

      if (targetIndex < 0) return state

      return {
        ...state,
        dataRows: [
          ...state.dataRows.slice(0, targetIndex),
          action.payload,
          ...state.dataRows.slice(targetIndex + 1)
        ]
      }
    }
    case ActionTypes.DELETE_ROW: {
      const targetIndex = state.dataRows.findIndex(v => v.id === action.payload)

      if (targetIndex < 0) return state
      
      return {
        ...state,
        dataRows: [
          ...state.dataRows.slice(0, targetIndex),
          ...state.dataRows.slice(targetIndex + 1)
        ]
      }
    }

    default:
      return state
  }
}

export default reducer
