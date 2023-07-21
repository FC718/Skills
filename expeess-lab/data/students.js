const students = [
    {student: 'James Monroe', pass: true},
    {student: 'Alex Whitley', pass: false},
    {student: 'Maria Santos', pass: true}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };