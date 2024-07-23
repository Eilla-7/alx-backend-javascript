const fs = require('fs');

function countStudents (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header line

      const fieldCounts = {};
      const fieldStudents = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');

        if (field) {
          if (!fieldCounts[field]) {
            fieldCounts[field] = 0;
            fieldStudents[field] = [];
          }
          fieldCounts[field] += 1;
          fieldStudents[field].push(firstname);
        }
      });

      console.log(`Number of students: ${students.length}`);

      Object.keys(fieldCounts).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}`
        );
      });

      resolve();
    });
  });
}

module.exports = countStudents;
