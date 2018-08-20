export default function(state = null, action) {
    switch(action.type) {
        case 'PREOCESSES_FETCHED':
            return { ...state, data: action.payload };
            case 'PROCESS_SUBMISSION_SUCESS':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
