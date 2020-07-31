var meineLinks = [
  "https://i.pinimg.com/736x/3f/1b/2f/3f1b2f4b77beb59e375ebdd703dd8045.jpg",
  "https://lh3.googleusercontent.com/proxy/-9Xv5dQX42i5_Su3qYr78WGgrg78P-CiayFTIhG9N2ILhBCqRhDhGSwJeYqTKExgbLqupO7bNHRYrEvsWbkbeyaSf5rnJ20-XD_wemd53A3Llwtm1thoE9s8isushK35RTrhfTAtFxRAXH0",
  "https://i.pinimg.com/originals/c6/0c/4f/c60c4f855d2eb407caa8b705c198342b.jpg",  
  "https://i.pinimg.com/originals/c6/0c/4f/c60c4f855d2eb407caa8b705c198342b.jpg", 
  "https://blog.kodakmoments.de/wp-content/uploads/2016/08/top-foto-tipps-tierfotografie-tierbilder-hund-katze-haustiere-perfekte-bilder-machen-kamera-artikel3-960x573.jpg",
  "https://assets.pixolum.com/blog/wp-content/uploads/2017/02/tierfotografie-tipps.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStT9ICoBMm2HwCWt2Sj3RLB-Szf8WuzPcXkw&usqp=CAU",
  "https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg", 
  "https://pbs.twimg.com/profile_images/767317593808113664/ouISJZmD_400x400.jpg", 
  "https://freshideen.com/wp-content/uploads/2013/11/sch%C3%B6ne-tierbilder-eine-geparden-familie.jpg",
  "https://i1.wp.com/wildbeimwild.com/wp-content/uploads/2019/11/73472487_1446035025553506_7418097389996605440_o.jpg?ssl=1", 
  "https://i0.wp.com/blog.kodakmoments.de/wp-content/uploads/2016/08/top-foto-tipps-tierfotografie-tierbilder-hund-katze-haustiere-perfekte-bilder-machen-kamera-artikel1.jpg",
  "https://static.nationalgeographic.de/files/styles/image_3200/public/03-cute-puppy-photos.jpg?w=710&h=474",
  "https://www.mussichhaben.org/wp-content/uploads/2016/03/fa94a9ea51f50dab8259dcc9df55d742.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFw2V6mZaM3FVtl7TSvJ0FHotmf5efZFkDyg&usqp=CAU",
  "https://fotograficus.at/media/Tiere/44m.jpg",
  "https://www.animals-digital.de/fileadmin/Bilder_und_Fotos/Tiere/Tierbilder/Tierbilder-lustig-18.jpg",
  "https://www.debilder.net/wp-content/uploads/2019/04/Tierbilder-Pferde-F%C3%BCr-Whatsapp.jpg",
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__340.jpg",
  "https://www.galeriezebra.de/wp-content/uploads/2020/03/IMG_4552-1440x1920.jpg",
  "https://lh3.googleusercontent.com/proxy/FRj6D7ccu09ZPr8GpC91XBy7mMb_UqT2udfv-jA7LmN1eKsY7IZpjhzNTxjuHokH9FiYeUJWgF3F-EEUi51aoLMjLxgN_DdoDWHIMUjKhhgsCfcjLpdY8Xk",
  "https://www.himmlischehelfer.com/Media/Shop/delphin_090913_grusskarte_tierbilder_krafttire.jpg",
  "https://www.bilderwelten.de/assets/content/images/leinwandbilder/leinwandbild-tiere/leinwandbild-tiere/bubblenavigation/pferdebilder.jpg",
  "https://bilder.t-online.de/b/64/37/36/94/id_64373694/610/tid_da/perfekte-tierfotos-mit-einfachen-tricks-foto-rodrigo-huerta-http-www-flickr-com-people-estarsid-.jpg",
  "https://www.katze24.com/wp-content/uploads/r7jkha.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY0w3xtqFmjJQEGwx6EDZKdU2gGkvLbPPBLA&usqp=CAU",
  "https://paedagogin.files.wordpress.com/2012/06/giraffe.jpg",
  "https://www.spruch.com/bilder/sprueche/wandtattoo-spruch-katze.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcuIET365kM63VMOo2enddCTK0EQUCXE5UKA&usqp=CAU"
];


function linkGenerieren(){
  var zufallszahl = Math.random() * meineLinks.length;
  var index = Math.floor(zufallszahl);
  document.getElementById("meinBild").src = meineLinks[index];
}