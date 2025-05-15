// // // // import axios from 'axios';

// // // // interface AuthResult {
// // // //   token: string;
// // // // }

// // // // const apiUrl = "https://localhost:7183/api";
// // // // axios.defaults.baseURL = apiUrl;

// // // // console.log('API URL:', apiUrl);

// // // // setAuthorizationBearer();

// // // // function saveAccessToken(authResult: AuthResult) {
// // // //   localStorage.setItem("access_token", authResult.token);
// // // //   setAuthorizationBearer();
// // // // }

// // // // function setAuthorizationBearer() {
// // // //   const accessToken = localStorage.getItem("access_token");
// // // //   if (accessToken) {
// // // //     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// // // //   }
// // // // }

// // // // axios.interceptors.response.use(
// // // //   function(response) {
// // // //     return response;
// // // //   },
// // // //   function(error) {
// // // //     if (error.response.status === 401) {
// // // //       window.location.href = "/login";
// // // //     }
// // // //     return Promise.reject(error);
// // // //   }
// // // // );

// // // // function decodeToken(token: string) {
// // // //   const payload = token.split('.')[1];
// // // //   return JSON.parse(atob(payload));
// // // // }

// // // // export default {
// // // //   getLoginUser: () => {
// // // //     const accessToken = localStorage.getItem("access_token");
// // // //     if (accessToken) {
// // // //       return decodeToken(accessToken);
// // // //     }
// // // //     return null;
// // // //   },

// // // //   logout: () => {
// // // //     localStorage.setItem("access_token", "");
// // // //   },

// // // // register: async (userName: string, password: string, email: string, phoneNumber: string) => {
// // // //     const res = await axios.post<AuthResult>("/register", { userName, password, email, phoneNumber});
// // // //     saveAccessToken(res.data);
// // // // },


// // // //   login: async (email: string, password: string) => {
// // // //     const res = await axios.post<AuthResult>("/login", { email, password });
// // // //     saveAccessToken(res.data);
// // // //   },

// // // //   getCourses: async () => {
// // // //     const res = await axios.get("/Folder");
// // // //     return res.data;
// // // //   },

// // // //   getUsers: async () => {
// // // //     const res = await axios.get("/User");
// // // //     return res.data;
// // // //   }
// // // // };
// // // import axios from 'axios';

// // // interface AuthResult {
// // //   token: string;
// // // }

// // // const apiUrl = "https://localhost:7183/api";
// // // axios.defaults.baseURL = apiUrl;

// // // console.log('API URL:', apiUrl);

// // // setAuthorizationBearer();

// // // function saveAccessToken(authResult: AuthResult) {
// // //   localStorage.setItem("access_token", authResult.token);
// // //   setAuthorizationBearer();
// // // }

// // // function setAuthorizationBearer() {
// // //   const accessToken = localStorage.getItem("access_token");
// // //   if (accessToken) {
// // //     axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// // //   }
// // // }

// // // axios.interceptors.response.use(
// // //   function(response) {
// // //     return response;
// // //   },
// // //   function(error) {
// // //     if (error.response.status === 401) {
// // //       window.location.href = "/login";
// // //     }
// // //     return Promise.reject(error);
// // //   }
// // // );

// // // function decodeToken(token: string) {
// // //   const payload = token.split('.')[1];
// // //   return JSON.parse(atob(payload));
// // // }

// // // export default {
// // //   getLoginUser: () => {
// // //     const accessToken = localStorage.getItem("access_token");
// // //     if (accessToken) {
// // //       return decodeToken(accessToken);
// // //     }
// // //     return null;
// // //   },

// // //   logout: () => {
// // //     localStorage.removeItem("access_token");
// // //     delete axios.defaults.headers.common["Authorization"];
// // //   },

// // //   register: async (userName: string, password: string, email: string) => {
// // //     const res = await axios.post<AuthResult>("/register", { userName, password, email });
// // //     saveAccessToken(res.data);
// // //   },

// // //   login: async (email: string, password: string) => {
// // //     const res = await axios.post<AuthResult>("/login", { email, password });
// // //     saveAccessToken(res.data);
// // //   },

// // //   getCourses: async () => {
// // //     const res = await axios.get("/Folder");
// // //     return res.data;
// // //   },

// // //   getUsers: async () => {
// // //     const res = await axios.get("/User");
// // //     return res.data;
// // //   }
// // // };
// import axios from 'axios';

// interface AuthResult {
//     token: string;
// }

// const apiUrl = "https://localhost:7183/api";
// axios.defaults.baseURL = apiUrl;

// console.log('API URL:', apiUrl);

// setAuthorizationBearer();

// function saveAccessToken(authResult: AuthResult) {
//     localStorage.setItem("access_token", authResult.token);
//     setAuthorizationBearer();
// }

// function setAuthorizationBearer() {
//     const accessToken = localStorage.getItem("access_token");
//     if (accessToken) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//     }
// }

// axios.interceptors.response.use(
//     function(response) {
//         return response;
//     },
//     function(error) {
//         if (error.response.status === 401) {
//             window.location.href = "/Auth/login";
//         }
//         return Promise.reject(error);
//     }
// );

// function decodeToken(token: string) {
//     const payload = token.split('.')[1];
//     return JSON.parse(atob(payload));
// }

// export default {
//     getLoginUser: () => {
//         const accessToken = localStorage.getItem("access_token");
//         if (accessToken) {
//             return decodeToken(accessToken);
//         }
//         return null;
//     },

//     logout: () => {
//         localStorage.removeItem("access_token");
//         delete axios.defaults.headers.common["Authorization"];
//     },

//     register: async (userName: string,email: string , phoneNumber:string , roles: string[]) => {
//         const res = await axios.post<AuthResult>("/Auth/register", { userName,email,phoneNumber , roles });
//         saveAccessToken(res.data);
//     },

//     login: async (email: string, password: string) => {
//         const res = await axios.post<AuthResult>("/Auth/login", { email, password });
//         saveAccessToken(res.data);
//     },
  
//     getCourses: async () => {
//         const res = await axios.get("/Folder");
//         return res.data;
//     },

//     getUsers: async () => {
//         const res = await axios.get("/User");
//         return res.data;
//     }
// };
import axios from 'axios';

interface AuthResult {
    token: string;
}

const apiUrl = "https://localhost:7183/api";
axios.defaults.baseURL = apiUrl;

console.log('API URL:', apiUrl);

setAuthorizationBearer();

function saveAccessToken(authResult: AuthResult) {
    localStorage.setItem("access_token", authResult.token);
    setAuthorizationBearer();
}

function setAuthorizationBearer() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
}

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        // טיפול בשגיאות לא צפויות
        if (error.response) {
            if (error.response.status === 401) {
                window.location.href = "/Auth/login";
            } else {
                console.error("Unexpected error:", error.response.data);
            }
        } else {
            console.error("Network error or server is down", error);
        }
        return Promise.reject(error);
    }
);

function decodeToken(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

export default {
    getLoginUser: () => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            return decodeToken(accessToken);
        }
        return null;
    },

    logout: () => {
        localStorage.removeItem("access_token");
        delete axios.defaults.headers.common["Authorization"];
    },

    register: async (userName: string, email: string ,phoneNumber:string , roles: string[]) => {
        try {
            const res = await axios.post<AuthResult>("/Auth/register", { userName, email, phoneNumber, roles });
            saveAccessToken(res.data);
        } catch (error) {
            console.error("Registration error:", error);
            throw error; // או טיפול נוסף בשגיאה
        }
    },

    login: async (email: string, password: string) => {
        try {

            const res = await axios.post<AuthResult>("/Auth/login", { email, password });
            saveAccessToken(res.data);
        } catch (error) {
            console.error("Login error:", error);
            throw error; // או טיפול נוסף בשגיאה
        }
    },
  
    getCourses: async () => {
        try {
            const res = await axios.get("/Folder");
            return res.data;
        } catch (error) {
            console.error("Get courses error:", error);
            throw error; // או טיפול נוסף בשגיאה
        }
    },

    getUsers: async () => {
        try {
            const res = await axios.get("/User");
            return res.data;
        } catch (error) {
            console.error("Get users error:", error);
            throw error; // או טיפול נוסף בשגיאה
        }
    },

    
    downloadFile: async (fileName: string) => {
        try {
            const response = await axios.get(`/upload/download-file/${fileName}`, {
                // responseType: 'blob', // Important for handling binary data
            });
            // Create a URL for the file and return it
            const url = window.URL.createObjectURL(new Blob([response.data]));
            return url;
        } catch (error) {
            console.error("Download file error:", error);
            throw error; // Or handle the error as needed
        }
    }
};
