/* photo everywhere 
for(
    if smth= 0 - post photo 1...++


*/
const avatar = document.getElementById('avatar')
avatar = starPic(5) //?????????????????//
function starPic (el){
    for (let i = 0; i < el; i++) {
        if(i === 0){
            console.log('luKe')
        }
        else if(i === 1){
            console.log('C3PO')
        }
        else{
            console.log('else')
        }
    }
}
starPic(12)

/*

    switch (randomNumber){
        case 0:
            prophecy = 'It is certain';
            break;
        case 1: 
            prophecy = `It is decidedly so`;
            break;
        case 2:
            prophecy = ` Reply hazy try again`;
            break;
        case 3:
            prophecy = ` Cannot predict now`;
            break;
        case 4:
            prophecy = ` Do not count on it`;
            break;
        case 5:
            prophecy = ` My sources say no`;
            break;
        case 6:
            prophecy = ` Outlook not so good`;
            break;
        case 7:
            prophecy = ` Signs point to yes`;
            break;
        default:
            alert(`I do not understand you`);
            break;
        }

}

*/