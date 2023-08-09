
function Button(){
    const ClickHandle = () =>{
        console.log("clicked");
    } 
    return(<div><button className="bottom-1 rounded-full bg-purple-500" onClick={ClickHandle}>Click me</button></div>);
}

export default Button;