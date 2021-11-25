type boxprops={
    title:string
}

const Box=({title}: boxprops)=>{
    return(
        <div className="box">
            <h3>{title}</h3>
        </div>
    )
}

export default Box;