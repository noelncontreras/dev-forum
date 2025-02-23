import axios from "axios";

//initialState
const initialState = {
    topics: [],
    posts: [],
    posts
}

//constants
const UPDATE_TOPICS = "UPDATE_TOPICS";
const UPDATE_POSTS = "UPDATE_POSTS";
const  ADD_POSTS = "ADD_POSTS";

//action creators
export function updateTopics() {
    return {
        type: UPDATE_TOPICS,
        payload: axios.get("/api/topics")
    }
}

export function updateTopics(topicId) {
    return {
        type: UPDATE_POSTS,
        payload: axios.get(`/api/posts/${topicId}`)
    }
}

export function addPost(newPost) {
    return {
        type: ADD_POST,
        payload: axios.post("/api/posts/", newPost)
    }
}

//reducer
export default function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_TOPICS:
            return {
                ...state,
                topics: payload
            }
        case UPDATE_POSTS:
            return {
                ...state,
                posts: payload
            }
        case ADD_POSTS:
            return {
                ...state,
                posts: payload
            }
        default:
            return state;
    }
}