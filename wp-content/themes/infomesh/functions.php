<?php
show_admin_bar(false);
add_action( 'after_setup_theme', 'blankslate_setup' );
function blankslate_setup()
{
  load_theme_textdomain( 'blankslate', get_template_directory() . '/languages' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'post-thumbnails' );
  global $content_width;
  if ( ! isset( $content_width ) ) $content_width = 640;
  register_nav_menus(
    array( 'main-menu' => __( 'Main Menu', 'blankslate' ) )
  );
}
add_action( 'wp_enqueue_scripts', 'blankslate_load_scripts' );
function blankslate_load_scripts()
{

  //javascript
  //wp_enqueue_script( 'jquery' );
  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', get_template_directory_uri()."/js/jquery-3.3.1.min.js" );
  wp_enqueue_script('jqueryui', get_template_directory_uri()."/js/jquery-ui-1.12.1.min.js" );
  wp_enqueue_script( 'timeline-action', get_template_directory_uri()."/js/timeline-action.js", array('jquery'));
  wp_enqueue_script( 'menu-action', get_template_directory_uri()."/js/menu-action.js", array('jquery'));
  wp_enqueue_script( 'moment', get_template_directory_uri()."/js/moment-2.22.2.js");

  //check why is Page template is not working
  wp_enqueue_script( 'project-action', get_template_directory_uri()."/js/project-action.js", array('jquery'));

  wp_localize_script('timeline-action', 'ajaxurl', admin_url( 'admin-ajax.php' ));

  //style
  wp_enqueue_style( 'reset', get_template_directory_uri()."/css/reset.css");
  wp_enqueue_style( 'grid', get_template_directory_uri()."/css/grid.css");
  wp_enqueue_style( 'main', get_template_directory_uri()."/css/main.css");
  wp_enqueue_style( 'jquerystyle','http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.1/themes/base/jquery-ui.css');



  if (is_page_template('page-proposals.php')) {
    wp_enqueue_script( 'project-action', get_template_directory_uri()."/js/project-action.js", array('jquery'));
    wp_localize_script('project-action', 'ajaxurl', admin_url( 'admin-ajax.php' ));
  }

  if (is_page_template('page-cursors.php')) {
    wp_enqueue_script( 'cursors-action', get_template_directory_uri()."/js/proposals/cursors-action.js", array('jquery'));
    wp_enqueue_style( 'cursors-style', get_template_directory_uri()."/css/proposals/cursors-style.css");

  }

  if (is_page_template('studentprojectexample/page-studentprojectexample.php')) {
    wp_enqueue_script( 'example-action', get_template_directory_uri()."/studentprojectexample/js/example-action.js", array('jquery'));
    wp_enqueue_style( 'example-style', get_template_directory_uri()."/studentprojectexample/css/example-style.css");

  }

  if (is_page_template('studentprojectexample-canvas/page-studentprojectexamplecanvas.php')) {
    wp_enqueue_script( 'example-action', get_template_directory_uri()."/studentprojectexample-canvas/js/examplecanvas-action.js", array('jquery'));
    wp_enqueue_style( 'example-style', get_template_directory_uri()."/studentprojectexample-canvas/css/examplecanvas-style.css");
  }
}

add_action( 'wp_ajax_timeline_loadDot', 'timeline_loadDot' );
add_action( 'wp_ajax_nopriv_timeline_loadDot', 'timeline_loadDot' );
function timeline_loadDot() {

  $keyword = $_POST['keyword'];
  //$keyword ='bevaix-chapelle-catholique';
  //$keyword ='moulins-de-courtaney';
  $params = array(
    'limit' => 1,
    //'orderby' => 'end.meta_value DESC',
    //'where' => "t.slug =".$keyword,
    'where' => "t.id =".$keyword,
    //'where' => "t.slug ='moulins-de-courtaney'"
  );
  $pod = pods('dot', $params);

  /*$pod = pods('oeuvre', $keyword);*/
  // Si plus d'un résultat, boucle sur le pod
  if ( $pod->total() > 0 ) {
    $i = 0;
    while ($pod->fetch() ) {
      //$lat = $pod->display("latitude");
      include(locate_template('dot.php'));
      //get_template_part( 'oeuvre' );
    }
  }else{
    var_dump($pod->total());
  }
	die();
}

add_action( 'wp_ajax_proposal_loadProposal', 'proposal_loadProposal' );
add_action( 'wp_ajax_nopriv_proposal_loadProposal', 'proposal_loadProposal' );
function proposal_loadProposal(){

  $keyword = $_POST['keyword'];
  //$keyword ='bevaix-chapelle-catholique';
  //$keyword ='moulins-de-courtaney';
  $params = array(
    'limit' => 1,
    //'orderby' => 'end.meta_value DESC',
    //'where' => "t.slug =".$keyword,
    'where' => "t.id =".$keyword,
    //'where' => "t.slug ='moulins-de-courtaney'"
  );
  $pod = pods('proposal', $params);

  /*$pod = pods('oeuvre', $keyword);*/
  // Si plus d'un résultat, boucle sur le pod
  if ( $pod->total() > 0 ) {
    $i = 0;
    while ($pod->fetch() ) {
      //$lat = $pod->display("latitude");
      include(locate_template('proposal.php'));
      //get_template_part( 'oeuvre' );
    }
  }else{
    var_dump($pod->total());
  }
	die();
}


add_action( 'comment_form_before', 'blankslate_enqueue_comment_reply_script' );
function blankslate_enqueue_comment_reply_script()
{
if ( get_option( 'thread_comments' ) ) { wp_enqueue_script( 'comment-reply' ); }
}
add_filter( 'the_title', 'blankslate_title' );
function blankslate_title( $title ) {
if ( $title == '' ) {
return '&rarr;';
} else {
return $title;
}
}
add_filter( 'wp_title', 'blankslate_filter_wp_title' );
function blankslate_filter_wp_title( $title )
{
return $title . esc_attr( get_bloginfo( 'name' ) );
}
add_action( 'widgets_init', 'blankslate_widgets_init' );
function blankslate_widgets_init()
{
register_sidebar( array (
'name' => __( 'Sidebar Widget Area', 'blankslate' ),
'id' => 'primary-widget-area',
'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
'after_widget' => "</li>",
'before_title' => '<h3 class="widget-title">',
'after_title' => '</h3>',
) );
}
function blankslate_custom_pings( $comment )
{
$GLOBALS['comment'] = $comment;
?>
<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo comment_author_link(); ?></li>
<?php
}
add_filter( 'get_comments_number', 'blankslate_comments_number' );
function blankslate_comments_number( $count )
{
if ( !is_admin() ) {
global $id;
$comments_by_type = &separate_comments( get_comments( 'status=approve&post_id=' . $id ) );
return count( $comments_by_type['comment'] );
} else {
return $count;
}
}
