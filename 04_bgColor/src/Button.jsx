function Button(props){


  return(
    <>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:props.style}} onClick={props.onClick}>{props.children}</button>
    </>
  )
}
export default Button;