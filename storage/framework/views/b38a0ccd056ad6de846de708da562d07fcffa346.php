<!-- Navbar top -->
<nav class="flq-navbar flq-navbar-top flq-navbar-top-cloud flq-navbar-top-fixed">
    <div class="flq-navbar-container container-fluid">
        <a href="<?php echo e(route('home')); ?>" class="flq-navbar-brand me-auto me-auto me-lg-4">
            <img src="<?php echo e(asset('assets/images/logo.svg')); ?>" class="flq-logo" alt="">
        </a>
        <ul class="nav nav-parent flex-grow-1 flq-navbar-nav justify-content-start d-none d-lg-flex">
            <li class="nav-item">
                <a href="<?php echo e(route('home')); ?>" class="nav-link">
                    <span class="nav-link-name">Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="<?php echo e(route('movies',array('gernre'=>'All'))); ?>" class="nav-link">
                    <span class="nav-link-name">Movies</span>
                </a>
            </li>
        </ul>
        <button class="btn btn-link btn-icon-md ms-5 d-none d-sm-flex" data-fancybox data-src="#flq_popup_search" data-base-class="flq-fancybox-search" data-animation-duration="1000" data-keyboard="false" data-auto-focus="true" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.25 19.25L15.2625 15.2625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <!--<div class="d-flex align-items-center ms-4 d-none d-sm-flex">
            <button class="btn btn-xs btn-outline btn-white d-none d-md-flex" data-fancybox data-src="#flq_popup_signin" data-base-class="flq-fancybox-signin" data-animation-duration="1000" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false"> Admin </button>
            <button class="btn btn-link btn-icon-md d-md-none" data-fancybox data-src="#flq_popup_signin" data-base-class="flq-fancybox-signin" data-animation-duration="1000" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17L15 12M15 12L10 7M15 12H3M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>-->
        <button class="flq-navbar-top-toggle btn btn-link ms-4 d-flex d-lg-none" data-fancybox data-src="#flq_navbar_mobile" data-base-class="flq-fancybox-navbar" data-animation-duration="1000" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>
<!-- / Navbar top -->

<?php echo $__env->yieldContent('header'); ?>
<div class="content-wrap">
<?php echo $__env->yieldContent('contents'); ?>

<!-- Footer -->
<footer class="flq-footer flq-background py-7" data-sr="footer" data-sr-interval="60" data-sr-duration="1000" data-sr-distance="10">
    <div class="flq-background-image">
        <span class="flq-image jarallax" data-speed=0.7>
            <img src="https://yts.mx/assets/images/movies/shadow_master_2022/background.jpg" class="jarallax-img" alt="">
        </span>
    </div>
    <div class="flq-background-overlay" style="background-color: hsla(var(--flq-color-background), .8);"></div>
    <div class="container">
        <div class="row gx-5 gy-5 mb-6 justify-content-center justify-content-sm-start">
            <div class="col-md-9 col-lg-3 text-center text-sm-start" data-sr-item="footer">
                <a href="index.html">
                    <img src="assets/images/logo.svg" class="flq-logo" alt="">
                </a>
                <p class="mt-1 pt-1"><?php echo Illuminate\Foundation\Inspiring::quote(); ?></p>
            </div>
            <div class="col-lg-1 col-xl d-none d-lg-block"></div>
        </div>
        <div class="row gy-4 justify-content-between" data-sr="footer-copyright" data-sr-interval="100" data-sr-delay="200" data-sr-duration="1000" data-sr-distance="10">
            <div class="col-12 col-sm-auto text-center text-sm-start" data-sr-item="footer-copyright">
                <p>© <?php echo e(date('Y')); ?> FLIXX.</p>
            </div>
        </div>
    </div>
</footer>
<!-- /Footer -->
</div>

<!-- Navbar icons -->
<div class="flq-navbar-icons">
    <ul>
        <li>
            <a href="<?php echo e(route('home')); ?>" class="btn btn-link btn-icon-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12H9V22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0392 3 20.5305 3 20V9.9782C3 9.36102 3.28495 8.77841 3.77212 8.39949L10.7721 2.95505C11.4943 2.39332 12.5057 2.39332 13.2279 2.95505L20.2279 8.39949C20.7151 8.77841 21 9.36102 21 9.9782V20C21 20.5305 20.7893 21.0392 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H15V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </li>
        <li>
            <button class="btn btn-link btn-icon-md" data-fancybox data-src="#flq_popup_search" data-base-class="flq-fancybox-search" data-animation-duration="1000" data-keyboard="false" data-auto-focus="true" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.25 19.25L15.2625 15.2625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </li>
        <!--<li>
            <button class="btn btn-link btn-icon-md" data-fancybox data-src="#flq_popup_signin" data-base-class="flq-fancybox-signin" data-animation-duration="1000" data-keyboard="false" data-auto-focus="false" data-touch="false" data-close-existing="true" data-small-btn="false" data-toolbar="false">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17L15 12M15 12L10 7M15 12H3M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </li>-->
        <li class="d-flex align-items-center">
            <div class="flq-scroll-top-wrapper">
                <a class="flq-scroll-top-button flq-anchor" href="#page">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
                <div class="flq-scroll-progress flq-scroll-progress-circle">
                    <svg>
                        <circle stroke="currentColor" r="0" fill="none" />
                    </svg>
                </div>
            </div>
        </li>
    </ul>
</div>
<!-- / Navbar icons -->
<!-- Scroll top button -->
<div class="flq-scroll-top-wrapper">
    <a class="flq-scroll-top-button flq-anchor" href="#page">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>
    <div class="flq-scroll-progress flq-scroll-progress-circle">
        <svg>
            <circle stroke="currentColor" r="0" fill="none" />
        </svg>
    </div>
</div>
<!-- / Scroll top button -->
<?php echo $__env->make('popups.common', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/layout/nav.blade.php ENDPATH**/ ?>