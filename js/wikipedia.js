$(document).ready(function(){
  $('#btn').click(function() {
    console.log("clicked");
     //var search_text = $("input[name=Wikipedia]").val();
     var search_text = "A Declaration of the Independence of Cyberspace";
     //var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
     //var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&titles=Stack%20Overflow';
     //var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=text&section=2&titles=Timeline_of_Facebook';
     var url = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=wikitext&page=Timeline_of_Facebook&section=1';
     //var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&id=9395869&rvparse';
     //var url = 'https://www.mediawiki.org/w/api.php?action=parse&page=API:Parsing_wikitext&section=1&prop=text&titles=Timeline_of_Facebook';


     //$.getJSON( url + search_text +'&callback=?',function(data){
     //var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/A_Declaration_of_the_Independence_of_Cyberspace'; //rest api
     //var url = 'https://en.wikipedia.org/api/rest_v1/page/summary/History_of_Facebook'; //rest api
     //var url = 'https://en.wikipedia.org/api/rest_v1/page/Timeline_of_Facebook'; //rest api
     $.getJSON( url+'&callback=?',function(data){ //to use with normal php api
     //$.getJSON( url,function(data){ //to use with rest api
    //$.getJSON( url + search_text +'&callback=?',function(data){ //to use with php api
       console.log(data);
       console.log(data.parse.wikitext);
       console.log(data['parse']['wikitext']['*']);
       let wikitext = data['parse']['wikitext']['*'];
       let lines = wikitext.split("|-");
       let entries = [];
       console.log(lines);

       console.log(lines.length);
       for(let i = 0;i<lines.length;i++){
         lines[i] = lines[i].trim();
         var startslikeanentry =  /(^\|)/g.test(lines[i]);

         if(startslikeanentry){
           //console.log(lines[i]);
           let testparsing = lines[i].split("||");

           for(let j = 0;j<testparsing.length;j++){

             if(j==0){
               let temp = testparsing[j].split("|");
               testparsing[j] = temp[1];
               console.log(testparsing[j]);
             }else{
               var regex = /([[\]])/g;
               var regex2 = /(<ref.*.<\/ref>)/g;
               //var regex3 = /({{w\|)|(}})|(\|})/g;
               var regex3 =/(?<={{cn)(.*?)(?=}})|({{cn)|(}})|({{w\|)|(\|})/g;
               //testparsing[j].trim(testparsing[j], ']]');
               testparsing[j] = testparsing[j].replace(regex, '');
               testparsing[j] = testparsing[j].replace(regex2, '');
               testparsing[j] = testparsing[j].replace(regex3, '');
               console.log(testparsing[j]);
             }

           }





         }

       }

       /*for(line in lines){
         console.log(line);
       }*/
        /*console.log(data.title);
        console.log(data.content_urls.desktop.page);
        console.log(data.extract);
        console.log(data.extract_html);*/
        /*var contentHTML = '<div>'+data.extract_html+'</br>Powered by Wikpedia</div>';
        $('#display-result').append(contentHTML);*/
      /*for(var key in data.query.pages){
        var titleArt = data.query.pages[key].title;
        var extractArt = data.query.pages[key].extract;
        var prop = data.query.pages[key].rvprop;
        console.log(extractArt);
          console.log(prop);
        console.log(data.query.pages[key]);
        var linkArt = 'https://en.wikipedia.org/?curid=' + data.query.pages[key].pageid;
        var imgArt;

        if(data.query.pages[key].hasOwnProperty('thumbnail')){
          imgArt = data.query.pages[key].thumbnail.source;
        } else {
          imgArt = 'http://www.wallpaperup.com/uploads/wallpapers/2014/04/02/319530/big_thumb_e96d0c33f97706bc093572bc613cb23d.jpg';
        }

        var contentHTML = '<div class="col-md-4"><div class="box-result"><div class="bg-result"></div><a href="' +  linkArt + '" target="_blank"><div class="box-content center-block"><div class="article-thumbnail"><img src="' + imgArt + '" alt="" /></div><h1>'+ titleArt +'</h1><p>' + extractArt + '</p></div></a></div></div>';
        $('#display-result').append(contentHTML);
      }*/
    });
 });
});
