import React from 'react';


var Form =(props)=>{
    return(
      <div>
        <form onSubmit={props.getWeather}>
          <input type='text' name='city' placeholder='City...'/>
          <input type='text' name='country' placeholder='Country'/>

          <button className='btn btn-lg'>GET WEATHER</button>
        </form>
      </div>
    );
  }


export default Form;
