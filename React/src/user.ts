export type User = {
    id?: number,
    firstName?: string,
    lastName?: string,
    password?: string,
    email?: string,
    address?: string,
    phone?: string
}

export type Action = {
    type: 'POST' | 'PUT' | 'REMOVE',
    data: Partial<User>
}

export const userReducer = (
    state: User, action: Action
): User => {
    const { id, firstName, lastName, password, email, address, phone } = action.data as Partial<User>

    switch (action.type) {
        case 'PUT':

            return {
                ...state,
                id: id,
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                address: address,
                phone: phone
            }
        case 'REMOVE':
            return{
                id: undefined,
            }
        case 'POST':
            return {
                ...state,
                id: id,
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                address: address,
                phone: phone
            }

    }
    return state
}
