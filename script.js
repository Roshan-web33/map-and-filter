
const searchInput = document.querySelector(".input");
const students = document.querySelectorAll(".student");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  students.forEach(student => {
    const name = student.querySelector("h5").innerText.toLowerCase();

    if (name.includes(value)) {
      student.style.display = "block"; // show
    } else {
      student.style.display = "none"; // hide
    }
  });
});

