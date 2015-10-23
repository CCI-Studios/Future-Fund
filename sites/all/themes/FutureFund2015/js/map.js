(function($) {
    $(function(){
       

        if($("#block-block-4").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(42.984268,-82.385988);
        var mapOptions = {
            zoom: 17,
            center: location,
            draggable: false,
            scrollwheel: false,
        }

      
        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -100

                                    },
                                    {
                                        gamma: 0
                                    }
                                ]
                          },
                          {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [
                              { visibility: "off" }
                            ]
                          },
                          { 
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#c3c3c3"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 20, 
                                         color:"#000000"
                                    }
                                ]
                            },
                          
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];
   
        var image = '/sites/all/themes/FutureFund2015/images/marker.png';
    
        var map = new google.maps.Map($("#block-block-4").get(0),
                        mapOptions);
         map.panBy(200, 0);

          google.maps.event.addDomListener(window, "resize", function() {
             var center = map.getCenter();
             google.maps.event.trigger(map, "resize");
             map.setCenter(center); 


            });
          $(window).bind('orientationchange', function(event) {
             if($(window).width()<769)
                  {
                      map.panBy(90, 50);
                  }
            });
          if($(window).width()<769 && $(window).width()>460)
          {
              map.panBy(90, 50);
          }

          if($(window).width()<=460)
          {
              map.panBy(-200, 150);
          }

          if($(window).width()<980 && $(window).width()>769)
          {
              map.panBy(150, 100);
          }

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "United Way Of Sarnia-Lambton"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));