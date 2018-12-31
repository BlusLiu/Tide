        var rain_playing = 0;
              var thunderstorm_playing = 0;
              var wind_playing = 0;
              var forest_playing = 0;
              var leaves_playing = 0;
              var waterstream_playing = 0;
              var seaside_playing = 0;
              var water_playing = 0;
              var fire_playing = 0;
              var summernight_playing = 0;
              var train_playing = 0;
              var fan_playing = 0;
              var whitenoise_playing = 0;
              var pinknoise_playing = 0;
              var brownnoise_playing = 0;
              var coffee_playing = 0;
              var r_playing = 0;
              var p_playing = 0;

 
    var mp3 =
             {"rain":"https://cdn.noisli.com/mp3/rain/rain.mp3",
              "thunderstorm":"https://cdn.noisli.com/mp3/thunderstorm/thunderstorm.mp3",
              "wind":"https://cdn.noisli.com/mp3/wind/wind.mp3",
              "forest":"https://cdn.noisli.com/mp3/forest/forest.mp3",
              "leaves":"https://cdn.noisli.com/mp3/leaves/leaves.mp3",
              "waterstream":"https://cdn.noisli.com/mp3/waterstream/waterstream.mp3",
              "seaside":"https://cdn.noisli.com/mp3/seaside/seaside.mp3",
              "water":"https://cdn.noisli.com/mp3/water/water.mp3",
              "fire":"https://cdn.noisli.com/mp3/fire/fire.mp3",
              "summernight":"https://cdn.noisli.com/mp3/summernight/summernight.mp3",
              "coffee":"https://cdn.noisli.com/mp3/coffee/coffee.mp3",
              "train":"https://cdn.noisli.com/mp3/train/train.mp3",
              "fan":"https://cdn.noisli.com/mp3/fan/fan.mp3",
              "whitenoise":"https://cdn.noisli.com/mp3/whitenoise/whitenoise.mp3",
              "pinknoise":"https://cdn.noisli.com/mp3/pinknoise/pinknoise.mp3",
              "brownnoise":"https://cdn.noisli.com/mp3/brownnoise/brownnoise.mp3"
            }
            var mp3_name = new Array(
            	"rain",
              "thunderstorm",
              "wind",
              "forest",
              "leaves",
              "waterstream",
              "seaside",
              "water",
              "fire",
              "summernight",
              "coffee",
              "train",
              "fan",
              "whitenoise",
              "pinknoise",
              "brownnoise")
            	
            
            function rainPlay() {
              var myAuto0 = document.getElementById('rain_m');
              if(rain_playing)
              {
               
            
                  myAuto0.pause();    
                  rain_playing = 0;    
                  document.getElementById('rain').style.opacity = 0.5;       
              }
              else
              {
              
                  myAuto0.play();
                  rain_playing = 1;
                  document.getElementById('rain').style.opacity = 1;
              }              
            }
            function thunderstormPlay() {
              var myAuto1 = document.getElementById('thunderstorm_m');
              if(thunderstorm_playing)
              {
          
            
                  myAuto1.pause();   
                  thunderstorm_playing = 0;     
                  document.getElementById('thunderstorm').style.opacity = 0.5;      
              }
              else
              {
               
                  myAuto1.play();
                  thunderstorm_playing = 1;
                  document.getElementById('thunderstorm').style.opacity = 1;
              }              
            }
          
            function windPlay() {
             var myAuto2 = document.getElementById('wind_m');
              if(wind_playing)
              {
                        
                  myAuto2.pause();   
                  wind_playing = 0;     
                  document.getElementById('wind').style.opacity = 0.5;      
              }
              else
              {
                  myAuto2.play();
                  wind_playing = 1;
                  document.getElementById('wind').style.opacity = 1;
              }              
            }
            function forestPlay() {
              var myAuto3 = document.getElementById('forest_m');
              if(forest_playing)
              {
              
            
                  myAuto3.pause();   
                  forest_playing = 0;       
                  document.getElementById('forest').style.opacity = 0.5;    
              }
              else
              {
                
                  myAuto3.play();
                  forest_playing = 1;
                  document.getElementById('forest').style.opacity = 1;
              }              
            }
            function leavesPlay() {
              var myAuto4 = document.getElementById('leaves_m');
              if(leaves_playing)
              {
              
          
                  myAuto4.pause();   
                  leaves_playing = 0;        
                  document.getElementById('leaves').style.opacity = 0.5;   
              }
              else
              {
               
                  myAuto4.play();
                  leaves_playing = 1;
                  document.getElementById('leaves').style.opacity = 1;
              }              
            }
            function waterstreamPlay() {
              var myAuto5 = document.getElementById('waterstream_m');
              if(waterstream_playing)
              {
              
       
                  myAuto5.pause();   
                  waterstream_playing = 0;      
                  document.getElementById('waterstream').style.opacity = 0.5;     
              }
              else
              {
             
                  myAuto5.play();
                  waterstream_playing = 1;
                  document.getElementById('waterstream').style.opacity = 1;
              }              
            }
            function seasidePlay() {
              var myAuto6 = document.getElementById('seaside_m');
              if(seaside_playing)
              {
              
        
                  myAuto6.pause();   
                  seaside_playing = 0;     
                  document.getElementById('seaside').style.opacity = 0.5;      
              }
              else
              {
      
                  myAuto6.play();
                  seaside_playing = 1;
                  document.getElementById('seaside').style.opacity = 1;
              }              
            }
            function waterPlay() {
              var myAuto7 = document.getElementById('water_m');
              if(water_playing)
              {
        
                  myAuto7.pause();   
                  water_playing = 0;      
                  document.getElementById('water').style.opacity = 0.5;     
              }
              else
              {
        
                  myAuto7.play();
                  water_playing = 1;
                  document.getElementById('water').style.opacity = 1;
              }              
            }
            function firePlay() {
              var myAuto8 = document.getElementById('fire_m');
              if(fire_playing)
              {
          
                  myAuto8.pause();   
                  fire_playing = 0;      
                  document.getElementById('fire').style.opacity = 0.5;     
              }
              else
              {
      
                  myAuto8.play();
                  fire_playing = 1;
                  document.getElementById('fire').style.opacity = 1;
              }              
            }
            function summernightPlay() {
              var myAuto9 = document.getElementById('summernight_m');
              if(summernight_playing)
              {
            
       
                  myAuto9.pause();   
                  summernight_playing = 0;      
                  document.getElementById('ummernight').style.opacity = 0.5;     
              }
              else
              {
  
                  myAuto9.play();
                  summernight_playing = 1;
                  document.getElementById('ummernight').style.opacity = 1;
              }              
            }
            function coffeePlay() {
              var myAuto10 = document.getElementById('coffee_m');
              if(coffee_playing)
              {
              

                  myAuto10.pause();   
                  coffee_playing = 0;          
                  document.getElementById('coffee').style.opacity = 0.5; 
              }
              else
              {
       
                  myAuto10.play();
                  coffee_playing = 1;
                  document.getElementById('coffee').style.opacity = 1;
              }              
            }
            function trainPlay() {
              var myAuto11 = document.getElementById('train_m');
              if(train_playing)
              {
                 
                  myAuto11.pause();   
                  train_playing = 0;        
                  document.getElementById('train').style.opacity = 0.5;   
              }
              else
              {
                
                  myAuto11.play();
                  train_playing = 1;
                  document.getElementById('train').style.opacity = 1;
              }              
            }
            function fanPlay() {
              var myAuto12 = document.getElementById('fan_m');
              if(fan_playing)
              {
                  
                  myAuto12.pause();   
                  fan_playing = 0;         
                  document.getElementById('fan').style.opacity = 0.5;  
              }
              else
              {
                
                  myAuto12.play();
                  fan_playing = 1;
                  document.getElementById('fan').style.opacity = 1;
              }              
            }
            function whitenoisePlay() {
              var myAuto13 = document.getElementById('whitenoise_m');
              if(whitenoise_playing)
              {
           
       
                  myAuto13.pause();   
                  whitenoise_playing = 0;           
                  document.getElementById('whitenoise').style.opacity = 0.5;
              }
              else
              {
             
                  myAuto13.play();
                  whitenoise_playing = 1;
                  document.getElementById('whitenoise').style.opacity = 1;
              }              
            }
            function pinknoisePlay() {
              var myAuto14 = document.getElementById('pinknoise_m');
              if( pinknoise_playing)
              {
           
         
                  myAuto14.pause();   
                  pinknoise_playing = 0;           
                  document.getElementById('pinknoise').style.opacity = 0.5;
              }
              else
              {
              
                  myAuto14.play();
                  pinknoise_playing = 1;
                  document.getElementById('pinknoise').style.opacity = 1;
              }              
            }
            function brownnoisePlay() {
              var myAuto15 = document.getElementById('brownnoise_m');
              if(brownnoise_playing)
              {
          
                
                  myAuto15.pause();   
                  brownnoise_playing = 0;           
                  document.getElementById('brownnoise').style.opacity = 0.5;
              }
              else
              {
             
                  myAuto15.play();
                  brownnoise_playing = 1;
                  document.getElementById('brownnoise').style.opacity = 1;
              }              
            }
            var myAuto16 = 0;
            function rPlay() {
              var rt = Math.floor(Math.random()*16);
              var ri = mp3_name[rt];
              var allmp3 = document.getElementsByName("mp3");
              document.getElementById('r1_m').src = mp3[ri];
              var myAuto16 = document.getElementById('r1_m');
              for (var i = allmp3.length - 1; i >= 0; i--) {
                  allmp3[i].pause();
                }
              if(r_playing)
              {
          
                
                  myAuto16.pause();   
                  r_playing = 0;           
              }
              else
              {
             
                  myAuto16.play();
                  r_playing = 1;
              }              
            }
            var myAuto17 = 0;
            var myAuto18 = 0;
            var myAuto19 = 0;
            function pPlay() {
              
              var allmp3 = document.getElementsByName("mp3");
              document.getElementById('r1_m').src = mp3["rain"];
              document.getElementById('r2_m').src = mp3["coffee"];
              document.getElementById('r3_m').src = mp3["fire"];
              var myAuto17 = document.getElementById('r1_m');
              var myAuto18 = document.getElementById('r2_m');
              var myAuto19 = document.getElementById('r3_m');
              for (var i = allmp3.length - 1; i >= 0; i--) {
                  allmp3[i].pause();
                }
              if(p_playing)
              {
          
                
                  myAuto17.pause(); 
                  myAuto18.pause(); 
                  myAuto19.pause();   
                  p_playing = 0;           
              }
              else
              {
             
                  myAuto17.play();
                  myAuto18.play();
                  myAuto19.play();
                  p_playing = 1;
              }              
            }

            var like_playing = 0;
            function playLike(ti){
			  
              var ri = mp3_name[ti];
              var allmp3 = document.getElementsByName("mp3");
              document.getElementById('like_m').src = mp3[ri];
              var myAuto20 = document.getElementById('like_m');
              for (var i = allmp3.length - 1; i >= 0; i--) {
                  allmp3[i].pause();
                }
              if(like_playing)
              {
          
                
                  myAuto20.pause();   
                  like_playing = 0;           
              }
              else
              {
             
                  myAuto20.play();
                  like_playing = 1;
              }  	
			}
      
      
      function mute1(){

        document.getElementById("sound-button-out").style.display = "none";
        document.getElementById("unmute-button-out").style.display = "inline";
        var allmp3 = document.getElementsByName("mp3");
        for (var i = allmp3.length - 1; i >= 0; i--) {
          allmp3[i].pause();
        }
        
      }

      function mute2(){
        document.getElementById("sound-button-out").style.display = "inline";
        document.getElementById("unmute-button-out").style.display = "none";
      }
