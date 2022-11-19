
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title> FLIXX </title>
        <meta name="csrf_token" value="<?php echo e(csrf_token()); ?>"/>
        <link rel="icon" type="image/png" href="assets/images/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- livewire Styles -->
        <?php echo \Livewire\Livewire::styles(); ?>

        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&amp;display=swap" />
        <!-- Bootstrap -->
        <!-- <link rel="stylesheet" href="assets/vendor/bootstrap/dist/css/bootstrap.min.css" /> -->
        <!-- Swiper -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/vendor/swiper/swiper-bundle.min.css?v=7.2.0')); ?>" />
        <!-- Fancybox -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/vendor/fancybox/dist/jquery.fancybox.min.css?v=3.5.7')); ?>" />
        <!-- Fliqs -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-custom.css?v=1.0.0')); ?>" />
        <link rel="stylesheet" href="<?php echo e(asset('assets/css/fliqs.css?v=1.0.0')); ?>" />
        <!-- RTL (uncomment this to enable RTL support) -->
        <!-- <link rel="stylesheet" href="assets/css/fliqs-rtl.min.css?v=1.0.0" /> -->
        <!-- Custom Styles -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/css/custom.css?v=1.0.0')); ?>" />
        <?php echo $__env->yieldContent('styles'); ?>
        <!-- jQuery -->
        <script src="<?php echo e(asset('assets/vendor/jquery/dist/jquery.min.js?v=3.6.0')); ?>"></script>
        <!-- Preloader -->
        <script src="<?php echo e(asset('assets/js/preloader.min.js?v=1.0.0')); ?>"></script>
    </head>
    <body id="page" class="flq-navbar-icons-existence">
        <!-- Preloader -->
        <div class="flq-preloader">
            <div class="flq-preloader-title display-1 h1">
                <span>F</span>
                <span>L</span>
                <span>I</span>
                <span>X</span>
                <span>X</span>
            </div>
        </div>
        <div class="flq-preloader-bg"></div>
        <!-- / Preloader -->
        <?php echo $__env->make('layout.nav', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        
        <!-- livewire Scripts -->
        <?php echo \Livewire\Livewire::scripts(); ?>

        <!-- Object Fit Polyfill -->
        <script src="<?php echo e(asset('assets/vendor/object-fit-images/dist/ofi.min.js?v=3.2.4')); ?>"></script>
        <!-- Popper -->
        <script src="<?php echo e(asset('assets/vendor/@popperjs/core/dist/umd/popper.min.js?v=2.10.2')); ?>"></script>
        <!-- ScrollReveal -->
        <script src="<?php echo e(asset('assets/vendor/scrollreveal/dist/scrollreveal.min.js?v=4.0.9')); ?>"></script>
        <!-- Rellax -->
        <script src="<?php echo e(asset('assets/vendor/rellax/rellax.min.js?v=1.12.1')); ?>"></script>
        <!-- Tilt -->
        <script src="<?php echo e(asset('assets/vendor/vanilla-tilt/dist/vanilla-tilt.min.js?v=1.7.2')); ?>"></script>
        <!-- Animejs -->
        <script src="<?php echo e(asset('assets/vendor/animejs/lib/anime.min.js?v=3.2.0')); ?>"></script>
        <!-- Bootstrap -->
        <script src="<?php echo e(asset('assets/vendor/bootstrap/dist/js/bootstrap.min.js?v=5.1.3')); ?>"></script>
        <!-- Jarallax -->
        <script src="<?php echo e(asset('assets/vendor/jarallax/dist/jarallax.min.js?v=1.12.7')); ?>"></script>
        <!-- Swiper -->
        <script src="<?php echo e(asset('assets/vendor/swiper/swiper-bundle.min.js?v=7.2.0')); ?>"></script>
        <!-- Fancybox -->
        <script src="<?php echo e(asset('assets/vendor/fancybox/dist/jquery.fancybox.min.js?v=3.5.7')); ?>"></script>
        <!-- jQuery Countdown -->
        <script src="<?php echo e(asset('assets/vendor/jquery-countdown/dist/jquery.countdown.min.js?v=2.2.0')); ?>"></script>
        <!-- Moment.js (needed for jquery countdown) -->
        <script src="<?php echo e(asset('assets/vendor/moment/min/moment.min.js?v=2.29.1')); ?>"></script>
        <script src="<?php echo e(asset('assets/vendor/moment-timezone/builds/moment-timezone-with-data.min.js?v=0.5.34')); ?>"></script>
        <!-- ImagesLoaded -->
        <script src="<?php echo e(asset('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js?v=4.1.4')); ?>"></script>
        <!-- Isotope -->
        <script src="<?php echo e(asset('assets/vendor/isotope-layout/dist/isotope.pkgd.min.js?v=3.0.6')); ?>"></script>
        <!-- Bootstrap Validator -->
        <script src="<?php echo e(asset('assets/vendor/bootstrap-validator/dist/validator.min.js?v=0.11.9')); ?>"></script>
        <!-- Fliqs -->
        <script src="<?php echo e(asset('assets/js/fliqs.min.js?v=1.0.0')); ?>"></script>
        <script src="<?php echo e(asset('assets/js/fliqs-init.js?v=1.0.0')); ?>"></script>
        <!-- custom Scripts -->
        <?php echo $__env->yieldContent('scripts'); ?>
    </body>
</html><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/layout/app.blade.php ENDPATH**/ ?>