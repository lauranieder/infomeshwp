<?php
/* Template Name: Page proposals */
get_header(); ?>

<?php
/*Wordpress normal loops on pages that have children*/
$args = array(
    'post_type'      => 'page',
    'posts_per_page' => -1,
    'post_parent'    => $post->ID,
    'order'          => 'ASC',
    'orderby'        => 'menu_order'
 );
 $parent = new WP_Query( $args );
 if ( $parent->have_posts() ) : ?>
    <?php echo '<div id=container class="col-12">';?>
    <?php while ( $parent->have_posts() ) : $parent->the_post();?>
    <?php
    //$titre = the_title();
    //$link = the_permalink();

    /* Attempt to retrieve custom image : Not a very elegant solution, did not find a better way yet*/
    $meta = get_post_meta($post->ID, 'preview_image');
    $imagelink = pods_image_url ( $meta, $size = 'small', $default = 0, $force = false );


    echo '<div class="col-3 third project-preview">';
    echo '<a href="';
    the_permalink();
    echo '" >';
      echo '<div class="col-12 fit">';

        echo '<img class="proposal_preview" src="'.$imagelink.'">';
      echo '</div>';
      echo '<div class="col-12 text"><span>&lt;';
        the_title();
        //echo $template;
      echo '&gt;</span></div>';
    echo '</a>';
    echo '</div>';


    ?>


    <?php endwhile; ?>
    <?php echo '</div>'; ?>

<?php endif; wp_reset_postdata();?>

<?php
/* Testing with pods instead of pages*/
 /*
$params = array(
  'limit' => 0
);
$pod = pods('proposal', $params);
if ( $pod->total() > 0 ) {
  echo '<div id=container class="col-12">';
  while ($pod->fetch() ) {
    $titre = $pod->field("title");
    $description = $pod->display("post_content");
    $title = $pod->display("post_title");
    $img = $pod->field("preview_image");
    $template = $pod->field("template_page");
    $permalink = get_permalink($template['ID']);

    $permalink2 = $pod->display('permalink');

    $imagepath = pods_image_url ($img, $size = 'big');
    echo '<a href="'.$permalink2.'" >';
    echo '<div class="col-3 third project-preview">';
      echo '<div class="col-12 fit">';

        echo '<img src="'.$imagepath.'">';
      echo '</div>';
      echo '<div class="col-12 text"><span>&lt;';
        echo $titre;
        echo $template;
      echo '&gt;</span></div>';
    echo '</div>';
    echo '</a>';
  }
  echo '</div>';
} */ ?>

<?php get_footer(); ?>
