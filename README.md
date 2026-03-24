<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوابة القمة الذكية - Ab Maki</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root { 
            --accent: #00d4ff; 
            --dark: #02060a; 
            --glass: rgba(255, 255, 255, 0.05); 
            --primary-gradient: linear-gradient(45deg, #0b2e46, #1e81b0);
        }
        
        body { 
            margin: 0; background: var(--dark); color: white; 
            font-family: 'Segoe UI', Tahoma, sans-serif; 
            display: flex; justify-content: center; min-height: 100vh; 
            overflow-x: hidden; 
        }

        .bg-matrix { 
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            z-index: -1; opacity: 0.04; font-family: monospace; 
            font-size: 10px; color: var(--accent); word-break: break-all; 
            pointer-events: none; 
        }

        .container { 
            width: 95%; max-width: 700px; background: var(--glass); 
            backdrop-filter: blur(25px); border-radius: 30px; 
            padding: 40px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); 
            box-shadow: 0 20px 50px rgba(0,0,0,0.8); 
        }

        .logo-box { text-align: center; margin-bottom: 25px; }
        .logo-box img { 
            width: 180px; filter: drop-shadow(0 0 15px var(--accent)); 
            animation: float 4s ease-in-out infinite;
        }

        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        h2 { text-align: center; color: var(--accent); margin-bottom: 30px; font-weight: 800; }

        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .full { grid-column: span 2; }
        
        label { display: block; margin: 10px 0 5px; font-size: 13px; color: var(--accent); }
        input, select { 
            width: 100%; padding: 14px; background: rgba(0,0,0,0.5); 
            border: 1px solid #333; border-radius: 12px; color: white; 
            outline: none; transition: 0.3s; box-sizing: border-box;
        }
        input:focus, select:focus { border-color: var(--accent); box-shadow: 0 0 10px rgba(0,212,255,0.2); }

        .hidden { display: none; }

        .teachers-list { 
            display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); 
            gap: 15px; margin-top: 10px; 
        }
        .teacher-card {
            background: rgba(255,255,255,0.05); border-radius: 15px; padding: 10px;
            text-align: center; border: 1px solid transparent; cursor: pointer; transition: 0.3s;
        }
        .teacher-card.selected { border-color: var(--accent); background: rgba(0, 212, 255, 0.1); }
        .teacher-card img { width: 60px; height: 60px; border-radius: 50%; border: 2px solid var(--accent); object-fit: cover; }
        .teacher-card p { font-size: 12px; margin: 5px 0 0; font-weight: bold; }

        .payment-zone { 
            margin-top: 25px; border: 2px dashed var(--accent); border-radius: 15px; 
            padding: 25px; text-align: center; background: rgba(0,212,255,0.02); 
            cursor: pointer; transition: 0.3s;
        }

        .btn-submit { 
            width: 100%; padding: 18px; background: var(--primary-gradient); 
            border: none; border-radius: 15px; color: white; font-size: 18px; 
            font-weight: bold; margin-top: 25px; cursor: pointer; transition: 0.4s; 
        }

        #success-card { display: none; text-align: center; animation: slideUp 0.6s ease; }
        .code-display { 
            background: rgba(255,255,255,0.1); padding: 25px; border-radius: 20px; 
            border: 2px dashed var(--accent); display: flex; align-items: center; 
            justify-content: space-between; margin: 25px 0;
        }
        .final-code-text { font-family: 'Courier New', monospace; font-size: 20px; font-weight: bold; color: var(--accent); }
    </style>
</head>
<body>

<div class="bg-matrix" id="matrix"></div>

<div class="container">
    <div id="form-side">
        <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
        <h2>بوابة القمة التعليمية الذكية 🚀</h2>

        <form id="payForm">
            <div class="grid">
                <div class="full">
                    <label>اسم الطالب بالكامل</label>
                    <input type="text" name="studentName" id="studentName" placeholder="الاسم رباعي" required>
                </div>
                <div>
                    <label>رقم هاتف الطالب</label>
                    <input type="tel" name="phone" id="phone" placeholder="01xxxxxxxxx" required>
                </div>
                <div>
                    <label>نوع التعليم</label>
                    <select id="eduType" name="eduType" required onchange="handleStageChange()">
                        <option value="عام">تربية وتعليم (عام)</option>
                        <option value="أزهر">أزهر شريف</option>
                    </select>
                </div>
                <div class="full">
                    <label>المرحلة الدراسية</label>
                    <select id="stage" name="stage" onchange="handleStageChange()" required>
                        <option value="">-- اختر المرحلة --</option>
                        <option value="kg">حضانة (KG)</option>
                        <option value="primary">ابتدائي</option>
                        <option value="prep">إعدادي</option>
                        <option value="secondary">ثانوي</option>
                    </select>
                </div>

                <div class="full hidden" id="year-box">
                    <label>السنة الدراسية</label>
                    <select id="year" name="year" onchange="handleYearChange()"></select>
                </div>

                <div class="full hidden" id="branch-box">
                    <label>التخصص</label>
                    <select id="branch" name="branch" onchange="handleYearChange()">
                        <option value="عام">عام / مشترك</option>
                        <option value="علمي">علمي</option>
                        <option value="ادبي">أدبي</option>
                    </select>
                </div>

                <div class="full hidden" id="subject-box">
                    <label>المادة</label>
                    <select id="subject" name="subject" onchange="updateTeachers()"></select>
                </div>
            </div>

            <div id="teacher-section" class="hidden">
                <label>المدرسين المتاحين لهذه المادة:</label>
                <div class="teachers-list" id="teachersList"></div>
                <input type="hidden" name="selectedTeacher" id="selectedTeacherInput" required>
            </div>

            <div class="payment-zone" onclick="document.getElementById('payFile').click()">
                <i class="fas fa-camera-retro" style="font-size: 30px; color: var(--accent);"></i>
                <p id="fileText">ارفع سكرينة الدفع هنا</p>
                <input type="file" id="payFile" accept="image/*" hidden required onchange="showFileName()">
            </div>

            <button type="submit" class="btn-submit" id="submitBtn">تجديد الاشتراك واستلام الكود</button>
        </form>
    </div>

    <div id="success-card">
        <h2 style="color: #2ecc71;">تم بنجاح!</h2>
        <p>كود التفعيل الجديد الخاص بك هو:</p>
        <div class="code-display">
            <span class="final-code-text" id="finalCode"></span>
            <button onclick="copyCode()" style="background:var(--accent); border:none; padding:10px; border-radius:8px; cursor:pointer;">نسخ</button>
        </div>
        <button onclick="location.reload()" style="background:none; color:var(--accent); cursor:pointer;">تسجيل مادة أخرى</button>
    </div>
</div>

<script>
    // 1. توليد مصفوفة الرموز الخلفية
    const matrix = document.getElementById('matrix');
    let codes = ""; for(let i=0; i<2500; i++) { codes += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    matrix.innerText = codes;

    // 2. قاعدة بيانات شاملة (مراحل، مواد، مدرسين)
    const data = {
        kg: { years: ["KG 1", "KG 2"], subjects: ["تأسيس عربي", "تأسيس حساب", "English"], teachers: {"تأسيس عربي": [{n: "مس نورا", img: "https://via.placeholder.com/60"}], "English": [{n: "مس سارة", img: "https://via.placeholder.com/60"}]} },
        primary: { years: ["1 ابتدائي", "2 ابتدائي", "3 ابتدائي", "4 ابتدائي", "5 ابتدائي", "6 ابتدائي"], subjects: ["لغة عربية", "رياضيات", "إنجليزي", "علوم"], teachers: {"لغة عربية": [{n: "مستر أحمد", img: "https://via.placeholder.com/60"}], "رياضيات": [{n: "مستر علي", img: "https://via.placeholder.com/60"}, {n: "مستر حسن", img: "https://via.placeholder.com/60"}]} },
        prep: { years: ["1 إعدادي", "2 إعدادي", "3 إعدادي"], subjects: ["لغة عربية", "رياضيات", "إنجليزي", "علوم", "دراسات"], teachers: {"علوم": [{n: "مستر محمد", img: "https://via.placeholder.com/60"}], "رياضيات": [{n: "مستر محمود", img: "https://via.placeholder.com/60"}]} },
        secondary: { 
            years: ["1 ثانوي", "2 ثانوي", "3 ثانوي"], 
            branches: ["عام", "علمي", "ادبي"],
            subjects: {
                "عام": ["لغة عربية", "إنجليزي", "فرنساوي"],
                "علمي": ["فيزياء", "كيمياء", "أحياء", "رياضة"],
                "ادبي": ["تاريخ", "جغرافيا", "فلسفة", "علم نفس"]
            },
            teachers: {
                "فيزياء": [{n: "مستر زويل", img: "https://via.placeholder.com/60"}, {n: "مستر نيوتن", img: "https://via.placeholder.com/60"}],
                "كيمياء": [{n: "مستر مندليف", img: "https://via.placeholder.com/60"}],
                "إنجليزي": [{n: "مستر شاكسبير", img: "https://via.placeholder.com/60"}, {n: "مستر إيهاب", img: "https://via.placeholder.com/60"}]
            }
        }
    };

    function handleStageChange() {
        const stage = document.getElementById('stage').value;
        const yearBox = document.getElementById('year-box');
        const yearSelect = document.getElementById('year');
        
        yearBox.classList.add('hidden');
        document.getElementById('branch-box').classList.add('hidden');
        document.getElementById('subject-box').classList.add('hidden');

        if(stage) {
            yearBox.classList.remove('hidden');
            yearSelect.innerHTML = '<option value="">-- السنة --</option>';
            data[stage].years.forEach(y => yearSelect.innerHTML += `<option value="${y}">${y}</option>`);
        }
    }

    function handleYearChange() {
        const stage = document.getElementById('stage').value;
        const branchBox = document.getElementById('branch-box');
        const subjectBox = document.getElementById('subject-box');
        const subjectSelect = document.getElementById('subject');

        if(stage === 'secondary') branchBox.classList.remove('hidden');
        else branchBox.classList.add('hidden');

        subjectBox.classList.remove('hidden');
        subjectSelect.innerHTML = '<option value="">-- اختر المادة --</option>';
        
        let subs = [];
        if(stage === 'secondary') {
            const branch = document.getElementById('branch').value;
            subs = data.secondary.subjects[branch] || [];
        } else {
            subs = data[stage].subjects;
        }
        subs.forEach(s => subjectSelect.innerHTML += `<option value="${s}">${s}</option>`);
    }

    function updateTeachers() {
        const stage = document.getElementById('stage').value;
        const subject = document.getElementById('subject').value;
        const tSection = document.getElementById('teacher-section');
        const tList = document.getElementById('teachersList');

        tSection.classList.remove('hidden');
        tList.innerHTML = '';

        let teachers = (stage === 'secondary' ? data.secondary.teachers[subject] : data[stage].teachers[subject]) || [{n: "مدرس القمة 1", img: "https://via.placeholder.com/60"}, {n: "مدرس القمة 2", img: "https://via.placeholder.com/60"}];

        teachers.forEach(t => {
            tList.innerHTML += `
                <div class="teacher-card" onclick="selectTeacher(this, '${t.n}')">
                    <img src="${t.img}" alt="">
                    <p>${t.n}</p>
                </div>
            `;
        });
    }

    function selectTeacher(el, name) {
        document.querySelectorAll('.teacher-card').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        document.getElementById('selectedTeacherInput').value = name;
    }

    function showFileName() {
        const file = document.getElementById('payFile').files[0];
        if(file) document.getElementById('fileText').innerText = "تم اختيار: " + file.name;
    }

    document.getElementById('payForm').onsubmit = function(e) {
        e.preventDefault();
        const phone = document.getElementById('phone').value;
        const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        const time = new Date().getTime().toString().slice(-4);
        const code = `QAMMA-${randomStr}-${time}-${phone.slice(-3)}`;

        document.getElementById('finalCode').innerText = code;
        document.getElementById('form-side').style.display = 'none';
        document.getElementById('success-card').style.display = 'block';
    };

    function copyCode() {
        navigator.clipboard.writeText(document.getElementById('finalCode').innerText);
        alert("تم النسخ!");
    }
</script>
<style>
/* تحسينات بصرية */
.teacher-card:hover {
    transform: scale(1.08);
    box-shadow: 0 0 15px rgba(0,212,255,0.4);
}

.btn-submit:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(0,212,255,0.5);
}

input:invalid {
    border-color: #e74c3c;
}

.glow {
    animation: glowPulse 1.5s infinite alternate;
}

@keyframes glowPulse {
    from { box-shadow: 0 0 5px var(--accent); }
    to { box-shadow: 0 0 20px var(--accent); }
}

/* صورة المعاينة */
.preview-img {
    margin-top: 10px;
    max-width: 100%;
    border-radius: 10px;
    display: none;
}
</style>

<script>
// 🔥 حفظ البيانات تلقائي
const inputs = document.querySelectorAll("input, select");
inputs.forEach(input => {
    input.addEventListener("change", () => {
        localStorage.setItem(input.id, input.value);
    });

    // تحميل البيانات
    if(localStorage.getItem(input.id)) {
        input.value = localStorage.getItem(input.id);
    }
});

// 🔥 تحسين زر الإرسال (Loading)
document.getElementById('payForm').addEventListener('submit', function() {
    const btn = document.getElementById('submitBtn');
    btn.innerText = "جاري المعالجة...";
    btn.disabled = true;
});

// 🔥 Preview للصورة
const payFile = document.getElementById("payFile");
const preview = document.createElement("img");
preview.className = "preview-img";
document.querySelector(".payment-zone").appendChild(preview);

payFile.addEventListener("change", function() {
    const file = this.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// 🔥 تحسين اختيار المدرس بصوت (اختياري)
function playClick() {
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
    audio.play();
}

const oldSelectTeacher = selectTeacher;
selectTeacher = function(el, name) {
    playClick();
    oldSelectTeacher(el, name);
};

// 🔥 Validation أقوى
document.getElementById("payForm").addEventListener("submit", function(e){
    const phone = document.getElementById("phone").value;
    if(!/^01[0-9]{9}$/.test(phone)){
        alert("رقم الهاتف غير صحيح!");
        e.preventDefault();
        return;
    }
});

// 🔥 تأثير دخول الصفحة
document.querySelector(".container").style.opacity = 0;
setTimeout(()=>{
    document.querySelector(".container").style.transition = "1s";
    document.querySelector(".container").style.opacity = 1;
},200);

// 🔥 زر النسخ محسّن
const oldCopy = copyCode;
copyCode = function() {
    oldCopy();
    const btns = document.querySelectorAll("button");
    btns.forEach(b=>{
        if(b.innerText === "نسخ"){
            b.innerText = "✔ تم النسخ";
            setTimeout(()=> b.innerText = "نسخ",2000);
        }
    });
};
</script>
</body>
</html>
