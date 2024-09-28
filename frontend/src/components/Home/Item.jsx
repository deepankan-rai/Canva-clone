import React from 'react'
import { FaTrash } from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'


const Item = ({design,type,delete_design}) => {
  return (
    <div className={`relative group w-full h-[150px]  ${type ? 'h-[100px]' : 'h-[170px] px-2' }`} >
                <Link to={`/design/${design._id}/edit`} className={`w-full h-full block bg-[#fffff12] rounded-md ${type ? '' : 'p-4'}`}>
                <img className='w-full h-full rounded-md overflow-hidden' src={design.image_url} alt="" />
                </Link>
                <div onClick={()=> delete_design(design._id)} className='absolute hidden cursor-pointer top-2 right-2 text-red-500 p-2 transitio-all duration-500 group-hover:block'><FaTrash/></div>
                </div>
  )
}

export default Item
