<?php
/* Template Name: Page projects */
get_header(); ?>




<div id=container-main class="col-12">
  <div class="col-4 text-normal">
    <h2 id="main-title">Publication of the Declaration of the Independence of Cyberspace by John Perry Barlow from the Electronic Frontier Foundation.</h2></br></br><h2 id="main-fulldate">February 8, 1996 </h2>
  </div>
  <div class="col-3 text-normal">
    <span id="main-description">Governments of the Industrial World, you weary giants of flesh and steel, I come from Cyberspace, the new home of Mind. On behalf of the future, I ask you of the past to leave us alone. You are not welcome among us. You have no sovereignty where we gather.</br></br>We have no elected government, nor are we likely to have one, so I address you with no greater authority than that with which liberty itself always speaks. I declare the global social space we are building to be naturally independent of the tyrannies you seek to impose on us. You have no moral right to rule us nor do you possess any methods of enforcement we have true reason to fear.</br></br>Governments derive their just powers from the consent of the governed. You have neither solicited nor received ours. We did not invite you. You do not know us, nor do you know our world. Cyberspace does not lie within your borders. Do not think that you can build it, as though it were a public construction project. You cannot. It is an act of nature and it grows itself through our collective actions.
    </span>
  </div>
  <div class="col-3 text-normal">
    <span id="main-context">A Declaration of the Independence of Cyberspace» is a widely distributed early paper on the applicability of government on the rapidly growing Internet. Commissioned for the pioneering Internet project 24 Hours in Cyberspace, it was written by John Perry Barlow, a founder of the Electronic Frontier Foundation, and published online on February 8, 1996, from Davos, Switzerland. It was written primarily in response to the passing into law of the Telecommunications Act of 1996 in the United States. In 2014, the Department of Records recorded and released audio and video content of Barlow reading the Declaration.</br></br>Powered by wikipédia
    </span>
  </div>
  <div class="col-2">
    <img class="UIButton abs-right" src="<?php echo get_template_directory_uri(); ?>/css/UI/UICross.png" alt="X">
  </div>
</div>
<div id=timeline-wrapper>
  <div id=container-scrollable>
    <div class=infobox></div>
    <div id=containertimeline>
      <div id=containertimeline-info class="timeline-subcontainer">
        <div class="col-t-6" ></div>
        <div class="col-t-1">1989</div>
        <div class=col-t-1>1990</div>
        <div class=col-t-1>1991</div>
        <div class=col-t-1>1992</div>
        <div class=col-t-1>1993</div>
        <div class=col-t-1>1994</div>
        <div class=col-t-1>1995</div>
        <div class=col-t-1>1996</div>
        <div class=col-t-1>1997</div>
        <div class=col-t-1>1998</div>
        <div class=col-t-1>1999</div>
        <div class=col-t-1>2000</div>
        <div class=col-t-1>2001</div>
        <div class=col-t-1>2002</div>
        <div class=col-t-1>2003</div>
        <div class=col-t-1>2004</div>
        <div class=col-t-1>2005</div>
        <div class=col-t-1>2006</div>
        <div class=col-t-1>2007</div>
        <div class=col-t-1>2008</div>
        <div class=col-t-1>2009</div>
        <div class=col-t-1>2010</div>
        <div class=col-t-1>2011</div>
        <div class=col-t-1>2012</div>
        <div class=col-t-1>2013</div>
        <div class=col-t-1>2014</div>
        <div class=col-t-1>2015</div>
        <div class=col-t-1>2016</div>
        <div class=col-t-1>2017</div>
        <div class=col-t-1>2018</div>
        <div class=col-t-1>2019</div>
        <div class=col-t-6></div>
      </div>
<?php
$params = array(
  'orderby' => 'startdate',
  'limit' => 0
);
$pod = pods('dot', $params);
if ( $pod->total() > 0 ) {
      echo '<div id=containertimeline-content class="timeline-subcontainer">';
        while ($pod->fetch() ) {
          $id = $pod->field("id");
          $titre = $pod->field("title");
          $startDate = $pod->display("startdate");
          $endDate = $pod->display("enddate");
          $description = $pod->display("description");
          $link = $pod->display("link");

          if($endDate != null && $endDate != undefined){
            echo '<div class="timeDot" idToLoad="'.$id.'" info="'.$titre.'" context="'.$description.'" startDate="'.$startDate.'" endDate="'.$endDate.'"></div>';

          }else{
            echo '<div class="timeDot" idToLoad="'.$id.'" info="'.$titre.'" context="'.$description.'" startDate="'.$startDate.'" ></div>';

          }



        }
      echo '</div>';
      }
      ?>



    </div>
  </div>
  <div id=containertimeline-fixed class=col-12>
    <div class="third-p col-12"><div id=centerTime></div></div>
    <div class="third-p col-12"></div>
    <div class="third-p col-12">
      <img id="button_LeftArrow" class="UIButton abs-left" src="<?php echo get_template_directory_uri(); ?>/css/UI/UILeftArrow.png" alt="<">
      <!--<div class="col-1"></div>-->
      <!--<div class="col-1 text-normal"><span>1999</br>19 years ago</span></div>-->
      <div id="tl-fixed-description" class="text-normal center txt-center"><span>Publication of the Declaration of the Independence of Cyberspace.</span></div>
      <img id="button_RightArrow" class="UIButton abs-right" src="<?php echo get_template_directory_uri(); ?>/css/UI/UIRightArrow.png" alt=">">

    </div>
  </div>
</div>


<?php get_footer(); ?>
