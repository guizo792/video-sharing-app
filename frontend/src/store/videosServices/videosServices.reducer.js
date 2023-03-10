const INITIAL_STATE = {
  isFetching: false,
  videos: [],
  video: {},
  error: null,
};

export const videosServicesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_VIDEOS_STARTED":
      return { ...state, isFetching: true };
    case "FETCH_VIDEOS_SUCCESS":
      return { ...state, videos: action.payload, isFetching: false };
    case "FETCH_VIDEOS_FAILURE":
      return { ...state, error: action.payload, isFetching: false };
    case "FETCH_VIDEO_STARTED":
      return { ...state, isFetching: true };
    case "FETCH_VIDEO_SUCCESS":
      return { ...state, video: action.payload, isFetching: false };
    case "FETCH_VIDEO_FAILURE":
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};
