<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي النموذجي | القمة مكانك</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Reem+Kufi:wght@700&display=swap" rel="stylesheet">

    <style>
        /* المتغيرات العامة */
        :root {
            --main-dark: #0f172a;
            --gold: #fbbf24;
            --gold-dark: #d97706;
            --soft-white: #f8fafc;
            --glass: rgba(255, 255, 255, 0.1);
        }

        /* الإعدادات الأساسية */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Cairo', sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--soft-white);
            color: var(--main-dark);
            overflow-x: hidden;
            transition: all 0.5s ease;
        }

        /* ميزة تبديل المظهر المحاكي للموبايل */
        body.mobile-view {
            max-width: 450px;
            margin: 0 auto;
            border: 8px solid #333;
            border-radius: 30px;
            height: 90vh;
            overflow-y: auto;
            margin-top: 20px;
            position: relative;
            box-shadow: 0 0 50px rgba(0,0,0,0.3);
        }

        .view-switcher {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
            background: var(--main-dark);
            color: var(--gold);
            border: 2px solid var(--gold);
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        /* الهيدر المطور */
        header {
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            padding: 10px 5%;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid var(--gold);
        }

        .logo-box {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo img {
            height: 60px;
            width: auto;
            border-radius: 8px;
            object-fit: contain;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        /* المنيو الجانبي */
        .menu-btn {
            color: var(--gold);
            font-size: 1.8rem;
            cursor: pointer;
            transition: 0.3s;
        }

        .side-nav {
            position: fixed;
            top: 0;
            right: -300px;
            width: 280px;
            height: 100%;
            background: var(--main-dark);
            z-index: 2000;
            transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 80px 20px;
            box-shadow: -5px 0 30px rgba(0,0,0,0.5);
        }

        .side-nav.active {
            right: 0;
        }

        .side-nav a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            font-weight: bold;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: 0.3s;
        }

        .side-nav a:hover {
            background: var(--gold);
            color: var(--main-dark);
        }

        .close-nav {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }

        /* الساعة الحية */
        .live-clock {
            color: white;
            background: rgba(255,255,255,0.05);
            padding: 5px 15px;
            border-radius: 8px;
            border: 1px solid rgba(251, 191, 36, 0.2);
            text-align: center;
        }

        #clock-time {
            color: var(--gold);
            font-weight: 900;
            font-size: 1.2rem;
            display: block;
        }

        #clock-date {
            font-size: 0.75rem;
            opacity: 0.8;
        }

        /* قسم البطل (Hero Section) */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), 
                        url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            padding: 20px;
        }

        .hero h1 {
            font-size: clamp(2rem, 6vw, 4.5rem);
            font-weight: 900;
            margin-bottom: 20px;
        }

        /* كروت المدرسين */
        .teachers-section {
            padding: 100px 8%;
            background: #fff;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .card {
            background: white;
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: 0.4s;
            border: 1px solid #eee;
        }

        .card:hover {
            transform: translateY(-10px);
            border-color: var(--gold);
        }

        .card img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            border: 3px solid var(--gold);
            margin-bottom: 15px;
            object-fit: cover;
        }

        .subject {
            background: var(--main-dark);
            color: var(--gold);
            padding: 4px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            margin-bottom: 10px;
            display: inline-block;
        }

        /* فورم التسجيل */
        .reg-section {
            padding: 80px 8%;
            background: var(--main-dark);
            color: white;
        }

        form {
            max-width: 650px;
            margin: 40px auto;
            background: var(--glass);
            padding: 35px;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .form-group {
            margin-bottom: 18px;
            text-align: right;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: var(--gold);
            font-weight: bold;
        }

        input, select {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: none;
            background: rgba(255,255,255,0.95);
            color: #333;
        }

        .price-display {
            background: var(--gold);
            color: var(--main-dark);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 900;
            display: none;
        }

        .submit-btn {
            background: var(--gold);
            width: 100%;
            padding: 16px;
            border-radius: 8px;
            border: none;
            font-weight: bold;
            cursor: pointer;
            font-size: 1.1rem;
            transition: 0.3s;
        }

        .submit-btn:hover {
            background: var(--gold-dark);
            transform: scale(1.02);
        }

        /* المكتبة الرقمية */
        .library-section {
            padding: 80px 8%;
            background: #f1f5f9;
            text-align: center;
        }

        .lock-container {
            max-width: 500px;
            margin: 30px auto;
            background: white;
            padding: 40px;
            border-radius: 20px;
            border: 2px solid var(--gold);
        }

        /* فوتر ومودال النجاح */
        footer {
            text-align: center;
            padding: 40px;
            background: #070b14;
            color: #fff;
        }
        
        #success-modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            color: var(--main-dark);
            padding: 40px;
            border-radius: 20px;
            z-index: 3000;
            border: 3px solid var(--gold);
            text-align: center;
        }
    </style>
</head>
<body>

    <button class="view-switcher" onclick="toggleView()">
        <i class="fas fa-desktop"></i> تبديل المظهر (PC/Mobile)
    </button>

    <header id="main-header">
        <div class="logo-box">
            <img src="https://i.ibb.co/Gf63XzLz/logo.jpg" alt="لوجو سنتر القمة">
        </div>

        <div class="header-left">
            <div class="live-clock">
                <span id="clock-time">00:00:00</span>
                <span id="clock-date">جاري التحميل...</span>
            </div>
            <div class="menu-btn" onclick="toggleSideNav()">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <div class="side-nav" id="sideNav">
        <i class="fas fa-times close-nav" onclick="toggleSideNav()"></i>
        <a href="#" onclick="toggleSideNav()">الرئيسية</a>
        <a href="#library" onclick="toggleSideNav()">المكتبة الرقمية</a>
        <a href="#teachers" onclick="toggleSideNav()">عمالقة القمة</a>
        <a href="#register" onclick="toggleSideNav()">تسجيل طالب جديد</a>
    </div>

    <section class="hero">
        <h1>اصنع مستقبلك في القمة</h1>
        <p>النموذج المثالي للتعليم الحديث مع أقوى نخبة من مدرسي الجمهورية.</p>
        <a href="#register" style="text-decoration:none; display:inline-block; width:auto; padding: 15px 40px;" class="submit-btn">احجز مكانك الآن</a>
    </section>

    <section class="library-section" id="library">
        <center><h2><i class="fas fa-play-circle"></i> المكتبة الرقمية</h2></center>
        <div class="lock-container">
            <i class="fas fa-lock" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 20px; display: block;"></i>
            <h3>المحتوى مخصص للطلاب</h3>
            <p>سجل بياناتك الآن للحصول على كود تفعيل المحتوى</p>
        </div>
    </section>

    <section class="teachers-section" id="teachers">
        <center><h2 style="font-size: 2.5rem;">عمالقة القمة</h2></center>
        <div class="grid">
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=محمد+العدلي&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">المشرف العام</span>
                <h3>أ/ محمد العدلي</h3>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=عبد+الرحمن&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">اللغة الإنجليزية</span>
                <h3>أ/ عبد الرحمن</h3>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=وليد+الضوي&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">اللغة العربية</span>
                <h3>أ/ وليد الضوي</h3>
            </div>
        </div>
    </section>

    <section class="reg-section" id="register">
        <center><h2>استمارة التسجيل والحجز</h2></center>
        <form id="studentForm">
            <div class="form-group">
                <label>بيانات الطالب</label>
                <input type="text" name="name" placeholder="اسم الطالب بالكامل" required>
                <input type="tel" name="phone" placeholder="رقم الموبايل" required>
                <input type="text" name="address" placeholder="العنوان" required>
            </div>

            <div class="form-group">
                <label>المرحلة الدراسية</label>
                <select name="grade" id="gradeSelect" required onchange="updatePrice()">
                    <option value="">اختر الصف الدراسي</option>
                    <option value="s">المرحلة الثانوية</option>
                    <option value="m">المرحلة الإعدادية</option>
                    <option value="p">المرحلة الابتدائية</option>
                </select>
                <div id="priceBox" class="price-display"></div>
            </div>

            <div class="form-group">
                <label>تحويل فودافون كاش (01152956200)</label>
                <input type="tel" name="payment_number" placeholder="الرقم الذي تم التحويل منه">
                <label style="margin-top:10px;">ارفق صورة التحويل</label>
                <input type="file" name="screenshot" accept="image/*">
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">تأكيد الحجز</button>
        </form>
    </section>

    <div id="success-modal">
        <i class="fas fa-check-circle" style="font-size: 4rem; color: #10b981;"></i>
        <h2>تم بنجاح!</h2>
        <p>سيتم التواصل معك لتأكيد الحجز وإرسال كود المكتبة.</p>
        <button class="submit-btn" style="margin-top:20px;" onclick="location.reload()">إغلاق</button>
    </div>

    <footer>
        <p>جميع الحقوق محفوظة &copy; سنتر القمة التعليمي النموذجي 2026</p>
        <p style="color: var(--gold); margin-top: 10px; font-weight: bold;">إدارة أبو سيف | تطوير عبدو مكي</p>
    </footer>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwR30Ou-ohpjth0Ipmpbh8u3imG2J40T24R3SD5nISKo4NWlxAj4L-cwXwrPgvbR9FV7g/exec';

        function toggleSideNav() {
            document.getElementById('sideNav').classList.toggle('active');
        }

        function toggleView() {
            document.body.classList.toggle('mobile-view');
        }

        function updateLiveClock() {
            const now = new Date();
            document.getElementById('clock-time').innerText = now.toLocaleTimeString('ar-EG');
            document.getElementById('clock-date').innerText = now.toLocaleDateString('ar-EG', {weekday:'long', day:'numeric', month:'long'});
        }
        setInterval(updateLiveClock, 1000);
        updateLiveClock();

        function updatePrice() {
            const grade = document.getElementById('gradeSelect').value;
            const priceBox = document.getElementById('priceBox');
            let price = grade === 's' ? "150 جنيه" : "50 جنيه";
            priceBox.innerText = "سعر الشهر: " + price;
            priceBox.style.display = "block";
        }

        const form = document.getElementById('studentForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.innerText = "جاري الإرسال...";
            btn.disabled = true;

            const formData = new FormData(form);
            fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
            .then(() => {
                document.getElementById('success-modal').style.display = "block";
            })
            .catch(() => {
                alert("خطأ في الإرسال");
                btn.disabled = false;
                btn.innerText = "تأكيد الحجز";
            });
        };
    </script>
</body>
</html>
