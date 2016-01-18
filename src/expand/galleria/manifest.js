FT.manifest({
"filename": "index.html",
"width":300,
"height":600,
"clickTagCount": 1,
"expand":{
"width":500,
"height":600,
"indentAcross":200,
"indentDown":0
},
"instantAds":[
{"name":"dynText", "type":"text","default":"This text is dynamic, and so is the image below."},
{"name":"mainImg", "type":"image", "default": "images/image_baseball.jpg"},
{"name":"galPic1", "type":"image", "default": "images/image_baseball.jpg"},
{"name":"galPic2", "type":"image", "default": "images/image_movie.jpg"},
{"name":"galPic3", "type":"image", "default": "images/image_rocket.jpg"},
{"name":"galVid", "type":"video"}
],
"videos":[
{"name":"galVid", "ref":"46937/90889_350x250"}
],
"hideBrowsers": ["ie8"]
});