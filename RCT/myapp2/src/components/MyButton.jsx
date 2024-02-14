const MyButton = ({ btnText, bgColor }) => {

    // const styleObj={
    //     color:"red",
    //     borderRadius:"20px"
    // }
    
    const handleClick=()=>{
        alert("BUTTON CLICKED")
    }


    return (
        <button style={{ color: "red", background: bgColor }} onClick={handleClick}>{btnText}</button>
    )
}

export default MyButton




// JSX TERRITORY?
// style={}
// {/* <div style="border:1px solid black"> */}