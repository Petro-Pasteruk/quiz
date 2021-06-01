document.querySelectorAll(".quiz__answer").forEach(item => {
    item.addEventListener("click", function () {
        item.querySelector(".quiz__checkbox").click();
    });
});

document.querySelector(".quiz__next-btn").addEventListener("click", function () {
    document.querySelectorAll(".quiz__checkbox").forEach(item => {
        if (item.checked) {
            if (item.value === "HyperText Markup Language") {
                document.querySelector(".quiz-one").classList.add("hidden");
                document.querySelector(".correct-answer").classList.remove("hidden");
                setTimeout(() => {
                    document.querySelector(".correct-answer").classList.add("hidden");
                }, 1500);
                document.querySelector(".main-window").classList.remove("hidden");
            } else {
                document.querySelector(".quiz-one").classList.add("hidden");
                document.querySelector(".wrong-answer").classList.remove("hidden");
                document.querySelector(".wrong-answer").querySelector(".container").textContent = "HyperText Markup Language";
                setTimeout(() => {
                    document.querySelector(".wrong-answer").classList.add("hidden");
                }, 1500);
                document.querySelector(".main-window").classList.remove("hidden");
            }
        }
    });
});

document.querySelectorAll(".main-window__button").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelector(".main-window").classList.add("hidden");
        document.querySelector(".quiz-one").classList.remove("hidden");
    });
});