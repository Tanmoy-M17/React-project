export const NavBar=()=>{
    const SerchTerm=(e)=>{
        if(e.key==="Enter"){
            
        }
        return;
    }
    return <div>
        <input on onKeyPress={SerchTerm} type="text" placeholder="Search News" />
        </div>
}