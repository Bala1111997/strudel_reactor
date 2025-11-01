function Navbar() {
    return (
        <div class="border-bottom border-gray">
            <div class="container-fluid px-4"> 
                <header class="d-flex justify-content-between align-items-center py-3"> 
                    <h3 class="text-warning mb-0 fw-bold">
                        <i class="fas fa-music me-2 text-primary"></i>
                        🎺 𝒮𝓉𝓇𝓊𝒹𝑒𝓁 𝑀𝓊𝓈𝒾𝒸 𝒫𝓁𝒶𝓎𝑒𝓇 🎺
                    </h3>
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