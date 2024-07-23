const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line);

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const rows = lines.slice(1);
    const fields = {};

    let numberOfStudents = 0;
    for (const row of rows) {
      const [firstName, , , field] = row.split(',');
      if (firstName && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        numberOfStudents++;
      }
    }

    console.log(`Number of students: ${numberOfStudents}`);
    for (const [field, studentList] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
