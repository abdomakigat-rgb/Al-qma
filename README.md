<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنتر القمة التعليمي النموذجي - المنصة الذكية</title>
    
    <style>
        /* التنسيقات العامة - CSS */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f0f2f5;
            color: #333;
            line-height: 1.6;
        }

        /* الهيدر */
        header {
            background-color: #1a252f;
            color: white;
            padding: 15px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #3498db;
        }

        /* حاوية تسجيل الدخول */
        .auth-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: calc(100vh - 80px);
            padding: 20px;
        }

        .login-card {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .login-card h2 {
            margin-bottom: 25px;
            color: #2c3e50;
        }

        .input-group {
            margin-bottom: 20px;
            text-align: right;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
        }

        .input-group input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s;
        }

        .input-group input:focus {
            border-color: #3498db;
        }

        .btn-login {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 14px;
            width: 100%;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s;
        }

        .btn-login:hover {
            background-color: #2980b9;
        }

        /* قسم مكالمات الفيديو */
        #video-platform {
            display: none; /* مخفي حتى تسجيل الدخول */
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .video-header {
            background: white;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        #jitsi-container {
            width: 100%;
            height: 600px;
            background: #000;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .status-badge {
            background: #27ae60;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">سنتر القمة التعليمي</div>
        <div id="user-info" style="display:none;">مرحباً، <span id="user-name-display"></span></div>
    </header>

    <div class="auth-wrapper" id="auth-section">
        <div class="login-card">
            <h2>تسجيل الدخول</h2>
            <form id="loginForm">
                <div class="input-group">
                    <label>الاسم أو البريد</label>
                    <input type="text" id="username" placeholder="أدخل اسمك" required>
                </div>
                <div class="input-group">
                    <label>كلمة المرور</label>
                    <input type="password" id="password" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn-login">دخول للمنصة</button>
            </form>
            <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">
                تأكد من مراجعة مواعيد الحصص المباشرة.
            </p>
        </div>
    </div>

    <main id="video-platform">
        <div class="video-header">
            <h3>غرفة البث المباشر (التفاعلي)</h3>
            <span class="status-badge">متصل الآن</span>
        </div>
        
        <div id="jitsi-container"></div>
        
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="location.reload()" style="background: #e74c3c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                تسجيل الخروج
            </button>
        </div>
    </main>

    <script src="https://meet.jit.si/external_api.js"></script>

    <script>
        const loginForm = document.getElementById('loginForm');
        const authSection = document.getElementById('auth-section');
        const videoPlatform = document.getElementById('video-platform');
        const userInfo = document.getElementById('user-info');
        const userNameDisplay = document.getElementById('user-name-display');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('username').value;
            
            // 1. إخفاء واجهة الدخول وإظهار المنصة
            authSection.style.display = 'none';
            videoPlatform.style.display = 'block';
            userInfo.style.display = 'block';
            userNameDisplay.innerText = name;

            // 2. إعداد وتشغيل مكالمة الفيديو
            // ملاحظة: الـ roomName يفضل أن يكون فريداً لكل حصة
            const domain = "meet.jit.si";
            const options = {
                roomName: "ElQemmaCenter_Class_Room_Live", 
                width: "100%",
                height: 600,
                parentNode: document.querySelector('#jitsi-container'),
                userInfo: {
                    displayName: name // يظهر اسم الطالب داخل المكالمة تلقائياً
                },
                configOverwrite: {
                    startWithAudioMuted: true,
                    startWithVideoMuted: false,
                    enableWelcomePage: false
                },
                interfaceConfigOverwrite: {
                    TOOLBAR_BUTTONS: [
                        'microphone', 'camera', 'desktop', 'chat', 'raisehand',
                        'fittowindow', 'hangup', 'videoquality', 'tileview'
                    ],
                    DEFAULT_REMOTE_DISPLAY_NAME: 'طالب متفاعل',
                }
            };

            const api = new JitsiMeetExternalAPI(domain, options);
        });
    </script>

</body>
</html>
