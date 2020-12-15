import * as ActionTypes from './types'

export const addRow = (newRow) => {
  return { type: ActionTypes.ADD_ROW, payload: newRow }
}

export const editRow = (updatedRow) => {
  return { type: ActionTypes.EDIT_ROW, payload: updatedRow }
}

export const deleteRow = (targetRowId) => {
  return { type: ActionTypes.DELETE_ROW, payload: targetRowId }
}
