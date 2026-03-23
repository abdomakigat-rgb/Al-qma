<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي - تسجيل الطلاب</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #0b4a6b;
            --secondary-color: #1e81b0;
            --accent-color: #2ecc71;
            --glass-bg: rgba(255, 255, 255, 0.9);
        }

        body {
            background: linear-gradient(135deg, #f5af19, #f12711); /* خلفية قريبة من روح اللوجو */
            background-attachment: fixed;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .main-card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            width: 100%;
            max-width: 550px;
            padding: 40px;
            border: 1px solid rgba(255,255,255,0.3);
            text-align: center;
        }

        .logo-container img {
            max-width: 180px;
            filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
            margin-bottom: 20px;
        }

        h2 {
            color: var(--primary-color);
            margin-bottom: 30px;
            font-size: 24px;
            border-bottom: 2px solid var(--secondary-color);
            display: inline-block;
            padding-bottom: 10px;
        }

        .input-box {
            position: relative;
            margin-bottom: 20px;
            text-align: right;
        }

        .input-box i {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--secondary-color);
            font-size: 18px;
        }

        .input-box input, .input-box select {
            width: 100%;
            padding: 12px 45px 12px 15px;
            border: 2px solid #e1e1e1;
            border-radius: 12px;
            outline: none;
            transition: 0.3s;
            box-sizing: border-box;
            font-size: 16px;
        }

        .input-box input:focus {
            border-color: var(--secondary-color);
            box-shadow: 0 0 8px rgba(30, 129, 176, 0.2);
        }

        .file-upload {
            background: #f9f9f9;
            border: 2px dashed var(--secondary-color);
            padding: 20px;
            border-radius: 12px;
            cursor: pointer;
            margin-bottom: 20px;
            transition: 0.3s;
        }

        .file-upload:hover {
            background: #f0f8ff;
        }

        .file-upload label {
            cursor: pointer;
            display: block;
            color: var(--primary-color);
            font-weight: bold;
        }

        button {
            background: linear-gradient(to left, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            transition: 0.4s;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .footer-text {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>

<div class="main-card">
    <div class="logo-container">
        <img src="logo.jpg" alt="سنتر القمة">
    </div>
    
    <h2>إستمارة تسجيل طالب جديد</h2>

    <form id="registrationForm">
        <div class="input-box">
            <i class="fas fa-user-graduate"></i>
            <input type="text" id="name" placeholder="اسم الطالب بالكامل" required>
        </div>

        <div class="input-box">
            <i class="fas fa-envelope"></i>
            <input type="email" id="email" placeholder="البريد الإلكتروني (Gmail)" required>
        </div>

        <div class="input-box">
            <i class="fas fa-phone-alt"></i>
            <input type="tel" id="studentPhone" placeholder="رقم هاتف الطالب" required>
        </div>

        <div class="input-box">
            <i class="fas fa-user-shield"></i>
            <input type="tel" id="parentPhone" placeholder="رقم هاتف ولي الأمر" required>
        </div>

        <div class="input-box">
            <i class="fas fa-book-open"></i>
            <input type="text" id="subject" placeholder="اسم المادة" required>
        </div>

        <div class="input-box">
            <i class="fas fa-chalkboard-teacher"></i>
            <input type="text" id="teacher" placeholder="اسم المستر" required>
        </div>

        <div class="file-upload">
            <label for="payment">
                <i class="fas fa-cloud-upload-alt" style="font-size: 30px; margin-bottom: 10px;"></i><br>
                ارفع سكرينة الدفع هنا
            </label>
            <input type="file" id="payment" accept="image/*" style="display: none;" required>
            <p id="fileName" style="font-size: 12px; color: var(--accent-color); margin-top: 5px;"></p>
        </div>

        <button type="submit">تسجيل الآن <i class="fas fa-paper-plane"></i></button>
    </form>

    <p class="footer-text">نحن نصنع القمة.. بالتوفيق لجميع طلابنا</p>
</div>

<script>
    // إظهار اسم الملف لما يترفع
    document.getElementById('payment').onchange = function() {
        document.getElementById('fileName').innerHTML = "تم اختيار: " + this.files[0].name;
    };

    document.getElementById('registrationForm').onsubmit = function(e) {
        e.preventDefault();
        alert("يا بطل! تم إرسال بياناتك لسنتر القمة بنجاح.");
        // هنا ممكن تربط الكود بـ EmailJS أو Google Sheets
    };
</script>

</body>
</html>
