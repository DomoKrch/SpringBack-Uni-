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
        "total": "704",
        "ok": "704",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "17188",
        "ok": "17188",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12049",
        "ok": "12049",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3098",
        "ok": "3098",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13248",
        "ok": "13248",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14118",
        "ok": "14118",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14449",
        "ok": "14449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14604",
        "ok": "14604",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 745,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
},
contents: {
"req_update-employee-64992": {
        type: "REQUEST",
        name: "update-employee-request",
path: "update-employee-request",
pathFormatted: "req_update-employee-64992",
stats: {
    "name": "update-employee-request",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "704",
        "ok": "704",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "17188",
        "ok": "17188",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12049",
        "ok": "12049",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3098",
        "ok": "3098",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13248",
        "ok": "13248",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14118",
        "ok": "14118",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14449",
        "ok": "14449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14604",
        "ok": "14604",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 745,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
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
