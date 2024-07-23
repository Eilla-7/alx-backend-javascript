const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) throw new Error('Cannot load the database');

    const students = lines.slice(1).map(line => line.split(',')).filter(fields => fields.length === 4);
    if (students.length === 0) throw new Error('Cannot load the database');

    const fields = {};

    students.forEach(student => {
      const [firstname, , , field] = student;

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
