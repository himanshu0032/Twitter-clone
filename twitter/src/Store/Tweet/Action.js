import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../Components/config/api"
import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_ALL_TWEETS_SUCCESS, GET_USERS_TWEETS_FAILURE, GET_USERS_TWEETS_REQUEST, GET_USERS_TWEETS_SUCCESS, LIKE_TWEET_FAILURE, LIKE_TWEET_SUCCESS, REPLY_TWEET_FAILURE, REPLY_TWEET_SUCCESS, RETWEET_FAILURE, RETWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_SUCCESS, USER_LIKE_TWEET_FAILURE, USER_LIKE_TWEET_SUCCESS } from "./ActionType";
import { Delete } from "@mui/icons-material";

export const getAllTweets = ()=>async(dispatch) =>{
    try {
        const {data}= await api.get("/api/tweets/");
        console.log("get all tweets:",data)
        dispatch({type:GET_ALL_TWEETS_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_ALL_TWEETS_FAILURE, payload:error.message})
    }
}

export const getUsersTweets = (userId)=>async(dispatch) =>{
    try {
        const {data}= await api.get(`/api/tweets/user/${userId}`);
        console.log("get users tweets:",data)
        dispatch({type:GET_USERS_TWEETS_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_USERS_TWEETS_FAILURE, payload:error.message})
    }
}

export const findTweetsByLikeContainsUser = (userId)=>async(dispatch) =>{
    try {
        const {data}= await api.get(`/api/tweets/user/${userId}/likes`);
        console.log(" users likes tweets:",data)
        dispatch({type:USER_LIKE_TWEET_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:USER_LIKE_TWEET_FAILURE, payload:error.message})
    }
}

export const findTweetsById = (tweetId)=>async(dispatch) =>{
    try {
        const {data}= await api.get(`/api/tweets/${tweetId}`);
        console.log("find tweet by id:",data)
        dispatch({type:FIND_TWEET_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:FIND_TWEET_BY_ID_FAILURE, payload:error.message})
    }
}

export const createTweet = (tweetData)=>async(dispatch) =>{
    try {
        const {data}= await api.post(`/api/tweets/create`, tweetData);
        console.log("created tweet",data)
        dispatch({type:TWEET_CREATE_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:TWEET_CREATE_FAILURE, payload:error.message})
    }
}

export const createTweetReply = (tweetData)=>async(dispatch) =>{
    try {
        const {data}= await api.post(`/api/tweets/reply`, tweetData);
        console.log("reply tweet",data)
        dispatch({type:REPLY_TWEET_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:REPLY_TWEET_FAILURE, payload:error.message})
    }
}

export const createRetweet = (tweetId)=>async(dispatch) =>{
    try {
        const {data}= await api.put(`/api/tweets/${tweetId}/retweet`);
        console.log("retweet",data)
        dispatch({type:RETWEET_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:RETWEET_FAILURE, payload:error.message})
    }
}

export const likeTweet = (tweetId)=>async(dispatch) =>{
    try {
        const {data}= await api.post(`/api/${tweetId}/like`);
        console.log("like Tweet",data)
        dispatch({type:LIKE_TWEET_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:LIKE_TWEET_FAILURE, payload:error.message})
    }
}

export const deleteTweet = (tweetId)=>async(dispatch) =>{
    try {
        const {data}= await api.delete(`/api/tweet/${tweetId}`);
        console.log("delete Tweet",data)
        dispatch({type:TWEET_DELETE_SUCCESS, payload:data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:TWEET_DELETE_FAILURE, payload:error.message})
    }
}