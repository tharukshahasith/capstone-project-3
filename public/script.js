var postForm = document.querySelector(".post-add-form");
var addPostBtn = document.querySelector(".post-add-btn");
addPostBtn.addEventListener("click", function() {
    postForm.style.display = "flex";
});
var cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", function() {
    postForm.style.display = "none";
})