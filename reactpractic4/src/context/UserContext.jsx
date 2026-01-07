import { createContext } from "react"
export const DataUserContext = createContext()

const UserContext = ({ children }) => {

    const userData = {
        name: 'nikhil',
        age: 18
    }

    return (
        <div className="Context-div">
            <DataUserContext.Provider value={{userData}} >
                {children}
            </DataUserContext.Provider>
        </div>
    )
}

export default UserContext
