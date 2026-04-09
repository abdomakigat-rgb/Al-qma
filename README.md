<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي النموذجي | القمة مكانك</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Reem+Kufi:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    <style>
        /* المتغيرات العامة */
        :root {
            --main-dark: #0f172a;
            --gold: #fbbf24;
            --gold-dark: #d97706;
            --soft-white: #f8fafc;
            --glass: rgba(255, 255, 255, 0.1);
            --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
            transition: var(--transition);
        }

        /* شاشة التحميل (إضافة جديدة) */
        #loader {
            position: fixed;
            width: 100%;
            height: 100%;
            background: var(--main-dark);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: 0.5s;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid var(--glass);
            border-top-color: var(--gold);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* تحسين ميزة تبديل المظهر */
        body.mobile-view {
            max-width: 450px;
            margin: 40px auto;
            border: 12px solid #1e293b;
            border-radius: 40px;
            height: 850px;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 0 100px rgba(0,0,0,0.5);
        }

        .view-switcher {
            position: fixed;
            bottom: 30px;
            left: 30px;
            z-index: 9999;
            background: linear-gradient(135deg, var(--main-dark), #1e293b);
            color: var(--gold);
            border: 2px solid var(--gold);
            padding: 12px 24px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            transition: var(--transition);
        }
        .view-switcher:hover { transform: scale(1.1); background: var(--gold); color: var(--main-dark); }

        /* الهيدر المطور */
        header {
            background: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(15px);
            padding: 15px 6%;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid var(--gold);
            box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        }

        .logo-box img {
            height: 65px;
            width: auto;
            filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.3));
            transition: 0.5s;
        }
        .logo-box img:hover { transform: rotate(-5deg) scale(1.05); }

        .header-left { display: flex; align-items: center; gap: 25px; }

        /* المنيو الجانبي */
        .menu-btn {
            color: var(--gold);
            font-size: 2rem;
            cursor: pointer;
            transition: var(--transition);
        }
        .menu-btn:hover { transform: scale(1.2); color: white; }

        .side-nav {
            position: fixed;
            top: 0;
            right: -320px;
            width: 300px;
            height: 100%;
            background: linear-gradient(180deg, var(--main-dark) 0%, #1e293b 100%);
            z-index: 2000;
            transition: 0.5s cubic-bezier(0.7, 0, 0.3, 1);
            padding: 100px 25px;
            box-shadow: -10px 0 40px rgba(0,0,0,0.6);
        }

        .side-nav.active { right: 0; }

        .side-nav a {
            display: flex;
            align-items: center;
            gap: 15px;
            color: white;
            text-decoration: none;
            padding: 18px;
            margin-bottom: 12px;
            border-radius: 12px;
            font-weight: 700;
            background: rgba(255,255,255,0.03);
            transition: var(--transition);
        }

        .side-nav a:hover { background: var(--gold); color: var(--main-dark); padding-right: 30px; }

        .close-nav {
            position: absolute; top: 30px; left: 30px;
            color: var(--gold); font-size: 2.2rem; cursor: pointer;
        }

        /* الساعة الحية */
        .live-clock {
            color: white;
            background: rgba(255,255,255,0.08);
            padding: 8px 18px;
            border-radius: 12px;
            border-right: 4px solid var(--gold);
            text-align: center;
        }
        #clock-time { color: var(--gold); font-weight: 900; font-size: 1.3rem; }

        /* قسم البطل (Hero Section) */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), 
                        url('https://images.unsplash.com/photo-1523050853051-be991f85a6ad?auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            padding: 20px;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 8vw, 5rem);
            font-weight: 900;
            text-shadow: 0 10px 20px rgba(0,0,0,0.4);
            margin-bottom: 25px;
            line-height: 1.2;
        }

        /* قسم المميزات - إضافة جديدة للتطوير */
        .features {
            display: flex;
            gap: 20px;
            margin-top: 40px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .feat-card {
            background: var(--glass);
            padding: 15px 25px;
            border-radius: 15px;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.1);
        }

        /* كروت المدرسين */
        .teachers-section { padding: 100px 8%; background: #fff; position: relative; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; }
        
        .card {
            background: white; border-radius: 25px; padding: 40px;
            text-align: center; box-shadow: 0 20px 40px rgba(15,23,42,0.05);
            transition: var(--transition); border: 1px solid #f1f5f9;
            position: relative; overflow: hidden;
        }
        .card::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
            background: var(--gold); transform: scaleX(0); transition: 0.4s;
        }
        .card:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(15,23,42,0.12); }
        .card:hover::before { transform: scaleX(1); }
        
        .card img {
            width: 130px; height: 130px; border-radius: 50%; 
            border: 4px solid var(--gold); margin-bottom: 20px; 
            object-fit: cover; transition: 0.5s;
        }
        .card:hover img { transform: scale(1.1) rotate(5deg); }

        .subject {
            background: #f1f5f9; color: var(--main-dark); 
            padding: 6px 16px; border-radius: 50px; 
            font-size: 0.9rem; font-weight: 700; margin-bottom: 15px; display: inline-block;
        }

        /* فورم التسجيل المطور */
        .reg-section { padding: 100px 8%; background: var(--main-dark); color: white; position: relative; }
        .reg-section::after {
            content: 'TOP'; position: absolute; top: 50px; right: 50px; font-size: 10rem;
            font-weight: 900; color: rgba(255,255,255,0.03); z-index: 0;
        }

        form {
            max-width: 700px; margin: 0 auto; background: rgba(30, 41, 59, 0.7);
            padding: 50px; border-radius: 30px; border: 1px solid rgba(251, 191, 36, 0.2);
            backdrop-filter: blur(10px); position: relative; z-index: 1;
        }

        .form-group { margin-bottom: 25px; }
        input, select, textarea {
            width: 100%; padding: 15px; border-radius: 12px; border: 2px solid transparent;
            background: rgba(255,255,255,0.05); color: white; transition: 0.3s;
        }
        input:focus, select:focus, textarea:focus {
            border-color: var(--gold); background: rgba(255,255,255,0.1); outline: none;
        }
        input::placeholder { color: rgba(255,255,255,0.4); }
        select option { background: var(--main-dark); color: white; }

        /* تحسينات إضافية للفورم */
        .secondary-fields { display: none; margin-top: 15px; animation: fadeIn 0.5s; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }

        .price-display {
            background: linear-gradient(90deg, var(--gold), var(--gold-dark));
            color: var(--main-dark); padding: 15px; border-radius: 12px;
            margin-bottom: 25px; text-align: center; font-weight: 900; 
            font-size: 1.2rem; display: none; animation: pulse 2s infinite;
        }

        .submit-btn {
            background: var(--gold); width: 100%; padding: 20px; border-radius: 12px;
            border: none; font-weight: 900; cursor: pointer; font-size: 1.2rem;
            color: var(--main-dark); transition: var(--transition);
            box-shadow: 0 10px 20px rgba(251, 191, 36, 0.2);
        }
        .submit-btn:hover { background: white; transform: translateY(-3px); box-shadow: 0 15px 30px rgba(251, 191, 36, 0.4); }

        /* المكتبة الرقمية */
        .library-section { padding: 100px 8%; background: #f8fafc; text-align: center; }
        .lock-container {
            max-width: 550px; margin: 40px auto; background: white; padding: 60px;
            border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.05);
            border-bottom: 8px solid var(--gold);
        }

        /* فوتر */
        footer {
            text-align: center; padding: 60px; background: #020617; color: #fff;
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* مودال النجاح */
        #success-modal {
            display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; color: var(--main-dark); padding: 50px; border-radius: 30px;
            z-index: 3000; border: 4px solid var(--gold); text-align: center;
            box-shadow: 0 0 100px rgba(0,0,0,0.5); width: 90%; max-width: 500px;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }

        /* تحسينات الشاشات الصغيرة */
        @media (max-width: 768px) {
            header { padding: 10px 4%; }
            .logo-box img { height: 50px; }
            .live-clock { display: none; }
            form { padding: 30px 20px; }
            .form-row { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body onload="hideLoader()">

    <div id="loader"><div class="spinner"></div></div>

    <button class="view-switcher" onclick="toggleView()">
        <i class="fas fa-mobile-alt"></i> وضع العرض المتطور
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
                <i class="fas fa-th-large"></i>
            </div>
        </div>
    </header>

    <div class="side-nav" id="sideNav">
        <i class="fas fa-times close-nav" onclick="toggleSideNav()"></i>
        <a href="#" onclick="toggleSideNav()"><i class="fas fa-home"></i> الرئيسية</a>
        <a href="#library" onclick="toggleSideNav()"><i class="fas fa-book"></i> المكتبة الرقمية</a>
        <a href="#teachers" onclick="toggleSideNav()"><i class="fas fa-user-tie"></i> عمالقة القمة</a>
        <a href="#register" onclick="toggleSideNav()"><i class="fas fa-user-plus"></i> تسجيل طالب جديد</a>
    </div>

    <section class="hero">
        <h1 class="animate__animated animate__fadeInDown">اصنع مستقبلك في القمة</h1>
        <p class="animate__animated animate__fadeInUp">النموذج المثالي للتعليم الحديث مع أقوى نخبة من مدرسي الجمهورية.</p>
        
        <div class="features animate__animated animate__fadeInUp animate__delay-1s">
            <div class="feat-card"><i class="fas fa-star" style="color:var(--gold)"></i> جودة تعليمية</div>
            <div class="feat-card"><i class="fas fa-laptop"></i> حصص أونلاين</div>
            <div class="feat-card"><i class="fas fa-check-double"></i> متابعة دورية</div>
        </div>

        <a href="#register" style="text-decoration:none; margin-top: 40px;" class="submit-btn animate__animated animate__zoomIn animate__delay-2s">احجز مكانك الآن</a>
    </section>

    <section class="library-section" id="library">
        <center><h2 style="font-size: 2.5rem; margin-bottom: 20px;"><i class="fas fa-play-circle" style="color:var(--gold)"></i> المكتبة الرقمية</h2></center>
        <div class="lock-container">
            <i class="fas fa-lock animate__animated animate__bounceIn" style="font-size: 4rem; color: #cbd5e1; margin-bottom: 25px; display: block;"></i>
            <h3>المحتوى مخصص للطلاب</h3>
            <p>سجل بياناتك الآن للحصول على كود تفعيل المحتوى والدخول للمنصة</p>
        </div>
    </section>

    <section class="teachers-section" id="teachers">
        <center><h2 style="font-size: 3rem; font-weight: 900;">عمالقة القمة</h2><p style="color: #64748b;">نخبة من أفضل المعلمين في مختلف التخصصات</p></center>
        <div class="grid">
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=محمد+العدلي&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">المشرف العام</span>
                <h3>أ/ محمد العدلي</h3>
                <p style="font-size: 0.9rem; color: #64748b; margin-top: 10px;">خبرة أكثر من 15 عاماً في الإدارة التعليمية.</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=عبد+الرحمن&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">اللغة الإنجليزية</span>
                <h3>أ/ عبد الرحمن</h3>
                <p style="font-size: 0.9rem; color: #64748b; margin-top: 10px;">خبير المناهج الدولية واللغات.</p>
            </div>
            <div class="card">
                <img src="https://ui-avatars.com/api/?name=وليد+الضوي&background=0f172a&color=fbbf24" alt="">
                <br><span class="subject">اللغة العربية</span>
                <h3>أ/ وليد الضوي</h3>
                <p style="font-size: 0.9rem; color: #64748b; margin-top: 10px;">سيد البلاغة والنحو للمرحلة الثانوية.</p>
            </div>
        </div>
    </section>

    <section class="reg-section" id="register">
        <center><h2 style="font-size: 2.5rem; margin-bottom: 40px;">استمارة التسجيل والحجز</h2></center>
        <form id="studentForm">
            <div class="form-group">
                <label><i class="fas fa-user-graduate"></i> بيانات الطالب الشخصية</label>
                <input type="text" name="name" placeholder="اسم الطالب بالكامل كما هو في الشهادة" required>
                <div class="form-row" style="margin-top: 15px;">
                    <input type="tel" name="phone" placeholder="رقم موبايل الطالب" required>
                    <input type="tel" name="parent_phone" placeholder="رقم ولي الأمر" required>
                </div>
            </div>

            <div class="form-group">
                <label><i class="fas fa-graduation-cap"></i> المرحلة والمستوى الدراسي</label>
                <select name="grade" id="gradeSelect" required onchange="handleGradeChange()">
                    <option value="">اختر الصف الدراسي</option>
                    <optgroup label="مرحلة الحضانة">
                        <option value="p">أولى حضانة (KG1)</option>
                        <option value="p">تانية حضانة (KG2)</option>
                    </optgroup>
                    <optgroup label="المرحلة الابتدائية">
                        <option value="p">الصف الأول الابتدائي</option>
                        <option value="p">الصف الثاني الابتدائي</option>
                        <option value="p">الصف الثالث الابتدائي</option>
                        <option value="p">الصف الرابع الابتدائي</option>
                        <option value="p">الصف الخامس الابتدائي</option>
                        <option value="p">الصف السادس الابتدائي</option>
                    </optgroup>
                    <optgroup label="المرحلة الإعدادية">
                        <option value="m">الصف الأول الإعدادي</option>
                        <option value="m">الصف الثاني الإعدادي</option>
                        <option value="m">الصف الثالث الإعدادي</option>
                    </optgroup>
                    <optgroup label="المرحلة الثانوية">
                        <option value="s">الصف الأول الثانوي</option>
                        <option value="s">الصف الثاني الثانوي</option>
                        <option value="s">الصف الثالث الثانوي</option>
                    </optgroup>
                </select>

                <div id="secondaryFields" class="secondary-fields">
                    <div class="form-row">
                        <select name="branch">
                            <option value="">اختر الشعبة</option>
                            <option value="علمي">علمي (علوم/رياضة)</option>
                            <option value="أدبي">أدبي</option>
                            <option value="عام">عام (أولى ثانوي)</option>
                        </select>
                        <select name="language">
                            <option value="">اللغة الثانية</option>
                            <option value="فرنساوي">فرنساوي</option>
                            <option value="ألماني">ألماني</option>
                            <option value="إيطالي">إيطالي</option>
                        </select>
                    </div>
                </div>
                <div id="priceBox" class="price-display"></div>
            </div>

            <div class="form-group">
                <label><i class="fas fa-map-marker-alt"></i> العنوان بالتفصيل</label>
                <textarea name="address" rows="2" placeholder="القرية/المدينة - اسم الشارع - علامة مميزة" required></textarea>
            </div>

            <div class="form-group">
                <label><i class="fas fa-wallet"></i> تحويل فودافون كاش (01152956200)</label>
                <input type="tel" name="payment_number" placeholder="رقم المحفظة المحول منها">
                <label style="margin-top:15px;"><i class="fas fa-camera"></i> إثبات الدفع (Screenshot)</label>
                <input type="file" name="screenshot" accept="image/*" style="padding: 10px;">
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">تأكيد الحجز والإرسال</button>
        </form>
    </section>

    <div id="success-modal">
        <i class="fas fa-check-circle" style="font-size: 5rem; color: #10b981; margin-bottom: 20px; display: block;"></i>
        <h2 style="font-weight: 900;">تم استلام طلبك بنجاح!</h2>
        <p style="margin: 15px 0; color: #64748b;">عزيزي الطالب، فريق القمة سيراجع بياناتك وسنتواصل معك خلال 24 ساعة لتسليمك كود الدخول للمنصة.</p>
        <button class="submit-btn" onclick="location.reload()">العودة للرئيسية</button>
    </div>

    <footer>
        <div style="margin-bottom: 30px;">
            <i class="fab fa-facebook fa-2x" style="margin: 0 15px; color: var(--gold); cursor: pointer;"></i>
            <i class="fab fa-whatsapp fa-2x" style="margin: 0 15px; color: var(--gold); cursor: pointer;"></i>
            <i class="fab fa-youtube fa-2x" style="margin: 0 15px; color: var(--gold); cursor: pointer;"></i>
        </div>
        <p>جميع الحقوق محفوظة &copy; سنتر القمة التعليمي النموذجي 2026</p>
        <p style="color: var(--gold); margin-top: 15px; font-weight: bold; letter-spacing: 1px;">إدارة أبو سيف | تطوير عبدو مكي</p>
    </footer>

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwR30Ou-ohpjth0Ipmpbh8u3imG2J40T24R3SD5nISKo4NWlxAj4L-cwXwrPgvbR9FV7g/exec';

        // دالة إخفاء شاشة التحميل
        function hideLoader() {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 500);
            }, 1000);
        }

        function toggleSideNav() {
            document.getElementById('sideNav').classList.toggle('active');
        }

        function toggleView() {
            document.body.classList.toggle('mobile-view');
            const btn = document.querySelector('.view-switcher');
            btn.innerHTML = document.body.classList.contains('mobile-view') ? 
                '<i class="fas fa-desktop"></i> العرض الكامل' : '<i class="fas fa-mobile-alt"></i> وضع العرض المتطور';
        }

        function updateLiveClock() {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            document.getElementById('clock-time').innerText = now.toLocaleTimeString('ar-EG', timeOptions);
            document.getElementById('clock-date').innerText = now.toLocaleDateString('ar-EG', {weekday:'long', day:'numeric', month:'long'});
        }
        setInterval(updateLiveClock, 1000);
        updateLiveClock();

        // معالجة تغيير الصف الدراسي وإظهار الحقول الإضافية
        function handleGradeChange() {
            const grade = document.getElementById('gradeSelect').value;
            const secFields = document.getElementById('secondaryFields');
            const priceBox = document.getElementById('priceBox');
            
            // إظهار حقول الثانوي
            if(grade === 's') {
                secFields.style.display = 'block';
            } else {
                secFields.style.display = 'none';
            }

            // تحديث السعر
            let price = "";
            if(grade === 's') price = "150 جنيه";
            else if(grade === 'm') price = "50 جنيه";
            else if(grade === 'p') price = "30 جنيه";
            
            if(price !== "") {
                priceBox.innerText = "قيمة الاشتراك الشهري: " + price;
                priceBox.style.display = "block";
                priceBox.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                priceBox.style.display = "none";
            }
        }

        const form = document.getElementById('studentForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري معالجة بياناتك بنجاح...';
            btn.disabled = true;

            const formData = new FormData(form);
            fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
            .then(() => {
                document.getElementById('success-modal').style.display = "block";
                window.scrollTo({top: 0, behavior: 'smooth'});
            })
            .catch(() => {
                alert("عذراً، حدث خطأ أثناء الإرسال. يرجى مراجعة الاتصال بالإنترنت.");
                btn.disabled = false;
                btn.innerText = "تأكيد الحجز والإرسال";
            });
        };
    </script>
</body>
</html>
