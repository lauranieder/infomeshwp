<?php
//echo "hello word";

//echo '<div class="timeDot" idToLoad="'.$id.'" info="'.$titre.'" context="'.$description.'" startDate="'.$startDate.'" endDate="'.$endDate.'"></div>';
$id = $pod->field("id");
$titre = $pod->field("title");
$startDate = $pod->display("startdate");
$endDate = $pod->display("enddate");
$description = $pod->display("post_content");
$context = $pod->display("context");




//$description = $pod->display("description");
$link = $pod->display("link_to_original_content");
$wikilink = $pod->display("wikipedia_link");



echo '<div id="idLoaded" idLoaded="'.$id.'">';
echo '<div class="col-4 text-normal">';
  echo '<h2 id="main-title">';
    echo $titre;
  echo '</h2>';
  echo '<h2>';
    echo $startDate;
  echo '</h2>';
echo '</div>';
echo '<div class="col-3 text-normal">';
  echo '<span id="main-description">';
    echo $description;
  echo '</span>';
  echo '<a href="main-description">';
    echo $description;
  echo '</a>';
echo '</div>';
echo '<div class="col-3 text-normal">';
  echo '<span id="main-context">';
    echo $context;
  echo '</span>';
echo '</div>';
echo '<img class="UIButton abs-right" src="'.get_template_directory_uri().'/css/UI/UICross.png" alt="X">';


?>
