import "./index.css";

export default function App(){
  return (
    <div className="container">
      
<header className="header">
  <h1>mini web</h1>
  <nav>
    <a href="#dinosaurs">დინოზავრები</a>
    <a href="#nugzara">ნუგზარა</a>
    <a href="#napoleoni">ნაპოლეონი</a>
    <a href="#luiza">ლუიზა</a>
    <a href="#manki">მაიმუნზე</a>

  </nav>
</header>

<section id="#dinosaurs">
<h2>დინოზავრები</h2>
<p>დინოზავრები გადაშენდნენ და ეხლა მათ მაგივრად ქათმები არსებობენ</p>
</section>

<section id="#nugzara">
<h2>ნუგზარა</h2>
<p>ნუგზარა კაცის სახელია რომელმაც ბატონ დავით გრძელოშვილს სიმაღლეში გაასწრო და 
  და დავითი მას გაებუტა
</p>
</section>

<section id="#napoleoni">
<h2>ნაპოლეონი</h2>
<p>ნაპალეონის ჭამა ძალიან უყვარს შოთა დარბაიძეს და ბატონ დავით გრძელოშვილსასევე
   ნაპოლეონმა რომ გაიგოს მისი სახელი ნამცხვარს დაარქვეს გადაირეოდა მერე გასინჯავდა 
   მოეწონებოდა 
   მოიბოდიშებდა და გადმორიგდებოდა
   </p>
</section>

<section id="#luiza">
<h2>ლუიზა</h2>
<p>ლუიზა ქალის სახელია</p>
</section>

<section id="#manki">
<h2>მაიმუნზე</h2>
<p>მაიმუნი ადამიანს გავს და მაიმუნი ბატონი
  დავით გრძელოშვილის საყვარელი ცხოველი
</p>
</section>

<footer className="footer">
  <p>ბატონო დავით ღადაობა ძალიან გიყვართ ასევე მეც ამიტომ
    დავალებებისას როგორც გაგვერადავეთ ისე გერადავებით 
  </p>
</footer>

    </div>
  );
}