var container = $(".container");


// get the current date
$("#currentDay").text(moment().format('MMMM Do YYYY'))
makeHrSegment("9");

// function to make an hour segment
function makeHrSegment(hr) {
console.log("makeHrSegment -> hr", hr)
    var tm = hr;
    if (hr < 12 && hr > 6) {
        tm += " am";
    }else { 
        tm += " pm";
    }
    // make a row to append to 
    var row = $("<div>");
    row.addClass("row time-block");

    //hr section
    var hour = $("<div>").text(tm);
    hour.addClass("col hour");

    //text area for editing
    var txt = $("<textarea>");
    txt.addClass("col-10");
    
    //save section for click
    var saveIt = $("<button>");
    saveIt.addClass("col saveBtn");
    saveIt.text("save");
    
    //append section to container
    row.append(hour, txt, saveIt);
    container.append(row);
    
    // color an hour segment
    
    var hrInt = parseInt(hr)
    var curHr = parseInt(moment().format("h"));
    // console.log("makeHrSegment -> hr", hr)
    // console.log("makeHrSegment -> curHr", curHr)

    if (hr === curHr) {
        row.addClass("present");
    } else if (hr > curHr || hr < 6 && hr > 8) {
        row.addClass("future");
    } else {
        row.addClass("past");
    }

}

// click event for saving a note

