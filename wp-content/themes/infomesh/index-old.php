<?php
/* Template Name: Page projects */
get_header(); ?>
<section id="content" role="main">
  <?php
  //
  /*$params = array(
    	'limit' => 0,
  );*/
  $minDate;
  $maxDate;
  $params = array(
    'orderby' => 'dotdate',
    'limit' => 1
  );
  $pod = pods('dot', $params);
  if ( $pod->total() > 0 ) {
    while ($pod->fetch() ) {
      $minDate = $pod->display("dotdate");
      //echo $minDate;

    }
  }
  $params = array(
    'orderby' => 'dotdate DESC',
    'limit' => 1
  );
  $pod = pods('dot', $params);
  if ( $pod->total() > 0 ) {
    while ($pod->fetch() ) {
      $maxDate = $pod->display("dotdate");
      //echo $maxDate;
    }
  }

  echo "<div id='infos' class='hidden' minDate='".$minDate."' maxDate='".$maxDate."'></div>"; ?>

  <div class="box drag">
    Welcome to the Information Mesh.

From the early Utopian Web to Today’s reality, Information Mesh is an attempt to map out the web how it used to exist, could have and how it is actually is today.

Information mesh is a tribute to the 30th anniversary of the world wide web founded in 1989 by Tim Berners Lee at CERN.
Collaboration between ECAL media interaction design unit and swissnex.

  <img class="UIButton UICross" alt="X"  src="<?php echo get_template_directory_uri(); ?>/style/assets/UI/UICross.png">
  </div>

<?php

    //setup the find
//$start_date = date('Y-m-d', strtotime('- 3 months'));
//$end_date = date('Y-m-d', strtotime('- 2 weeks'));
//$params = array(
//'where' => "pods_movies_release_date >= '$start_date' AND pods_movies_release_date <= '$end_date'"
//);

$params = array(
    'limit' => 0,
);

  $pod = pods('dot', $params);

  //
  if ( $pod->total() > 0 ) {
    ?>

    <?php
    while ($pod->fetch() ) {
      ?>
        <div class="box drag hidden" idc="<?php echo $pod->display("ID"); ?>" date="<?php echo $pod->display("dotdate"); ?>" >
          <?php
          $link = $pod->field("link");
          echo $pod->display("titre");?>
          </br>
          <?php
          echo $pod->display("description");?>
          </br>
          <?php
          echo $pod->display("dotdate");?>
          </br>

        <img class="UIButton UICross" alt="X"  src="<?php echo get_template_directory_uri(); ?>/style/assets/UI/UICross.png">

        <?php

        if($link != null){
          echo "<img class='UIButton UIArrow Long' alt='X'  src='".get_template_directory_uri()."/style/assets/UI/UIArrow.png'>";
          echo "<a class='box_link' href='".$link."'>Go to Original Media</a>";
        }
        ?>
          <?php edit_post_link(); ?>

      </div><!--end of box-->
      <div class="dot" idc="<?php echo $pod->display("ID"); ?>" >
      </div><!--end of dot-->





      <?php
    }//end of while loop pod
    ?>
    <?php
    while ($pod->fetch() ) {
      echo $pod->display("titre");?>
      ?>

      <?php
    }//end of while loop pod
    ?>
    </div>
    <?php
  }
  ?>
</section>
<?php

//get_sidebar(); ?>
<?php get_footer(); ?>
