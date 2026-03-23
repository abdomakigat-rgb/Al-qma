<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة سنتر القمة التعليمية</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #0b2e46;
            --secondary: #1e81b0;
            --accent: #00d4ff;
            --glass: rgba(255, 255, 255, 0.08);
        }

        body {
            margin: 0; background: #050f17; color: white;
            font-family: 'Segoe UI', Tahoma, sans-serif;
            display: flex; flex-direction: column; align-items: center; min-height: 100vh;
            overflow-x: hidden;
        }

        /* شريط أكواد التحقق الخلفي (أكثر من 1000 رمز) */
        .captcha-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1; opacity: 0.1; font-family: monospace;
            overflow: hidden; pointer-events: none; line-height: 1.5;
            word-break: break-all; font-size: 10px; color: var(--accent);
        }

        .container {
            width: 90%; max-width: 600px; background: var(--glass);
            backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 30px; padding: 30px; margin: 50px 0;
            box-shadow: 0 0 50px rgba(0,0,0,0.8);
        }

        .logo-box { text-align: center; margin-bottom: 20px; }
        .logo-box img { width: 180px; filter: drop-shadow(0 0 10px var(--accent)); }

        h2 { text-align: center; color: var(--accent); margin-bottom: 25px; }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .full-width { grid-column: span 2; }

        .input-group { position: relative; }
        .input-group i { position: absolute; right: 12px; top: 38px; color: var(--accent); }

        label { display: block; margin-bottom: 8px; font-size: 14px; color: #ccc; }
        
        input, select {
            width: 100%; padding: 12px 40px 12px 10px;
            background: rgba(255,255,255,0.05); border: 1px solid #333;
            border-radius: 12px; color: white; outline: none; box-sizing: border-box;
        }

        input:focus, select:focus { border-color: var(--accent); background: rgba(255,255,255,0.1); }

        .btn-submit {
            grid-column: span 2; padding: 15px; margin-top: 20px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            border: none; border-radius: 12px; color: white; font-weight: bold;
            cursor: pointer; font-size: 18px; transition: 0.4s;
        }

        .btn-submit:hover { transform: scale(1.02); box-shadow: 0 0 20px var(--accent); }

        /* إخفاء التخصص في حالة الابتدائي/الإعدادي */
        #specialization-box { display: none; }
    </style>
</head>
<body>

    <div class="captcha-bg" id="captchaBox"></div>

    <div class="container">
        <div class="logo-box">
            <img src="logo.jpg" alt="سنتر القمة">
        </div>
        
        <h2>بوابة التسجيل الذكية ⚡</h2>

        <form id="proForm" class="form-grid">
            <div class="input-group full-width">
                <label>اسم الطالب</label>
                <i class="fas fa-user"></i>
                <input type="text" placeholder="الاسم رباعي" required>
            </div>

            <div class="input-group">
                <label>رقم هاتف الطالب</label>
                <i class="fas fa-phone"></i>
                <input type="tel" placeholder="01xxxxxxxxx" required>
            </div>

            <div class="input-group">
                <label>رقم هاتف ولي الأمر</label>
                <i class="fas fa-user-shield"></i>
                <input type="tel" placeholder="01xxxxxxxxx" required>
            </div>

            <div class="input-group full-width">
                <label>الجيميل (Gmail)</label>
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="example@gmail.com" required>
            </div>

            <div class="input-group">
                <label>نوع التعليم</label>
                <i class="fas fa-mosque"></i>
                <select id="eduType" required>
                    <option value="عام">تربية وتعليم (عام)</option>
                    <option value="أزهر">أزهر شريف</option>
                </select>
            </div>

            <div class="input-group">
                <label>المرحلة الدراسية</label>
                <i class="fas fa-graduation-cap"></i>
                <select id="level" onchange="toggleSpecialization()" required>
                    <option value="ابتدائي">ابتدائي</option>
                    <option value="اعدادي">إعدادي</option>
                    <option value="ثانوي">ثانوي</option>
                </select>
            </div>

            <div class="input-group full-width" id="specialization-box">
                <label>التخصص</label>
                <i class="fas fa-microscope"></i>
                <select id="spec">
                    <option value="علمي">علمي</option>
                    <option value="ادبي">أدبي</option>
                </select>
            </div>

            <div class="input-group">
                <label>المادة</label>
                <i class="fas fa-book"></i>
                <input type="text" placeholder="اسم المادة" required>
            </div>

            <div class="input-group">
                <label>اسم المستر</label>
                <i class="fas fa-chalkboard-teacher"></i>
                <input type="text" placeholder="اسم المدرس" required>
            </div>

            <button type="submit" class="btn-submit">تأكيد التسجيل في القمة</button>
        </form>
    </div>

    <script>
        // توليد 1000+ رمز تحقق في الخلفية بشكل عشوائي
        const captchaBox = document.getElementById('captchaBox');
        let codes = "";
        for(let i=0; i<1500; i++) {
            codes += Math.random().toString(36).substring(2, 8).toUpperCase() + " ";
        }
        captchaBox.innerText = codes;

        // وظيفة إظهار وإخفاء التخصص (علمي/أدبي)
        function toggleSpecialization() {
            const level = document.getElementById('level').value;
            const specBox = document.getElementById('specialization-box');
            if(level === 'ثانوي') {
                specBox.style.display = 'block';
            } else {
                specBox.style.display = 'none';
            }
        }

        document.getElementById('proForm').onsubmit = (e) => {
            e.preventDefault();
            alert("تم تسجيل البيانات بنجاح يا بطل! جاري مراجعة سكرينة الدفع.");
        }
    </script>
</body>
</html>
