import { Button } from "@mui/material"
import { FormEvent, useContext } from "react"
import { UserContextType, UserContext } from "./UserProvider";

export default () => {
    const { user, userDispatch } = useContext<UserContextType | undefined>(UserContext) || { user: null, userDispatch: () => { } };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        userDispatch({ type: 'REMOVE', data: { ...user } });
    }

    return (<>
        <Button onClick={handleSubmit}>sign out</Button>

    </>)
}