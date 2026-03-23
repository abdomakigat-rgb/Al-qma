<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بوابة سنتر القمة التعليمي</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        /* الألوان المستوحاة من اللوجو */
        :root {
            --dark-blue: #0b2e46;
            --light-blue: #1e81b0;
            --accent-cyan: #00d4ff;
            --glass: rgba(255, 255, 255, 0.12);
        }

        * { box-sizing: border-box; transition: all 0.3s ease; }

        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: radial-gradient(circle at top left, #0b2e46, #121212);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: hidden;
            color: white;
        }

        /* خلفية متحركة خفيفة */
        body::before {
            content: "";
            position: absolute;
            width: 300px;
            height: 300px;
            background: var(--light-blue);
            filter: blur(150px);
            border-radius: 50%;
            top: 10%;
            left: 10%;
            z-index: -1;
            animation: move 10s infinite alternate;
        }

        @keyframes move { from { transform: translate(0,0); } to { transform: translate(100px, 100px); } }

        .container {
            width: 100%;
            max-width: 500px;
            background: var(--glass);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 30px;
            padding: 40px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            position: relative;
        }

        .logo-section {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo-section img {
            width: 220px; /* كبرنا اللوجو عشان يبان */
            filter: drop-shadow(0 0 15px rgba(0,212,255,0.4));
            animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        h1 {
            font-size: 22px;
            text-align: center;
            margin-bottom: 30px;
            background: linear-gradient(to left, #fff, var(--accent-cyan));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
        }

        .input-group {
            position: relative;
            margin-bottom: 20px;
        }

        .input-group i {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--accent-cyan);
        }

        input {
            width: 100%;
            padding: 14px 45px 14px 15px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 15px;
            color: white;
            font-size: 16px;
            outline: none;
        }

        input:focus {
            border-color: var(--accent-cyan);
            background: rgba(255,255,255,0.1);
            box-shadow: 0 0 15px rgba(0,212,255,0.2);
        }

        .file-card {
            background: rgba(0, 212, 255, 0.05);
            border: 2px dashed rgba(255,255,255,0.2);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            margin-bottom: 25px;
        }

        .file-card:hover { border-color: var(--accent-cyan); background: rgba(0, 212, 255, 0.1); }

        .submit-btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(45deg, var(--dark-blue), var(--light-blue));
            border: none;
            border-radius: 15px;
            color: white;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        .submit-btn:hover {
            letter-spacing: 1px;
            box-shadow: 0 0 30px var(--accent-cyan);
            transform: scale(1.02);
        }

        ::placeholder { color: rgba(255,255,255,0.5); }
    </style>
</head>
<body>

<div class="container">
    <div class="logo-section">
        <img src="logo.jpg" alt="سنتر القمة">
    </div>

    <h1>تسجيل بيانات القمة 🚀</h1>

    <form id="topForm">
        <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="اسم الطالب بالكامل" required>
        </div>

        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="الجيميل (Gmail)" required>
        </div>

        <div class="input-group">
            <i class="fas fa-phone"></i>
            <input type="tel" placeholder="رقم هاتف الطالب" required>
        </div>

        <div class="input-group">
            <i class="fas fa-user-friends"></i>
            <input type="tel" placeholder="رقم هاتف ولي الأمر" required>
        </div>

        <div class="input-group">
            <i class="fas fa-book"></i>
            <input type="text" placeholder="المادة الدراسية" required>
        </div>

        <div class="input-group">
            <i class="fas fa-user-tie"></i>
            <input type="text" placeholder="اسم المستر" required>
        </div>

        <div class="file-card" onclick="document.getElementById('upload').click()">
            <i class="fas fa-file-invoice-dollar" style="font-size: 25px; color: var(--accent-cyan);"></i>
            <p id="uploadText">ارفع سكرينة الدفع هنا</p>
            <input type="file" id="upload" hidden accept="image/*" required onchange="updateText()">
        </div>

        <button type="submit" class="submit-btn">إرسال البيانات للقمة</button>
    </form>
</div>

<script>
    function updateText() {
        const file = document.getElementById('upload').files[0];
        if(file) document.getElementById('uploadText').innerText = "تم اختيار: " + file.name;
    }

    document.getElementById('topForm').onsubmit = (e) => {
        e.preventDefault();
        alert("تم استلام بياناتك يا بطل بنجاح!");
    }
</script>

</body>
</html>
