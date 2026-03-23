<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة - نظام الأكواد الذكي</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root { --accent: #00d4ff; --dark: #02060a; --glass: rgba(255, 255, 255, 0.05); }
        body { margin: 0; background: var(--dark); color: white; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; min-height: 100vh; overflow: hidden; }
        
        /* أكواد التحقق الخلفية (أكثر من 1000 رمز) */
        .bg-matrix { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.03; font-family: monospace; font-size: 10px; color: var(--accent); word-break: break-all; pointer-events: none; }

        .container { width: 95%; max-width: 650px; background: var(--glass); backdrop-filter: blur(20px); border-radius: 30px; padding: 40px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.8); position: relative; }
        
        .logo-box { text-align: center; margin-bottom: 20px; }
        .logo-box img { width: 140px; filter: drop-shadow(0 0 10px var(--accent)); }

        .input-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-size: 14px; color: var(--accent); }
        input, select { width: 100%; padding: 12px; background: rgba(0,0,0,0.5); border: 1px solid #333; border-radius: 12px; color: white; outline: none; transition: 0.3s; box-sizing: border-box; }
        input:focus { border-color: var(--accent); }

        /* منطقة كود الاشتراك */
        #subscription-result { 
            display: none; margin-top: 20px; padding: 20px; background: rgba(0, 212, 255, 0.1); 
            border: 2px solid var(--accent); border-radius: 15px; text-align: center; 
            animation: pulse 2s infinite;
        }
        .code-display { font-family: 'Courier New', Courier, monospace; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #fff; }

        .btn-generate { width: 100%; padding: 16px; background: linear-gradient(45deg, #0b2e46, #1e81b0); border: none; border-radius: 15px; color: white; font-size: 18px; font-weight: bold; cursor: pointer; margin-top: 20px; transition: 0.4s; }
        .btn-generate:hover { transform: translateY(-3px); box-shadow: 0 0 30px var(--accent); }

        @keyframes pulse { 0% { box-shadow: 0 0 0px var(--accent); } 50% { box-shadow: 0 0 20px var(--accent); } 100% { box-shadow: 0 0 0px var(--accent); } }
    </style>
</head>
<body>

<div class="bg-matrix" id="matrix"></div>

<div class="container">
    <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
    <h2 style="text-align: center;">تجديد الاشتراك واستلام الكود 🔑</h2>

    <form id="keyForm">
        <div class="input-group">
            <label>اسم الطالب (المسجل في القمة)</label>
            <input type="text" id="stdName" placeholder="اكتب اسمك بالكامل" required>
        </div>

        <div class="input-group">
            <label>المرحلة الدراسية</label>
            <select id="stdLevel" required>
                <option value="kg">حضانات</option>
                <option value="pri">ابتدائي</option>
                <option value="prep">إعدادي</option>
                <option value="sec-art">ثانوي (أدبي)</option>
                <option value="sec-sci">ثانوي (علمي)</option>
            </select>
        </div>

        <div class="input-group">
            <label>رقم هاتف الطالب</label>
            <input type="tel" id="stdPhone" placeholder="01xxxxxxxxx" required>
        </div>

        <div class="input-group">
            <label>ارفع سكرينة الدفع للتجديد</label>
            <input type="file" accept="image/*" required>
        </div>

        <button type="submit" class="btn-generate">تجديد الاشتراك وتوليد كود جديد</button>
    </form>

    <div id="subscription-result">
        <p style="margin: 0; font-size: 14px;">كود الاشتراك الجديد الخاص بك هو:</p>
        <div class="code-display" id="keyCode"></div>
        <p style="margin-top: 10px; font-size: 12px; color: #ccc;">* هذا الكود صالح لمدة شهر واحد فقط من تاريخ اليوم.</p>
        <button onclick="window.print()" style="background: none; border: 1px solid white; color: white; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">حفظ الكود PDF</button>
    </div>
</div>

<script>
    // توليد الـ 1000 رمز في الخلفية
    const matrix = document.getElementById('matrix');
    let codes = ""; for(let i=0; i<3000; i++) { codes += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    matrix.innerText = codes;

    // وظيفة توليد كود اشتراك متغير "Unique Key"
    document.getElementById('keyForm').onsubmit = function(e) {
        e.preventDefault();

        // تجميع بيانات لصناعة كود فريد
        const name = document.getElementById('stdName').value;
        const phone = document.getElementById('stdPhone').value;
        const date = new Date().getTime().toString().slice(-4); // آخر 4 أرقام من الوقت الحالي

        // صناعة الكود: أول حرفين من الاسم + آخر 3 من الموبايل + رقم عشوائي + تاريخ التجديد
        const randomStr = Math.random().toString(36).substring(2, 5).toUpperCase();
        const finalKey = "QAMMA-" + randomStr + "-" + date + "-" + phone.slice(-3);

        // إظهار النتيجة
        document.getElementById('keyCode').innerText = finalKey;
        document.getElementById('subscription-result').style.display = 'block';
        document.getElementById('keyForm').style.display = 'none'; // إخفاء الفورم بعد التجديد
        
        alert("يا بطل! تم تجديد اشتراكك وتوليد كود تفعيل خاص بك.");
    };
</script>

</body>
</html>
