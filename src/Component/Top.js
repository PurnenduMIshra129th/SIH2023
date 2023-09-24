import React from 'react'
import page from "./Images/page.png";

function Top() {
  return (
    <div class="w-100 position-relative" style={{backgroundColor: '#eee'}}>
        <img src={page}class="card-img" alt="..." />
        <div class="position-absolute " style={{top:'2em',left:'2em'}}>
            <h3 class="text-light">Calculate House Tax</h3>
            <h6 class="text-light">Home/Calculate House Tax</h6>
        </div>
    </div>
  )
}

export default Top