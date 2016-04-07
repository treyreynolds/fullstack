exports.createData = function(sampleSize) {
  var data = [];
  for(i = 0; i < sampleSize; i++){
    // Engagement
    var e = Math.random() * 10;
    var gpa = (Math.random() * 4);
    var m = 1;
    switch(Math.floor(e)){
      case 0:
        m = (Math.random() * -2) - 1;
        break;
      case 1:
        m = (Math.random() * -1) - 1;
        break;
      case 2:
        m = ((Math.random() * 10)/40) * -1.0;
        break;  
      case 3:
        m = ((Math.random() * 10)/70) * -.8;
        break;
      case 4:
        m = ((Math.random() * 10)/60) * -.6;
        break;
      case 5:
        m = ((Math.random() * 10)/30);
        break;
      case 6:
        m = ((Math.random() * 10)/20);
        break;
      case 7:
        m = ((Math.random() * 10)/15);
        break;
      case 8:
        m = ((Math.random() * 10)/10);
      default:
        m = ((Math.random() * 10)/5);
    }

    gpa = Math.round((gpa + m) * 10) / 10;
    if(gpa > 4){
      gpa = 4.0;
    } else if (gpa < 0){
      gpa = 0.0;
    }
    engagement = Math.round(e * 100) /100;
    data.push([engagement, gpa]);
  }

  return data;
};

exports.getColor = function(index){
  colors = [
    'rgba(26, 143, 32, .7)',
    'rgba(194, 227, 27, .7)', // Neon Green
    'rgba(27, 177, 227, .7)', // Light Blue
    'rgba(174, 27, 227, .7)', // Purple
    'rgba(227, 27, 51, .7)',  // Red
    'rgba(237, 83, 0, .7)',   // Orange
    'rgba(0, 237, 198, .7)',  // Turquoise
    'rgba(26, 143, 32, .7)',
    'rgba(26, 143, 32, .7)',
    'rgba(26, 143, 32, .7)',
    'rgba(26, 143, 32, .7)'
  ];

  return colors[index];
}