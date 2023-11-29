import { createSlice } from '@reduxjs/toolkit'

const initialState: FilterState = {
  searchResult: [],
  isResult: false,
  cardsList: [],
  marksList: [],
  modelsList: [],
  filteredModels: [],
  yearsList: [],
  selectsList: [
    {
      name: 'mark',
      label: 'Выберите марку автомобиля',
      uniqueOptions: []
    },
    {
      name: 'model',
      label: 'Выберите модель',
      uniqueOptions: []
    },
    {
      name: 'year',
      label: 'Выберите год',
      uniqueOptions: []
    }
  ]
}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getCardsList(state, action) {
      state.cardsList.push(...action.payload)
    },
    setMarks(state) {
      state.marksList.push(
        ...state.cardsList.map(
          (item: CardData) => item.attributes.mark
        )
      )
      state.selectsList.map(select => {
        if (select.name === 'mark') {
          select.uniqueOptions = [
            ...new Set(state.marksList)
          ]
        }
      })
    },
    setModels(state, action) {
      state.filteredModels = state.cardsList.filter(
        (item: CardData) =>
          item.attributes.mark.includes(action.payload)
      )
      const filteredModelsList = state.filteredModels.map(
        (item: CardData) => item.attributes.model
      )

      state.modelsList = [...new Set(filteredModelsList)]

      const modelSelect = state.selectsList.find(
        select => select.name === 'model'
      )
      if (modelSelect) {
        modelSelect.uniqueOptions = [...state.modelsList]
      }
    },
    setYears(state, action) {
      const filteredYears = state.filteredModels
        .filter((item: CardData) =>
          item.attributes.model.includes(action.payload)
        )
        .map((item: CardData) => item.attributes.year)

      state.yearsList = [...new Set(filteredYears)]

      const yearSelect = state.selectsList.find(
        select => select.name === 'year'
      )
      if (yearSelect) {
        yearSelect.uniqueOptions = [...state.yearsList]
      }
    },
    setFilter(state, action) {
      state.isResult = true
      state.searchResult = state.cardsList.filter(
        (card: CardData) => {
          const markResult = card.attributes.mark.includes(
            action.payload['mark']
          )
          const modelResult =
            card.attributes.model.includes(
              action.payload['model']
            )
          const yearResult = card.attributes.year.includes(
            action.payload['year']
          )
          return markResult && modelResult && yearResult
        }
      )
    },
    clearResult(state) {
      state.selectsList.forEach(item => {
        if (item.name === 'model' || item.name === 'year') {
          item.uniqueOptions = []
        }
      })
    }
  }
})

export const {
  setMarks,
  getCardsList,
  setModels,
  setYears,
  setFilter,
  clearResult
} = filterSlice.actions
export default filterSlice.reducer
