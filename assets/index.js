const form = document.getElementById('form');
const chapterSelect = document.getElementById('chapter');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const statement = document.getElementById('statement').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = document.getElementById('correctOption').value;
    const explanation = document.getElementById('explanation').value;
    const difficultyLevel = document.getElementById('difficultyLevel').value;
    const subject = document.getElementById('subject').value;
    const selectedChapter = chapterSelect.value;

    const flag = () => {
        if (statement && option1 && option2 && option3 && option4 && correctOption && explanation && difficultyLevel && subject && selectedChapter) {
            if (
                (correctOption === option1 ||
                    correctOption === option2 ||
                    correctOption === option3 ||
                    correctOption === option4)
                && (option1 !== option2 && option1 !== option3 && option1 !== option4 &&
                    option2 !== option3 && option2 !== option4 && option3 !== option4)
            ) {
                return true;
            } else {
                alert("Correct Option is not matching to options or option are same.");
            }
        } else {
            alert("Form is Incomplete.");
        }
        return false;
    };

    if (flag()) {
        const question = {
            statement,
            options: [option1, option2, option3, option4],
            correctOption,
            explanation,
            difficultyLevel,
            subject,
            chapter: selectedChapter
        };

        try {
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(question),
            });

            if (response.ok) {
                alert('Question submitted successfully!');
                form.reset();
            } else {
                alert('Error submitting the question. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('An unexpected error occurred. Please try again later.');
        }
    }
});

const allChapters = [
    "Unit and Measurement",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy and Power",
    "Rotational Motion",
    "Gravitation",
    "Properties of Solids and Liquids",
    "Thermodynamics",
    "Kinetic Theory of Gases",
    "Oscillations and Waves",
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current and Magnetism",
    "Electromagnetic Induction and Alternating Current",
    "Electromagnetic Waves",
    "Optics",
    "Dual Nature of Matter and Radiation",
    "Atoms and Nuclei",
    "Electronic Devices",
    "Communication Systems",
    "Experimental Skills",
];


function populateChapterOptions() {

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select a chapter';
    chapterSelect.appendChild(defaultOption);

    allChapters.forEach((chapter) => {
        const option = document.createElement('option');
        option.value = chapter;
        option.text = chapter;
        chapterSelect.appendChild(option);
    });
}

window.addEventListener('load', populateChapterOptions);

