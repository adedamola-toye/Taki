'Use strict mode';

const modalStart = document.querySelector('.startModal');
const overlay = document.querySelector('.modal-overlay1');
const modalContent =  document.querySelector('.modal-content1');
const closeModal = document.querySelector('.p1');
const register = document.querySelector('link');

const closeModalAction = function(){
    overlay.classList.add('hidden');
    modalContent.classList.add('hidden');
    document.querySelector('body').style.overflowY ='';
};

modalStart.addEventListener('click', function(){
    overlay.classList.remove('hidden');
    modalContent.classList.remove('hidden');
    document.querySelector('body').style.overflowY ='hidden';
});

closeModal.addEventListener('click', closeModalAction);

overlay.addEventListener('click', closeModalAction);

register.addEventListener('click',function(){
    console.log('redd')
})