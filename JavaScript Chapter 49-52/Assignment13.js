//Question 1
const signupForm = document.getElementById("signupForm");
const formDataDiv = document.getElementById("formData");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const formData = new FormData(signupForm);
    const formDataEntries = Array.from(formData.entries());

    let output = "<h2>Form Data:</h2>";
    formDataEntries.forEach(([key, value]) => {
        output += <p>${key}: ${value}</p>;
    });

    formDataDiv.innerHTML = output;
});

//Question 2
const contentDiv = document.querySelector('.content');
const readMoreButton = document.querySelector('.read-more-button');
const additionalText = "Artificial intelligence is already making a significant impact on various industries. In healthcare, AI is being used to diagnose diseases, develop new treatments, and personalize patient care. In finance, AI-powered algorithms are used for fraud detection, risk assessment, and algorithmic trading. In transportation, autonomous vehicles are being developed to improve safety and efficiency. As AI continues to advance, it raises important ethical questions. Concerns include job displacement, privacy violations, and the potential for AI to be used for harmful purposes. Ensuring that AI is developed and used responsibly is crucial to mitigating these risks. The future of AI is promising, but it also presents challenges. As AI becomes more sophisticated, it is likely to have a profound impact on society. It is essential to carefully consider the potential benefits and drawbacks of AI and to develop ethical guidelines for its development and use";

readMoreButton.addEventListener('click', () => {
  contentDiv.style.maxHeight = 'none';
  contentDiv.innerHTML += additionalText;
  readMoreButton.style.display = 'none';
});



// Question # 3:
const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('tableBody');
const editForm = document.getElementById('editForm');
const editIndex = document.getElementById('editIndex');
const editName = document.getElementById('editName');
const editAge = document.getElementById('editAge');
const editGrade = document.getElementById('editGrade');
const cancelEditBtn = document.getElementById('cancelEditBtn');
let students = [];

studentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    students.push({ name, age, grade });
    renderTable();
    studentForm.reset(); 
});

function renderTable() {
    studentTable.innerHTML = ''; 

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTable.appendChild(row);
    });
}
function deleteStudent(index) {
    students.splice(index, 1); 
    renderTable();
}

function editStudent(index) {
    const student = students[index];

    editIndex.value = index;
    editName.value = student.name;
    editAge.value = student.age;
    editGrade.value = student.grade;

    editForm.style.display = 'block';
}

editForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const index = editIndex.value;
    const name = editName.value;
    const age = editAge.value;
    const grade = editGrade.value;

    students[index] = { name, age, grade };
    renderTable();
    editForm.style.display = 'none'; 
});

cancelEditBtn.addEventListener('click', function () {
    editForm.style.display = 'none'; 
});
