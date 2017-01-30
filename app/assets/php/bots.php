<?php
$SITE_ROOT = "http://www.mcvitiescanada.com/";

$jsonData = getData($SITE_ROOT);

makePage($jsonData, $SITE_ROOT);
function getData($siteRoot) {
    // $id = ctype_digit($_GET['id']) ? $_GET['id'] : 1;
    $rawData = file_get_contents($siteRoot.'api/home.json);
    // $rawData = {};
    return json_decode($rawData);
}

function makePage($data, $siteRoot) {
    ?>
    <!DOCTYPE html>
    <html>
        <head>
            <meta property="og:title" content="title" />
            <meta property="og:description" content="desc />
            <meta property="og:image" content="image" />
            <!-- etc. -->
        </head>
        <body>
            <p>title in page</p>

        </body>
    </html>
    <?php
}
?>
