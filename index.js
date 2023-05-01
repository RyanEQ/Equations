  const pi =3.14
  let radius_of_circle;
  let area;

  document.getElementById("ac2").onclick = function(){

    radius_of_circle = document.getElementById("ac1").value;
    radius_of_circle = Number(radius_of_circle);
    area = pi* radius_of_circle *radius_of_circle;
    document.getElementById("ac_ans").innerHTML = "The answer is :" + area;


}
//end of area of circle



  let r_o_c;
  let circumfrience;
  
  document.getElementById("cc2").onclick = function(){

    r_o_c = document.getElementById("cc1").value;
    r_o_c = Number(r_o_c);
    circumfrience =   2 * pi * r_o_c;
    circumfrience = Number(circumfrience);

    document.getElementById("cc_ans").innerHTML = "The answer is :" + circumfrience;
  }
// end of circumfrience of circle

    let r_c;
    let height;
    let mass;
    
    document.getElementById("mc2").onclick = function(){

        r_c = document.getElementById("mc1").value;
        r_c = Number(r_c);
        height = document.getElementById("mc3").value;
        height = Number(height);
        mass =   height * pi * r_c;
        

        document.getElementById("mc_ans").innerHTML = "The answer is :" + mass;
    }

    let r;
    let h;
    let sh;
    
    document.getElementById("sh2").onclick = function(){

        r = document.getElementById("sh1").value;
        r = Number(r);
        h = document.getElementById("sh3").value;
        h = Number(h);
        sh=   (h * h +r * r)  ;
        sh= Math.sqrt(sh)
        

        document.getElementById("sh_ans").innerHTML = "The answer is :" + sh  ;
    }

    let ha;
    let hb;
    let hc;

    document.getElementById("h2").onclick = function(){

     ha = document.getElementById("h1").value;
     ha = Number(ha);

     hb = document.getElementById("h3").value;
     hb = Number(hb);

     hc = ha* ha + hb * hb
     hc = Math.sqrt(hc);


     document.getElementById("h_ans").innerHTML = "Line c is " + hc

    }



   document.getElementById("con").onclick = function(){

    const cir = document.getElementById("circle");
    const tri = doucment.getElementById("Triangle");
    const rec = document.getElementsById("Rectangle");
    if (cir.checked){
      
    }
    if (tri.checked){

    }
    if (rec.checked){

    }
     
   }

   