// Modal Logic สำหรับ card
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.text-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const imgSrc = card.getAttribute('data-img');
    const textDetail = card.getAttribute('data-detail');
    
    if(imgSrc){
      modalImg.src = imgSrc;
      modalImg.style.display = "block";
      modalText.style.display = "none";
    } else if(textDetail){
      modalText.textContent = textDetail;
      modalText.style.display = "block";
      modalImg.style.display = "none";
    }
    
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click',()=>{
  modal.style.display='none';
  modalImg.src = "";
});

window.addEventListener('click',e=>{
  if(e.target===modal) modal.style.display='none';
});
