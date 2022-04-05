const Profile = () => {

    const userLogged = useSelector(store => store.login)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        name: '',
    })

    const {name} = values

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editName(
            userLogged.uid, 
            name, 
            userLogged.photoURL, 
            userLogged.email,
            userLogged.providerId))
        setEdit(false)
        reset()
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="caontainer mt-5">

            { userLogged.photoURL
                ? <div className="d-flex justify-content-center">
                    <img src={userLogged.photoURL} alt="profilePic" className="border border-dark rouded-circle" />
                </div>
                : <div className="d-flex justify-content-center">
                    <img src={logo} alt="profilePic" width={100} />
                </div>
            }

            <h4 className="text-center mt-4">
                {userLogged.displayName}
            </h4>

            <div className="d-flex justify-content-center mt-3">
                { userLogged.provider === 'password' && 
                    <button 
                        className="btn btn-outline danger btn-sm shadow-sm"
                        onClick={() => setEdit(true)}
                    >
                        Change name
                    </button>
                }
                <button 
                    className="btn btn-danger shadow-sm ms-1"
                    onClick={handleLogout}
                >
                    Exit
                </button>
            </div>

            { edit &&
                <form onSubmit={handleEdit}>
                    <div className="form-floating mt-5 w-50 mx-auto">
                        <input 
                            className="form-control shadow-sm" 
                            id="floatingTextarea2"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingTextarea2">New Name</label>
                    </div>

                    <div className="d-flex justify-content-center my-3">
                        <button type="submit" className="btn btn-danger shadow-sm me-2">Save</button>
                        <button onClick={() => setEdit(false)} className="btn btn-outline-danger shadow-sm">Cancel</button>
                    </div>
                </form>
            }

        </div>
    )

}

export default Profile