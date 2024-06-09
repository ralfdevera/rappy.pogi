// Select all like and dislike buttons
const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');
const submitCommentButtons = document.querySelectorAll('[id^="submitComment"]');

likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const countElement = document.getElementById(`countLike${index + 1}`);
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
    });
});

dislikeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const countElement = document.getElementById(`countDislike${index + 1}`);
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
    });
});

submitCommentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const commentInput = document.getElementById(`comment${index + 1}`);
        const commentSection = document.getElementById(`commentSection${index + 1}`);
        
        const comment = commentInput.value;
        
        // Check if the comment is not empty
        if (comment.trim() !== "") {
            const newComment = document.createElement("div");
            newComment.textContent = comment;
            commentSection.appendChild(newComment);
            
            // Clear the input field after saving the comment
            commentInput.value = "";
        }
    });
});
