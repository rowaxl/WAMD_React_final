import * as ActionTypes from './types'

export const addNewRow = (newRow) => (dispatch) => {
  return dispatch({ type: ActionTypes.ADD_ROW, payload: newRow })
}

export const editRow = (updatedRow) => (dispatch) => {
  return dispatch({ type: ActionTypes.EDIT_ROW, payload: updatedRow })
}

export const deleteRow = (targetRowId) => (dispatch) => {
  return dispatch({ type: ActionTypes.DELETE_ROW, payload: targetRowId })
}
