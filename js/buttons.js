

function toggleVisible(divId) {
    var contactDiv = document.getElementById(divId);
    if (contactDiv.style.display === "none") {
        contactDiv.style.display = "block";
    } else {
        contactDiv.style.display = "none";
    }
}