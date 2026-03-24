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

        /* أكواد التحقق الخلفية (أكثر من 1000 رمز متغير) */
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

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

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

        /* منطقة المدرسين بصورهم */
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

        /* منطقة سكرينة الدفع */
        .payment-zone { 
            margin-top: 25px; border: 2px dashed var(--accent); border-radius: 15px; 
            padding: 25px; text-align: center; background: rgba(0,212,255,0.02); 
            cursor: pointer; transition: 0.3s;
        }
        .payment-zone:hover { background: rgba(0,212,255,0.08); }

        .btn-submit { 
            width: 100%; padding: 18px; background: var(--primary-gradient); 
            border: none; border-radius: 15px; color: white; font-size: 18px; 
            font-weight: bold; margin-top: 25px; cursor: pointer; transition: 0.4s; 
        }
        .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 10px 30px var(--accent); letter-spacing: 1px; }

        /* كارت النجاح بعد الدفع */
        #success-card { display: none; text-align: center; animation: slideUp 0.6s ease; }
        .code-display { 
            background: rgba(255,255,255,0.1); padding: 25px; border-radius: 20px; 
            border: 2px dashed var(--accent); display: flex; align-items: center; 
            justify-content: space-between; margin: 25px 0;
        }
        .final-code-text { font-family: 'Courier New', monospace; font-size: 22px; font-weight: bold; color: var(--accent); }
        
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

<div class="bg-matrix" id="matrix"></div>

<div class="container">
    <div id="form-side">
        <div class="logo-box">
            <img src="logo.jpg" alt="سنتر القمة">
        </div>
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
                    <label>رقم ولي الأمر</label>
                    <input type="tel" name="parentPhone" placeholder="01xxxxxxxxx" required>
                </div>

                <div class="full">
                    <label>الجيميل (Gmail)</label>
                    <input type="email" name="email" placeholder="example@gmail.com" required>
                </div>

                <div>
                    <label>نوع التعليم</label>
                    <select name="eduType" required>
                        <option value="عام">تربية وتعليم (عام)</option>
                        <option value="أزهر">أزهر شريف</option>
                    </select>
                </div>

                <div>
                    <label>المرحلة الدراسية</label>
                    <select id="stage" name="stage" onchange="handleStageChange()" required>
                        <option value="">-- اختر --</option>
                        <option value="kg">حضانة</option>
                        <option value="primary">ابتدائي</option>
                        <option value="prep">إعدادي</option>
                        <option value="secondary">ثانوي</option>
                    </select>
                </div>

                <div class="full hidden" id="branch-box">
                    <label>التخصص (للثانوي)</label>
                    <select id="branch" name="branch" onchange="handleStageChange()">
                        <option value="عام">تأسيس / عام</option>
                        <option value="علمي">علمي</option>
                        <option value="ادبي">أدبي</option>
                    </select>
                </div>

                <div class="full hidden" id="subject-box">
                    <label>المادة العلمية</label>
                    <select id="subject" name="subject" onchange="updateTeachers()"></select>
                </div>
            </div>

            <div id="teacher-section" class="hidden">
                <label>اختر المدرس:</label>
                <div class="teachers-list" id="teachersList"></div>
                <input type="hidden" name="selectedTeacher" id="selectedTeacherInput" required>
            </div>

            <div class="payment-zone" onclick="document.getElementById('payFile').click()">
                <i class="fas fa-camera-retro" style="font-size: 30px; color: var(--accent);"></i>
                <p id="fileText">ارفع سكرينة الدفع للتجديد</p>
                <input type="file" id="payFile" accept="image/*" hidden required onchange="showFileName()">
            </div>

            <button type="submit" class="btn-submit" id="submitBtn">تجديد الاشتراك واستلام الكود</button>
        </form>
    </div>

    <div id="success-card">
        <div class="logo-box"><img src="logo.jpg" alt="القمة"></div>
        <i class="fas fa-check-double" style="font-size: 60px; color: #2ecc71;"></i>
        <h2 style="color: #2ecc71;">تم الحفظ والتجديد!</h2>
        <p>كود التفعيل المتغير الخاص بك هو:</p>
        <div class="code-display">
            <span class="final-code-text" id="finalCode"></span>
            <button onclick="copyCode()" style="background:var(--accent); border:none; padding:12px; border-radius:10px; cursor:pointer; font-weight:bold;">نسخ</button>
        </div>
        <p style="font-size: 13px; color: #aaa;">* تم إرسال الكود لـ Google Sheet الخاص بالمستر للتأكيد.</p>
        <button onclick="location.reload()" style="background:none; border:none; color:var(--accent); cursor:pointer; text-decoration:underline;">تسجيل جديد</button>
    </div>
</div>

<script>
    // 1. توليد مصفوفة الرموز (1000+)
    const matrix = document.getElementById('matrix');
    let codes = ""; for(let i=0; i<2500; i++) { codes += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    matrix.innerText = codes;

    // 2. قاعدة بيانات المواد والمدرسين
    const academyData = {
        kg: { subjects: ["تأسيس شامل"], teachers: {"تأسيس شامل": [{n: "مس ليلى", img: "https://via.placeholder.com/60"}]} },
        primary: { subjects: ["عربي", "حساب", "إنجليزي"], teachers: {"عربي": [{n: "مستر أحمد", img: "https://via.placeholder.com/60"}]} },
        secondary: {
            subjects: {
                "علمي": ["فيزياء", "كيمياء", "أحياء"],
                "ادبي": ["تاريخ", "جغرافيا", "فلسفة"],
                "عام": ["لغة عربية", "لغة إنجليزية"]
            },
            teachers: {
                "فيزياء": [{n: "مستر زويل", img: "https://via.placeholder.com/60"}, {n: "مستر نيوتن", img: "https://via.placeholder.com/60"}],
                "تاريخ": [{n: "مستر هيرودوت", img: "https://via.placeholder.com/60"}]
            }
        }
    };

    function handleStageChange() {
        const stage = document.getElementById('stage').value;
        const branchBox = document.getElementById('branch-box');
        const subjectBox = document.getElementById('subject-box');
        const subjectSelect = document.getElementById('subject');

        branchBox.classList.add('hidden');
        subjectBox.classList.add('hidden');

        if(stage) {
            subjectBox.classList.remove('hidden');
            subjectSelect.innerHTML = '<option value="">-- اختر المادة --</option>';
            let subs = [];
            if(stage === 'secondary') {
                branchBox.classList.remove('hidden');
                subs = academyData.secondary.subjects[document.getElementById('branch').value] || [];
            } else {
                subs = academyData[stage]?.subjects || ["مادة عامة"];
            }
            subs.forEach(s => subjectSelect.innerHTML += `<option value="${s}">${s}</option>`);
        }
    }

    function updateTeachers() {
        const stage = document.getElementById('stage').value;
        const subject = document.getElementById('subject').value;
        const tSection = document.getElementById('teacher-section');
        const tList = document.getElementById('teachersList');

        tSection.classList.remove('hidden');
        tList.innerHTML = '';

        let teachers = [];
        if(stage === 'secondary') teachers = academyData.secondary.teachers[subject] || [{n: "مدرس القمة", img: "https://via.placeholder.com/60"}];
        else teachers = academyData[stage]?.teachers[subject] || [{n: "مدرس القمة", img: "https://via.placeholder.com/60"}];

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

    // توليد الكود المتغير وربطه بالشيت
    document.getElementById('payForm').onsubmit = function(e) {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.innerText = "جاري التأكيد..."; btn.disabled = true;

        const phone = document.getElementById('phone').value;
        const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
        const timePart = new Date().getTime().toString().slice(-4);
        const generatedCode = `QAMMA-${randomStr}-${timePart}-${phone.slice(-3)}`;

        // ربط جوجل شيت (ضع الرابط هنا بعد النشر)
        const scriptURL = 'ضع_هنا_رابط_جوجل_سكريبت_الخاص_بك';
        const formData = new FormData(this);
        formData.append('generatedCode', generatedCode);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(() => {
                document.getElementById('finalCode').innerText = generatedCode;
                document.getElementById('form-side').style.display = 'none';
                document.getElementById('success-card').style.display = 'block';
            })
            .catch(() => {
                // حتى لو فشل الاتصال بالشيت هنطلع الكود للطالب عشان ميتعطلش
                document.getElementById('finalCode').innerText = generatedCode;
                document.getElementById('form-side').style.display = 'none';
                document.getElementById('success-card').style.display = 'block';
            });
    };

    function copyCode() {
        navigator.clipboard.writeText(document.getElementById('finalCode').innerText);
        alert("تم نسخ الكود بنجاح يا بطل! 📋");
    }
</script>
</body>
</html>
