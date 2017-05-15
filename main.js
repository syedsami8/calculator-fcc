$(document).ready(function () {
    var hit = true;
    var dotHit = true;
    var backAt = false;
    var subhit = false;
    
    function gather() {
        /*
         * Some Dark Magic is used here!
         */
        var s = $(".upip").val();
        var repRegex = /x/g;
        var numRegex = /(\w+\.\w+|\w+|\-\w+)/g;
        //var opRegex = /(\+|\*|\-|\/)/g;
        s = s.replace(repRegex, "*");
        var opRegex = /((\*|\/)(?=\-\w)|\+|([^\*\/])\-(?=\w))/g;
        var arr = [];
        var numResult = s.match(numRegex);
        var preJoinResult = s.match(opRegex);
        var opJoin = preJoinResult.join('');
        var opResult = opJoin.replace(/\w/g,'');
        opResult = opResult.split('');
        arr.push(numResult);
        arr.push(opResult);
        console.log(numResult);
        console.log(opResult);
        return arr;
    }

    function execute(num, op) {

        var result = play(parseFloat(num[0]), parseFloat(num[1]), op[0]);
        for (var i = 2; i < num.length; i++) {
            result = play(result, parseFloat(num[i]), op[i - 1]);
        }
        return result;

    }

    function play(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
            case '-':
                console.log(num1+" "+num2);
                return num1 - num2;
            case '/':
                if (num2 == 0 && num1 != 0) {
                    return "INFINITY";
                } else if (num1 == 0 && num2 == 0) {
                    return 0;
                } else {
                    return num1 / num2;
                }
        }
    }

    function vibrate(op) {
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

        if (navigator.vibrate) {
            // vibration API supported
            switch (op) {
                case 'n':
                    navigator.vibrate(30);
                    break;
                case 'e':
                    navigator.vibrate(80);
                    break;
                case 'o':
                    navigator.vibrate(50);
                    break;
            }
        }
    }

    $("button").click(function () {
        var clicked = this.className;
        
        switch (clicked) {
            case 'one':
                vibrate('n');
                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "1");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "1");
                }
                //console.log(lg);
                hit = true;
                break;
            case 'two':
                vibrate('n');

                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "2");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "2");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'three':
                vibrate('n');


                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "3");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "3");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'four':
                vibrate('n');


                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "4");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "4");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'five':
                vibrate('n');


                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "5");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "5");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'six':
                vibrate('n');


                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "6");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "6");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'seven':
                vibrate('n');


                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "7");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "7");
                }
                //                console.log(lg);
                hit = true;
                break;
            case 'eight':
                vibrate('n');

                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "8");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "8");
                }
                hit = true;
                break;
            case 'nine':
                vibrate('n');

                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "9");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "9");
                }
                hit = true;
                break;
            case 'zero':
                vibrate('n');

                if (backAt) {
                    $(".upip").val('');
                    $(".upip").val($(".upip").val() + "0");
                    backAt = false;
                } else {
                    $(".upip").val($(".upip").val() + "0");
                }
                hit = true;
                break;
            case 'dot':
                vibrate('n');

                var len = $(".upip").val().length;

                //                console.log(lg);
                if (hit && dotHit && len > 0) {
                    console.log("")
                    $(".upip").val($(".upip").val() + ".");
                    hit = false;
                    dotHit = false;
                }
                console.log(len);
                if (len == 0 || backAt) {
                    $(".upip").val("0.");
                    hit = false;
                    dotHit = false;
                    backAt = false;
                }
                break;
            case 'del':
                vibrate('e');

                $(".upip").val('');
                //                console.log(lg);
                hit = true;
                dotHit = true;
                subhit = false;
                break;
            case 'divide':
                vibrate('o');

                //                console.log(lg);
                if (hit) {
                    $(".upip").val($(".upip").val() + "/");
                    hit = false;
                    dotHit = true;
                    subhit = true;   
                }
                break;
            case 'multiply':
                vibrate('o');

                //                console.log(lg);
                if (hit) {
                    $(".upip").val($(".upip").val() + "x");
                    hit = false;
                    dotHit = true;
                    subhit = true;
                }
                break;
            case 'subtract':
                vibrate('o');
                //                console.log(lg);
                if (hit) {
                    $(".upip").val($(".upip").val() + "-");
                    hit = false;
                    dotHit = true;
                    
                }else if(subhit){
                    $(".upip").val($(".upip").val() + "-");
                    hit = false;
                    dotHit = true;
                    subhit = false;
                }
                break;
            case 'add':
                vibrate('o');
                //                console.log(lg);

                if (hit) {
                    $(".upip").val($(".upip").val() + "+");
                    hit = false;
                    dotHit = true;
                }
                break;
            case 'equals':
                vibrate('e');

                var coll = gather();
                var num = coll[0];
                var ops = coll[1];
                console.log(num);
                console.log(ops);
                var result = execute(num, ops);
                //                console.log(result);
                $(".upip").val(result);
                backAt = true;
                hit = true;
                dotHit = true;
                subhit = false;
                break;


        }
        //        var lg = $('.upip').val();
        //        console.log(lg);

    });

});
