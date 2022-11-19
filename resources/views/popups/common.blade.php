<!-- Popup navbar mobile -->
<nav class="flq-navbar-mobile fancybox-content" id="flq_navbar_mobile">
    <div class="flq-fancybox-head">
        <div class="container-fluid">
            <a href="index.html" class="flq-fancybox-brand me-auto">
                <img src="{{ asset('assets/images/logo.svg') }}" class="flq-logo" alt="">
            </a>
            <button class="flq-fancybox-close btn btn-link ms-4" data-fancybox-close>
                <span></span>
            </button>
        </div>
    </div>
    <div class="container pt-4 pb-6">
        <div class="flq-fancybox-body row gy-6 gx-6">
            <div class="col-12 col-lg">
                <ul class="nav flex-column flq-navbar-nav accordion gy-3">
                    <li class="nav-item">
                        <a href="{{ route('home') }}" class="nav-link">
                            <span class="nav-link-name">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('movies',array('gernre'=>'All')) }}" class="nav-link">
                            <span class="nav-link-name">Movies</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
<!-- / Popup navbar mobile -->
<!-- Popup search -->
<div class="flq-fancybox-content-search fancybox-content" id="flq_popup_search">
    <div class="flq-search">
        <div class="flq-fancybox-body pb-6">
            <div class="container-small">
                <div class="flq-search-content">
                    <form action="{{ route('movies',array('gernre'=>'All')) }}" method="GET">
                        <input class="form-control form-control-lg flq-form-glass flq-search-input" type="text" name="q" placeholder="Type to Search" name=search>
                        <button class="btn btn-link btn-icon-md flq-search-btn" type="submit">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.25 19.25L15.2625 15.2625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="flq-fancybox-head">
            <div class="container-fluid">
                <a href="index.html" class="flq-fancybox-brand me-auto">
                    <img src="{{ asset('assets/images/logo.svg') }}" class="flq-logo" alt="">
                </a>
                <button class="flq-fancybox-close btn btn-link ms-4" data-fancybox-close>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</div>
<!-- / Popup search -->
<!-- Popup signin
<div class="flq-fancybox-content-signin fancybox-content" id="flq_popup_signin">
    <div class="flq-signin">
        <div class="flq-fancybox-head">
            <div class="container-fluid">
                <a href="index.html" class="flq-fancybox-brand me-auto">
                    <img src="{{ asset('assets/images/logo.svg')}}" class="flq-logo" alt="">
                </a>
                <button class="flq-fancybox-close btn btn-link ms-4" data-fancybox-close>
                    <span></span>
                </button>
            </div>
        </div>
        <div class="flq-fancybox-body pb-6">
            <form action="#" class="flq-signin-content">
                <h4 class="mb-4 pb-1 text-center">Login</h4>
                <div class="row justify-content-between gy-4">
                    <div class="col-12">
                        <input class="form-control flq-form-user flq-form-translucent" type="text" placeholder="Username">
                    </div>
                    <div class="col-12">
                        <input class="form-control flq-form-lock flq-form-translucent" type="password" placeholder="Password">
                    </div>
                    <div class="col-auto">
                        <div class="form-check flq-form-translucent">
                            <input class="form-check-input" type="checkbox" id="signinRememberMe"><label class="form-check-label" for="signinRememberMe">Remember Me</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-block">Login</button>
                    </div>
                    <div class="col-12 mt-3 text-center">
                        <a href="#" class="btn btn-link" data-fancybox data-src="#flq_popup_forgot" data-base-class="flq-fancybox-signup" data-keyboard="false" data-animation-duration="1000" data-auto-focus="false" data-touch="false" data-close-existing="false" data-small-btn="false" data-toolbar="false"> Forgot password </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
 / Popup signin -->
<!-- Popup signup
<div class="flq-fancybox-content-signup fancybox-content" id="flq_popup_forgot">
    <div class="flq-signup">
        <div class="flq-fancybox-head">
            <div class="container-fluid">
                <a href="index.html" class="flq-fancybox-brand me-auto">
                    <img src="{{ asset('assets/images/logo.svg') }}" class="flq-logo" alt="">
                </a>
                <button class="flq-fancybox-close btn btn-link ms-4" data-fancybox-close>
                    <span></span>
                </button>
            </div>
        </div>
        <div class="flq-fancybox-body pb-6">
            <form action="#" class="flq-signup-content">
                <h4 class="mb-4 pb-1 text-center">Forgot Password</h4>
                <div class="row gy-4">
                    <div class="col-12">
                        <input class="form-control flq-form-mail flq-form-translucent" type="email" placeholder="Email">
                    </div>
                    <div class="col-12">
                        <button class="btn btn-block">Send reset link</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
 / Popup signup -->