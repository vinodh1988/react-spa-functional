export const MessageAction=()=>{
    const messages=[
        "React is SPA Library",
        "Redux is Great",
        "State management is quite tricky",
        "Properties are usually passed by parent to child",
        "In React its always one way taht is top to bottom",
        "React has only thing in it that is Component"
    ]

     const data= messages[Math.round(Math.random()*5)]
     console.log(data)
    return {
        type: "MESSAGE_ACTION",
        data: data
    }
}