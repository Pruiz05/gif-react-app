import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

     const [inputValue, setInputValue] = useState('')

     const handleInputChange = (e) =>{
        setInputValue(e.target.value)

        
     }

     const handleSubmit =(e)=>{
        e.preventDefault();

        if( inputValue.trim().length > 1){

           setCategories(c => [...c, inputValue])
           setInputValue('')
        }
      //   console.log('agregado');
      //   console.log(setCategories())
     }

    return (
        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}/>
           {/* <button className="btn">Agregar</button> */}
        </form>
    )
}

// propiedad es requerida
AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}

