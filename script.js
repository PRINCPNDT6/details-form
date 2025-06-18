const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// हैम्बर्गर बटन पर क्लिक करने पर साइडबार टॉगल करें
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
