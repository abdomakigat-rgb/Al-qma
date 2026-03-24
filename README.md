<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوابة القمة - نظام التجديد الذكي</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root { --accent: #00d4ff; --dark: #02060a; --glass: rgba(255, 255, 255, 0.05); }
        body { margin: 0; background: var(--dark); color: white; font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; min-height: 100vh; overflow-x: hidden; }
        .bg-codes { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: 0.03; font-family: monospace; font-size: 10px; color: var(--accent); word-break: break-all; pointer-events: none; }
        .container { width: 95%; max-width: 600px; background: var(--glass); backdrop-filter: blur(20px); border-radius: 30px; padding: 40px; margin: 30px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
        input, select { width: 100%; padding: 12px; background: rgba(0,0,0,0.5); border: 1px solid #333; border-radius: 12px; color: white; margin-bottom: 15px; outline: none; }
        .btn-submit { width: 100%; padding: 16px; background: linear-gradient(45deg, #0b2e46, #1e81b0); border: none; border-radius: 15px; color: white; font-size: 18px; font-weight: bold; cursor: pointer; transition: 0.4s; }
        #success-card { display: none; text-align: center; }
        .code-box { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; border: 2px dashed var(--accent); display: flex; align-items: center; justify-content: space-between; margin: 20px 0; }
        .code-text { font-family: 'Courier New', monospace; font-size: 20px; font-weight: bold; color: var(--accent); }
    </style>
</head>
<body>

<div class="bg-codes" id="bgCodes"></div>

<div class="container">
    <div id="form-side">
        <h2 style="text-align: center;">تجديد اشتراك القمة 🚀</h2>
        <form id="payForm">
            <input type="text" name="studentName" id="studentName" placeholder="اسم الطالب بالكامل" required>
            <input type="tel" name="phone" id="phone" placeholder="رقم الموبايل" required>
            <select name="level" required>
                <option value="ثانوي">ثانوي</option>
                <option value="إعدادي">إعدادي</option>
            </select>
            <label style="font-size: 12px; color: #aaa;">ارفع سكرينة الدفع:</label>
            <input type="file" id="payFile" accept="image/*" required>
            <button type="submit" class="btn-submit" id="submitBtn">إرسال واستلام الكود</button>
        </form>
    </div>

    <div id="success-card">
        <h2 style="color: #2ecc71;">تم التجديد بنجاح!</h2>
        <p>كود الاشتراك الفريد الخاص بك هو:</p>
        <div class="code-box">
            <span class="code-text" id="finalCode"></span>
            <button onclick="copyCode()" style="background:var(--accent); border:none; padding:10px; border-radius:8px; cursor:pointer;">نسخ</button>
        </div>
        <p style="font-size: 12px;">* الكود ده وصل للمستر في الشيت لضمان التفعيل.</p>
    </div>
</div>

<script>
    // توليد الـ 1000 كود في الخلفية
    const bg = document.getElementById('bgCodes');
    let codeStr = ""; for(let i=0; i<2500; i++) { codeStr += Math.random().toString(36).substring(2, 7).toUpperCase() + " "; }
    bg.innerText = codeStr;

    // توليد كود متغير تماماً (بناءً على الوقت العشوائي + الموبايل)
    function generateUniqueKey(phone) {
        const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
        const timePart = new Date().getTime().toString().slice(-4);
        return `Q-MAX-${randomStr}-${timePart}-${phone.slice(-3)}`;
    }

    document.getElementById('payForm').onsubmit = function(e) {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        btn.innerText = "جاري الحفظ...";
        btn.disabled = true;

        const phone = document.getElementById('phone').value;
        const generatedCode = generateUniqueKey(phone);

        // هنا بنبعت البيانات لـ Google Sheets (هنربطها بالـ URL بتاع الـ Script)
        const scriptURL = 'ضع_هنا_رابط_جوجل_سكريبت'; 
        const formData = new FormData(this);
        formData.append('generatedCode', generatedCode);

        fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => {
                document.getElementById('finalCode').innerText = generatedCode;
                document.getElementById('form-side').style.display = 'none';
                document.getElementById('success-card').style.display = 'block';
            })
            .catch(error => alert('حدث خطأ في الاتصال، حاول مرة أخرى!'));
    };

    function copyCode() {
        navigator.clipboard.writeText(document.getElementById('finalCode').innerText);
        alert("تم النسخ!");
    }
</script>
</body>
</html>
