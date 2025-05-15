
export type User = {
    id?: number,
    userName?: string,
    // lastName?: string,
    password?: string,
    email?: string,
    // address?: string,
    phoneNumber?: string
}

// export type Action = {
//     type: 'POST' | 'PUT' | 'REMOVE',
//     data: Partial<User>
// }
export type Action = {
    type: 'POST' | 'PUT' | 'REMOVE' | 'LOGOUT', // הוספת 'LOGOUT'
    data?: Partial<User> // data לא חייב להיות קיים ב-LOGOUT
}

// export const userReducer = (
//     state: User, action: Action
// ): User => {
//     // const { id, firstName, lastName, password, email, address, phone } = action.data as Partial<User>
//     const { id, firstName, lastName, password, email, address, phone } = action.data as Partial<User>

//     switch (action.type) {
//         case 'PUT':

//             return {
//                 ...state,
//                 id: id,
//                 firstName: firstName,
//                 lastName: lastName,
//                 password: password,
//                 email: email,
//                 address: address,
//                 phone: phone
//             }
//         case 'REMOVE':
//             return{
//                 id: undefined,
//             }
//         case 'POST':
//             return {
//                 ...state,
//                 id: id,
//                 firstName: firstName,
//                 lastName: lastName,
//                 password: password,
//                 email: email,
//                 address: address,
//                 phone: phone
//             }

//     }
//     return state
// }
export const userReducer = (
    state: User, action: Action
): User => {
    const { id, userName, password, email, phoneNumber } = action.data || {};

    switch (action.type) {
        case 'PUT':
            return {
                ...state,
                id: id,
                userName: userName,
                // lastName: lastName,
                password: password,
                email: email,
                // address: address,
                phoneNumber: phoneNumber
            };
        case 'REMOVE':
            return {
                id: undefined,
            };
        case 'POST':
            return {
                ...state,
                id: id,
                userName: userName,
                // lastName: lastName,
                password: password,
                email: email,
                // address: address,
                phoneNumber: phoneNumber
            };
        case 'LOGOUT': // הוספת מקרה ל-LOGOUT
            return {
                id: undefined,
                userName: undefined,
                // lastName: undefined,
                password: undefined,
                email: undefined,
                // address: undefined,
                phoneNumber: undefined
            };
    }
    return state;
}
