function createParagraph(){
    
    var wordOne = document.getElementById("word1").value;
    var wordTwo = document.getElementById("word2").value;
    var wordThree = document.getElementById("word3").value;
    var wordFour = document.getElementById("word4").value;
    var wordFive = document.getElementById("word5").value;
    var wordSix = document.getElementById("word6").value;
    var wordSeven = document.getElementById("word7").value;
    var wordEight = document.getElementById("word8").value;
    var wordNine = document.getElementById("word9").value;
    var wordTen = document.getElementById("word10").value;
    var wordEleven = document.getElementById("word11").value;
    var wordTwelve = document.getElementById("word12").value;
    var wordThirteen = document.getElementById("word13").value;
    var wordFourteen = document.getElementById("word14").value;
    var wordFifteen = document.getElementById("word15").value;
    var wordSixteen = document.getElementById("word16").value;
    var wordSeventeen = document.getElementById("word17").value;
    var wordEighteen = document.getElementById("word18").value;


    var paragraph = "Hello, my fellow" + wordOne + " in 2020, it's me, <u><strong>George Washington</strong></u>, the first " + wordTwo + ". I am writing from the " + wordThree + ", where I have been secretly living for the past " + wordFour + " years. I am concerned by the " + wordFive + " state of affairs in America these days. It seems that your politicians are more concerned with " + wordSix + " one another than with listening to the " + wordSeven + " of the people. When we declared our independence from the " + wordEight + ", we set forth on a/an " + wordNine + " path guided by the voices of the everyday" + wordTen + ". If we're going to keep " + wordEleven + ", then we need to learn how to respect all" + wordTwelve + ". Don't get me wrong; we had " + wordThirteen + " problems in my day, too. Benjamin Franklin once called me a/an " + wordFourteen + " and kicked me in the " + wordFifteen + ". But at the end of the day, we were able to " + wordSixteen + " in harmony. Let us find that " + wordSeventeen + " spirit once again, or else I'm taking my " + wordEighteen + " off the quarter!"


    document.getElementById('answer').innerHTML = paragraph;


}