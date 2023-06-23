const titleStyle={
    color:'white'
   
}


function Main({name,age}){
    return(
        <>
            <h1 style={titleStyle}>
                Welcome, {name}
            </h1>
            <h1 style={{
                color: 'white'
            }}>
                {age}
            </h1>
        </>
        
    )
}

export default Main;