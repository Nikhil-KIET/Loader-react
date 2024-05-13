function Loader({len}){
    return(
        <div className=" relative w-[700px] h-[30px] border-2  rounded-xl -z-10 overflow-hidden ">
            <p className="  absolute left-[50%]  "  >{len<=100?(len):(100)} </p>
            <div className=" bg-green-400  h-[100%] " style={{width:`${len}%`}}  >

            </div>
        </div>
    )
}
export default Loader;