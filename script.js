// بنختار العناصر اللي هنتعامل معاها
const colorBtns = document.querySelectorAll('.colors span');
const shoeImg = document.getElementById('shoe');
const root = document.querySelector(':root');

colorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 1. شيل كلاس active من القديم وحطه للجديد
        document.querySelector('.colors .active').classList.remove('active');
        e.target.classList.add('active');

        // 2. هات الداتا من الزرار (اللون والصورة)
        const newColor = e.target.getAttribute('data-color');
        const newImgSrc = e.target.getAttribute('data-img');

        // 3. غير الثيم (CSS Variable)
        // دي أهم حركة: بنكلم الـ CSS ونغير قيمة المتغير
        root.style.setProperty('--theme', newColor);

        // 4. غير الصورة بتأثير (Fade Out -> Change -> Fade In)
        shoeImg.style.opacity = "0";
        shoeImg.style.transform = "rotate(-25deg) scale(0.8)"; // تصغر شوية وهي بتختفي
        
        setTimeout(() => {
            shoeImg.src = newImgSrc;
            shoeImg.style.opacity = "1";
            shoeImg.style.transform = "rotate(-25deg) scale(1)"; // ترجع طبيعية
        }, 300); // استنى 300 مللي ثانية (نفس مدة الـ transition في الـ CSS لو ضفناها)
    });
});
const preloadImages = [
    "images/bluee.webp",
    "images/black.webp",
    "images/orange.webp",
    "images/green.webp",
    "images/yello.webp"
];

// دالة بتلف عليهم وتحملهم في الخلفية
preloadImages.forEach((src) => {
    const img = new Image();
    img.src = src;
});
