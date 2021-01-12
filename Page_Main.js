 //end
 var angle_jump = 6;
 var dt = new Date();

 sec = dt.getSeconds() * angle_jump;

 var min = dt.getMinutes();
 min = min * angle_jump;
 min = min + (sec / 360)
 var hour = dt.getHours();
 hour = hour * 30;
 hour = hour + (min / 12);

 var ang_second = 90 - sec;
 var ang_minute = 90 - min;
 var ang_hour = 90 - hour;

 var r = 160;
 //var my_canvas=$('#my_canvas').get(0)
 var my_canvas = document.getElementById("my_canvas");

 var gctx = my_canvas.getContext("2d");

 var x = my_canvas.width / 2;
 var y = my_canvas.height / 2;
 speed = 1000;

 arc_angle = 10; // angle of oppisite end of second niddle

 ////////////
 my_function = function my_function() {

     gctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
     ///////////////////
     gctx.moveTo(x + r * 1.4, y);
     gctx.strokeStyle = '#d28c23';
     gctx.lineWidth = 30;
     gctx.shadowColor = 'black';
     gctx.shadowOffsetX = 5;
     gctx.shadowOffsetY = 5;
     gctx.shadowBlur = 15;

     gctx.arc(x, y, r * 1.4, 0, 2 * Math.PI);
     gctx.stroke(); ///Outer circle 

     gctx.lineWidth = 1;

     //////////// To show number indicating Hours ///////////
     var h = 2;
     var x_gap = -5;
     var y_gap = 5;
     for (j = 0; j < 360; j += angle_jump) {
         j_radian = j * (Math.PI / 180);

         gctx.beginPath()
         gctx.strokeStyle = '#464623';
         if ((j % (5 * angle_jump)) == 0) {
             var y1_out = y + 1.1 * r * Math.sin(j_radian);
             var x1_out = x + 1.1 * r * Math.cos(j_radian);

             var y1_text = y + 1 * r * Math.sin(j_radian);
             var x1_text = x + 1 * r * Math.cos(j_radian);

             //h=h+5;
             if (h < 12) {
                 h = h + 1; // to show hour 
             } else {
                 h = 1;
             }

             gctx.font = '36px serif';
             if (y_gap < 15) { y_gap = y_gap + 1; }
             x_gap = x_gap - 1;
             void gctx.fillText(h, x1_text + x_gap, y1_text + y_gap);
         } else {
             var y1_out = y + 1.15 * r * Math.sin(j_radian);
             var x1_out = x + 1.15 * r * Math.cos(j_radian);
         }

         var y2_out = y + 1.2 * r * Math.sin(j_radian);
         var x2_out = x + 1.2 * r * Math.cos(j_radian);

         gctx.moveTo(x1_out, y1_out);
         gctx.lineTo(x2_out, y2_out);
         gctx.stroke();
     }
     //
     gctx.beginPath()
     gctx.strokeStyle = '#46d2f5'; // border color of the second needle 
     var startAngle = (1 / 180) * (360 - ang_second); // In degree 
     var a_end_ang = (1 / 180) * (360 - (ang_second + 180 - arc_angle));
     var a_start_ang = (1 / 180) * (360 - (ang_second + 180 + arc_angle));

     var y1 = y + r * Math.sin(startAngle * Math.PI);
     var x1 = x + r * Math.cos(startAngle * Math.PI);

     gctx.moveTo(x1, y1); // Coordinate of tip of the needle
     gctx.arc(x, y, 0.3 * r, a_start_ang * Math.PI, a_end_ang * Math.PI);
     gctx.lineTo(x1, y1); // Full second needle path
     gctx.fillStyle = '#46d2f5'; // fill colour of the second needle
     gctx.fill();
     gctx.stroke(); // draw the second needle 

     ///////////Minute Needle//////////
     gctx.beginPath()
     gctx.strokeStyle = '#f5d200'; // border color of the minute needle 
     var startAngle = (1 / 180) * (360 - ang_minute); // In degree 
     var a_end_ang = (1 / 180) * (360 - (ang_minute + 180 - arc_angle));
     var a_start_ang = (1 / 180) * (360 - (ang_minute + 180 + arc_angle));

     var y1 = y + 0.9 * r * Math.sin(startAngle * Math.PI);
     var x1 = x + 0.9 * r * Math.cos(startAngle * Math.PI);

     gctx.moveTo(x1, y1); // Coordinate of tip of the needle
     gctx.arc(x, y, 0.3 * r, a_start_ang * Math.PI, a_end_ang * Math.PI);
     gctx.lineTo(x1, y1); // Full minute needle path
     gctx.fillStyle = '#f5d200'; // fill colour of the minute needle
     gctx.fill();
     gctx.stroke(); // draw the minute needle 

     ///////////hour Needle//////////
     gctx.beginPath()
     gctx.strokeStyle = '#f52300'; // border color of the hour needle 
     var startAngle = (1 / 180) * (360 - ang_hour); // In degree 
     var a_end_ang = (1 / 180) * (360 - (ang_hour + 180 - (arc_angle * 2)));
     var a_start_ang = (1 / 180) * (360 - (ang_hour + 180 + (arc_angle * 2)));

     var y1 = y + 0.8 * r * Math.sin(startAngle * Math.PI);
     var x1 = x + 0.8 * r * Math.cos(startAngle * Math.PI);

     gctx.moveTo(x1, y1); // Coordinate of tip of the needle
     gctx.arc(x, y, 0.15 * r, a_start_ang * Math.PI, a_end_ang * Math.PI);
     gctx.lineTo(x1, y1); // Full hour needle path
     gctx.fillStyle = '#f52300'; // fill colour of the hour  needle
     gctx.fill();
     gctx.stroke(); // draw the hour needle 


     /// small Circle at center of the clock 
     gctx.beginPath()
     gctx.strokeStyle = '#000000';
     gctx.arc(x, y, 3, 0, 2 * Math.PI);
     gctx.fillStyle = '#ff00ff';
     gctx.fill();
     gctx.stroke();
     my_function2();
 }

 my_function2 = function my_function2() {
         if (ang_second > -264) {
             ang_second = ang_second - angle_jump;
             my_time = setTimeout('my_function()', speed)
                 //$('#d1').html("ang_second: " + ang_second + "<br>ang_minute" + ang_minute + "<br>ang_hour" + ang_hour);
         } else {
             ang_second = 90;

             if (ang_minute > -264) {
                 ang_minute = ang_minute - angle_jump;
             } else {
                 ang_minute = 90;
                 ang_hour = ang_hour - angle_jump;
             }
             my_time = setTimeout('my_function()', speed)
         }
     }
     /////////
 my_function();

 //getting all required elements

 const inputBox = document.querySelector(".inputField input");
 const addBtn = document.querySelector(".inputField button");
 const todoList = document.querySelector(".todoList");
 const deleteAllBtn = document.querySelector(".footer button");



 // add event
 inputBox.onkeyup = () => {
     let userEnteredValue = inputBox.value; //get user entered value
     if (userEnteredValue.trim() != 0) { //if the user value isn't only spaces
         addBtn.classList.add("active"); //active the add button
     } else {
         addBtn.classList.remove("active"); //unactive the add button
     }
 }

 showTasks(); //calling showTask function

 addBtn.onclick = () => { //when user click on plus icon button
     let userEnteredValue = inputBox.value; //getting input field value
     let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
     if (getLocalStorageData == null) { //if localstorage has no data
         listArray = []; //create a blank array
     } else {
         listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
     }
     listArray.push(userEnteredValue); //pushing or adding new value in array
     localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
     showTasks(); //calling showTask function
     addBtn.classList.remove("active"); //unactive the add button once the task added
 }

 function showTasks() {
     let getLocalStorageData = localStorage.getItem("New Todo");
     if (getLocalStorageData == null) {
         listArray = [];
     } else {
         listArray = JSON.parse(getLocalStorageData);
     }
     const pendingTasksNumb = document.querySelector(".pendingTasks");
     pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
     if (listArray.length > 0) { //if array length is greater than 0
         deleteAllBtn.classList.add("active"); //active the delete button
     } else {
         deleteAllBtn.classList.remove("active"); //unactive the delete button
     }
     let newLiTag = "";
     listArray.forEach((element, index) => {
         newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
     });
     todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
     inputBox.value = ""; //once task added leave the input field blank
 }

 // delete 
 function deleteTask(index) {
     let getLocalStorageData = localStorage.getItem("New Todo");
     listArray = JSON.parse(getLocalStorageData);
     listArray.splice(index, 1); //delete line
     localStorage.setItem("New Todo", JSON.stringify(listArray));
     showTasks(); //call the showTasks function
 }

 // Clear All
 deleteAllBtn.onclick = () => {
     listArray = []; //empty the array
     localStorage.setItem("New Todo", JSON.stringify(listArray));
     showTasks(); //call the showTasks function
 }

 /**/
 const timeline = anime.timeline({
     easing: 'easeInOutExpo',
     duration: 1000,
     complete: () => {
         anime({
             targets: '.leaf',
             rotate: 40,
             duration: 3000,
             loop: true,
             direction: 'alternate',
             easing: 'easeInOutQuad'
         });
         anime({
             targets: '.petals',
             scale: 1.05,
             duration: 6000,
             loop: true,
             direction: 'alternate',
             easing: 'easeInOutQuad'
         });
     }
 });

 timeline.add({
     targets: '.stem',
     scale: [0, 1],
 })

 timeline.add({
     targets: '.leaf',
     rotate: [0, 45],
 })
 timeline.add({
     targets: '.petals',
     scale: [0, 1],
 }, '-=1000');

 timeline.add({
     targets: '#bee',
     opacity: [0, 1],
 }, '-=750');


 anime({
     targets: '#bee',
     translateX: path('x'),
     translateY: path('y'),
     rotate: path('angle'),
     loop: true,
     duration: 12500,
     easing: 'linear'
 });