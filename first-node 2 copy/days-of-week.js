const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports = {
    weekdays,
    getWeekday
}
// Since we know module.export is an object. We can create properties on it


// Now we want to export a method. .getWeekday and we assign it a function(dayNo)
// We create a conditional.

function getWeekday(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return weekdays[dayNo];
};