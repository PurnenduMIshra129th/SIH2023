import React from 'react'

function Nav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">EasyFarming</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Help/Support</a>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link active text-light" aria-current="page" href="#">Login/Signup</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav