<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي النموذجي | القمة مكانك</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Reem+Kufi:wght@700&display=swap" rel="stylesheet">

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

        /* حركات الأنيميشن */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* الهيدر الزجاجي المطور */
        header {
            background: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(10px);
            padding: 10px 8%;
            position: fixed; width: 100%; top: 0; z-index: 1000;
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 2px solid var(--gold);
        }

        .logo-box { display: flex; align-items: center; gap: 15px; }

        .logo {
            font-family: 'Reem Kufi', sans-serif;
            color: var(--gold);
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid var(--gold);
            object-fit: cover;
        }

        /* تنسيق الساعة الجديد */
        .live-clock {
            color: white;
            background: rgba(255,255,255,0.05);
            padding: 5px 12px;
            border-radius: 8px;
            border: 1px solid rgba(251, 191, 36, 0.2);
            text-align: center;
            line-height: 1.2;
        }
        #clock-time { color: var(--gold); font-weight: 900; font-size: 1.1rem; display: block; }
        #clock-date { font-size: 0.7rem; opacity: 0.8; }

        .nav-links { display: flex; list-style: none; }
        .nav-links li { margin: 0 20px; }
        .nav-links a {
            color: white; text-decoration: none; font-weight: bold;
            transition: 0.3s; position: relative;
        }
        .nav-links a:hover { color: var(--gold); }

        /* قسم البطل (Hero) */
        .hero {
            height: 100vh;
            background: linear-gradient(45deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), 
                        url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1350&q=80');
            background-size: cover; background-position: center;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            text-align: center; color: white; padding: 20px;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 900; margin-bottom: 20px;
            animation: fadeIn 1s ease-out;
        }

        /* قسم المكتبة الرقمية (جديد) */
        .library-section { padding: 80px 8%; background: #f1f5f9; text-align: center; }
        .lock-container {
            max-width: 500px; margin: 30px auto; background: white;
            padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border: 2px solid var(--gold);
        }
        #video-display { display: none; margin-top: 30px; }
        .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px; }
        .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }

        .btn-gold {
            background: var(--gold); color: var(--main-dark);
            padding: 15px 40px; border-radius: 50px; text-decoration: none;
            font-weight: 900; font-size: 1.2rem; transition: 0.4s;
            box-shadow: 0 5px 20px rgba(251, 191, 36, 0.4); border: none; cursor: pointer;
        }
        .btn-gold:hover { transform: scale(1.1); background: var(--gold-dark); }

        /* كروت المدرسين */
        .teachers-section { padding: 100px 8%; background: #fff; }
        .grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px; margin-top: 50px;
        }

        .card {
            background: white; border-radius: 25px; padding: 30px;
            text-align: center; box-shadow: 0 15px 40px rgba(0,0,0,0.05);
            transition: 0.5s; border: 1px solid #eee;
        }
        .card:hover { transform: translateY(-15px); border-color: var(--gold); }

        .card img {
            width: 120px; height: 120px; border-radius: 50%;
            background: var(--soft-white); margin-bottom: 20px;
            border: 4px solid var(--gold); object-fit: cover;
        }

        .subject {
            background: var(--main-dark); color: var(--gold);
            padding: 5px 15px; border-radius: 10px; font-size: 0.9rem;
            display: inline-block; margin-bottom: 10px;
        }

        /* فورم التسجيل */
        .reg-section { padding: 80px 8%; background: var(--main-dark); color: white; }
        form {
            max-width: 650px; margin: 40px auto; background: var(--glass);
            padding: 40px; border-radius: 20px; backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .form-group { margin-bottom: 15px; text-align: right; }
        label { display: block; margin-bottom: 8px; color: var(--gold); font-weight: bold; }

        input, select {
            width: 100%; padding: 12px; margin: 5px 0;
            border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); outline: none;
            background: rgba(255,255,255,0.9); color: #333;
        }
        
        input[type="file"] { background: transparent; color: white; border: 1px dashed var(--gold); }

        /* معاينة الصورة */
        #screenshot-preview {
            display: none;
            width: 100%;
            max-width: 200px;
            margin: 10px auto;
            border-radius: 10px;
            border: 2px solid var(--gold);
        }

        .price-display {
            background: var(--gold); color: var(--main-dark); padding: 10px;
            border-radius: 8px; margin-bottom: 15px; text-align: center;
            font-weight: 900; display: none;
        }

        .payment-info {
            background: rgba(251, 191, 36, 0.1); border: 1px solid var(--gold);
            padding: 15px; border-radius: 10px; margin: 20px 0; text-align: center;
        }
        .payment-info strong { color: var(--gold); font-size: 1.2rem; }

        .submit-btn {
            background: var(--gold); width: 100%; padding: 15px;
            border-radius: 8px; border: none; font-weight: bold; cursor: pointer;
            font-size: 1.1rem; transition: 0.3s;
        }
        .submit-btn:hover { background: var(--gold-dark); transform: scale(1.02); }

        footer { text-align: center; padding: 40px; background: #070b14; color: #fff; }

        /* استايل رسالة الكود الفريد المعدل لعدم إظهار الكود */
        #success-modal {
            display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; color: var(--main-dark); padding: 30px; border-radius: 20px;
            z-index: 2000; border: 3px solid var(--gold); text-align: center; box-shadow: 0 0 100px rgba(0,0,0,0.5);
        }
    </style>
</head>
<body>

    <button class="view-switcher" onclick="toggleView()">
        <i class="fas fa-mobile-alt"></i> تبديل المظهر (PC/Mobile)
    </button>

    <header id="main-header">
        <div class="logo-box">
            <div class="logo">
                <img src="https://ibb.co/Gf63XzLz" alt="اللوجو" onerror="this.src='https://ui-avatars.com/api/?name=القمة&background=fbbf24&color=0f172a'">
                سنتر القمة
            </div>
            <div class="live-clock">
                <span id="clock-time">00:00:00</span>
                <span id="clock-date">اليوم - التاريخ</span>
            </div>
        </div>
        <ul class="nav-links">
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#library">المكتبة الرقمية</a></li>
            <li><a href="#teachers">المدرسين</a></li>
            <li><a href="#register">سجل الآن</a></li>
        </ul>
    </header>

    <section class="hero">
        <h1>اصنع مستقبلك في القمة</h1>
        <p>النموذج المثالي للتعليم الحديث مع أقوى نخبة من مدرسي الجمهورية.</p>
        <a href="#register" class="btn-gold">احجز مكانك الآن</a>
    </section>

    <section class="library-section" id="library">
        <center><h2><i class="fas fa-play-circle"></i> مكتبة الفيديوهات التعليمية</h2></center>
        
        <div class="lock-container" id="lock-box">
            <i class="fas fa-lock" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 20px; display: block;"></i>
            <h3>المحتوى مغلق</h3>
            <p style="color: #64748b; margin-bottom: 20px;">أدخل كود الطالب لمشاهدة الحصص</p>
            <input type="password" id="student-code" placeholder="أدخل كود الدخول هنا" style="text-align: center; margin-bottom: 15px; border: 2px solid #e2e8f0;">
            <button class="submit-btn" onclick="unlockLibrary()">دخول المكتبة</button>
        </div>

        <div id="video-display">
            <div class="lock-container" style="max-width: 900px;">
                <h3 style="margin-bottom: 20px; color: var(--main-dark);">مرحباً بك يا بطل القمة.. مشاهدة ممتعة</h3>
                <div class="video-wrapper">
                    <iframe id="main-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
                </div>
                <button class="btn-gold" style="margin-top: 20px; font-size: 0.9rem; padding: 10px 30px;" onclick="location.reload()">تسجيل خروج</button>
            </div>
        </div>
    </section>

    <section class="teachers-section" id="teachers">
        <center><h2 style="font-size: 2.5rem;">عمالقة القمة</h2></center>
        <div class="grid">
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=محمد+العدلي&background=0f172a&color=fbbf24" alt="">
                <span class="subject">المشرف العام</span>
                <h3>أ/ محمد العدلي</h3>
                <p>خبير الإدارة والتعليم</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=عبد+الرحمن&background=0f172a&color=fbbf24" alt="">
                <span class="subject">اللغة الإنجليزية</span>
                <h3>أ/ عبد الرحمن</h3>
                <p>خبرة في المناهج الدولية</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=وليد+الضوي&background=0f172a&color=fbbf24" alt="">
                <span class="subject">اللغة العربية</span>
                <h3>أ/ وليد الضوي</h3>
                <p>فارس لغة الضاد</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=أحمد+النوبي&background=0f172a&color=fbbf24" alt="">
                <span class="subject">اللغة العربية</span>
                <h3>أ/ أحمد النوبي</h3>
                <p>عميد المادة</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=إبراهيم+حسن&background=0f172a&color=fbbf24" alt="">
                <span class="subject">Français</span>
                <h3>أ/ إبراهيم حسن</h3>
                <p>خبير اللغة الفرنسية</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=محمد+العادلي&background=0f172a&color=fbbf24" alt="">
                <span class="subject">المواد العلمية</span>
                <h3>أ/ محمد العادلي</h3>
                <p>متاح من السبت إلى الأربعاء</p>
            </div>
        </div>
    </section>

    <section class="reg-section" id="register">
        <center><h2>استمارة التسجيل والحجز</h2></center>
        
        <form id="studentForm">
            <div class="form-group">
                <label>بيانات الطالب الأساسية</label>
                <input type="text" name="name" id="userName" placeholder="اسم الطالب بالكامل" required>
                <input type="tel" name="phone" id="userPhone" placeholder="رقم موبايل الطالب" required>
                <input type="tel" name="parent_phone" placeholder="رقم ولي الأمر" required>
                <input type="text" name="address" placeholder="العنوان بالتفصيل" required>
            </div>

            <div class="form-group">
                <label>المرحلة الدراسية</label>
                <select name="grade" id="gradeSelect" required onchange="updatePrice()">
                    <option value="">اختر الصف الدراسي</option>
                    <optgroup label="مرحلة الحضانة">
                        <option value="kg1">أولى حضانة (KG1)</option>
                        <option value="kg2">ثانية حضانة (KG2)</option>
                    </optgroup>
                    <optgroup label="المرحلة الابتدائية">
                        <option value="p1">الصف الأول الابتدائي</option>
                        <option value="p2">الصف الثاني الابتدائي</option>
                        <option value="p3">الصف الثالث الابتدائي</option>
                        <option value="p4">الصف الرابع الابتدائي</option>
                        <option value="p5">الصف الخامس الابتدائي</option>
                        <option value="p6">الصف السادس الابتدائي</option>
                    </optgroup>
                    <optgroup label="المرحلة الإعدادية">
                        <option value="m1">الصف الأول الإعدادي</option>
                        <option value="m2">الصف الثاني الإعدادي</option>
                        <option value="m3">الصف الثالث الإعدادي</option>
                    </optgroup>
                    <optgroup label="المرحلة الثانوية">
                        <option value="s1">الصف الأول الثانوي</option>
                        <option value="s2">الصف الثاني الثانوي</option>
                        <option value="s3">الصف الثالث الثانوي</option>
                    </optgroup>
                </select>
                <div id="priceBox" class="price-display"></div>
            </div>

            <div class="form-group">
                <label>المدرس المطلوب</label>
                <select name="teacher" required>
                    <option value="">اختر المدرس</option>
                    <option value="العدلي">أ/ محمد العدلي</option>
                    <option value="عبدالرحمن">أ/ عبد الرحمن (إنجليزي)</option>
                    <option value="الضوي">أ/ وليد الضوي (عربي)</option>
                    <option value="النوبي">أ/ أحمد النوبي (عربي)</option>
                    <option value="إبراهيم">أ/ إبراهيم حسن (فرنساوي)</option>
                    <option value="العادلي">أ/ محمد العادلي</option>
                </select>
            </div>

            <div class="payment-info">
                <p>للدفع الإلكتروني، يرجى التحويل على الرقم التالي:</p>
                <strong>01152956200</strong>
                <p>(فودافون كاش / اتصالات كاش / انستا باي)</p>
            </div>

            <div class="form-group">
                <label>تفاصيل الدفع</label>
                <select name="payment_method" required>
                    <option value="">طريقة الدفع</option>
                    <option value="instapay">انستا باي (InstaPay)</option>
                    <option value="vodafone">فودافون كاش</option>
                    <option value="etisalat">اتصالات كاش</option>
                    <option value="offline">الدفع في السنتر (الحضور)</option>
                </select>
                <input type="tel" name="payment_number" placeholder="الرقم الذي تم التحويل منه">
                <label style="margin-top: 10px;">رفع إسكرينة الدفع (صورة التحويل)</label>
                <input type="file" name="screenshot" id="screenshotInput" accept="image/*" onchange="previewImage(event)">
                <center><img id="screenshot-preview" src="#" alt="معاينة الصورة"></center>
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">تأكيد الحجز في القمة</button>
        </form>
    </section>

    <div id="success-modal">
        <i class="fas fa-check-circle" style="font-size: 4rem; color: #10b981;"></i>
        <h2 style="margin: 15px 0;">تم إرسال طلبك بنجاح!</h2>
        <p>سيتم مراجعة بياناتك والدفع الآن.</p>
        <p style="font-size: 1.1rem; color: var(--gold-dark); margin: 15px 0; font-weight: bold;">انتظر رسالة على الواتساب بكود الدخول الخاص بك خلال دقائق.</p>
        <button class="btn-gold" style="margin-top: 20px;" onclick="location.reload()">تم</button>
    </div>

    <footer>
        <p>جميع الحقوق محفوظة &copy; سنتر القمة التعليمي النموذجي 2026</p>
        <p style="color: var(--gold); margin-top: 10px; font-weight: bold;">تحت إدارة أبو سيف</p>
        <p style="font-size: 0.7rem; opacity: 0.5;">تم التطوير بواسطة عبدو مكي (داعم المواهب للقران)</p>
    </footer>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwR30Ou-ohpjth0Ipmpbh8u3imG2J40T24R3SD5nISKo4NWlxAj4L-cwXwrPgvbR9FV7g/exec';

        // وظيفة معاينة الصورة
        function previewImage(event) {
            const preview = document.getElementById('screenshot-preview');
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function() {
                preview.src = reader.result;
                preview.style.display = 'block';
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        }

        // 1. نظام الساعة والتاريخ
        function updateLiveClock() {
            const now = new Date();
            const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
            const dayName = days[now.getDay()];
            document.getElementById('clock-time').innerText = now.toLocaleTimeString('ar-EG');
            document.getElementById('clock-date').innerText = dayName + " - " + now.toLocaleDateString('ar-EG');
        }
        setInterval(updateLiveClock, 1000);
        updateLiveClock();

        // 2. ميزة تبديل المظهر PC/Mobile
        function toggleView() {
            document.body.classList.toggle('mobile-view');
            const header = document.getElementById('main-header');
            if(document.body.classList.contains('mobile-view')) {
                header.style.width = "434px";
                header.style.left = "50%";
                header.style.transform = "translateX(-50%)";
            } else {
                header.style.width = "100%";
                header.style.left = "0";
                header.style.transform = "none";
            }
        }

        // 3. نظام فتح المكتبة
        function unlockLibrary() {
            const codeInput = document.getElementById('student-code').value;
            if(codeInput === "TOP-ADMIN-2026") { 
                document.getElementById('lock-box').style.display = "none";
                document.getElementById('video-display').style.display = "block";
            } else { alert("عذراً، هذا الكود غير مفعل أو غير صحيح!"); }
        }

        function updatePrice() {
            const grade = document.getElementById('gradeSelect').value;
            const priceBox = document.getElementById('priceBox');
            let price = "";
            if (grade.startsWith('s')) price = "سعر الشهر لهذه المرحلة: 150 جنيه";
            else if (grade.startsWith('m')) price = "سعر الشهر لهذه المرحلة: 50 جنيه";
            else if (grade.startsWith('p')) price = "سعر الشهر لهذه المرحلة: 50 جنيه";
            else if (grade.startsWith('kg')) price = "سعر الشهر لهذه المرحلة: 100 جنيه";

            if (price) { priceBox.innerText = price; priceBox.style.display = "block"; }
            else { priceBox.style.display = "none"; }
        }

        // 4. نظام إرسال البيانات الفعلي لشيت جوجل
        const form = document.getElementById('studentForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.innerText = "جاري الإرسال...";
            btn.disabled = true;

            const randomID = Math.floor(1000 + Math.random() * 9000);
            const userCodeForAdmin = "TOP-" + randomID;

            const formData = new FormData(form);
            formData.append('student_secret_code', userCodeForAdmin);

            fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => {
                document.getElementById('success-modal').style.display = "block";
                console.log("تم الحفظ بنجاح!");
            })
            .catch(error => {
                alert("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً.");
                btn.innerText = "تأكيد الحجز في القمة";
                btn.disabled = false;
                console.error('Error!', error.message);
            });
        };
    </script>
</body>
</html>
