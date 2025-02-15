document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});

let isLiked = false;
let likeCount = 10;

function toggleLike() {
    let button = document.getElementById("likeBtn");
    let countDisplay = document.getElementById("likeCount");

    if (!isLiked) {
        likeCount++;
        button.classList.add("liked");
    } else {
        likeCount--;
        button.classList.remove("liked");
    }

    countDisplay.textContent = " "+ likeCount;
    isLiked = !isLiked;
}
// this is the chat box js
document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const chatToggleBtn = document.getElementById("chat-toggle"); // Chat button
    const overlay = document.getElementById("chat-overlay"); // Background overlay

    // Function to open chat box
    function openChatBox() {
        chatBox.classList.add("open");
        chatBox.style.display = "block";
        overlay.classList.add("active"); // Show background overlay
    }

    // Function to close chat box
    function closeChatBox() {
        chatBox.classList.remove("open");
        chatBox.style.display = "none";
        overlay.classList.remove("active"); // Hide background overlay
    }

    // Toggle chat box when clicking the button
    chatToggleBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate close
        if (chatBox.classList.contains("open")) {
            closeChatBox();
        } else {
            openChatBox();
        }
    });

    // Close chat when clicking outside the chat box
    document.addEventListener("click", function (event) {
        if (chatBox.classList.contains("open") && !chatBox.contains(event.target) && event.target !== chatToggleBtn) {
            closeChatBox();
        }
    });

    // Prevent clicks inside the chat box from closing it
    chatBox.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("noti-box");
    const chatToggleBtn = document.getElementById("noti-toggle"); // Chat button
    const overlay = document.getElementById("noti-overlay"); // Background overlay

    // Function to open chat box
    function openChatBox() {
        chatBox.classList.add("open");
        chatBox.style.display = "block";
        overlay.classList.add("active"); // Show background overlay
    }

    // Function to close chat box
    function closeChatBox() {
        chatBox.classList.remove("open");
        chatBox.style.display = "none";
        overlay.classList.remove("active"); // Hide background overlay
    }

    // Toggle chat box when clicking the button
    chatToggleBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent immediate close
        if (chatBox.classList.contains("open")) {
            closeChatBox();
        } else {
            openChatBox();
        }
    });

    // Close chat when clicking outside the chat box
    document.addEventListener("click", function (event) {
        if (chatBox.classList.contains("open") && !chatBox.contains(event.target) && event.target !== chatToggleBtn) {
            closeChatBox();
        }
    });

    // Prevent clicks inside the chat box from closing it
    chatBox.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});