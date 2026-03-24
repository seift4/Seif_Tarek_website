
const navLinks = document.querySelectorAll(".nav ul a");
const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute("href");
    return document.querySelector(id);
}).filter(section => section !== null); // عشان ميعملش ايرور لو سكشن مش موجود

const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px', // تعديل الهامش عشان يحس بالسكشن أسرع
    threshold: 0 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.nav ul a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});












const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

reveals.forEach(el => {

const windowHeight = window.innerHeight;

const elementTop = el.getBoundingClientRect().top;

const elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {

el.classList.add("active");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();






window.addEventListener('scroll', function() {
    const video = document.querySelector('.bottom video');
    if (!video) return;

    const scrollValue = window.scrollY;
    const winWidth = window.innerWidth;
    const isMobile = winWidth < 768;

    // القيم الابتدائية
    const startWidth = isMobile ? winWidth * 0.8 : 400;
    const startHeight = isMobile ? 20 : 30; // vh

    if (scrollValue > 50) { 
        if (!video.classList.contains('img-fixed')) {
            video.classList.add('img-fixed');
            // منع السكرول العرضي أو المشاكل البصرية وقت التكبير
            document.body.style.overflowX = 'hidden'; 
        }
        
        // حساب الزيادة تدريجياً
        let newWidth = startWidth + (scrollValue * 1.5); 
        let newHeight = startHeight + (scrollValue * 0.1); 

        const maxWidth = winWidth * 0.97;
        const maxHeight = 90; 

        if (newWidth > maxWidth) newWidth = maxWidth;
        if (newHeight > maxHeight) newHeight = maxHeight;

        video.style.width = newWidth + 'px';
        video.style.height = newHeight + 'vh';

        // تنسيق الحواف (Border Radius)
        if (newWidth > (maxWidth * 0.8)) {
            video.style.borderRadius = isMobile ? '20px' : '40px'; 
            video.style.padding = '0px';      
            video.style.border = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
            video.style.borderRadius = '25px'; 
            video.style.padding = '10px';
            video.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        }
    } else {
        video.classList.remove('img-fixed');
        // إرجاع الـ overflow لطبيعته لما الفيديو يرجع لمكانه
        document.body.style.overflowX = 'auto'; 
        
        video.style.width = startWidth + 'px';
        video.style.height = startHeight + 'vh';
        video.style.borderRadius = '25px';
        video.style.padding = '10px';
    }
});





















const videoEle = document.querySelector('#seif');

if (videoEle) {

videoEle.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-photo'));

videoEle.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-photo'));

}









const videoE = document.querySelector('#Model');

if (videoE) {

videoE.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-video'));

videoE.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-video'));

}

















gsap.registerPlugin(ScrollTrigger);

// 1. بنحدد كل العناصر اللي عايزين نطبق عليها الأنميشن
const elements = document.querySelectorAll(".p");

elements.forEach((el) => {
  gsap.to(el, {
    backgroundSize: "100% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: el,      // هنا الـ trigger هو العنصر نفسه
      start: "top 90%",
      end: "top 40%",
      scrub: true,
      onUpdate: (self) => {
        // تحديث الـ Stroke للعنصر اللي بيتحرك حالياً فقط
        let progress = self.progress;
        el.style.webkitTextStrokeColor = progress > 0.8 ? "transparent" : "#555";
      }
    }
  });
});



















// 2. الكرسر المخصص (Custom Cursor)

const cursorDot = document.querySelector(".cursor-dot");

if (cursorDot) {

window.addEventListener("mousemove", (e) => {

cursorDot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;

});



const interactives = document.querySelectorAll('button, .a, li, h1, h2, span, img, p, h2, .dv, video, .nav-link');

interactives.forEach(el => {

el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-active'));

el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-active'));

});

}



const videoElement = document.querySelector('#myModel');
const cursorD = document.querySelector('.cursor-dot');

if (videoElement) {
    videoElement.addEventListener('mouseenter', () => {
        cursorD.classList.add('cursor-logo');
        updateCursorIcon(); // نحدث الأيقونة فور الدخول
    });

    videoElement.addEventListener('mouseleave', () => {
        cursorD.classList.remove('cursor-logo');
    });

    videoElement.addEventListener('click', () => {
        videoElement.muted = !videoElement.muted;
        updateCursorIcon();
    });
}

// وظيفة لتحديث الأيقونة داخل الكرسر
function updateCursorIcon() {
    if (videoElement.muted) {
        // لو الفيديو صامت، نظهر أيقونة تشغيل الصوت
        cursorD.style.setProperty('--cursor-icon', '"volume_down"');
    } else {
        // لو الصوت شغال، نظهر أيقونة كتم الصوت
        cursorD.style.setProperty('--cursor-icon', '"no_sound"');
    }
}

// 3. تأثير الـ 3D Card

const cards = document.querySelectorAll('.pr');

cards.forEach(card => {

card.addEventListener('mousemove', (e) => {

const { width, height, left, top } = card.getBoundingClientRect();

const centerX = left + width / 2;

const centerY = top + height / 2;

const rotateX = (-(e.clientY - centerY) / (height / 2)) * 25;

const rotateY = ((e.clientX - centerX) / (width / 2)) * 15;

card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener('mouseleave', () => {

card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;

});

});




// 6. شاشة التحميل (Loader)

const loader = document.getElementById("loader");

if (loader) {

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => loader.style.display = "none", 500);

}, 1000);

});

}



// 5. الـ Marquee

const marqueeTrack = document.querySelector('.marquee-track');

if (marqueeTrack) {

const content = marqueeTrack.innerHTML;

marqueeTrack.innerHTML += content;

let scrollX = 0;

const animate = () => {

scrollX -= 0.5;

if (Math.abs(scrollX) >= marqueeTrack.scrollWidth / 2) scrollX = 0;

marqueeTrack.style.transform = `translateX(${scrollX}px)`;

requestAnimationFrame(animate);

};

animate();

}



// 9. vid--> view (الكرسر المخصص للفيديو)

const video1 = document.querySelector('.r1');

if (video1) {

video1.addEventListener
('mouseenter', () => cursorDot.classList.add('cursor-r1'));

video1.addEventListener
('mouseleave', () => cursorDot.classList.remove('cursor-r1'));

}
// 9. vid--> view (الكرسر المخصص للفيديو)

const video2 = document.querySelector('.r2');

if (video2) {

video2.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-r2'));

video2.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-r2'));

}
// الفيديو الثالث
const video3 = document.querySelector('.r3');
if (video3) {
    video3.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-r3'));
    video3.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-r3'));
}

// الفيديو الرابع
const video4 = document.querySelector('.r4');
if (video4) {
    video4.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-r4'));
    video4.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-r4'));
}
// الفيديو خامس
const video5 = document.querySelector('.r5');
if (video5) {
    video5.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-r5'));
    video5.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-r5'));
}

















  const videos = document.querySelectorAll('.img video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.pause();  // يوقف الفيديو لما الماوس يدخل
    });
    video.addEventListener('mouseleave', () => {
      video.play();   // يرجع الفيديو يشتغل لما الماوس يخرج
    });
  });









  function updateTime() {
  const now = new Date();

  const timeString = now.toLocaleTimeString("en-GB", {
    timeZone: "Africa/Cairo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById("time").textContent = timeString;
}

// تحديث كل ثانية
setInterval(updateTime, 1000);

// تشغيل أول مرة فورًا
updateTime();





































const modelViewer = document.querySelector('#Model');

modelViewer.addEventListener('load', async () => {
    // 1. الوصول للمادة (Material)
    const material = modelViewer.model.materials[0];
    if (!material) return;

    // 2. إنشاء الكانفاس والـ Gradient
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#0059ff');
    gradient.addColorStop(0.3, '#54B6F5');
    gradient.addColorStop(0.6, '#D6E6F2');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    try {
        // 3. تحويل الكانفاس لـ Texture
        // استخدم toDataURL أو createObjectURL
        const texture = await modelViewer.createTexture(canvas.toDataURL("image/png"));

        // 4. الحل السحري: التأكد من وجود الخصائص قبل التعديل عليها
        const pbr = material.pbrMetallicRoughness;

        if (pbr.baseColorTexture) {
            // لو الموديل فيه Texture أصلاً
            pbr.baseColorTexture.setTexture(texture);
        } else {
            // لو الموديل "سادة" (خامة فقط)، نستخدم هذه الدالة لإجبار المتصفح على إضافة Texture
            await pbr.baseColorTexture.setTexture(texture);
        }

        // 5. تصفير العوامل لضمان ظهور الـ Gradient بوضوح
        pbr.setBaseColorFactor([1, 1, 1, 1]);
        
        // إذا كنت تريد الموديل شفاف قليلاً أو ناعم
        material.setAlphaMode("BLEND");

    } catch (error) {
        console.error("لم يتم تطبيق الـ Gradient:", error);
    }
});