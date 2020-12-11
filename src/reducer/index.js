import * as ActionTypes from './types'

const initialState = {
  dataRows: [
    // TODO: Delete dummy row
    { id: '762821087', title: 'PR #38750 - fix(docs-infra): typography, layout and UI polish', state: 'open', url: 'https://api.github.com/repos/angular/angular/issues/40093', createdAt: '2020-12-11T19:50:02Z', updatedAt: '2020-12-11T19:59:42Z' }
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
