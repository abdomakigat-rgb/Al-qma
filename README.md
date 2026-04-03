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

        * {
            margin: 0; padding: 0; box-sizing: border-box;
            font-family: 'Cairo', sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--soft-white);
            color: var(--main-dark);
            overflow-x: hidden;
        }

        /* حركات الأنيميشن */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* الهيدر الزجاجي */
        header {
            background: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(10px);
            padding: 15px 8%;
            position: fixed; width: 100%; top: 0; z-index: 1000;
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 2px solid var(--gold);
        }

        .logo {
            font-family: 'Reem Kufi', sans-serif;
            color: var(--gold);
            font-size: 1.8rem;
        }

        .nav-links { display: flex; list-style: none; }
        .nav-links li { margin: 0 20px; }
        .nav-links a {
            color: white; text-decoration: none; font-weight: bold;
            transition: 0.3s; position: relative;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-links a::after {
            content: ''; width: 0; height: 2px; background: var(--gold);
            position: absolute; bottom: -5px; right: 0; transition: 0.3s;
        }
        .nav-links a:hover::after { width: 100%; }

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

        .hero p {
            font-size: 1.5rem; max-width: 700px; margin-bottom: 30px;
            opacity: 0.9; animation: fadeIn 1.5s ease-out;
        }

        .btn-gold {
            background: var(--gold); color: var(--main-dark);
            padding: 15px 40px; border-radius: 50px; text-decoration: none;
            font-weight: 900; font-size: 1.2rem; transition: 0.4s;
            box-shadow: 0 5px 20px rgba(251, 191, 36, 0.4);
        }
        .btn-gold:hover { transform: scale(1.1); background: var(--gold-dark); }

        /* كروت المدرسين (تصميم جبار) */
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

        .payment-info {
            background: rgba(251, 191, 36, 0.1);
            border: 1px solid var(--gold);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            text-align: center;
        }
        .payment-info strong { color: var(--gold); font-size: 1.2rem; }

        .submit-btn {
            background: var(--gold); width: 100%; padding: 15px;
            border-radius: 8px; border: none; font-weight: bold; cursor: pointer;
            font-size: 1.1rem; transition: 0.3s;
        }
        .submit-btn:hover { background: var(--gold-dark); transform: scale(1.02); }

        footer { text-align: center; padding: 40px; background: #070b14; color: #666; }
    </style>
</head>
<body>

    <header>
        <div class="logo"><i class="fas fa-star"></i> سنتر القمة</div>
        <ul class="nav-links">
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#teachers">المدرسين</a></li>
            <li><a href="#register">سجل الآن</a></li>
        </ul>
    </header>

    <section class="hero">
        <h1>اصنع مستقبلك في القمة</h1>
        <p>النموذج المثالي للتعليم الحديث مع أقوى نخبة من مدرسي الجمهورية.</p>
        <a href="#register" class="btn-gold">احجز مكانك الآن</a>
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
                <input type="text" name="name" placeholder="اسم الطالب بالكامل" required>
                <input type="tel" name="phone" placeholder="رقم موبايل الطالب" required>
                <input type="tel" name="parent_phone" placeholder="رقم ولي الأمر" required>
                <input type="text" name="address" placeholder="العنوان بالتفصيل" required>
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
                <input type="file" name="screenshot" accept="image/*">
            </div>

            <button type="submit" class="submit-btn">تأكيد الحجز في القمة</button>
        </form>
    </section>

    <footer>
        <p>جميع الحقوق محفوظة &copy; سنتر القمة التعليمي النموذجي 2026</p>
    </footer>

    <script>
        const form = document.getElementById('studentForm');
        form.onsubmit = (e) => {
            e.preventDefault();
            // هنا يتم الربط مع Google Apps Script مستقبلاً
            alert('تم استلام بياناتك بنجاح! سيتم مراجعة إسكرينة الدفع والتواصل معك فوراً.');
            form.reset();
        };
    </script>
</body>
</html>
