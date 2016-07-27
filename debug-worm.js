
function dWIsDebugActive() {
    var res = false;
    if (typeof debugWormToken !== 'undefined' && debugWormToken == true) {
        res = true;
    }
    return res;
}

function dWConsoleLog(data) {
    if (dWIsDebugActive()) {
        console.log(data);
    }
}

function dWAlert(data) {
    if (dWIsDebugActive()) {
        alert(data);
    }
}
