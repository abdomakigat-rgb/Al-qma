<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>بوابة القمة الذكية</title>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<style>
:root {
    --accent:#00d4ff;
    --dark:#02060a;
}

body{
    margin:0;
    background:var(--dark);
    color:white;
    font-family:Tahoma;
    display:flex;
    justify-content:center;
}

.container{
    width:95%;
    max-width:600px;
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(20px);
    border-radius:25px;
    padding:25px;
    margin:20px;
}

h2{
    text-align:center;
    color:var(--accent);
}

input,select{
    width:100%;
    padding:12px;
    margin-top:10px;
    border-radius:10px;
    border:1px solid #333;
    background:#111;
    color:white;
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
    border:1px solid transparent;
}

.teacher.active{
    border-color:var(--accent);
}

.payment{
    border:2px dashed var(--accent);
    padding:20px;
    text-align:center;
    margin-top:20px;
    cursor:pointer;
}

.preview{
    width:100%;
    margin-top:10px;
    display:none;
    border-radius:10px;
}

.success{
    display:none;
    text-align:center;
}

.code{
    background:#111;
    padding:15px;
    border-radius:10px;
    margin-top:15px;
    color:var(--accent);
    font-weight:bold;
}
</style>
</head>

<body>

<div class="container">

<div id="form">

<h2>بوابة القمة 🚀</h2>

<input type="text" id="name" placeholder="اسم الطالب">

<input type="tel" id="phone" placeholder="رقم الهاتف">

<select id="stage">
<option value="">اختر المرحلة</option>
<option value="ابتدائي">ابتدائي</option>
<option value="اعدادي">اعدادي</option>
<option value="ثانوي">ثانوي</option>
</select>

<select id="subject">
<option value="">اختر المادة</option>
</select>

<div class="teachers" id="teachers"></div>

<input type="hidden" id="teacherName">

<div class="payment" onclick="file.click()">
<i class="fas fa-camera"></i>
<p id="fileText">ارفع سكرينة الدفع</p>
<input type="file" id="file" hidden>
<img id="preview" class="preview">
</div>

<button class="btn" onclick="submitForm()" id="btn">استلام الكود</button>

</div>

<div class="success" id="success">
<h2>تم بنجاح ✅</h2>
<p>الكود:</p>
<div class="code" id="code"></div>
<button class="btn" onclick="location.reload()">مرة أخرى</button>
</div>

</div>

<script>

// بيانات
const data = {
    "ابتدائي":["عربي","رياضيات"],
    "اعدادي":["علوم","انجليزي"],
    "ثانوي":["فيزياء","كيمياء"]
};

const teachersData = {
    "عربي":["مستر احمد"],
    "رياضيات":["مستر علي","مستر حسن"],
    "علوم":["مستر محمد"],
    "فيزياء":["مستر زويل"],
    "كيمياء":["مستر مندليف"]
};

// تغيير المواد
stage.onchange = ()=>{
    subject.innerHTML = '<option>اختر المادة</option>';
    data[stage.value]?.forEach(s=>{
        subject.innerHTML += `<option>${s}</option>`;
    });
};

// المدرسين
subject.onchange = ()=>{
    teachers.innerHTML="";
    teachersData[subject.value]?.forEach(t=>{
        teachers.innerHTML += `<div class="teacher" onclick="selectTeacher(this,'${t}')">${t}</div>`;
    });
};

// اختيار مدرس
function selectTeacher(el,name){
    document.querySelectorAll(".teacher").forEach(e=>e.classList.remove("active"));
    el.classList.add("active");
    teacherName.value=name;
}

// preview صورة
file.onchange = ()=>{
    const f=file.files[0];
    if(f){
        preview.src=URL.createObjectURL(f);
        preview.style.display="block";
        fileText.innerText="تم اختيار الصورة";
    }
};

// ارسال
function submitForm(){

    if(name.value.length<3) return alert("اكتب اسمك");
    if(!/^01[0-9]{9}$/.test(phone.value)) return alert("رقم غلط");
    if(!teacherName.value) return alert("اختار مدرس");
    if(!file.files[0]) return alert("ارفع الصورة");

    btn.innerText="جاري...";
    btn.disabled=true;

    setTimeout(()=>{
        const codeGen = "QAMMA-"+Math.random().toString(36).slice(2,7).toUpperCase();
        code.innerText=codeGen;

        form.style.display="none";
        success.style.display="block";
    },1500);
}

</script>

</body>
</html>
