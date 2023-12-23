import { Router } from "express";
import { readFile, writeFile, access, mkdir } from 'fs/promises';

const router = Router()

router.post('/submit-form', async (req, res) => {
    const formData = req.body;
    const { statement, options, correctOption, explanation, difficultyLevel, subject, chapter } = formData;

    try {
        if (options && correctOption && explanation && difficultyLevel && subject && chapter && statement) {

            const result = await saveDataToJson(formData)

            if (result instanceof Error) {
                throw Error(result.message)
            } else {
                res.send('Form submitted successfully!');
            }
        }
        else {
            throw Error("Data is not correct or empty.")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

});

async function saveDataToJson(formData) {
    try {
        const folderPath = '../QuestionBank';
        const filePath = `${folderPath}/${formData.subject}.json`;

        try {
            await access(folderPath);
        } catch (err) {
            if (err.code === 'ENOENT') {
                await mkdir(folderPath, { recursive: true });
            } else {
                throw err;
            }
        }

        try {
            await access(filePath);
        } catch (err) {
            if (err.code === 'ENOENT') {
                await writeFile(filePath, '[]');
            } else {
                throw err;
            }
        }

        const existingData = await readFile(filePath, 'utf8');
        const jsonDataArray = JSON.parse(existingData);
        jsonDataArray.push(formData);
        const updatedJsonData = JSON.stringify(jsonDataArray);
        await writeFile(filePath, updatedJsonData);
        console.log('Data appended to question.json');
    } catch (error) {
        console.error('Error reading or writing to JSON file:', error);
        return error;
    }
}

export default router;
