<?php
require_once WPRK_PATH . 'supports/password-access.php';

add_action('parse_request', 'userReceiver1');
function userReceiver1() {

$request_uri_string = $_SERVER['REQUEST_URI'];
    if(strpos($request_uri_string, 'module/1') !== false) {
    ?>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nutritional Plugin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@100;200;300;400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
    <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
    <style>

      body {
        font-family: 'Montserrat', sans-serif;
      }

      .hover-text:focus,
      .ellipsis:hover {
        color: transparent;
      }

      .hover-text:focus:after,
      .hover-text:hover:after {
        content: attr(data-text);
        overflow: visible;
        text-overflow: inherit;
        background: #0f172a;
        position: absolute;
        left: auto;
        top: auto;
        width: auto;
        max-width: 20rem;
        padding: 0 .5rem;
        white-space: normal;
        word-wrap: break-word;
        display: block;
        border-radius: 5px;
        color: #fff;
        margin-top: -1.25rem;
      }

      .t-ellipsis {
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        max-height: 1.5em;
        text-overflow: ellipsis;
      }

      ::-webkit-scrollbar {
        width: 2px;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(21, 20, 26, 0.63);
        border-radius: 10px;
      }

      #prep-steps-data li::marker {
        color: #3b82f6;
        font-size: 12px;
      }
      
    </style>
  </head>
  <body>
    
    <?php include 'all-meals.php'; ?>
    <?php include 'meal-details.php'; ?>
    <?php include 'add-meals.php'; ?>

    <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script type="module" src="/wp-content/plugins/wp-nutrily-main/dist/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
  </body>
</html>
<?php
      exit();
	}
}

?>
