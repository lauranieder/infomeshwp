# Infomesh
http://infomesh.ecal-mid.ch/

### Keep things organized !
We will only modify the wordpress theme called infomesh. 

To go to infomesh theme --> *infomesh/wp-content/themes/infomesh.*

Create a new folder with the name of your project --> studentproject-[name of the project]

Everything that you will create/add/modify has to be in this folder. **Do not modify the other files.**

The only exception is a file called *functions.php.*

### How to use the wordpress template system -- Code

There is an example project called *studentprojectexample*. Open the template *page-studentprojectexample.php*.
For wordpress to automatically recognize your file as a template you must name it *page-* and keep this line at the beginning of the code. 
```javascript
<?php
/* Template Name: Page studentprojectexample */
?>
```
Because wordpress relies on a templating system, you must keep this line.
```javascript
get_header();
```
Therefore if you need to load external script and stylesheet, it is a bit different. You need to add them to the *functions.php --> blankslate_load_scripts()* page using the following syntax.
```javascript
  if (is_page_template('studentprojectexample/page-studentprojectexample.php')) {
    wp_enqueue_script( 'example-action', get_template_directory_uri()."/studentprojectexample/js/example-action.js", array('jquery'));
    wp_enqueue_style( 'example-style', get_template_directory_uri()."/studentprojectexample/css/example-style.css");
  }
```
### How to use the wordpress template system -- Wordpress console

Go to the wordpress console --> *http://infomesh.ecal-mid.ch/wp-login.php*

Go to pages --> ajouter.

It should look like this.

![Image of wordpress console](http://infomesh.ecal-mid.ch/wp-content/uploads/2018/10/Capture-d’écran-2018-10-28-à-21.28.42.png)








