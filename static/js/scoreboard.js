// the total scores of all teams in a 1-d matrix of entries.
// Team time is the time of the latest entry submitted.
var totalScores = [];
var totalScoresBlocks = [];

// The time at which the competition should end.
var endTime = "NOPE";

// The time at which the page loaded.
const loadDate = new Date();
const loadTime = loadDate.getTime();
const endIndicator = "ENDENDEND";
const startIndicator = "STARTSTARTSTART";
// MOAA: 60 FPS Edition!
const tickrate = parseInt(1000 / 60);
// Depends on the screen being projected on. Make sure team names don't overflow!
const maxCharLength = 24;

// Number of columns / rows in the scoreboard.
const tableColumns = 4;
const tableRows = 7;

// Sums the scores of all teams. Also gets the start time of the competition.
function sumScores() {
  // for every score entry in the table ...
  for (var i = 0; i < tableData.length; i++) {
    var entry = tableData[i];
    var endDate;

    // if it is an ending date or a starting date, it is not a team
    // and you should modify the end date.
    // SQL is also dumb and an hour ahead.
    if (entry.teamName === endIndicator) {
      endDate = new Date(entry.submission);
      endTime = endDate.getTime() + 60 * 60 * 1000;
      continue;
    }

    if (entry.teamName === startIndicator) {
      endDate = new Date(entry.submission);
      endTime = endDate.getTime() + 150 * 60 * 1000;
      continue;
    }

    // Assume that the team has not yet scored and must be added.
    var toBeAdded = true;
    var entryDate = new Date(entry.submission);
    var entryTime = entryDate.getTime();

    // Then check all other teams.
    for (var j = 0; j < totalScores.length; j++)
      if (totalScores[j].teamName === entry.teamName) {
        // If the team has already scored and has a profile,
        // make sure they are not added ...
        toBeAdded = false;
        // Add to their point total ...
        totalScores[j].points += entry.points;

        // Get the time of their current submission.
        var newEntryDate = new Date(totalScores[j].submission);

        // If it is more recent, then you should modify their overall time.
        if (newEntryDate.getTime() < entryTime)
          totalScores[j].submission = entry.submission;
      }

    // If the team has not previously scored, add them in!
    if (toBeAdded)
      totalScores.push(entry);
  }
}

// A comparator for two team entries.
function teamSort(a, b) {
  if (b.points === a.points) {
    // If team A took less time, then it should come before B.
    var submissionA = new Date(a.submission);
    var submissionB = new Date(b.submission);
    return submissionA.getTime() - submissionB.getTime();
  }
  // If team A took less points, then it should come after B.
  return b.points - a.points;
}

// Turns the 1-dimensional array of totalScores into the 2-dimensional array of totalScoresBlocks. Also culls nonpositive scores.
function makeMatrix() {
  for (var i = 0; i < tableColumns; i++) {
    var section = [];

    for (var j = 0; j < tableRows; j++)
      // Necessary in case you have extra space on the scoreboard.
      if (tableRows * i + j < totalScores.length)
        if (totalScores[tableRows * i + j].points > 0)
          section.push(totalScores[tableRows * i + j]);

    totalScoresBlocks.push(section);
  }
}

// Displays the scoreboard and the timer.
function postScores() {
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  var timeRemaining = endTime - currentTime;
  var rect = document.getElementById("scoreSheet").getBoundingClientRect();

  // If the competition has not yet started.
  if (timeRemaining > 90 * 60 * 1000 || endTime === "NOPE") {
    document.getElementById("hours").innerHTML = "1";
    document.getElementById("minutes").innerHTML = "30";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "000";
    document.getElementById("scoreSheet").innerHTML = "<div style=\"color:white;font-size:80px;line-height:" + rect.height + "px;\">Gunga Bowl has not yet started!</div>";
    // Reset every 5 seconds otherwise.
    setTimeout(reload, 5000);
    return;
  }

  // If the competition has ended.
  if (timeRemaining <= 0) {
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "000";
    document.getElementById("titleTitle").innerHTML = "Time's Up!";
    // check every 5 seconds for updates.
    setTimeout(reload, 5000);
  } else {
    // Recalculates the time every tick.
    setInterval(calculateTime, tickrate);
  }

  // If the number of teams with scores is 0 ...
  if (totalScores.length === 0) {
    // Mention that no teams have scored yet!
    document.getElementById("scoreSheet").innerHTML = "<div style=\"color: white; font-size: 80px;line-height:" + rect.height + "px;\">No teams have scored yet!</div>";
    return;
  }

  var innerHTML = "";
  // width and height
  var w = Math.floor((rect.width - 24) / tableColumns - 20);
  var h = Math.floor((rect.height - 24) / tableRows - 20);
  
  console.log(totalScoresBlocks);

  for (var i = 0; i < totalScoresBlocks.length; i++)
    for (var j = 0; j < totalScoresBlocks[i].length; j++)
      if (tableRows * i + j < totalScores.length) {
        // Position each box.
        var constantStyle = "background-color:white;border:4px solid black;text-align:center;position:absolute;";
        var contentName = totalScoresBlocks[i][j].teamName.substring(0, maxCharLength);
        var content =  contentName + ": <u>" + totalScoresBlocks[i][j].points + "</u>";
        var cX = (w + 20) * i + 20;
        var cY = (h + 20) * j + 20;
        var sizing = "line-height: " + (h - 4) + "px; width:" + (w - 4) + "px; height: " + h + "px; left:" + cX + "px; top:" + cY + "px;";
        innerHTML += "<div style=\"" + constantStyle + sizing + "\">" + content + "</div>";
      }

  // For testing purposes.
  // for (var i = 0; i < totalScoresBlocks.length; i++) {
  //   var currentSet = "";
  //   for (var j = 0; j < totalScoresBlocks[i].length; j++) {
  //     currentSet += totalScoresBlocks[i][j];
  //     if (j != totalScoresBlocks[i].length - 1)
  //       currentSet += " ";
  //   }
  //   console.log(currentSet);
  // }

  document.getElementById("scoreSheet").innerHTML = innerHTML;
}

// calculates the time to display on the timer.
function calculateTime() {
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  var timeRemaining = endTime - currentTime;

  if (timeRemaining % 10000 < 20)
    reload();

  var hours = ("0" + parseInt(timeRemaining / 3600000)).slice(-2);
  timeRemaining %= 3600000;

  var minutes = ("0" + parseInt(timeRemaining / 60000)).slice(-2);
  timeRemaining %= 60000;

  var seconds = ("0" + parseInt(timeRemaining / 1000)).slice(-2);
  timeRemaining %= 1000;

  var milliseconds = ("00" + parseInt(timeRemaining)).slice(-3);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("milliseconds").innerHTML = milliseconds;
}

function reload(){
    location.reload(true);
}

sumScores();
totalScores.sort(teamSort);
makeMatrix();
postScores();
