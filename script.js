document.addEventListener("DOMContentLoaded", function () {
  const startersButton = document.getElementById("starters-button");
  const mainCourseButton = document.getElementById("main-course-button");
  const dessertsButton = document.getElementById("desserts-button");

  const startersSection = document.getElementById("starters");
  const mainCourseSection = document.getElementById("main-course");
  const dessertsSection = document.getElementById("desserts");


  startersSection.classList.add("active");

  startersButton.addEventListener("click", function () {
      // Starters section
      startersSection.classList.add("active");
      mainCourseSection.classList.remove("active");
      dessertsSection.classList.remove("active");
  });

  mainCourseButton.addEventListener("click", function () {
      // Main course section
      startersSection.classList.remove("active");
      mainCourseSection.classList.add("active");
      dessertsSection.classList.remove("active");
  });

  dessertsButton.addEventListener("click", function () {
      // Desserts section
      startersSection.classList.remove("active");
      mainCourseSection.classList.remove("active");
      dessertsSection.classList.add("active");
  });
});
