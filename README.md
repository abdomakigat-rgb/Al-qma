<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوابة القمة - استلام كود التفعيل</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root { --accent: #00d4ff; --dark: #02060a; --glass: rgba(255, 255, 255, 0.05); }
        body { margin: 0; background: var(--dark); color: white; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; min-height: 100vh; overflow: hidden; }
        
        /* شريط الـ 1000 كود تحقق في الخلفية */
        .bg-codes { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.03; font-family: monospace; font-size: 10px; color: var(--accent); word-break: break-all; pointer-events: none; }

        .container { width: 95%; max-width: 600px; background: var(--glass); backdrop-filter: blur(20px); border-radius: 30px; padding: 40px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
        
        .logo-box { text-align: center; margin-bottom: 20px; }
        .logo-box img { width: 140px; filter: drop-shadow(0 0 10px var(--accent)); }

        input, select { width: 100%; padding: 12px; background: rgba(0,0,0,0.5); border: 1px solid #333; border-radius: 12px; color: white; margin-bottom: 15px; outline: none; box-sizing: border-box; }
        
        .btn-submit { width: 100%; padding: 16px; background: linear-gradient(45deg, #0b2e46, #1e81b0); border: none; border-radius: 15px; color: white; font-size: 18px; font-weight: bold; cursor: pointer; transition: 0.4s; }
        .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 0 30px var(--accent); }

        /* كارت الكود بعد الدفع */
        #success-card { display: none; text-align: center; animation: slideIn 0.5s ease; }
        .code-box { 
            background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; 
            border: 2px dashed var(--accent); display: flex; align-items: center; 
            justify-content: space-between; margin: 20px 0;
        }
        .code-text { font-family: 'Courier New', monospace; font-size: 22px; font-weight: bold; color: var(--accent); letter-spacing: 2px; }
        .copy-btn { background: var(--accent); color: black; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; }
        .copy-btn:active { transform: scale(0.9); }

        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body>

<div class="bg-codes" id="bgCodes"></div>

<div class="container">
    <div id="registration-form">
        <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
        <h2 style="text-align: center;">تسجيل الدفع واستلام الكود 🚀</h2>
        <form id="payForm">
            <input type="text" id="studentName" placeholder="اسم الطالب بالكامل" required>
            <input type="tel" id="studentPhone" placeholder="رقم الموبايل" required>
            <select id="stage" required>
                <option value="">اختر المرحلة الدراسية</option>
                <option value="kg">حضانة</option>
                <option value="pri">ابتدائي</option>
                <option value="prep">إعدادي</option>
                <option value="sec">ثانوي</option>
            </select>
            <label style="font-size: 12px; color: #aaa;">ارفع سكرينة الدفع هنا:</label>
            <input type="file" accept="image/*" required>
            <button type="submit" class="btn-submit">إرسال وتوليد الكود</button>
        </form>
    </div>

    <div id="success-card">
        <div class="logo-box"><img src="logo.jpg" alt="سنتر القمة"></div>
        <i class="fas fa-check-circle" style="font-size: 50px; color: #2ecc71;"></i>
        <h2 style="color: #2ecc71;">تم التسجيل بنجاح!</h2>
        <p>احتفظ بكود الاشتراك الخاص بك للدخول للمنصة:</p>
        
        <div class="code-box">
            <span class="code-text" id="finalCode">QAMMA-XXXX-XXXX</span>
            <button class="copy-btn" onclick="copyCode()"><i class="fas fa-copy"></i> نسخ</button>
        </div>
        
        <p style="font-size: 13px; color: #999;">* بمجرد النسخ، يمكنك إرساله للمستر لتفعيل حسابك.</p>
        <button onclick="location.reload()" style="background:none; border:none; color:var(--accent); cursor:pointer; text-decoration:underline;">تسجيل مادة أخرى</button>
    </div>
</div>

<script>
    // توليد الـ 1000 كود في الخلفية
    const bg = document.getElementById('bgCodes');
    let codeStr = ""; for(let i=0; i<2500; i++) { codeStr += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    bg.innerText = codeStr;

    // وظيفة معالجة الفورم وتوليد الكود
    document.getElementById('payForm').onsubmit = function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('studentPhone').value;
        const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
        const datePart = new Date().getSeconds();
        
        // تكوين الكود الفريد للطالب
        const generatedKey = `QAMMA-${randomPart}-${phone.slice(-4)}`;
        
        document.getElementById('finalCode').innerText = generatedKey;
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('success-card').style.display = 'block';
    };

    // وظيفة نسخ الكود للموبايل والكمبيوتر
    function copyCode() {
        const code = document.getElementById('finalCode').innerText;
        navigator.clipboard.writeText(code).then(() => {
            alert("تم نسخ الكود بنجاح يا بطل! 📋");
        });
    }
</script>

</body>
</html>
