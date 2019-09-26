const initialState =  [
    {id: 0, path: '/Event01', text: 'Сплавы, походы'},
    {id: 1, path: '/Event02', text: 'Квесты'},
    {id: 2, path: '/Event03', text: 'Игры'},
    {id: 3, path: '/Event04', text: 'Веревочный парк'},
    {id: 4, path: '/Event05', text: 'Тир'},
]

const menuReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default menuReducer