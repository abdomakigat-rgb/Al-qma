<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>بوابة القمة التعليمية</title>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<style>
:root{
    --accent:#00d4ff;
    --dark:#02060a;
    --glass: rgba(255,255,255,0.05);
}

body{
    margin:0;
    background:var(--dark);
    color:white;
    font-family:'Segoe UI', sans-serif;
    display:flex;
    justify-content:center;
    min-height:100vh;
}

.container{
    width:95%;
    max-width:700px;
    background:var(--glass);
    backdrop-filter:blur(25px);
    border-radius:25px;
    padding:30px;
    margin:20px;
    box-shadow:0 15px 40px rgba(0,0,0,0.7);
}

h2{
    text-align:center;
    color:var(--accent);
    margin-bottom:20px;
}

input, select{
    width:100%;
    padding:12px;
    margin-top:10px;
    border-radius:10px;
    border:1px solid #333;
    background:#111;
    color:white;
}

.icon-input{
    display:flex;
    align-items:center;
    gap:10px;
}

.icon-input input{
    flex:1;
}

.btn{
    width:100%;
    padding:15px;
    background:linear-gradient(45deg,#0b2e46,#1e81b0);
    border:none;
    border-radius:12px;
    margin-top:20px;
    color:white;
    font-size:16px;
    cursor:pointer;
}

.teachers{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:10px;
    margin-top:15px;
}

.teacher{
    padding:10px;
    background:#111;
    border-radius:12px;
    text-align:center;
    cursor:pointer;
}

/* الدفع */
.payment{
    border:2px dashed var(--accent);
    padding:20px;
    text-align:center;
    margin-top:20px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
}

.captcha-box{
    background:#111;
    padding:10px;
    margin-top:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:10px;
    font-family:'Courier New', monospace;
    font-size:18px;
    color:var(--accent);
}

.success{
    display:none;
    text-align:center;
    margin-top:20px;
}

.code{
    background:#111;
    padding:15px;
    border-radius:10px;
    margin-top:15px;
    color:var(--accent);
}
    // توليد الرموز العشوائية للخلفية
const matrixDiv = document.getElementById("matrix");
let matrixCodes = "";
for(let i=0;i<3000;i++){
    matrixCodes += Math.random().toString(36).substring(2,7).toUpperCase() + " ";
}
matrixDiv.innerText = matrixCodes;
</style>
</head>

<body>
<div class="bg-matrix" id="matrix"></div>
<div class="container">

<h2>بوابة القمة 🚀</h2>

<!-- بيانات الطالب -->
<div class="icon-input">
    <i class="fas fa-user"></i>
    <input type="text" id="name" placeholder="اسم الطالب بالكامل">
</div>

<div class="icon-input">
    <i class="fas fa-phone"></i>
    <input type="tel" id="phone" placeholder="رقم الهاتف">
</div>

<!-- نوع التعليم -->
<div class="icon-input">
    <i class="fas fa-school"></i>
    <select id="eduType">
        <option value="">نوع التعليم</option>
        <option value="عام">تعليم عام</option>
        <option value="أزهر">أزهر</option>
    </select>
</div>

<!-- المرحلة -->
<div class="icon-input">
    <i class="fas fa-layer-group"></i>
    <select id="stage">
        <option value="">اختر المرحلة</option>
        <option value="kg">KG</option>
        <option value="primary">ابتدائي</option>
        <option value="prep">إعدادي</option>
        <option value="secondary">ثانوي</option>
    </select>
</div>

<!-- السنة -->
<div class="icon-input">
    <i class="fas fa-calendar-alt"></i>
    <select id="year">
        <option value="">اختر السنة</option>
    </select>
</div>

<!-- التخصص -->
<div class="icon-input">
    <i class="fas fa-clipboard-list"></i>
    <select id="branch">
        <option value="">التخصص</option>
    </select>
</div>

<!-- المادة -->
<div class="icon-input">
    <i class="fas fa-book"></i>
    <select id="subject">
        <option value="">اختر المادة</option>
    </select>
</div>

<!-- المدرسين -->
<div class="teachers" id="teachers"></div>

<!-- الدفع -->
<div class="payment" onclick="document.getElementById('file').click()">
    <i class="fas fa-camera-retro" style="font-size:25px;"></i>
    <span id="fileText">ارفع سكرينة الدفع</span>
    <input type="file" id="file" hidden>
</div>

<!-- رموز التحقق -->
<div class="captcha-box" id="captchaBox">
    <span id="captchaText"></span>
    <button onclick="generateCaptcha()" style="background:var(--accent); border:none; border-radius:6px; cursor:pointer; padding:5px 10px; color:#000;">تحديث</button>
</div>

<button class="btn" id="btn">استلام الكود</button>

<div class="success" id="success">
    <h2>تم بنجاح ✅</h2>
    <p>الكود:</p>
    <div class="code" id="code"></div>
</div>

</div>

<script>
// 🔥 توليد رموز تحقق بسيطة
function generateCaptcha(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for(let i=0;i<6;i++){
        captcha += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    document.getElementById('captchaText').innerText = captcha;
}

// أول مرة
generateCaptcha();

</script>// ==============================
// الدفعة الثانية: النظام الذكي
// ==============================

// قاعدة بيانات مبسطة لكل المراحل والمواد والمدرسين
const data = {
    kg: {
        years: ["KG 1","KG 2"],
        subjects: ["تأسيس عربي","تأسيس حساب","English","Math"],
        teachers: {
            "تأسيس عربي":[{n:"مس نورا",img:"https://via.placeholder.com/60"}],
            "English":[{n:"مس سارة",img:"https://via.placeholder.com/60"}]
        }
    },
    primary:{
        years:["1 ابتدائي","2 ابتدائي","3 ابتدائي","4 ابتدائي","5 ابتدائي","6 ابتدائي"],
        subjects:["لغة عربية","رياضيات","English","علوم","دراسات","تربية دينية"],
        teachers:{
            "لغة عربية":[{n:"مستر أحمد",img:"https://via.placeholder.com/60"}],
            "رياضيات":[{n:"مستر علي",img:"https://via.placeholder.com/60"}],
            "English":[{n:"مس سارة",img:"https://via.placeholder.com/60"}],
            "علوم":[{n:"مستر محمود",img:"https://via.placeholder.com/60"}],
        }
    },
    prep:{
        years:["1 إعدادي","2 إعدادي","3 إعدادي"],
        subjects:["لغة عربية","رياضيات","English","علوم","دراسات","تربية دينية"],
        teachers:{
            "لغة عربية":[{n:"مستر أحمد",img:"https://via.placeholder.com/60"}],
            "رياضيات":[{n:"مستر علي",img:"https://via.placeholder.com/60"}],
        }
    },
    secondary:{
        years:["1 ثانوي","2 ثانوي","3 ثانوي"],
        branches:["علمي","أدبي"],
        subjects:{
            "علمي":["لغة عربية","English","رياضيات","فيزياء","كيمياء","أحياء"],
            "أدبي":["لغة عربية","English","تاريخ","جغرافيا","فلسفة","علم نفس"]
        },
        teachers:{
            "فيزياء":[{n:"مستر زويل",img:"https://via.placeholder.com/60"}],
            "كيمياء":[{n:"مستر مندليف",img:"https://via.placeholder.com/60"}],
            "أحياء":[{n:"مستر محمد",img:"https://via.placeholder.com/60"}],
            "رياضيات":[{n:"مستر محمود",img:"https://via.placeholder.com/60"}],
            "لغة عربية":[{n:"مستر أحمد",img:"https://via.placeholder.com/60"}],
            "English":[{n:"مس سارة",img:"https://via.placeholder.com/60"}],
            "تاريخ":[{n:"مستر كريم",img:"https://via.placeholder.com/60"}],
            "جغرافيا":[{n:"مستر سامي",img:"https://via.placeholder.com/60"}],
            "فلسفة":[{n:"مستر عمرو",img:"https://via.placeholder.com/60"}],
            "علم نفس":[{n:"مستر خالد",img:"https://via.placeholder.com/60"}]
        }
    }
};

// عناصر DOM
const stageSelect = document.getElementById("stage");
const yearSelect = document.getElementById("year");
const branchSelect = document.getElementById("branch");
const subjectSelect = document.getElementById("subject");
const teachersDiv = document.getElementById("teachers");

// ============================
// 1. عند اختيار المرحلة
// ============================
stageSelect.addEventListener("change", ()=>{
    const stage = stageSelect.value;

    // مسح البيانات السابقة
    yearSelect.innerHTML = "<option value=''>اختر السنة</option>";
    branchSelect.innerHTML = "<option value=''>التخصص</option>";
    subjectSelect.innerHTML = "<option value=''>اختر المادة</option>";
    teachersDiv.innerHTML = "";

    if(!stage) return;

    // إضافة السنوات
    data[stage].years.forEach(y=>{
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        yearSelect.appendChild(opt);
    });

    // إظهار فرع إذا كانت ثانوي
    if(stage==="secondary"){
        branchSelect.disabled = false;
        branchSelect.innerHTML="<option value=''>التخصص</option>";
        data.secondary.branches.forEach(b=>{
            const opt = document.createElement("option");
            opt.value = b;
            opt.textContent = b;
            branchSelect.appendChild(opt);
        });
    } else {
        branchSelect.disabled = true;
    }
});

// ============================
// 2. عند اختيار السنة أو التخصص (الثانوي)
// ============================
function updateSubjects(){
    const stage = stageSelect.value;
    const branch = branchSelect.value;

    subjectSelect.innerHTML = "<option value=''>اختر المادة</option>";
    teachersDiv.innerHTML = "";

    if(!stage) return;

    let subjectsList = [];

    if(stage==="secondary"){
        if(branch) subjectsList = data.secondary.subjects[branch];
    } else {
        subjectsList = data[stage].subjects;
    }

    subjectsList.forEach(s=>{
        const opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        subjectSelect.appendChild(opt);
    });
}

// ============================
// 3. عند اختيار المادة → عرض المدرسين
// ============================
subjectSelect.addEventListener("change", ()=>{
    const stage = stageSelect.value;
    const branch = branchSelect.value;
    const subject = subjectSelect.value;

    teachersDiv.innerHTML = "";

    if(!subject) return;

    let teachersList = [];

    if(stage==="secondary"){
        teachersList = data.secondary.teachers[subject] || [];
    } else {
        teachersList = data[stage].teachers[subject] || [];
    }

    teachersList.forEach(t=>{
        const div = document.createElement("div");
        div.className="teacher";
        div.innerHTML=`<img src="${t.img}" style="width:50px;border-radius:50%;"><p>${t.n}</p>`;
        div.addEventListener("click", ()=>selectTeacher(t.n, div));
        teachersDiv.appendChild(div);
    });
});

// ============================
// 4. تحديد المدرس
// ============================
let selectedTeacher = "";
function selectTeacher(name, el){
    selectedTeacher = name;
    document.querySelectorAll(".teacher").forEach(c=>c.style.border="none");
    el.style.border="2px solid var(--accent)";
}// ============================
// الدفعة الثالثة: الدفع + الكود النهائي + النسخ
// ============================

const fileInput = document.getElementById("file");
const fileText = document.getElementById("fileText");
const btn = document.getElementById("btn");
const successDiv = document.getElementById("success");
const codeDiv = document.getElementById("code");
const captchaText = document.getElementById("captchaText");

let currentCaptcha = captchaText.innerText;

// عند اختيار ملف الدفع
fileInput.addEventListener("change", ()=>{
    if(fileInput.files.length > 0){
        fileText.innerText = "تم اختيار: " + fileInput.files[0].name;
    }
});

// عند ضغط زر استلام الكود
btn.addEventListener("click", ()=>{

    // التحقق من البيانات الأساسية
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eduType = document.getElementById("eduType").value;
    const stage = stageSelect.value;
    const year = yearSelect.value;
    const branch = branchSelect.value;
    const subject = subjectSelect.value;

    if(!name || !phone || !eduType || !stage || !year || !subject){
        alert("من فضلك املأ جميع الحقول");
        return;
    }

    // تحقق من اختيار مدرس
    if(!selectedTeacher){
        alert("اختر مدرساً");
        return;
    }

    // تحقق من رفع الملف
    if(fileInput.files.length===0){
        alert("من فضلك ارفع سكرينة الدفع");
        return;
    }

    // تحقق CAPTCHA
    const userCaptcha = prompt("اكتب رمز التحقق الموجود أعلى الصفحة:");
    if(!userCaptcha || userCaptcha.toUpperCase() !== currentCaptcha){
        alert("رمز التحقق غير صحيح!");
        generateCaptcha();
        return;
    }

    // توليد كود فريد
    const randomStr = Math.random().toString(36).substring(2,7).toUpperCase();
    const time = new Date().getTime().toString().slice(-4);
    const code = `QAMMA-${randomStr}-${time}-${phone.slice(-3)}`;

    // عرض الكود
    codeDiv.innerText = code;
    successDiv.style.display = "block";

    // مسح البيانات (اختياري)
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    eduType.value="";
    stageSelect.value="";
    yearSelect.value="";
    branchSelect.value="";
    subjectSelect.value="";
    teachersDiv.innerHTML="";
    selectedTeacher="";
    fileInput.value="";
    fileText.innerText="ارفع سكرينة الدفع";

    // توليد رمز جديد للCAPTCHA
    generateCaptcha();
});

// وظيفة نسخ الكود
codeDiv.addEventListener("click", ()=>{
    navigator.clipboard.writeText(codeDiv.innerText);
    alert("تم نسخ الكود!");
});/* خلفية Matrix */
.bg-matrix{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    font-family: monospace;
    font-size: 12px;
    color: rgba(0,212,255,0.04);
    z-index:-1;
    pointer-events:none;
    white-space:pre-wrap;
}

/* تأثير float للصور والأيقونات */
@keyframes float {
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-8px);}
}

.teacher img{
    animation: float 3s ease-in-out infinite;
}

.teacher:hover{
    transform:scale(1.05);
    transition:0.3s;
}

.btn:hover{
    transform:scale(1.03);
    transition:0.3s;
}

.icon-input i{
    color: var(--accent);
    font-size: 18px;
    animation: float 2s ease-in-out infinite alternate;
}// رابط Web App من Google Apps Script
const sheetURL = "ضع_هنا_رابط_WebApp";

// عند الضغط على زر استلام الكود
btn.addEventListener("click", ()=>{
    // التحقق من الحقول الأساسية
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eduType = document.getElementById("eduType").value;
    const stage = stageSelect.value;
    const year = yearSelect.value;
    const branch = branchSelect.value;
    const subject = subjectSelect.value;

    if(!name || !phone || !eduType || !stage || !year || !subject){
        alert("من فضلك املأ جميع الحقول");
        return;
    }

    if(!selectedTeacher){
        alert("اختر مدرساً");
        return;
    }

    if(fileInput.files.length===0){
        alert("من فضلك ارفع سكرينة الدفع");
        return;
    }

    // التحقق من CAPTCHA
    const userCaptcha = prompt("اكتب رمز التحقق الموجود أعلى الصفحة:");
    if(!userCaptcha || userCaptcha.toUpperCase() !== currentCaptcha){
        alert("رمز التحقق غير صحيح!");
        generateCaptcha();
        return;
    }

    // توليد كود فريد
    const randomStr = Math.random().toString(36).substring(2,7).toUpperCase();
    const time = new Date().getTime().toString().slice(-4);
    const code = `QAMMA-${randomStr}-${time}-${phone.slice(-3)}`;

    // عرض الكود للمستخدم
    codeDiv.innerText = code;
    successDiv.style.display = "block";

    // إرسال البيانات إلى Google Sheets
    const payload = {
        name: name,
        phone: phone,
        eduType: eduType,
        stage: stage,
        year: year,
        branch: branch,
        subject: subject,
        teacher: selectedTeacher,
        code: code,
        captcha: currentCaptcha
    };

    fetch(sheetURL, {
        method:"POST",
        body: JSON.stringify(payload),
        headers: {"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("تم الحفظ على Google Sheet:", data);
    })
    .catch(err=>{
        console.error("خطأ في حفظ البيانات:", err);
    });

    // مسح البيانات من النموذج (اختياري)
    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    eduType.value="";
    stageSelect.value="";
    yearSelect.value="";
    branchSelect.value="";
    subjectSelect.value="";
    teachersDiv.innerHTML="";
    selectedTeacher="";
    fileInput.value="";
    fileText.innerText="ارفع سكرينة الدفع";

    // توليد CAPTCHA جديد
    generateCaptcha();
});

// النسخ عند الضغط على الكود
codeDiv.addEventListener("click", ()=>{
    navigator.clipboard.writeText(codeDiv.innerText);
    alert("تم نسخ الكود!");
});

</script>

</body>
</html>
