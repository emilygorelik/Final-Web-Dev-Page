var activeButtonID = null;
var buttonsInRow = 0;
displayButtonDivs();

//resizes the div which holds all the info buttons depending on the size of the window
$(document).ready(function () {
    $(window).resize(async function () {
        displayButtonDivs();;
        allToBlack()
        setActiveToRed(activeButtonID)
    });
});

//all the functions that need to run when the button is clicked
function buttonClicked(buttonID) {
    numberID = buttonID.substr(buttonID.length - 3);
    allToBlack();
    setActiveToRed(numberID);
    collapseIfDoubleClick(numberID);
    getText(numberID);
}

//collapses all texts
function collapseAll() {
    var allButtons = document.querySelectorAll(".infoText");
    allButtons.forEach(button => {
        button.style.display = "none"
    });
}

//opens the text that corresponds to the clicked button
function openActive(numberID) {
    if (numberID) {
        textID = "infoText_" + buttonsInRow + "c_" + numberID;
        document.getElementById(textID).style.display = "block";
    }
}

//collapses button if clicked when already open
function collapseIfDoubleClick(numberID) {
    buttonID = "infoButton_" + buttonsInRow + "c_" + numberID;
    textID = "infoText_" + buttonsInRow + "c_" + numberID;
    if (activeButtonID == numberID) {
        //button was clicked twice
        allToBlack();
        document.getElementById(buttonID).checked = false;
        //document.getElementById(textID).classList.add('in');
        document.getElementById(textID).style.display = "none";
        activeButtonID = null;
    }
    else {
        activeButtonID = numberID;
    }
}

//displays the correct button div depending on the size of the screen
function displayButtonDivs() {
    var increment = 225;
    hideDiv('infoButtonDiv_4columns');
    hideDiv('infoButtonDiv_3columns');
    hideDiv('infoButtonDiv_2columns');
    hideDiv('infoButtonDiv_1columns');

    if (window.innerWidth > 4 * increment) {
        document.getElementById('infoButtonDiv_4columns').style.width = 4 * increment;
        showDiv('infoButtonDiv_4columns');
        buttonsInRow = 4;
    }
    else if (window.innerWidth > 3 * increment && window.innerWidth < 4 * increment) {
        document.getElementById('infoButtonDiv_3columns').style.width = 3 * increment;
        showDiv('infoButtonDiv_3columns');
        buttonsInRow = 3;
    }
    else if (window.innerWidth > 2 * increment && window.innerWidth < 3 * increment) {
        document.getElementById('infoButtonDiv_2columns').style.width = 2 * increment;
        showDiv('infoButtonDiv_2columns');
        buttonsInRow = 2;
    }
    else {
        document.getElementById('infoButtonDiv_1columns').style.width = increment;
        showDiv('infoButtonDiv_1columns');
        buttonsInRow = 1;
    }
}

//hides div
function hideDiv(divIDStr) {
    var divID = document.getElementById(divIDStr);
    divID.style.display = "none";
}

//shows div
function showDiv(divIDStr) {
    var divID = document.getElementById(divIDStr);
    divID.style.display = "block";
}

//puts information into the button texts
function getText(numberID) {
    buttonID = "infoButton_" + buttonsInRow + "c_" + numberID;
    arraySpot = parseInt(buttonID.substr(buttonID.length - 3)) - 1;

    text_001 = "<header> emergency contacts & resources</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_002 = "<header> reporting emergencies</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_003 = "<header>active shooter</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_004 = "<header>hostage situation</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_005 = "<header>lockdown</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_006 = "<header>shelter-in-place</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_007 = "<header>fire</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_008 = "<header>fire evacuation</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_009 = "<header>bomb threat</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_010 = "<header>suspicious package</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_011 = "<header>hazardous material incident</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_012 = "<header>emergency noticifications</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_013 = "<header>evacuating the disabled</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_014 = "<header>medical emergency</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_015 = "<header>student in distress</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    text_016 = "<header>weather emergency</header>\
                <p>\
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies risus eget sem luctus, nec tincidunt mauris blandit. Curabitur pretium mauris \
                velit, rutrum auctor ipsum placerat sed. Maecenas mattis, lectus et pellentesque malesuada, ipsum neque tempor nisl, eget rhoncus est arcu ac urna. Ut \
                faucibus magna nec massa euismod venenatis. Aenean dapibus, ipsum nec commodo ultrices, nibh arcu finibus orci, eget maximus leo est non sapien. In massa \
                ligula, rhoncus nec mattis eu, viverra ac felis. Sed elit tellus, porttitor nec egestas vitae, feugiat nec dolor. Suspendisse laoreet viverra est ut \
                hendrerit. Sed nec augue risus.\
                </p>";
    let textHTMLs = [text_001, text_002, text_003, text_004,
        text_005, text_006, text_007, text_008,
        text_009, text_010, text_011, text_012,
        text_013, text_014, text_015, text_016];
    textDivID = "infoText_" + buttonsInRow + "c_" + buttonID.substr(buttonID.length - 3);
    document.getElementById(textDivID).innerHTML = textHTMLs[arraySpot];
}

function allToBlack() {
    elements = document.getElementsByClassName('infoRadioButton');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
    }
    collapseAll();
}

function setActiveToRed(numberID) {
    if (numberID) {
        var active_button_id = 'infoButton_' + buttonsInRow + "c_" + numberID;
        $("[id^=infoButton_]").each(function () {
            if (this.id == active_button_id) {
                this.parentNode.children[1].style.backgroundColor = '#AC2B37'
                openActive(numberID);
                getText(numberID);
            }
        });
    }
}