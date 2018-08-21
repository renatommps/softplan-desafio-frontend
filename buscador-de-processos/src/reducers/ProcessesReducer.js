export default function(state = null, action) {
    switch(action.type) {
        case 'PREOCESSES_FETCHED':
            return { ...state, data: action.payload };
        case 'PROCESS_SUBMISSION_SUCESS':
            return { ...state};
        case 'PREOCESSES_DELETED_SUCESS':
            return { ...state, data: state.data.filter(process => process.id !== action.payload.id)};
        default:
            return state;
    }
};
