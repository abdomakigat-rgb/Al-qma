<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوابة سنتر القمة - تسجيل متطور</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #0b2e46;
            --accent: #00d4ff;
            --glass: rgba(255, 255, 255, 0.07);
        }

        body {
            margin: 0; background: #050a0f; color: white;
            font-family: 'Segoe UI', sans-serif;
            display: flex; flex-direction: column; align-items: center; min-height: 100vh;
        }

        /* خلفية أكواد التحقق (الـ 1000 كود) */
        .bg-codes {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1; opacity: 0.05; font-family: monospace; font-size: 11px;
            color: var(--accent); overflow: hidden; word-break: break-all;
        }

        .container {
            width: 95%; max-width: 800px; background: var(--glass);
            backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 30px; padding: 40px; margin: 40px 0;
            box-shadow: 0 0 50px rgba(0,0,0,1);
        }

        .logo-box { text-align: center; margin-bottom: 20px; }
        .logo-box img { width: 160px; filter: drop-shadow(0 0 10px var(--accent)); }

        h2 { text-align: center; color: var(--accent); letter-spacing: 1px; }

        /* قسم المدرسين المتحرك */
        .teachers-section {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px; margin: 25px 0; min-height: 150px;
        }

        .teacher-card {
            background: rgba(255,255,255,0.05); border-radius: 15px; padding: 10px;
            text-align: center; border: 1px solid transparent; transition: 0.4s;
            cursor: pointer; animation: fadeIn 0.5s ease;
        }

        .teacher-card:hover { border-color: var(--accent); transform: translateY(-5px); }

        .teacher-card img {
            width: 70px; height: 70px; border-radius: 50%; border: 2px solid var(--accent);
            object-fit: cover; margin-bottom: 8px;
        }

        .teacher-card p { margin: 0; font-size: 14px; font-weight: bold; }

        /* تنسيق الفورم */
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .full { grid-column: span 2; }

        input, select {
            width: 100%; padding: 12px; background: rgba(0,0,0,0.3);
            border: 1px solid #333; border-radius: 10px; color: white; outline: none;
        }

        input:focus, select:focus { border-color: var(--accent); }

        /* خانة سكرينة الدفع */
        .payment-upload {
            border: 2px dashed var(--accent); border-radius: 15px; padding: 20px;
            text-align: center; background: rgba(0, 212, 255, 0.03); cursor: pointer;
        }

        .btn-send {
            width: 100%; padding: 15px; background: linear-gradient(45deg, var(--primary), #1e81b0);
            border: none; border-radius: 12px; color: white; font-size: 18px; font-weight: bold;
            cursor: pointer; margin-top: 20px; transition: 0.3s;
        }

        .btn-send:hover { box-shadow: 0 0 25px var(--accent); letter-spacing: 2px; }

        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
    </style>
</head>
<body>

    <div class="bg-codes" id="bgCodes"></div>

    <div class="container">
        <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
        <h2>تسجيل بيانات القمة 🚀</h2>

        <form id="mainForm">
            <div class="form-grid">
                <input type="text" placeholder="اسم الطالب بالكامل" class="full" required>
                <input type="email" placeholder="الجيميل (Gmail)" class="full" required>
                <input type="tel" placeholder="رقم هاتف الطالب" required>
                <input type="tel" placeholder="رقم هاتف ولي الأمر" required>
                
                <select id="eduLevel" onchange="updateTeachers()" required>
                    <option value="">اختر السنة الدراسية</option>
                    <option value="1sec">أولى ثانوي</option>
                    <option value="2sec">تانية ثانوي</option>
                    <option value="3sec">تالتة ثانوي</option>
                </select>

                <select id="eduType" required>
                    <option value="عام">عام</option>
                    <option value="أزهر">أزهر</option>
                </select>
            </div>

            <h4 style="color: var(--accent); margin-top: 30px;">اختر المدرس الخاص بك:</h4>
            <div class="teachers-section" id="teachersList">
                <p style="color: #666; font-style: italic;">اختر السنة الدراسية أولاً لإظهار المدرسين...</p>
            </div>

            <div class="payment-upload" onclick="document.getElementById('payImg').click()">
                <i class="fas fa-camera-retro" style="font-size: 30px; color: var(--accent);"></i>
                <p id="payText">ارفع سكرينة الدفع (فودافون كاش / وصل)</p>
                <input type="file" id="payImg" hidden accept="image/*" required onchange="showFileName()">
            </div>

            <button type="submit" class="btn-send">إرسال البيانات للسنتر</button>
        </form>
    </div>

    <script>
        // 1. توليد الـ 1000 كود في الخلفية
        const bg = document.getElementById('bgCodes');
        let codeData = "";
        for(let i=0; i<2000; i++) {
            codeData += Math.random().toString(36).substring(2, 7).toUpperCase() + " ";
        }
        bg.innerText = codeData;

        // 2. داتا المدرسين (تقدر تغير الأسماء والصور هنا)
        const teachersData = {
            "1sec": [
                {name: "مستر أحمد (فيزياء)", img: "https://via.placeholder.com/70"},
                {name: "مستر محمد (كيمياء)", img: "https://via.placeholder.com/70"}
            ],
            "2sec": [
                {name: "مستر إبراهيم (رياضة)", img: "https://via.placeholder.com/70"},
                {name: "مستر علي (أحياء)", img: "https://via.placeholder.com/70"}
            ],
            "3sec": [
                {name: "دكتور خالد (جيولوجيا)", img: "https://via.placeholder.com/70"},
                {name: "مستر حسن (عربي)", img: "https://via.placeholder.com/70"}
            ]
        };

        function updateTeachers() {
            const level = document.getElementById('eduLevel').value;
            const list = document.getElementById('teachersList');
            list.innerHTML = "";
            
            if(teachersData[level]) {
                teachersData[level].forEach(t => {
                    list.innerHTML += `
                        <div class="teacher-card" onclick="selectTeacher(this)">
                            <img src="${t.img}" alt="teacher">
                            <p>${t.name}</p>
                        </div>
                    `;
                });
            }
        }

        function selectTeacher(card) {
            document.querySelectorAll('.teacher-card').forEach(c => c.style.borderColor = 'transparent');
            card.style.borderColor = 'var(--accent)';
        }

        function showFileName() {
            const file = document.getElementById('payImg').files[0];
            if(file) document.getElementById('payText').innerText = "تم اختيار: " + file.name;
        }

        document.getElementById('mainForm').onsubmit = (e) => {
            e.preventDefault();
            alert("يا بطل! تم إرسال بياناتك وسكرينة الدفع لسنتر القمة.");
        }
    </script>
</body>
</html>
