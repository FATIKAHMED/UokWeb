import { createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../Utils/axios';
import { isTokenPresent, setSession } from '../Utils/jwt';

// ----------------------------------------------------------------------

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    isFetching: false,
    posts: [],
    tags: [],
    percentCompleted:0,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    FETCHING: (state, action) => {
        const { isFetching } = action.payload;

        return {
            ...state,
            isFetching,
        };
    },
    POSTS: (state, action) => {
        const { posts } = action.payload;

        return {
            ...state,
            posts,
        };
    },
    TAGS: (state, action) => {
        const { tags } = action.payload;

        return {
            ...state,
            tags,
        };
    },
    UPLOAD_PROGRESS: (state, action) => {
        const { percentCompleted } = action.payload;

        return {
            ...state,
            percentCompleted,
        };
    },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
    googleLogin: () => Promise.resolve(),
    facebookLogin: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
    forgotPassword: () => Promise.resolve(),
    resetPassword: () => Promise.resolve(),
    verifyCode: () => Promise.resolve(),
    getPosts: () => Promise.resolve(),
    getPostsGeneral: () => Promise.resolve(),
    createPost: () => Promise.resolve(),
    setLikeDislike: () => Promise.resolve(),
    getTags: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        const initialize = async () => {
            await getPosts({ filter: [], sort: "top" });
            // await getPostsGeneral({filter: [], sort: "top"});
            await getTags();
            // if(localStorage.getItem("accessToken")){
            //     await getPosts({filter: [], sort: "top"});

            // }else{
            //     await getPostsGeneral({filter: [], sort: "top"});

            // }            

        };

        initialize();
    }, []);

    const login = async (email, password) => {
        //  /api/account/login'
        let payload = {
            email,
            password,
        };
        try {
            const response = await axios.post('/api/general/login', payload);
            const { token, data: { _id, email, name } } = response.data;
            const user = { _id, email, name }
            setSession(token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                },
            });

            return { response, error: null }

        }
        catch (error) {
            console.log("errror", error)
            return { error, response: null }
        }


    };

    const googleLogin = async ({ user, authDetails, token }) => {
        console.log("googleFB", user)
        // setSession(accessToken,user);
        // dispatch({
        //     type: 'LOGIN',
        //     payload: {
        //         user
        //     },
        // });
        console.log("authDetails", authDetails)
        console.log("user", user)
        console.log("token", token)
        // let payload = {
        //     email,
        //     password,
        //     name,
        // };
        try {
            const response = await axios.post('/api/general/signup', authDetails);
            const { token, data: { _id, email, name, posts } } = response.data;
            const user = { _id, email, name }
            setSession(token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                },
            });
            dispatch({
                type: 'POSTS',
                payload: {
                    posts
                },
            });

            return { response, error: null }

        }
        catch (error) {
            return { error, response: null }
        }
    }
    const facebookLogin = async (accessToken, user) => {
        // console.log("userFB",user)
        // setSession(accessToken,user);
        // dispatch({
        //     type: 'LOGIN',
        //     payload: {
        //         user
        //     },
        // });
        const payload = { access_token: accessToken, auth_type: "facebook" }
        try {
            const response = await axios.post('/api/general/signup', payload);
            const { token, data: { _id, email, name, posts } } = response.data;
            const user = { _id, email, name }
            setSession(token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                },
            });
            dispatch({
                type: 'POSTS',
                payload: {
                    posts
                },
            });

            return { response, error: null }

        }
        catch (error) {
            return { error, response: null }
        }
    }

    const register = async (name, email, password) => {
        // /api/account/register

        let payload = {
            email,
            password,
            name,
        };
        try {
            const response = await axios.post('/api/general/signup', payload);
            const { token, data: { _id, email, name, posts } } = response.data;
            const user = { _id, email, name }
            setSession(token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                },
            });
            dispatch({
                type: 'POSTS',
                payload: {
                    posts
                },
            });

            return { response, error: null }

        }
        catch (error) {
            return { error, response: null }
        }
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: 'LOGOUT' });
    };

    const forgotPassword = async (email) => {
        let url = `/api/user/forgot-password/${email}`;
        const response = await axios.get(url);
        console.log('response', response);
        return;

        // dispatch({
        //   type: 'RESET_PASSWORD',
        //   payload: {
        //     user,
        //   },
        // });
    };

    const verifyCode = async (obj) => {
        let url = `/api/user/verify`;
        try {
            let response = await axios.post(url, obj);
            console.log('verify-->', response);
            return { response: response.data, error: null };

        }
        catch (error) {
            console.log("error==>", error)
            return { response: null, error };
        }

        // dispatch({
        //   type: 'RESET_PASSWORD',
        //   payload: {
        //     user,
        //   },
        // });
    };

    const resetPassword = async (obj) => {
        console.log("password-->", obj)
        let url = `/api/user/reset`
        let response = await axios.put(url, obj)
        console.log('response', response);
        return { response: response.data, error: null };

        // dispatch({
        //   type: 'RESET_PASSWORD',
        //   payload: {
        //     user,
        //   },
        // });
    };

    const getPosts = async (filterObj) => {
        //  /api/account/login'
        try {
            if (isTokenPresent()) {
                const accessToken = localStorage.getItem("accessToken")
                let config = {
                    headers: {
                        'Authorization': accessToken
                    }
                }
                dispatch({
                    type: 'FETCHING',
                    payload: {
                        isFetching: true,
                    },
                });

                const response = await axios.get('/api/general/', config, filterObj);
                const { data: { _id, email, name, posts } } = response.data;
                // if(!localStorage.getItem("user")){
                const user = { _id, email, name }

                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: true,
                        user,
                    },
                });

                // }
                dispatch({
                    type: 'POSTS',
                    payload: {
                        posts,
                    },
                });
                dispatch({
                    type: 'FETCHING',
                    payload: {
                        isFetching: false,
                    },
                });

                return { response, error: null }




            }
            else {
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });

            }
        } catch (error) {
            dispatch({
                type: 'INITIALIZE',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });
            return { response: null, error }
        }



    };
    const getPostsGeneral = async (filterObj) => {
        console.log("filterObj", filterObj)
        try {
            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: true,
                },
            });

            const response = await axios.post('/api/general/post/all', filterObj);
            const { data } = response.data;
            console.log("responsoe", data)

            dispatch({
                type: 'POSTS',
                payload: {
                    posts: data,
                },
            });
            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });

            return { response: data, error: null }


        } catch (error) {
            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });
            return { response: null, error }
        }



    };

    const createPost = async (obj) => {
        //  /api/account/login'     
        try {
            if (isTokenPresent()) {
                const accessToken = localStorage.getItem("accessToken")
                let config = {
                    headers: {
                        'Authorization': accessToken
                    },
                    onUploadProgress: progressEvent => {
                        let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                        // do whatever you like with the percentage complete
                        console.log("percentCompleted", percentCompleted)
                        dispatch({
                            type: 'UPLOAD_PROGRESS',
                            payload: {
                                percentCompleted,
                            },
                        });
                        // maybe dispatch an action that will update a progress bar or something
                    },
                    'content-type': 'multipart/form-data'
                }
                dispatch({
                    type: 'FETCHING',
                    payload: {
                        isFetching: true,
                    },
                });
                let formData = new FormData();    //formdata object
                let data = { ...obj }
                delete data.files
                let files = [...obj.files]

                formData.append("data", JSON.stringify(data));   //append the values with key, value pair

                files.forEach(file => {
                    formData.append("files", file)
                });



                const response = await axios.post('/api/general/post/create', formData, config);

                console.log("response", response)

                dispatch({
                    type: 'FETCHING',
                    payload: {
                        isFetching: false,
                    },
                });
                dispatch({
                    type: 'UPLOAD_PROGRESS',
                    payload: {
                        percentCompleted:0,
                    },
                });

                // dispatch({
                //     type: 'POSTS',
                //     payload: {
                //         posts,
                //     },
                // });

                return { response: response.data, error: null }




            }

        } catch (error) {

            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });
            return { response: null, error }
        }



    };
    const setLikeDislike = async (obj) => {
        console.log("setLikeDislike", obj)
        // const obj={
        //     "postId": "6260701c8ba9722d937eabb6",
        //     "action": "like"
        // }
        try {
            if (isTokenPresent()) {
                const accessToken = localStorage.getItem("accessToken")
                let config = {
                    headers: {
                        'Authorization': accessToken
                    },
                    'content-type': 'multipart/form-data'
                }
                // dispatch({
                //     type: 'FETCHING',
                //     payload: {
                //         isFetching: true,
                //     },
                // });


                const response = await axios.post('/api/general/react', obj, config);

                console.log("response", response)

                // dispatch({
                //     type: 'FETCHING',
                //     payload: {
                //         isFetching: false,
                //     },
                // });

                // dispatch({
                //     type: 'POSTS',
                //     payload: {
                //         posts,
                //     },
                // });

                return { response: response.data, error: null }




            }

        } catch (error) {

            // dispatch({
            //     type: 'FETCHING',
            //     payload: {
            //         isFetching: false,
            //     },
            // });
            return { response: null, error }
        }



    };


    const getTags = async () => {


        try {
            // if (isTokenPresent()) {
            //     const accessToken = localStorage.getItem("accessToken")
            //     let config = {
            //         headers: {
            //             'Authorization': accessToken
            //         },
            //         'content-type': 'multipart/form-data'
            //     }
            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: true,
                },
            });



            const response = await axios.post('/api/general/tags');
            const { data } = response.data;
            console.log("response", response)

            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });

            dispatch({
                type: 'TAGS',
                payload: {
                    tags: data,
                },
            });

            return { response: response.data, error: null }




            // }

        } catch (error) {

            dispatch({
                type: 'FETCHING',
                payload: {
                    isFetching: false,
                },
            });
            return { response: null, error }
        }



    };


    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'jwt',
                login,
                googleLogin,
                facebookLogin,
                logout,
                register,
                forgotPassword,
                resetPassword,
                verifyCode,
                getPosts,
                getPostsGeneral,
                createPost,
                setLikeDislike,
                getTags,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
