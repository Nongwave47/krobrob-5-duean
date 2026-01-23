const envelope = document.getElementById('envelope');
const headerText = document.getElementById('headerText'); // เพิ่มส่วนนี้
const lines = document.querySelectorAll('.letter-content p');
const btn = document.querySelector('.btn');
const openSound = document.getElementById('openSound');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  if (headerText) headerText.style.opacity = '0'; // ซ่อนหัวข้อเมื่อเปิด
  
  if (openSound) {
    openSound.play().catch(e => console.log("Sound play prevented")); // กัน Error กรณีเบราว์เซอร์บล็อกเสียง
  }

  // แสดงข้อความทีละบรรทัด
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add('show');
      // แสดงปุ่มเมื่อถึงบรรทัดสุดท้าย
      if (i === lines.length - 1) {
        setTimeout(() => btn.classList.add('show'), 500);
      }
    }, (i + 1) * 800); // ปรับเวลาให้ค่อยๆ ขึ้นดูละมุนขึ้น
  });
});