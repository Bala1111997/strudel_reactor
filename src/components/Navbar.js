function Navbar() {
    return (
        <div class="border-bottom border-white">
            <div class="container"> 
                <header class="d-flex justify-content-center py-3"> 
                    <ul class="nav nav-pills"> 
                        <li class="nav-item"><a href="#" class="nav-link active fs-5 fw-semibold" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link fs-5 fw-semibold">Features</a></li> 
                        <li class="nav-item"><a href="#" class="nav-link fs-5 fw-semibold">Pricing</a></li> 
                        <li class="nav-item"><a href="#" class="nav-link fs-5 fw-semibold">FAQs</a></li> 
                        <li class="nav-item"><a href="#" class="nav-link fs-5 fw-semibold">About</a></li> 
                    </ul> 
                </header> 
            </div>
        </div>
    )
}

export default Navbar;