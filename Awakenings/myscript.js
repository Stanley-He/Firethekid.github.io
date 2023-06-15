$(document).ready(function() {
    function AwakeningPoints(StarryGems, RetireP) {
        var Points = 0;
        for (let Gems = StarryGems; Gems > 99; Gems -= 100) {
            var odds = Math.random();
            totalawakenings = totalawakenings + 1;

            if (odds <= 0.000015) {
                Points += 19;
                Acopies += 1;
                if (RetireP >= 19) {
                    Gems += 116667;
                }
            } else if (odds <= 0.000040) {
                Points += 17;
                Acopies += 1;
                if (RetireP >= 17) {
                    Gems += 25000;
                }
            } else if (odds <= 0.000105) {
                Points += 16;
                Acopies += 1;
                if (RetireP >= 16) {
                    Gems += 15000;
                }
            } else if (odds <= 0.000225) {
                Points += 15;
                Acopies += 1;
                if (RetireP >= 15) {
                    Gems += 8000;
                }
            } else if (odds <= 0.001000) {
                Points += 14;
                Bcopies += 1;
                if (RetireP >= 14) {
                    Gems += 1800;
                }
            } else if (odds <= 0.006500) {
                Points += 13;
                Bcopies += 1;
                if (RetireP >= 13) {
                    Gems += 600;
                }
            } else if (odds <= 0.022700) {
                Points += 12;
                Bcopies += 1;
                if (RetireP >= 12) {
                    Gems += 300;
                }
            } else if (odds <= 0.044000) {
                Points += 11;
                if (RetireP >= 11) {
                    Gems += 200;
                }
            } else if (odds <= 0.087000) {
                Points += 10;
                if (RetireP >= 10) {
                    Gems += 150;
                }
            } else if (odds <= 0.131000) {
                Points += 9;
                if (RetireP >= 9) {
                    Gems += 100;
                }
            } else if (odds <= 0.179000) {
                Points += 8;
                if (RetireP >= 8) {
                    Gems += 70;
                }
            } else if (odds <= 0.271000) {
                Points += 7;
                if (RetireP >= 7) {
                    Gems += 50;
                }
            } else if (odds <= 0.471000) {
                Points += 6;
                if (RetireP >= 6) {
                    Gems += 30;
                }
            } else if (odds <= 0.759000) {
                Points += 5;
                if (RetireP >= 5) {
                    Gems += 20;
                }
            } else if (odds <= 0.957000) {
                Points += 4;
                if (RetireP >= 4) {
                    Gems += 15;
                }
            } else {
                Points += 3;
                if (RetireP >= 3) {
                    Gems += 10;
                }
            }
        }
        return Points;
    }

    var yes = 0;
    var no = 0;
    var total = 0;
    var totalawakenings = 0;
    var Bcopies = 0;
    var Acopies = 0;

    $("#btn_1").click(function() {
        var StartingPoints = parseInt($("#textEntered4").val());
        var Goal = parseInt($("#textEntered1").val()) - StartingPoints;
        var StarryGems = parseInt($("#textEntered2").val());
        var RetireP = parseInt($("#textEntered3").val());

        for (var i = 100000; i > 0; i--) {
            var x = AwakeningPoints(StarryGems, RetireP);
            total += x;
            if (x < Goal) {
                no += 1;
            } else {
                yes += 1;
            }
        }

        var message = "Successful attempts: " + yes.toString() + 
        "<br>Failed attempts: " + no.toString() + 
        "<br>Success rate: " + (yes*100/100000).toString() + 
        "%<br>Average points: " + ((total/100000) + StartingPoints).toString() + 
        "<br>Average number of awakenings performed: " + Math.round(totalawakenings/100000); //+
        //"<br>Average B copies: " + Bcopies/100000 +
        //"<br>Average A- and above copies: " + Acopies/100000; // Use toString() to convert the number to a string
        
        $("#textDisplayed1").html(message);

        yes = 0;
        no = 0;
        total = 0;
        totalawakenings = 0;
        Bcopies = 0;
        Acopies = 0;
    });
});