
function UserGreeting(props){

    const WelcomeMessage= <h2 className="wel">
                           Welcome {props.username}
                           </h2>

   const logIn= <h2 className="wait">
    Please log in to continue
    </h2>
return(props.isLoggedIn ? WelcomeMessage : logIn);
}


export default UserGreeting