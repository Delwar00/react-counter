import React from 'react'

const MainEvent = () => {
  const handelClick=()=>{
    alert("Hi");
  }
  return (
    
    <>
        <section className='eventsec'>
            <div className='container my-5'>
                <div className='row'>
                    <button onMouseOver={()=>handelClick()} class="btn w-25 btn-primary">Submit</button>
                </div>
            </div>
        </section>
    </>
  )
}
export default MainEvent;
