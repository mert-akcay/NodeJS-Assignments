const arguments = process.argv.slice(2);

function calculateArea(radius){
    area = Math.PI * (parseInt(radius)**2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı : ${area}.`);
}

calculateArea(arguments[0]);
