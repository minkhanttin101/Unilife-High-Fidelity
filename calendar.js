let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation span");
const eventBox = document.querySelector(".calendar-events"); // Select event box

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Object storing events for each month
const events = {
    0: ["Jan 1 - Solemnity of  Mary, The Holy Mother of God","Jan 1 - New Year day, Holiday (No Classes)", "Jan 3 - Last day of classes before midterm exam", "Jan 6 -Midterm examination (till Jan 14/2025)", "Jan 15 - Classes Resume"],
    1: ["Feb 3 - Mid-term Examination (till February 4, 2025)", "Feb 5 - Classes Resume", "Feb 12 - Makha Bucha Day (Holiday - no classes)", "Feb 21 - Last day to withdraw with 'W'", "Feb 28 - Last day of classes before Final Examination"],
    2: ["Mar 3 - Final Examination (till March 17, 2025)", "Mar 19 - St.Joseph, spouse of the blessed virgin Mary", "Mar 31 - Semester Ends","Semester 2/2024 Grade Release"],
    3: ["Apr 3 - Last day for late registration and adding classes, last day to withdraw without record and to have 50% of tuition fees refunded","Apr 6 - Chakri Memorial Day (Holiday - no classes)","Apr 7 - Substitution for Chakri Memorial Day (Holiday - no classes)","8 Retrieve and download registered student name list","Apr 8 - Exam Time/Campus conflict petition deadline","Apr 11 - Submission of Mid-term Examination Papers","Apr 13 - Songkran Festival (till April 16, 2025), (Holiday - no classes)","Apr 24 - Mid-term Examination (till April 25, 2025)","Apr 28 - Classes resume"],
    4: ["May 1 - Submission of Final Examination Papers", "May 4 - Coronation Day (Holiday - no classes)","May 5 - Substitution for Coronation Day (Holiday - no classes)","May 6 - Last day to withdraw with 'W'","May 9 - Retrieve and download registered student namelists via internet for eGrading and Last day of classes before Final Examination","May 11 - Visakha Bucha Day (Holiday - no classes)","May 12 - Su bstitution for Visakha Bucha Day (Holiday - no classes)","May 13 - Final Examination (till May 15, 2025)","May 31 - Summer 2024 Session and Academic Year 2024 ends"],
    5: ["🎓 Graduation Day - Jun 25"],
    6: ["🎆 Independence Day - Jul 4"],
    7: ["🏖️ Summer Vacation - Aug 1 to 30"],
    8: ["🍁 Fall Semester Begins - Sep 5"],
    9: ["🎃 Halloween - Oct 31"],
    10: ["🦃 Thanksgiving - Nov 23"],
    11: ["🎄 Christmas Break - Dec 24"]
};

// Function to generate the calendar
const manipulate = () => {
    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();
    let lit = "";

    for (let i = dayone; i > 0; i--) {
        lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`;
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;

    updateEvents(); // Update events for the current month
};

// Function to update event box
const updateEvents = () => {
    let eventList = events[month] || ["No events this month"];
    eventBox.innerHTML = `<h3> Events</h3><ul>` +
        eventList.map(event => `<li>${event}</li>`).join("") + `</ul>`;
};

manipulate();

prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }

        manipulate();
    });
});