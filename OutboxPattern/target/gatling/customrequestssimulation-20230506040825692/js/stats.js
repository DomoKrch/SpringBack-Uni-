var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4163",
        "ok": "4163",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "816",
        "ok": "816",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "189",
        "ok": "189",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2647",
        "ok": "2647",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3790",
        "ok": "3790",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 667,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 64,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.474",
        "ok": "39.474",
        "ko": "-"
    }
},
contents: {
"req_create-employee-70702": {
        type: "REQUEST",
        name: "create-employee-request",
path: "create-employee-request",
pathFormatted: "req_create-employee-70702",
stats: {
    "name": "create-employee-request",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4163",
        "ok": "4163",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "816",
        "ok": "816",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "189",
        "ok": "189",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2647",
        "ok": "2647",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3790",
        "ok": "3790",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 667,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 64,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.474",
        "ok": "39.474",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
