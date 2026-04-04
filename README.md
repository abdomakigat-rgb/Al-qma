<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي النموذجي | القمة مكانك</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">

    <style>
        :root {
            --main-dark: #0f172a;
            --gold: #fbbf24;
            --gold-dark: #d97706;
            --soft-white: #f8fafc;
            --glass: rgba(255, 255, 255, 0.1);
        }

        /* ميزة تبديل المظهر */
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

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            font-family: 'Cairo', sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--soft-white);
            color: var(--main-dark);
            overflow-x: hidden;
            transition: all 0.5s ease;
        }

        /* الهيدر المطور */
        header {
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            padding: 10px 5%;
            position: fixed; width: 100%; top: 0; z-index: 1000;
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 2px solid var(--gold);
        }

        .logo-box img {
            height: 55px;
            width: auto;
            border-radius: 8px;
            object-fit: contain;
        }

        .menu-trigger {
            color: var(--gold);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
        }

        .side-nav {
            position: fixed;
            top: 0; right: -280px;
            width: 280px; height: 100%;
            background: var(--main-dark);
            z-index: 2000;
            transition: 0.4s;
            padding: 80px 20px;
            box-shadow: -5px 0 20px rgba(0,0,0,0.5);
        }

        .side-nav.active { right: 0; }

        .side-nav a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            font-weight: bold;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .side-nav a:hover { background: var(--gold); color: var(--main-dark); }

        .close-nav {
            position: absolute; top: 20px; left: 20px;
            color: white; font-size: 1.8rem; cursor: pointer;
        }

        .live-clock {
            color: white;
            background: rgba(255,255,255,0.05);
            padding: 5px 12px;
            border-radius: 8px;
            border: 1px solid rgba(251, 191, 36, 0.2);
            text-align: center;
        }
        #clock-time { color: var(--gold); font-weight: 900; font-size: 1.1rem; display: block; }
        #clock-date { font-size: 0.7rem; opacity: 0.8; }

        /* قسم البطل */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), 
                        url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1350&q=80');
            background-size: cover; background-position: center;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            text-align: center; color: white; padding: 20px;
        }

        .hero h1 { font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; }

        /* قسم المدرسين */
        .teachers-section { padding: 80px 5%; background: white; }
        .teachers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px; margin-top: 40px;
        }
        .teacher-card {
            background: var(--soft-white); border-radius: 20px; padding: 30px;
            text-align: center; border: 1px solid #eee; transition: 0.3s;
            position: relative; overflow: hidden;
        }
        .teacher-card:hover { transform: translateY(-10px); border-color: var(--gold); }
        .teacher-card img { width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--gold); margin-bottom: 15px; }
        .subject-tag { background: var(--main-dark); color: var(--gold); padding: 5px 15px; border-radius: 50px; font-size: 0.8rem; font-weight: bold; }
        .price-tag { color: var(--gold-dark); font-weight: 900; font-size: 1.2rem; margin-top: 10px; display: block; }

        /* استمارة التسجيل */
        .reg-section { padding: 80px 8%; background: var(--main-dark); color: white; }
        form {
            max-width: 650px; margin: 40px auto; background: var(--glass);
            padding: 30px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);
        }
        
        .form-group { margin-bottom: 15px; text-align: right; }
        label { display: block; margin-bottom: 8px; color: var(--gold); font-weight: bold; }

        input, select {
            width: 100%; padding: 12px; margin: 5px 0;
            border-radius: 8px; outline: none; border: none;
            background: rgba(255,255,255,0.95); color: #333;
        }

        .price-display {
            background: var(--gold); color: var(--main-dark); padding: 12px;
            border-radius: 8px; margin-bottom: 15px; text-align: center;
            font-weight: 900; display: none; font-size: 1.1rem;
        }

        .submit-btn {
            background: var(--gold); width: 100%; padding: 15px;
            border-radius: 8px; border: none; font-weight: bold; cursor: pointer;
            font-size: 1.1rem; transition: 0.3s;
        }
        .submit-btn:hover { background: var(--gold-dark); transform: scale(1.02); }

        #screenshot-preview {
            display: none; width: 100%; max-width: 200px; margin: 15px auto;
            border-radius: 10px; border: 3px solid var(--gold);
        }

        footer { text-align: center; padding: 40px; background: #070b14; color: #fff; }

        #success-modal {
            display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; color: var(--main-dark); padding: 30px; border-radius: 20px;
            z-index: 3000; border: 3px solid var(--gold); text-align: center;
        }
    </style>
</head>
<body>

    <button class="view-switcher" onclick="toggleView()">تبديل المظهر (PC/Mobile)</button>

    <header>
        <div class="logo-box">
            <img src="https://i.ibb.co/Gf63XzLz/logo.jpg" alt="سنتر القمة">
        </div>

        <div class="live-clock">
            <span id="clock-time">00:00:00</span>
            <span id="clock-date">جاري التحميل...</span>
        </div>

        <div class="menu-trigger" onclick="toggleMenu()">
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </header>

    <div class="side-nav" id="sideNav">
        <i class="fas fa-times close-nav" onclick="toggleMenu()"></i>
        <a href="#" onclick="toggleMenu()">الرئيسية</a>
        <a href="#teachers" onclick="toggleMenu()">عمالقة القمة</a>
        <a href="#register" onclick="toggleMenu()">تسجيل جديد</a>
    </div>

    <section class="hero">
        <h1>اصنع مستقبلك في القمة</h1>
        <p>النموذج المثالي للتعليم الحديث مع أقوى نخبة من مدرسي الجمهورية.</p>
        <a href="#register" style="text-decoration: none; display: inline-block; width: auto; padding: 15px 40px;" class="submit-btn">احجز مكانك الآن</a>
    </section>

    <section class="teachers-section" id="teachers">
        <center><h2>نخبة المدرسين والأسعار</h2></center>
        <div class="teachers-grid">
            <div class="teacher-card">
                <img src="https://ui-avatars.com/api/?name=محمد+العدلي&background=0f172a&color=fbbf24" alt="العدلي">
                <br><span class="subject-tag">إشراف عام</span>
                <h3>أ/ محمد العدلي</h3>
                <span class="price-tag">الثانوي: 150ج | الإعدادي: 80ج</span>
            </div>
            <div class="teacher-card">
                <img src="https://ui-avatars.com/api/?name=عبد+الرحمن&background=0f172a&color=fbbf24" alt="عبدالرحمن">
                <br><span class="subject-tag">لغة إنجليزية</span>
                <h3>أ/ عبد الرحمن</h3>
                <span class="price-tag">الثانوي: 140ج | الإعدادي: 70ج</span>
            </div>
            <div class="teacher-card">
                <img src="https://ui-avatars.com/api/?name=وليد+الضوي&background=0f172a&color=fbbf24" alt="وليد">
                <br><span class="subject-tag">لغة عربية</span>
                <h3>أ/ وليد الضوي</h3>
                <span class="price-tag">الثانوي: 150ج | الإعدادي: 75ج</span>
            </div>
        </div>
    </section>

    <section class="reg-section" id="register">
        <center><h2>استمارة التسجيل والحجز</h2></center>
        
        <form id="studentForm">
            <div class="form-group">
                <label>بيانات الطالب</label>
                <input type="text" name="name" placeholder="اسم الطالب بالكامل" required>
                <input type="tel" name="phone" placeholder="رقم موبايل الطالب" required>
                <input type="tel" name="parent_phone" placeholder="رقم ولي الأمر" required>
                <input type="text" name="address" placeholder="العنوان" required>
            </div>

            <div class="form-group">
                <label>نظام الدراسة</label>
                <select name="attendance_type" required>
                    <option value="">اختر نظام الحضور</option>
                    <option value="center">حضور في السنتر</option>
                    <option value="online">أون لاين (من خلال المنصة)</option>
                </select>
            </div>

            <div class="form-group">
                <label>المرحلة الدراسية</label>
                <select name="grade" id="gradeSelect" required onchange="updatePrice()">
                    <option value="">اختر الصف الدراسي</option>
                    <optgroup label="ثانوي عام">
                        <option value="s3_gen">الثالث الثانوي (عام)</option>
                        <option value="s2_gen">الثاني الثانوي (عام)</option>
                        <option value="s1_gen">الأول الثانوي (عام)</option>
                    </optgroup>
                    <optgroup label="ثانوي أزهري">
                        <option value="s3_azhar">الثالث الثانوي (أزهر)</option>
                        <option value="s2_azhar">الثاني الثانوي (أزهر)</option>
                        <option value="s1_azhar">الأول الثانوي (أزهر)</option>
                    </optgroup>
                    <optgroup label="المرحلة الإعدادية">
                        <option value="m3">الثالث الإعدادي</option>
                        <option value="m2">الثاني الإعدادي</option>
                        <option value="m1">الأول الإعدادي</option>
                    </optgroup>
                    <optgroup label="المرحلة الابتدائية">
                        <option value="p">صفوف الابتدائي</option>
                    </optgroup>
                </select>
                <div id="priceBox" class="price-display"></div>
            </div>

            <div class="form-group">
                <label>المدرس المطلوب</label>
                <select name="teacher" required>
                    <option value="">اختر المدرس</option>
                    <option value="العدلي">أ/ محمد العدلي</option>
                    <option value="عبدالرحمن">أ/ عبد الرحمن</option>
                    <option value="الضوي">أ/ وليد الضوي</option>
                </select>
            </div>

            <div class="form-group">
                <label>تفاصيل الدفع</label>
                <select name="payment_method" required>
                    <option value="">اختر طريقة الدفع</option>
                    <option value="vodafone">فودافون كاش (01152956200)</option>
                    <option value="instapay">انستا باي</option>
                    <option value="center">دفع نقدي في السنتر</option>
                </select>
                <input type="tel" name="payment_number" placeholder="الرقم الذي تم التحويل منه">
                
                <label style="margin-top:10px;">إرفاق إسكرينة الدفع</label>
                <input type="file" name="screenshot" accept="image/*" onchange="previewImage(event)">
                <center><img id="screenshot-preview" src="#"></center>
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">تأكيد الحجز في القمة</button>
        </form>
    </section>

    <div id="success-modal">
        <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981;"></i>
        <h2>تم الإرسال بنجاح!</h2>
        <p>سيتم التواصل معك عبر الواتساب قريباً.</p>
        <button class="submit-btn" onclick="location.reload()">إغلاق</button>
    </div>

    <footer>
        <p>جميع الحقوق محفوظة &copy; سنتر القمة التعليمي النموذجي 2026</p>
        <p style="color: var(--gold); font-weight: bold;">إدارة أبو سيف | تطوير عبدو مكي</p>
    </footer>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwR30Ou-ohpjth0Ipmpbh8u3imG2J40T24R3SD5nISKo4NWlxAj4L-cwXwrPgvbR9FV7g/exec';

        function toggleMenu() {
            document.getElementById('sideNav').classList.toggle('active');
        }

        function toggleView() {
            document.body.classList.toggle('mobile-view');
        }

        function previewImage(event) {
            const preview = document.getElementById('screenshot-preview');
            preview.src = URL.createObjectURL(event.target.files[0]);
            preview.style.display = 'block';
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
            let price = "";

            if (grade.includes('s3')) price = "150 جنيه";
            else if (grade.includes('s2') || grade.includes('s1')) price = "140 جنيه";
            else if (grade.startsWith('m')) price = "80 جنيه";
            else if (grade === 'p') price = "50 جنيه";

            if (price) {
                priceBox.innerText = "سعر الشهر لهذه المرحلة: " + price;
                priceBox.style.display = "block";
            } else {
                priceBox.style.display = "none";
            }
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
                alert("حدث خطأ، يرجى المحاولة مرة أخرى.");
                btn.disabled = false;
                btn.innerText = "تأكيد الحجز";
            });
        };
    </script>
</body>
</html>
