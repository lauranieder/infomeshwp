<?php
//echo "hello word";

//echo '<div class="timeDot" idToLoad="'.$id.'" info="'.$titre.'" context="'.$description.'" startDate="'.$startDate.'" endDate="'.$endDate.'"></div>';
$id = $pod->field("id");
$titre = $pod->field("title");
$startDate = $pod->display("startdate");
$endDate = $pod->display("enddate");
$description = $pod->display("description");
$link = $pod->display("link");



echo '<div class="col-4 text-normal">';
  echo '<h2 id="main-title">';
    echo $titre;
  echo '</h2>';
echo '</div>';
echo '<div class="col-3 text-normal">';
  echo '<span id="main-description">';
    echo $description;
  echo '</span>';
echo '</div>';
echo '<div class="col-3 text-normal">';
  echo '<span id="main-context">';
    echo 'context here';
  echo '</span>';
echo '</div>';
echo '<img class="UIButton abs-right" src="'.get_template_directory_uri().'/css/UI/UICross.png" alt="X">';


?>
