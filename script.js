function login(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  console.log(u,p);

  if(u === "admin" && p === "1234"){
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

function mark(status){
  localStorage.setItem("attendance", status);
  document.getElementById("result").innerText = "Marked: " + status;
}
/*
function activity(status){
  localStorage.setItem("activity", status);
  document.getElementById("actResult").innerText = "Activity: " + status;
}
function markActivity(name, status){
  let data = JSON.parse(localStorage.getItem("activities")) || [];

  data.push({
    activity: name,
    status: status
  });

  localStorage.setItem("activities", JSON.stringify(data));

  alert(name + " marked as " + status);
  }*/


  /*function mark(activity, status){

  let result = document.getElementById("result");

  result.innerText = activity + " marked " + status;

  if(status === "Attended"){
    result.style.backgroundColor = "green";
  } else {
    result.style.backgroundColor = "red";
  }

  result.style.color = "white";
  result.style.padding = "10px";
  result.style.display = "inline-block";
}*/

function mark(activity, status){

  // save separately for each activity
  localStorage.setItem(activity, status);

  // show in its own place
  document.getElementById(activity + "-status").innerText =
    activity + " marked " + status;

  let el = document.getElementById(activity + "-status");

  if(status === "Attended"){
    el.style.backgroundColor = "green";
  } else {
    el.style.backgroundColor = "red";
  }

  el.style.color = "white";
  el.style.padding = "5px";
  el.style.display = "inline-block";
}


/*alternative*/

function markAttendance(status){

  let result = document.getElementById("attResult");

  result.innerText = "Marked " + status;

  if(status === "Present"){
    result.style.backgroundColor = "green";
  } else {
    result.style.backgroundColor = "red";
  }

  result.style.color = "white";
  result.style.padding = "10px";
  result.style.display = "inline-block";
}