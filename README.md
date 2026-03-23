<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة القمة التعليمية الشاملة</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root { --accent: #00d4ff; --dark: #050a0f; --glass: rgba(255, 255, 255, 0.08); }
        body { margin: 0; background: var(--dark); color: white; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; min-height: 100vh; overflow-x: hidden; }
        
        /* أكواد التحقق الخلفية (الـ 1000 كود) */
        .bg-matrix { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.04; font-family: monospace; font-size: 10px; color: var(--accent); word-break: break-all; pointer-events: none; }

        .form-card { width: 95%; max-width: 700px; background: var(--glass); backdrop-filter: blur(25px); border-radius: 30px; padding: 40px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 0 40px rgba(0,0,0,0.7); }
        .logo-box { text-align: center; margin-bottom: 20px; }
        .logo-box img { width: 150px; filter: drop-shadow(0 0 10px var(--accent)); }

        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .full { grid-column: span 2; }
        
        label { display: block; margin: 10px 0 5px; font-size: 14px; color: var(--accent); }
        select, input { width: 100%; padding: 12px; background: rgba(0,0,0,0.4); border: 1px solid #333; border-radius: 12px; color: white; outline: none; transition: 0.3s; }
        select:focus, input:focus { border-color: var(--accent); box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }

        .hidden { display: none; }

        .payment-zone { margin-top: 25px; border: 2px dashed var(--accent); border-radius: 15px; padding: 20px; text-align: center; background: rgba(0,212,255,0.02); cursor: pointer; }
        .btn-submit { width: 100%; padding: 16px; background: linear-gradient(45deg, #0b2e46, #1e81b0); border: none; border-radius: 15px; color: white; font-size: 18px; font-weight: bold; margin-top: 25px; cursor: pointer; transition: 0.4s; }
        .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 10px 30px var(--accent); letter-spacing: 1px; }
    </style>
</head>
<body>

<div class="bg-matrix" id="matrix"></div>

<div class="form-card">
    <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
    <h2 style="text-align: center;">تسجيل بيانات "القمة" 🚀</h2>

    <form id="megaForm">
        <div class="grid">
            <input type="text" placeholder="اسم الطالب" class="full" required>
            <input type="tel" placeholder="رقم الطالب" required>
            <input type="tel" placeholder="رقم ولي الأمر" required>
            <input type="email" placeholder="الجيميل (Gmail)" class="full" required>

            <div class="full">
                <label>المرحلة الدراسية</label>
                <select id="stage" onchange="handleStageChange()" required>
                    <option value="">-- اختر المرحلة --</option>
                    <option value="kg">رياض أطفال (حضانة)</option>
                    <option value="primary">ابتدائي</option>
                    <option value="prep">إعدادي</option>
                    <option value="secondary">ثانوي</option>
                </select>
            </div>

            <div class="full hidden" id="year-box">
                <label>السنة الدراسية</label>
                <select id="year" onchange="handleYearChange()"></select>
            </div>

            <div class="full hidden" id="branch-box">
                <label>القسم</label>
                <select id="branch" onchange="handleYearChange()">
                    <option value="عام">عام / تأسيس</option>
                    <option value="علمي">علمي</option>
                    <option value="ادبي">أدبي</option>
                </select>
            </div>

            <div class="full hidden" id="subject-box">
                <label>المادة</label>
                <select id="subject" onchange="updateTeachers()"></select>
            </div>

            <div class="full hidden" id="teacher-box">
                <label>المدرس المتاح</label>
                <select id="teacher"></select>
            </div>
        </div>

        <div class="payment-zone" onclick="document.getElementById('fileIn').click()">
            <i class="fas fa-file-invoice-dollar" style="font-size: 30px; margin-bottom: 10px;"></i>
            <p id="fileText">ارفع سكرينة الدفع هنا</p>
            <input type="file" id="fileIn" hidden accept="image/*" required onchange="showFile()">
        </div>

        <button type="submit" class="btn-submit">تأكيد حجز مكان في القمة</button>
    </form>
</div>

<script>
    // 1. توليد الـ 1000 كود
    const matrix = document.getElementById('matrix');
    let codes = ""; for(let i=0; i<2500; i++) { codes += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    matrix.innerText = codes;

    // 2. قاعدة البيانات الذكية
    const data = {
        kg: { years: ["أولى حضانة", "تانية حضانة"], subjects: ["تأسيس عربي", "تأسيس إنجليزي", "ماث"], teachers: {"تأسيس عربي": ["مس نورا", "مس سارة"], "تأسيس إنجليزي": ["مستر أحمد", "مس ليلى"]} },
        primary: { years: ["1 ابتدائي", "2 ابتدائي", "3 ابتدائي", "4 ابتدائي", "5 ابتدائي", "6 ابتدائي"], subjects: ["لغة عربية", "رياضيات", "علوم", "إنجليزي"], teachers: {"لغة عربية": ["مستر هاني"], "رياضيات": ["مستر علي", "مستر حسن"]} },
        secondary: { 
            years: ["1 ثانوي", "2 ثانوي", "3 ثانوي"], 
            branches: ["علمي", "ادبي", "عام"],
            subjects: {
                "علمي": ["فيزياء", "كيمياء", "أحياء", "رياضة بحتة"],
                "ادبي": ["تاريخ", "جغرافيا", "فلسفة", "علم نفس"],
                "عام": ["لغة عربية", "إنجليزي", "فرنساوي"]
            },
            teachers: {
                "فيزياء": ["مستر زويل", "مستر نيوتن"], "تاريخ": ["مستر هيرودوت"], "لغة عربية": ["مستر سيبويه", "مستر القمة"]
            }
        }
    };

    function handleStageChange() {
        const stage = document.getElementById('stage').value;
        const yearBox = document.getElementById('year-box');
        const yearSelect = document.getElementById('year');
        
        // ريست
        yearBox.classList.add('hidden');
        document.getElementById('branch-box').classList.add('hidden');
        document.getElementById('subject-box').classList.add('hidden');

        if (stage) {
            yearBox.classList.remove('hidden');
            yearSelect.innerHTML = '<option value="">-- اختر السنة --</option>';
            const years = data[stage]?.years || ["1 إعدادي", "2 إعدادي", "3 إعدادي"]; // افتراضي للاعدادي
            years.forEach(y => yearSelect.innerHTML += `<option value="${y}">${y}</option>`);
        }
    }

    function handleYearChange() {
        const stage = document.getElementById('stage').value;
        const branchBox = document.getElementById('branch-box');
        const subjectBox = document.getElementById('subject-box');
        const subjectSelect = document.getElementById('subject');

        if (stage === 'secondary') branchBox.classList.remove('hidden');
        else branchBox.classList.add('hidden');

        subjectBox.classList.remove('hidden');
        subjectSelect.innerHTML = '<option value="">-- اختر المادة --</option>';
        
        let subjects = [];
        if (stage === 'secondary') {
            const branch = document.getElementById('branch').value;
            subjects = data.secondary.subjects[branch] || [];
        } else {
            subjects = data[stage]?.subjects || ["عربي", "رياضة", "علوم"];
        }
        
        subjects.forEach(s => subjectSelect.innerHTML += `<option value="${s}">${s}</option>`);
    }

    function updateTeachers() {
        const stage = document.getElementById('stage').value;
        const subject = document.getElementById('subject').value;
        const teacherBox = document.getElementById('teacher-box');
        const teacherSelect = document.getElementById('teacher');

        teacherBox.classList.remove('hidden');
        teacherSelect.innerHTML = '';
        
        const teachers = (data[stage]?.teachers && data[stage].teachers[subject]) || ["مدرس 1", "مدرس 2"];
        teachers.forEach(t => teacherSelect.innerHTML += `<option value="${t}">${t}</option>`);
    }

    function showFile() {
        const file = document.getElementById('fileIn').files[0];
        if(file) document.getElementById('fileText').innerText = "تم الرفع: " + file.name;
    }
</script>
</body>
</html>
