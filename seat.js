var topH = 15;
var width  = 1920;
var height = 1080;
var seatW = 6;
var seatH = 10;
var seatGap = 5;
var seatLeft = 615;
var seatRight = 1275;
var seatBottom = 355 + topH;
var seatBottomLeft = 773;
var seatBottomLeft2 = 960;
var r = 134;
var A2_y = 37 * seatW + topH;
var seatRightBottom = 32 * seatW + topH;
var seatStroke = 0.5;

var confA = [
{
    name : 116,
    center : [440, 80],
    line : [
        {
            name : [8,15],
            nums : 29,
        },{
            name : [16, 23],
            nums : [-7, [7], 18]
        },{
            name : [24, 26],
            nums : [-4, [4], 25],
        }
    ]
},{
    name : 316,
    center : [150, 80],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [-4, 25],
        },{
            name : [2, 8],
            nums : [-8, [3], 18],
        },{
            nums : 0,
        },{
            name : [10, 20],
            nums : [-4, 25],
        }
    ]
}];



var confB = [{
    name : 117,
    center : [440, 260],
    angle : [0, 26],
    restart : 1,
    line : [
        {
            name : 8,
            nums: [6, -3],
        },{
            name : [9, 10],
            nums : [7, -3],
        },{
            name : 11,
            nums : [8, -3],
        },{
            name : [12, 13],
            nums : [9, -3],
        },{
            name : 14,
            nums : [10, -3],
        },{
            name : 15,
            nums : [11, -3],
        },{
            name : [16, 17],
            nums : [-3, [3], 8, -3],
        },{
            name : 18,
            nums : [-3, [3], 9, -3],
        },{
            name : 19,
            nums : [-3, [3], 10, -3],
            start : 4
        },{
            name : [20, 21],
            nums : [-3, [3], 11, -3],
            start : 4
        },{
            name : 22,
            nums : [-3, [3], 12, -3],
            start : 4
        },{
            name : 23,
            nums : [-3, [3], 13, -3],
            start : 4
        },{
            name : 24,
            nums : 21,
        },{
            name : 25,
            nums : 22,
        },{
            name : 26,
            nums : 23,
        }
    ]
},{
    name : 317,
    center : [150, 300],
    angle : [0, 26],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [19, -5],
        },{
            name : [2, 4],
            nums : [-3, [3], 14, -8],
        },{
            name : 5,
            nums : [-3, [3], 15, -8],
            start : 4
        },{
            name : [6, 8],
            nums : [-3, [3], 16, -8],
            start : 4
        },{
            nums : 0,
        },{
            name : 10,
            nums : [25, -5]
        },{
            name : [11, 12],
            nums : [26, -5]
        },{
            name : 13,
            nums : [27, -5]
        },{
            name : [14, 15],
            nums : [28, -5]
        },{
            name : [16, 17],
            nums : [29, -5]
        },{
            name : [18, 19],
            nums : [30, -5]
        },{
            name : 20,
            nums : [31, -5]
        }]
},{
    name : 118,
    center : [500, 420],
    angle : [26, 66],
    restart : 1,
    line : [{
        name : 8,
        nums : [1, [15], 1],
    },{
        name : 9,
        nums : [2, [13], -10, 2],
    },{
        name : [10, 11],
        nums : [3, [11], -10, 3],
    },{
        name : 12,
        nums : [4, [10], -10, 4],
    },{
        name : 13,
        nums : 19,
    },{
        name : 14,
        nums : 20,
    },{
        name : 15,
        nums : 22,
    },{
        name : 16,
        nums : [-6, [7], 9, -6],
        start : 8
    },{
        name : 17,
        nums : [-6, [7], 10, -6],
        start : 8
    },{
        name : 18,
        nums : [-6, [7], 11, -6],
    },{
        name : 19,
        nums : [-6, [7], 11, -6],
    },{
        name : 20,
        nums : [-6, [7], 12, -6],
    },{
        name : 21,
        nums : [-6, [7], 13, -6],
    },{
        name : 22,
        nums : [-6, [7], 14, -6],
    },{
        name : 23,
        nums : [-6, [7], 15, -6],
    },{
        name : 24,
        nums : [-3, [2], 25, -5],
    },{
        name : 25,
        nums : [-3, [2], 26, -5],
    },{
        name : 26,
        nums : [-3, [2], 27, -5],
    }],
},{
    name : 318,
    center : [320, 570],
    angle : [26, 66],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [17, -3, [3], 17],
        },{
            name : 2,
            nums : [-3, [3], 12, -8, [9], 11, -3],
        },{
            name : [3, 4],
            nums : [-3, [3], 12, -8, [10], 12, -3],
        },{
            name : 5,
            nums : [-3, [3], 13, -8, [10], 13, -3],
        },{
            name : 6,
            nums : [-3, [3], 13, -8, [11], 13, -3],
        },{
            name : 7,
            nums : [-3, [3], 14, -8, [10], 14, -3],
        },{
            name : 8,
            nums : [-3, [3], 14, -8, [11], 14, -3],
        },{
            nums : 0,
        },{
            name : 10,
            nums : [23, -4, [3], 24]
        },{
            name : 11,
            nums : [24, -4, [3], 24]
        },{
            name : 12,
            nums : [25, -4, [3], 25]
        },{
            name : 13,
            nums : [25, -4, [4], 26]
        },{
            name : 14,
            nums : [26, -4, [3], 27]
        },{
            name : 15,
            nums : [27, -4, [3], 27]
        },{
            name : 16,
            nums : [27, -4, [4], 28]
        },{
            name : 17,
            nums : [28, -4, [3], 29]
        },{
            name : 18,
            nums : [29, -4, [3], 30]
        },{
            name : 19,
            nums : [30, -4, [3], 30]
        },{
            name : 20,
            nums : [30, -4, [4], 31]
        }]
},{
    name : 119,
    center : [640, 510],
    angle : [66, 90],
    restart : 1,
    line : [
        {
            name : [8, 9],
            nums: [-3, [4], 6],
        },{
            name : 10,
            nums : [-3, [4], 7],
        },{
            name : 11,
            nums : [-3, [4], 8],
        },{
            name : [12, 13],
            nums : [-3, [4], 9],
        },{
            name : 14,
            nums : [-3, [4], 10],
        },{
            name : 15,
            nums : [-3, [4], 11],
        },{
            name : [16, 17],
            nums : [-3, [4], 8, -3],
        },{
            name : 18,
            nums : [-3, [4], 9, -3],
        },{
            name : 19,
            nums : [-3, [4], 10, -3],
        },{
            name : [20, 21],
            nums : [-3, [4], 11, -3],
        },{
            name : 22,
            nums : [-3, [4], 12, -3],
        },{
            name : 23,
            nums : [-3, [4], 13, -3],
        },{
            name : 24,
            nums : 21,
        },{
            name : 25,
            nums : 22,
        },{
            name : 26,
            nums : 23,
        }
    ]
},{
    name : 319,
    center : [590, 730],
    angle : [66, 90],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [-5, 19],
        },{
            name : [2, 4],
            nums : [-8, [3], 14, -5],
        },{
            name : 5,
            nums : [-8, [3], 15, -5],
        },{
            name : [6, 8],
            nums : [-8, [3], 16, -5],
        },{
            nums : 0,
        },{
            name : 10,
            nums : [-5, 25]
        },{
            name : [11, 12],
            nums : [-5, 26]
        },{
            name : [13, 14],
            nums : [-5, 27]
        },{
            name : 15,
            nums : [-5, 28]
        },{
            name : 16,
            nums : [-5, 29]
        },{
            name : [17, 19],
            nums : [-5, 30]
        },{
            name : 20,
            nums : [-5, 31]
        }]
}];



var confC = [{
    name : 120,
    center : [810, 520],
    angle : 90,
    restart : 1,
    position : seatBottomLeft,
    line : [
        {
            name : [8,15],
            nums : 23,
        },{
            name : [16, 23],
            nums : [-3, [3], 17],
        },{
            name : [24, 26],
            nums : 24,
        }
    ]
},{
    name : 320,
    center : [810, 740],
    angle : 90,
    position : seatBottomLeft,
    line : [
        {
            nums : 0
        },{
            name : 1,
            nums : 23,
        },{
            name : 2,
            nums : [-3, [3], 15],
        },{
            name : [3, 8],
            nums : [-3, [3], 16],
        },{
            nums : 0
        },{
            name : [10, 12],
            nums : 23,
        },{
            name : 13,
            nums : 10,
        },{
            name : 14,
            nums : 9,
        },{
            name : [15, 20],
            nums : 8,   //9
        }
    ]
},{
    name : 121,
    center : [1000, 520],
    angle : 90,
    restart : 1,
    position : seatBottomLeft2,
    line : [
        {
            name : [8,15],
            nums : 23,
        },{
            name : [16, 23],
            nums : [-3, [3], 17],
        },{
            name : [24, 26],
            nums : 24,
        }
    ]
},{
    name : 321,
    center : [1000, 740],
    angle : 90,
    position : seatBottomLeft2,
    line : [
        {
            nums : 0
        },{
            name : 1,
            nums : 23,
        },{
            name : 2,
            nums : [-4, [5], 15],
        },{
            name : [3, 8],
            nums : [-3, [3], 16],
        },{
            nums : 0
        },{
            name : [10, 12],
            nums : 23,
        },{
            name : 13,
            nums : [-15, [13], 10],
        },{
            name : 14,
            nums : [-16, [14], 9],
        },{
            name : [15, 20],
            nums : [-17, [15], 8],
        }
    ]
}];




var confD = [{
    name : 122,
    center : [1170, 520],
    angle : [90, 66],
    restart : 1,
    line : [
        {
            name : [8, 9],
            nums: [6, -3],
        },{
            name : 10,
            nums : [7, -3],
        },{
            name : 11,
            nums : [8, -3],
        },{
            name : [12, 13],
            nums : [9, -3],
        },{
            name : 14,
            nums : [10, -3],
        },{
            name : 15,
            nums : [11, -3],
        },{
            name : [16, 17],
            nums : [-3, [3], 8, -3],
        },{
            name : 18,
            nums : [-3, [3], 9, -3],
        },{
            name : 19,
            nums : [-3, [3], 10, -3],
        },{
            name : [20, 21],
            nums : [-3, [3], 11, -3],
        },{
            name : 22,
            nums : [-3, [3], 12, -3],
        },{
            name : 23,
            nums : [-3, [3], 13, -3],
        },{
            name : 24,
            nums : 21,
        },{
            name : 25,
            nums : 22,
        },{
            name : 26,
            nums : 23,
        }
    ]
},{
    name : 322,
    center : [1220, 730],
    angle : [90, 66],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [19, -5],
        },{
            name : [2, 4],
            nums : [-3, [3], 14, -8],
        },{
            name : 5,
            nums : [-3, [3], 15, -8],
        },{
            name : [6, 8],
            nums : [-3, [3], 16, -8],
        },{
            nums : 0,
        },{
            name : [10, 11],
            nums : [25, -5]
        },{
            name : 12,
            nums : [26, -5]
        },{
            name : [13, 14],
            nums : [27, -5]
        },{
            name : 15,
            nums : [28, -5]
        },{
            name : [16, 17],
            nums : [29, -5]
        },{
            name : 18,
            nums : [30, -5]
        },{
            name : 19,
            nums : [31, -5]
        },{
            name : 20,
            nums : [32, -5]
        }]
},{
    name : 123,
    center : [1330, 430],
    angle : [66, 26],
    restart : 1,
    line : [{
        name : 8,
        nums : [1, [17], 1],
    },{
        name : 9,
        nums : [2, [15], -10, 2],
    },{
        name : [10, 11],
        nums : [3, [13], -10, 3],
    },{
        name : 12,
        nums : [4, [11], -10, 4],
    },{
        name : 13,
        nums : 19,
    },{
        name : 14,
        nums : 20,
    },{
        name : 15,
        nums : 22,
    },{
        name : 16,
        nums : [-6, [6], 9, -6],
    },{
        name : 17,
        nums : [-6, [6], 10, -6],
    },{
        name : 18,
        nums : [-6, [6], 11, -6],
    },{
        name : 19,
        nums : [-6, [6], 12, -6],
    },{
        name : 20,
        nums : [-6, [6], 12, -6],
    },{
        name : 21,
        nums : [-6, [6], 13, -6],
    },{
        name : 22,
        nums : [-6, [6], 14, -6],
    },{
        name : 23,
        nums : [-6, [6], 15, -6],
    },{
        name : 24,
        nums : [-3, [1], 25, -5],
    },{
        name : 25,
        nums : [-3, [1], 26, -5],
    },{
        name : 26,
        nums : [-3, [1], 27, -5],
    }],
},{
    name : 323,
    center : [1480, 580],
    angle : [66, 26],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [17, -3, [3], 17],
        },{
            name : [2, 4],
            nums : [-3, [3], 12, -8, [9], 12, -3],
        },{
            name : 5,
            nums : [-3, [3], 13, -8, [9], 13, -3],
        },{
            name : 6,
            nums : [-3, [3], 13, -8, [9], 14, -3],
        },{
            name : 7,
            nums : [-3, [3], 14, -8, [9], 14, -3],
        },{
            name : 8,
            nums : [-3, [3], 14, -8, [9], 15, -3],
        },{
            nums : 0,
        },{
            name : 10,
            nums : [23, -4, [3], 24]
        },{
            name : 11,
            nums : [24, -4, [3], 24]
        },{
            name : 12,
            nums : [25, -4, [3], 25]
        },{
            name : 13,
            nums : [25, -4, [3], 25]    //26
        },{
            name : 14,
            nums : [26, -4, [3], 26]
        },{
            name : 15,
            nums : [27, -4, [3], 27]
        },{
            name : 16,
            nums : [28, -4, [3], 27]
        },{
            name : 17,
            nums : [28, -4, [3], 28]
        },{
            name : 18,
            nums : [29, -4, [3], 29]
        },{
            name : 19,
            nums : [30, -4, [3], 30]
        },{
            name : 20,
            nums : [31, -4, [2], 30]
        }]
},{
    name : 124,
    center : [1400, 260],
    angle : [24, 0],
    restart : 1,
    line : [
        {
            name : [8, 9],
            nums: [-3, [5], 6],
        },{
            name : 10,
            nums : [-3, [5], 7],
        },{
            name : 11,
            nums : [-3, [5], 8],
        },{
            name : [12, 13],
            nums : [-3, [5], 9],
        },{
            name : 14,
            nums : [-3, [5], 10],
        },{
            name : 15,
            nums : [-3, [5], 11],
        },{
            name : [16, 17],
            nums : [-3, [5], 8, -3],
        },{
            name : 18,
            nums : [-3, [5], 9, -3],
        },{
            name : 19,
            nums : [-3, [5], 10, -3],
        },{
            name : [20, 21],
            nums : [-3, [5], 11, -3],
        },{
            name : 22,
            nums : [-3, [5], 12, -3],
        },{
            name : 23,
            nums : [-3, [5], 13, -3],
        },{
            name : 24,
            nums : 21,
        },{
            name : 25,
            nums : 22,
        },{
            name : 26,
            nums : 23,
        }
    ]
},{
    name : 324,
    center : [1640, 300],
    angle : [24, 0],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : [-5, 19],
        },{
            name : [2, 4],
            nums : [-8, [3], 14, -5],
        },{
            name : [5, 6],
            nums : [-8, [3], 15, -5],
        },{
            name : [7, 8],
            nums : [-8, [3], 16, -5],
        },{
            nums : 0,
        },{
            name : 10,
            nums : [-5, 25]
        },{
            name : 11,
            nums : [-5, 26]
        },{
            name : 12,
            nums : [-5, 27]
        },{
            name : 13,
            nums : [-5, 26]
        },{
            name : 14,
            nums : [-5, 28]
        },{
            name : [15, 16],
            nums : [-5, 29]
        },{
            name : 17,
            nums : [-5, 30]
        },{
            name : [18, 19],
            nums : [-5, 31]
        },{
            name : 20,
            nums : [-5, 32]
        }]
}
];


var confE = [
{
    name : 101,
    center : [1400, 90],
    line : [
        {
            name : [8,15],
            nums : 25,
        },{
            name : [16, 23],
            nums : [-3, [3], 18],
        },{
            name : [24, 26],
            nums : 25,
        }
    ]
},{
    name : 301,
    center : [1660, 90],
    line : [
        {
            nums : 0,
        },{
            name : 1,
            nums : 25,
        },{
            name : 2,
            nums : [-3, [3], 19],
        },{
            name : [3, 8],
            nums : [-3, [3], 18],
        },{
            nums : 0,
        },{
            name : [10, 20],
            nums : 25,
        }
    ]
}];

function areaA(seatConf) {
    var distant = seatLeft;
    var x = seatH;
    var y = seatW;
    for (var i in seatConf) {
        addAreaNum(seatConf[i].center[0], seatConf[i].center[1], seatConf[i].name);
        var total = 0;
        for (var j in seatConf[i].line) {
            var line = seatConf[i].line[j];
            if (line.nums == 0) {
                distant -= (x+seatGap);
                continue;
            }
            var startNum = 1;
            var fromTo = (typeof line.name !== "object") ? [line.name, line.name] : line.name;
            if (typeof line.nums === "number") {
                var lineStart = 0;
            } else {
                var lineStart = Math.abs(line.nums[0]) * y;
                if (line.nums.length == 3) {
                    startNum += line.nums[1][0];
                    line.nums = line.nums[2];
                } else {
                    line.nums = line.nums[1];
                }
            }
            for (var l=fromTo[0]; l<=fromTo[1]; l++) {
                var position = lineStart + topH;
                var start = startNum;
                addLineNum(distant, position-15, l);
                for (var m=0; m<line.nums; m++) {
                    addRect({area: seatConf[i].name, line: l, seat: start}, distant, position, x, y);
                    position += y+seatStroke*2;
                    start ++;
                    total ++;
                }
                distant -= (x+seatGap);
            }
        }
        //console.log("A:"+total);
    }
}


function areaB(seatConf) {
    var rr = r;
    var start = null;
    var x = seatH;
    var y = seatW;
    for (var i in seatConf) {
        addAreaNum(seatConf[i].center[0], seatConf[i].center[1], seatConf[i].name);
        var total = 0;
        if (seatConf[i].restart) {
            start = {x: seatLeft, y : A2_y};
            rr = r;
        }
        var angle = seatConf[i].angle;
        var dangle = Math.abs(angle[1]-angle[0]);
        for (var j in seatConf[i].line) {
            var line = seatConf[i].line[j];
            if (line.nums == 0) {
                start.x -= (x + seatGap);
                continue;
            } else if (typeof line.nums === "number") {
                var nums = [line.nums];
            } else {
                var nums = line.nums;
            }
            var cnt = 0;
            for (var n in nums) {
                if (typeof nums[n] === "number") {
                    cnt += abs(nums[n]);
                }
            }
            var fromTo = (typeof line.name !== "object") ? [line.name, line.name] : line.name;
            var delta = dangle/(cnt-1);
            for (var l=fromTo[0]; l<=fromTo[1]; l++) {
                var sangle = angle[0];
                var startNum = 1;
                for (var m in nums) {
                    if (typeof nums[m] === "object") {
                        startNum += nums[m][0];
                    } else if (nums[m] < 0) {
                        sangle += delta * abs(nums[m]);
                    } else {
                        if (angle[0] == 0) {
                            var p = {x: start.x + rr * (1 - cos(sangle)), y : start.y - 15+ rr * sin(sangle)};
                        } else if (angle[0] == 66) {
                            var p = {x: start.x -11 + rr * (1 - cos(sangle)), y : start.y -10 + rr * sin(sangle)};
                        } else {
                            var p = {x: start.x-5 + rr * (1 - cos(sangle)), y : start.y - 15+ rr * sin(sangle)};
                        }
                        addLineNum(p.x, p.y, l);
                        for (var o=0; o<nums[m]; o++) {
                            var p = {x: start.x + rr * (1 - cos(sangle)), y : start.y + rr * sin(sangle)};
                            addRect({area: seatConf[i].name, line: l, seat: startNum}, p.x, p.y, x, y, -sangle);
                            sangle += delta;
                            startNum ++;
                            total ++;
                        }
                    }
                }
                rr += (x + seatGap);
                start.x -= (x + seatGap);
            }
        }
        //console.log("B:"+total);
    }
}


function areaC(seatConf) {
    var distant = 0;
    var x = seatW;
    var y = seatH;
    for (var i in seatConf) {
        addAreaNum(seatConf[i].center[0], seatConf[i].center[1], seatConf[i].name);
        var total = 0;
        if (seatConf[i].restart) {
            distant = seatBottom;
        }
        for (var j in seatConf[i].line) {
            var line = seatConf[i].line[j];
            if (line.nums == 0) {
                continue;
            }

            var startNum = 1;
            var fromTo = (typeof line.name !== "object") ? [line.name, line.name] : line.name;
            if (typeof line.nums === "number") {
                var lineStart = 0;
            } else {
                var lineStart = abs(line.nums[0]) * x;
                if (line.nums.length == 3) {
                    startNum += line.nums[1][0];
                    line.nums = line.nums[2];
                } else {
                    line.nums = line.nums[1];
                }
            }
            for (var l=fromTo[0]; l<=fromTo[1]; l++) {
                var position = seatConf[i].position + lineStart;
                var start = startNum;
                addLineNum(position-15, distant-4, l);
                for (var m=0; m<line.nums; m++) {
                    addRect({area: seatConf[i].name, line: l, seat: start}, position, distant, x, y);
                    position += x + seatStroke*2;
                    start ++;
                    total ++;
                }
                distant += (y+seatGap);
            }
        }
        //console.log("C:"+total);
    }
}


function areaD(seatConf) {
    var rr = r;
    var start = null;
    var x = seatH;
    var y = seatW;
    for (var i in seatConf) {
        addAreaNum(seatConf[i].center[0], seatConf[i].center[1], seatConf[i].name);
        var total = 0;
        if (seatConf[i].restart) {
            start = {x: seatRight, y : A2_y};
            rr = r;
        }
        var angle = seatConf[i].angle;
        var dangle = Math.abs(angle[1]-angle[0]);
        for (var j in seatConf[i].line) {
            var line = seatConf[i].line[j];
            if (line.nums == 0) {
                start.x += (x + seatGap);
                continue;
            } else if (typeof line.nums === "number") {
                var nums = [line.nums];
            } else {
                var nums = line.nums;
            }
            var cnt = 0;
            for (var n in nums) {
                if (typeof nums[n] === "number") {
                    cnt += abs(nums[n]);
                }
            }
            var fromTo = (typeof line.name !== "object") ? [line.name, line.name] : line.name;
            var delta = dangle/(cnt-1);
            for (var l=fromTo[0]; l<=fromTo[1]; l++) {
                var sangle = angle[0];
                var startNum = 1;
                for (var m in nums) {
                    if (typeof nums[m] === "object") {
                        startNum += nums[m][0];
                    } else if (nums[m] < 0) {
                        sangle -= delta * abs(nums[m]);
                    } else {
                        if (angle[0] == 90) {
                            var p = {x: start.x -13 - rr * (1-cos(sangle)), y : start.y - 6+ rr * sin(sangle)};
                        } else if (angle[0] == 66) {
                            var p = {x: start.x -10 - rr * (1-cos(sangle)), y : start.y+ rr * sin(sangle)};
                        } else {
                            var p = {x: start.x -5 - rr * (1-cos(sangle)), y : start.y + 5+ rr * sin(sangle)};
                        }

                        addLineNum(p.x, p.y, l);
                        for (var o=0; o<nums[m]; o++) {
                            var p = {x: start.x - rr * (1-cos(sangle)), y : start.y + rr * sin(sangle)};
                            addRect({area: seatConf[i].name, line: l, seat: startNum}, p.x, p.y, x, y, sangle);
                            sangle -= delta;
                            startNum ++;
                            total ++;
                        }
                    }
                }
                rr += (x + seatGap);
                start.x += (x + seatGap);
            }
        }
        //console.log("D:"+total);
    }
}

function areaE(seatConf) {
    var distant = seatRight;
    var x = seatH;
    var y = seatW;
    for (var i in seatConf) {
        addAreaNum(seatConf[i].center[0], seatConf[i].center[1], seatConf[i].name);
        var total = 0;
        for (var j in seatConf[i].line) {
            var line = seatConf[i].line[j];
            if (line.nums == 0) {
                distant += (x+seatGap);
                continue;
            }
            var startNum = 1;
            var fromTo = (typeof line.name !== "object") ? [line.name, line.name] : line.name;
            if (typeof line.nums === "number") {
                var lineStart = 0;
            } else {
                var lineStart = abs(line.nums[0]) * y;
                if (line.nums.length == 3) {
                    startNum += line.nums[1][0];
                    line.nums = line.nums[2];
                } else {
                    line.nums = line.nums[1];
                }
            }
            for (var l=fromTo[0]; l<=fromTo[1]; l++) {
                var position = seatRightBottom - lineStart;
                var start = startNum;
                addLineNum(distant, position+5, l);
                for (var m=0; m<line.nums; m++) {
                    addRect({area: seatConf[i].name, line: l, seat: start}, distant, position, x, y);
                    position -= y+seatStroke*2;
                    start ++;
                    total ++;
                }
                distant += (x+seatGap);
            }
        }
        //console.log("E:"+total);
    }
}

function areaF() {
    var x = seatLeft + 38;
    var y = -5;
    var w = seatRight-seatLeft - 70;
    var h = seatBottom - 25;
    var html = '<div style="line-height:'+h+'px;position:absolute;left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px;border:2px solid #555;"></div>';
    render.append(html);
}

function addAreaNum(x, y, text) {
    renderHtml += '<div style="z-index:2;position:absolute;left:'+x+'px;top:'+y+'px;opacity:0.5;font-size:50px;color:#000;font-weight:bold;">'+text+'</div>';
}

function addRect(seat, x, y, w, h, angle) {
    renderHtml += '<div class="jq-seat-info jq-area-'+seat.area+' jq-line-'+seat.line+' jq-seat-'+seat.seat+'" style="';
    if (angle) {
        renderHtml += 'transform:rotate('+angle+'deg);';
        renderHtml += '-ms-transform:rotate('+angle+'deg);';
        renderHtml += '-moz-transform:rotate('+angle+'deg);';
        renderHtml += '-webkit-transform:rotate('+angle+'deg);';
        renderHtml += '-o-transform:rotate('+angle+'deg);';
    }
    renderHtml += 'position:absolute;left:'+x+'px;top:'+y+'px;width:'+(w-2)+'px;height:'+(h-2)+'px;border:1px solid #555;"></div>';
}

function addLineNum(x, y, text) {
    renderHtml += '<div style="position:absolute;left:'+x+'px;top:'+y+'px;color:#888;">'+text+'</div>';
}

function sin(angle) {
    return Math.sin(angle/180*3.1415926);
}

function cos(angle) {
    return Math.cos(angle/180*3.1415926);
}

function abs(num) {
    return Math.abs(num);
}
