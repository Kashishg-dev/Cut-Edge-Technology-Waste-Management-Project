document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            faqItem.classList.toggle('open');
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.add('hidden');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                document.querySelectorAll('.faq-item.open').forEach(openItem => {
                    if (openItem !== faqItem) {
                        openItem.classList.remove('open');
                        openItem.querySelector('.faq-answer').style.maxHeight = null;
                        openItem.querySelector('.faq-answer').classList.add('hidden');
                        openItem.querySelector('i').classList.remove('fa-chevron-up');
                        openItem.querySelector('i').classList.add('fa-chevron-down');
                    }
                });
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.remove('hidden');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    const firstFaqAnswer = document.querySelector('.faq-item.open .faq-answer');
    if (firstFaqAnswer) {
         firstFaqAnswer.style.maxHeight = firstFaqAnswer.scrollHeight + "px";
         firstFaqAnswer.classList.remove('hidden');
    }

    // Testimonial Slider Functionality
    const wrapper = document.querySelector('.testimonial-cards-wrapper');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardsToShow = 2;
    let currentIndex = 0;
    function updateSlider() {
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + cardsToShow) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= cards.length - cardsToShow;
    }
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateSlider();
        }
    });
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - cardsToShow) {
            currentIndex += 1;
            updateSlider();
        }
    });
    updateSlider();

    // 'Let's Connect' Button ID
    
});