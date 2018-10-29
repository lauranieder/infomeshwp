<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
<header id="header" role="banner">
  <div class="col-12 text-normal">

    <img id="menuOpen" class="UIButton_2x abs-right"  src="<?php echo get_template_directory_uri(); ?>/css/UI/UIMenu.png" alt="Menu">
    <img id="menuClose" class="UIButton_2x abs-right hidden"  src="<?php echo get_template_directory_uri(); ?>/css/UI/UICross.png" alt="X">
    <div id="site-title" class="menuItem">
      <h1>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" rel="home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>
      </h1>
    </div>
    <div class="menuItem">/</div>
    <div class="menuItem">
      <nav id="menu" role="navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
        <?php //wp_nav_menu( array( 'theme_location' => 'MenuComplexe' ) ); ?>
      </nav>
    </div>
  </div>
</header>
<div id="container">
