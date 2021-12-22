function calculateArea(radius){
    area = Math.PI * (parseInt(radius)**2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}.`);
}

module.exports = calculateArea;
