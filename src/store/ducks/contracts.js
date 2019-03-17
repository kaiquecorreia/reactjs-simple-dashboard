export const Types = {
  GET_REQUEST: 'contracts/GET_REQUEST',
  GET_SUCCESS: 'contracts/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
};

export default function contracts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };

    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
}

export const Creators = {
  getContractRequest: () => ({ type: Types.GET_REQUEST }),

  getContractSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
