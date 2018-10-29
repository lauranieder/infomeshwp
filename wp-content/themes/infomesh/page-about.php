<?php
/* Template Name: Page about */
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

<div id=container class="col-12">
      <div class="col-4 text-normal">
        <h2>The Information Mesh: 30 Years of the Web</h2>
      </div>
      <div class="col-3 text-normal">
        <span >The Information Mesh site celebrates the 30th anniversary of CERN's creation of the World Wide Web by creating a social, technical, cultural, and legal timeline of Web history. Within this timeline, key historical developments are brought to life through interactive experiences created by Interaction Design students at the Swiss design school ECAL. 17 students will come to San Francisco in October 2018 for a week-long study tour organized by swissnex San Francisco, where they will visit key data visualization companies and partners and begin to develop the project.</br></br>

As envisioned, the timeline presents an overview of Web history, starting with the initial proposal for hypertext by Tim Berners-Lee at CERN in 1989, initially under the name "Information Mesh." From this start date, users can explore 30 years of evolution, with links to key writings and projects that create a historical guide to the social and cultural transformations the Web has unleashed.</br></br>

The ECAL study group is part of the swissnex Salon, a series of activities exploring the impact of technology on fundamental societal values drawn from the preamble of the Swiss Constitution. Their projects will playfully examine the Utopian idealism at the heart of the Web, reconnecting us to the original optimism surrounding these communication technologies with a critical engagement regarding where we have arrived today. This presents an opportunity to return a collective focus to how we might bring the human back to the center of innovation.



        </span>
      </div>
      <div class="col-3 text-normal">
        <div>
          <div class="col-12 fit-w">
            <img src="<?php echo get_template_directory_uri(); ?>/css/UI/ecal-snx.png" alt="écal swissnex">
          </div>
          <div class="col-12 fit-w">
            </br></br>
            <p>
              &lt;Team ecal&gt;
            </p>
            <p>
              Pauline Saglio, Vincent Jacquier, Laura Perrenoud,  Tibor Udvari
            </p>
            </br></br>
            <p>
              &lt;Team swissnex&gt;
            </p>
            <p>
              Mary Ellyn Johnson, Eryk Salvaggio
            </p>
            </br></br>
            <p>
              &lt;Students&gt;
            </p>
            <p>
              Al Zouabi Alfatih, Becheras Diane, Bisseck Iyo, Boulenaz Jonathan, Breithaupt Kevin, Chenaux Maëlle, Matos Sébastien, Mouthon Bastien, Palauqui Mathieu, Sassoli De Bianchi Luca, Simmen Guillaume, Virág Tamara, Vogel Nathan, Zibaut Anouk
            </p>
          </div>
        </div>

        <span >
        </span>
      </div>

    </div>





<?php get_footer(); ?>
