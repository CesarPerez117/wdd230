
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
const getLastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${getLastModified}`; 