<?php
/* Template Name: Page studentexample */

/*This is an example page !
  Is it linked to a script called cursors-action.js
  and a stylesheet called cursors-style.js
  To link them go to functions.php --> blankslate_load_scripts()

  if (is_page_template('page-cursors.php')) {
    wp_enqueue_script( 'cursors-action', get_template_directory_uri()."/js/proposals/cursors-action.js", array('jquery'));
    wp_enqueue_style( 'cursors-style', get_template_directory_uri()."/css/proposals/cursors-style.css");
  }
*/
//Don't remove that ----------------------------------------------
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
  <?php /*previous_post_link( '%link', '<div class="UIButton abs-right"><div class="fakeImg"></div></div>', false );*/ ?>
  <?php next_post_link( '%link', '<div class="UIButton abs-right"><div class="fakeImg_RA"></div></div>', false ); ?>
  </div>
<?php  //------------------------------------------------------------?>

This is an example template.



<?php //Don't remove that
get_footer(); ?>
