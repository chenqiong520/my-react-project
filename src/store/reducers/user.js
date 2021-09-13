const initUserInfo = {
    name : ''
}
export default function user (state = initUserInfo, action) {
    switch(action.type) {
        case 'setToken':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}