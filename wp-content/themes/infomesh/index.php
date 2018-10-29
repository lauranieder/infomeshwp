<?php
/* Template Name: Page helloworld */
get_header(); ?>

<?php
  global $post;
  $pod = pods($post->post_type);



  $description = $pod->display("post_content");
  $title = $pod->display("post_title");


  /*echo $description;
  echo $title;*/
  /*echo the_title();
  echo the_content();

  echo "end";*/
?>

<div id="container-mainb" class="col-12">
      <div class="col-8 text-normal">
        <h1>Welcome to the Information Mesh. </br></br>From the early Utopian Web to Today’s reality, Information Mesh is an attempt to map out the web how it used to exist, could have and how it is actually is today. </br></br>

Information mesh is a tribute to the 30th anniversary of the world wide web founded in 1989 by Tim Berners Lee at CERN.</br></br></h1>
      </div>

      <div class="col-6 text-normal">
        <div style="float:left;"><img class="UIButton_long_2x" src="<?php echo get_template_directory_uri(); ?>/css/UI/UIArrow.png" alt="X"></div>
        <!-- not good to improve with a dynamic link !-->
        <div class="navigation" style="float:left;"><h1><a href="http://infomesh.ecal-mid.ch/proposals">Browse by projects</a></h1></div>
      </div>
        <div class="col-6 text-normal">
        <div style="float:left;"><img class="UIButton_long_2x" src="<?php echo get_template_directory_uri(); ?>/css/UI/UIArrow.png" alt="X"></div>
        <!-- not good to improve with a dynamic link !-->
        <div class="navigation" style="float:left;"><h1><a href="http://infomesh.ecal-mid.ch/timelines">Browse by date</a></h1></div>
        <div style="clear: left;"/>
        <!-- not good to improve -->
        </br></br>
      </div>



</div>





<?php get_footer(); ?>
