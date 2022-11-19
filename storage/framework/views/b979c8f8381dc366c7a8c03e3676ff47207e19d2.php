<?php $__currentLoopData = $latestMovies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $movie): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<div class="swiper-slide">
    <div class="card flq-card-blog">
        <div class="card-img-wrap">
            <a href="<?php echo e(route('movie',array('id'=>$movie['imdb_code']))); ?>">
                <span class="flq-image flq-rounded-xl flq-responsive flq-responsive-sm-3x4">
                    <img src="<?php echo e($movie['large_cover_image']); ?>" onerror="this.src='https://via.placeholder.com/375X563?text=No%20Image%20Found'" alt="">
                </span>
                <span class="card-badge badge badge-dark badge-glass flq-color-white"><?php echo e($movie['rating']); ?></span>
            </a>
        </div>
        <div class="card-body">
            <h5 class="card-title"><a href="<?php echo e(route('movie',array('id'=>$movie['imdb_code']))); ?>"><?php echo e($movie['title_english']); ?></a></h5>
            <div class="flq-meta flq-meta-sm">
                <ul>
                    <li>
                        <a href="" class="card-year"><?php echo e($movie['year']); ?></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH C:\Users\mahfaz\Downloads\homeCinema-main\homeCinema-main\resources\views/elements/homeNewReleases.blade.php ENDPATH**/ ?>