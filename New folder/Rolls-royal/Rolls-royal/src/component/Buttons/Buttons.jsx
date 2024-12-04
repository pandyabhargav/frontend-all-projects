import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Buttons({btn1text}) {
  return (
    <>
        <section className="buttons ">
            <button className="draw main-btn ">{btn1text} <i class="fa-solid fa-arrow-right"></i></button>
        </section>
    </>
  )
}

export default Buttons
