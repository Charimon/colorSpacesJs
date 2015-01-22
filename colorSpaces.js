//colorSpace = [X,Y,Z]
function xyzToLab(colorSpace, referenceWhiteSpace) {
  if(!referenceWhiteSpace) referenceWhiteSpace =[95.047,100.000,108.883];

  var f_convert = function(value){
    var e_const = 216/24389; 
    var k_const = 24389/27;
    if(value > e_const) return Math.pow(value, 1/3);
    else return (k_const * value + 16)/116;
  }
  
  var fx = f_convert(colorSpace[0]/referenceWhiteSpace[0]);
  var fy = f_convert(colorSpace[1]/referenceWhiteSpace[1]);
  var fz = f_convert(colorSpace[2]/referenceWhiteSpace[2]);

  var L = 116*fy - 16;
  var a = 500*(fx-fy);
  var b = 200*(fy-fz);

  return [L,a,b];
}
