<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery Plugin</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="./flipping_gallery.css">
    <script src="./jquery.flipping_gallery.js"></script>
</head>
<body>
    <div class="gallery">
        <a href="#"><img src="./images/1.jpg"></a>
        <a href="#"><img src="./images/2.jpg"></a>
        <a href="#"><img src="./images/3.jpg"></a>
        <a href="#"><img src="./images/4.jpg"></a>
    </div>
    <script>
        $(".gallery").flipping_gallery({
    direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
    selector: "> a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
    spacing: 10, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
    showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
    enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
    flipDirection: "bottom", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
    autoplay: false // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.
  });

    </script>
</body>
</html>