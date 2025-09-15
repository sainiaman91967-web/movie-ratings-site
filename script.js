// Star rating system
const stars = document.querySelectorAll('.stars span');
let ratings = [];

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const val = star.getAttribute('data-value');
        highlightStars(val);
    });

    star.addEventListener('mouseout', () => {
        clearHighlight();
    });

    star.addEventListener('click', () => {
        const val = parseInt(star.getAttribute('data-value'));
        ratings.push(val);
        updateAverage();
        selectStars(val);
    });
});

function highlightStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('hover');
        } else {
            star.classList.remove('hover');
        }
    });
}

function clearHighlight() {
    stars.forEach(star => {
        star.classList.remove('hover');
    });
}

function selectStars(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

function updateAverage() {
    const sum = ratings.reduce((a,b) => a + b, 0);
    const avg = (sum / ratings.length).toFixed(1);
    document.getElementById('avgRating').textContent = avg;
}

// Comment system
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');

submitComment.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if(commentText !== "") {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        commentList.prepend(commentDiv);
        commentInput.value = "";
    }
});
