<?php
/* Template Name: Page studentprojectexamplecanvas */

/*This is an example page !
  Is it linked to a script called examplecanvas-action.js
  and a stylesheet called examplecanvas-style.js
  To link them go to functions.php --> blankslate_load_scripts()

  if (is_page_template('studentprojectexample-canvas/page-studentprojectexamplecanvas.php')) {
    wp_enqueue_script( 'example-action', get_template_directory_uri()."/studentprojectexample-canvas/js/examplecanvas-action.js", array('jquery'));
    wp_enqueue_style( 'example-style', get_template_directory_uri()."/studentprojectexample-canvas/css/examplecanvas-style.css");
  }
*/
//---Don't remove that ----------------------------------------------
get_header(); ?>

<?php
  $meta = get_post_meta($post->ID, 'preview_image');
  $authors = get_post_meta($post->ID, 'students')[0];
  $imagelink = pods_image_url ( $meta, $size = 'normal', $default = 0, $force = false );
?>

<div id=container class="col-12">
  <div class="col-4 text-normal">
    <h2><?php the_title();  ?></h2>
  </div>
  <div class="col-4 text-normal">
    <h2><?php echo $authors;  ?></h2>
  </div>
  <?php  //This example is using the content description of the wordpress page. You can use it if you want, otherwise delete. We will find a better version to show description of the projects. ?>
  <div class="col-4 text-normal"><?php echo $post->post_content;?></div>

  <?php /*previous_post_link( '%link', '<div class="UIButton abs-right"><div class="fakeImg"></div></div>', false );*/ ?>
  <?php next_post_link( '%link', '<div class="UIButton abs-right"><div class="fakeImg_RA"></div></div>', false ); ?>
  </div>
<?php  //-Edit after that-------------------------------------------------?>

<canvas id="canvas"></canvas>

<?php //Don't remove that
get_footer(); ?>
