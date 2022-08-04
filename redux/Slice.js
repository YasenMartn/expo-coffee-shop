import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "games",
    initialState: {
        games: [
            {title: "Zelda", desc: "lorem ipsum zelda game", rating: 2, id: "1"},
            {title: "Super Mario", desc: "lorem ipsum super mario", rating: 1, id: "2"},
            {title: "League of Legends", desc: "lorem ipsum league of legends", rating: 5, id: "3"},
        ],
        modal: false,
    }, 
    reducers: {
        addGame: (state, action) => {
            const peusdoId = (new Date()).getTime();
            state.games.push({
                id: peusdoId,
                title: action.payload.title,
                desc: action.payload.desc,
                rating: action.payload.rating,
            });
        },
        deleteGame: (state, action) => {
            state.games = state.games.filter(
                game => game.id !== action.payload.gameId
            )
        },
        updateGame: (state, action) => {
            const gamesArr = state.games;
            gamesArr.forEach((game) => {
                if (game.id === action.payload.id) {
                    game.title = action.payload.title,
                    game.desc = action.payload.desc,
                    game.rating = action.payload.rating
                }
              });
              state.games = [...gamesArr];
        },
        openModal: (state) => {
            state.modal = true
        },
        closeModal: (state) => {
            state.modal = false
        },
    }
})


export const {addGame, deleteGame, openModal, closeModal, updateGame} = cartSlice.actions;

export default cartSlice.reducer;