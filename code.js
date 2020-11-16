$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var beers = parseFloat($("#beer").val());
        var wines = parseFloat($("#wine").val());
        var shots = parseFloat($("#shots").val());
        var weight = parseFloat($("#weight").val());
        var hours = parseFloat($("#hours").val());

        var totalOzBooze = (beers * 0.54) + (wines * 0.6) + (shots * 0.6);
        var avgAbsorbRate = totalOzBooze * 7.5;
        var BAC = avgAbsorbRate / weight ;
        BAC -= 0.015 * hours;
        BAC = BAC.toFixed(3);
        $("#output").val(BAC);

    });
    $("#beer").change(function() {
        var beerBoozeVal = parseFloat($("#beer").val()) * 0.54;
        beerBoozeVal = beerBoozeVal.toFixed(3);
        beerBoozeVal = beerBoozeVal+" oz. of alcohol";
        $("#beerBoozeVal").val(beerBoozeVal);
    });
    $("#wine").change(function() {
        var wineBoozeVal = parseFloat($("#wine").val()) * 0.6;
        wineBoozeVal = wineBoozeVal.toFixed(3);
        wineBoozeVal = wineBoozeVal+" oz. of alcohol";
        $("#wineBoozeVal").val(wineBoozeVal);
    });
    $("#shots").change(function() {
        var shotsBoozeVal = parseFloat($("#shots").val()) * 0.6;
        shotsBoozeVal = shotsBoozeVal.toFixed(3);
        shotsBoozeVal = shotsBoozeVal+" oz. of alcohol";
        $("#shotsBoozeVal").val(shotsBoozeVal);
    });
});