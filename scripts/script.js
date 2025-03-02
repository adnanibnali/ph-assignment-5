const histories = document.getElementById("histories");
// dynamic date starts here
const dynamicDateP = document.getElementById("dynamicDateP");
const dynamicDate = new Date().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
dynamicDateP.innerText = dynamicDate;
const dynamicWeekdayP = document.getElementById("dynamicWeekdayP");
const dynamicWeekday = new Date().toLocaleDateString("en-US", {
  weekday: "short",
});
dynamicWeekdayP.innerText = dynamicWeekday + " ,";
// dynamic date ends here

// Functionalities for click on complete btn
const completedBtns = document.getElementsByClassName("completedBtn");
for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (event) {
    // get things dynamically
    const taskHeading = event.target.parentNode.parentNode.querySelector("h2");
    const taskAssigned = document.getElementById("taskAssigned");
    const totalCompletedTasks = document.getElementById("totalCompletedTasks");
    // do tasks dynamically
    completedBtn.setAttribute("disabled", "true");
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;
    totalCompletedTasks.innerText = parseInt(totalCompletedTasks.innerText) + 1;
    // create history
    const history = document.createElement("div");
    history.classList.add("p-2", "bg-[#F4F7FF]", "rounded-md");
    const historyTextContainer = document.createElement("p");
    const staticText = document.createElement("span");
    staticText.innerText = "You Have Completed The Task ";
    const dynamicTittle = document.createElement("span");
    dynamicTittle.innerText = taskHeading.innerText;
    const staticAt = document.createElement("span");
    staticAt.innerText = " at ";
    const dynamicTime = document.createElement("span");
    dynamicTime.innerText = new Date().toLocaleTimeString();
    // append history
    historyTextContainer.appendChild(staticText);
    historyTextContainer.appendChild(dynamicTittle);
    historyTextContainer.appendChild(staticAt);
    historyTextContainer.appendChild(dynamicTime);
    history.appendChild(historyTextContainer);
    histories.appendChild(history);
    // add styles
    historyTextContainer.classList.add("text-sm", "opacity-70");
  });
}
// function for clear history
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
clearHistoryBtn.addEventListener("click", function () {
  histories.innerHTML = "";
});

// set random bg color
const colorWheel = document.getElementById("colorWheel");
colorWheel.addEventListener("click", function () {
  const randomNum = parseInt(Math.random() * 360);
  const hsla = `hsla(${randomNum}, 98%, 60%, 0.2)`;
  document.body.style.backgroundColor = hsla;
});
