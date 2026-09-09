const MORNING=[
{id:"m1",title:"آية الكرسي",text:"اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",count:1},
{id:"m2",title:"سورة الإخلاص",text:"قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",count:3},
{id:"m3",title:"سورة الفلق",text:"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",count:3},
{id:"m4",title:"سورة الناس",text:"قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",count:3},
{id:"m5",title:"ذكر التوحيد",text:"أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير. رب أسألك خير ما في هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما بعده.",count:1},
{id:"m6",title:"رضيت بالله ربًا",text:"رضيت بالله ربًا، وبالإسلام دينًا، وبمحمد ﷺ نبيًا.",count:3},
{id:"m7",title:"شهادة النعم",text:"اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدًا عبدك ورسولك.",count:4},
{id:"m8",title:"سيد الاستغفار",text:"اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء لك بذنبي، فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",count:1},
{id:"m9",title:"التوكل على الله",text:"حسبي الله لا إله إلا هو، عليه توكلت وهو رب العرش العظيم.",count:7},
{id:"m10",title:"العفو والعافية",text:"اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي، وآمن روعاتي، واحفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي.",count:1},
{id:"m11",title:"خير اليوم",text:"اللهم إني أسألك علمًا نافعًا، ورزقًا طيبًا، وعملًا متقبلًا.",count:1},
{id:"m12",title:"ذكر عظيم",text:"سبحان الله وبحمده.",count:100}
];

const EVENING=MORNING.map(x=>({...x,id:x.id.replace("m","e")})).map(x=>{
 const replacements={"أصبحنا":"أمسينا","أصبح":"أمسى","هذا اليوم":"هذه الليلة","هذا اليوم وشر":"هذه الليلة وشر","في هذا اليوم":"في هذه الليلة"};
 let t=x.text; Object.entries(replacements).forEach(([a,b])=>t=t.replaceAll(a,b));
 return {...x,text:t};
});
EVENING[6].text="اللهم إني أمسيت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدًا عبدك ورسولك.";

const favs=JSON.parse(localStorage.getItem("favs")||"[]");
const state=JSON.parse(localStorage.getItem("zikrProgress")||"{}");

function save(){localStorage.setItem("favs",JSON.stringify(favs));localStorage.setItem("zikrProgress",JSON.stringify(state));}
function isFav(id){return favs.includes(id)}
function toggleFav(id){const i=favs.indexOf(id);i>=0?favs.splice(i,1):favs.push(id);save();renderAll();updateHomeFav()}
function renderList(containerId,data,search="",progressId=""){
 const box=document.getElementById(containerId); if(!box)return; box.innerHTML="";
 const q=search.trim().toLowerCase();
 const list=data.filter(x=>(x.title+" "+x.text).toLowerCase().includes(q));
 if(!list.length){box.innerHTML='<div class="empty">لا توجد نتائج هنا. جرّب كلمة أخرى 🌿</div>';return}
 list.forEach((z,index)=>{
  const done=Math.min(state[z.id]||0,z.count), finished=done>=z.count;
  const card=document.createElement("article"); card.className="zikr-card"+(finished?" done-card":"");
  card.innerHTML=`<div class="zikr-top"><div style="flex:1"><p class="zikr-text">${z.text}</p><div class="source">${z.title}</div></div><span class="zikr-number">${index+1}</span></div>
  <div class="zikr-bottom"><span class="repeat">التكرار: <b>${done} / ${z.count}</b></span><div class="actions">
  <button class="action fav ${isFav(z.id)?"active":""}" title="مفضلة">${isFav(z.id)?"♥":"♡"}</button>
  <button class="action done">${finished?"✓ تم":"تم"}</button></div></div>
  <div class="progress"><i style="width:${done/z.count*100}%"></i></div>`;
  card.querySelector(".fav").onclick=()=>toggleFav(z.id);
  card.querySelector(".done").onclick=()=>{if((state[z.id]||0)<z.count)state[z.id]=(state[z.id]||0)+1;save();renderAll();navigator.vibrate?.(10)};
  box.appendChild(card);
 });
 if(progressId){const total=data.length, finished=data.filter(z=>(state[z.id]||0)>=z.count).length;document.getElementById(progressId).textContent=`${finished} / ${total} مكتمل`}
}
function renderAll(){
 renderList("morningList",MORNING,document.getElementById("morningSearch")?.value||"","morningProgress");
 renderList("eveningList",EVENING,document.getElementById("eveningSearch")?.value||"","eveningProgress");
 const favData=[...MORNING,...EVENING].filter((x,i,a)=>favs.includes(x.id)&&a.findIndex(y=>y.id===x.id)===i);
 renderList("favoritesList",favData);
 updateHomeFav();
}
function updateHomeFav(){const e=document.getElementById("favCountHome");if(e)e.textContent=favs.length?`${favs.length} ذكر محفوظ`:"أذكارك المحفوظة"}

let current="home";
function go(id){current=id;document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));closeDrawer();window.scrollTo({top:0,behavior:"smooth"});if(location.hash!=="#"+id)history.replaceState(null,"","#"+id)}
document.addEventListener("click",e=>{const n=e.target.closest("[data-nav]");if(n)go(n.dataset.nav)});
if(location.hash && document.getElementById(location.hash.slice(1)))go(location.hash.slice(1));

document.getElementById("morningSearch").oninput=renderAll;
document.getElementById("eveningSearch").oninput=renderAll;

const drawer=document.getElementById("drawer"),overlay=document.getElementById("overlay");
function openDrawer(){drawer.classList.add("open");overlay.classList.add("show")}function closeDrawer(){drawer.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("menuBtn").onclick=openDrawer;document.getElementById("closeDrawer").onclick=closeDrawer;overlay.onclick=closeDrawer;

if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark");
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")};

let tasbeehName=localStorage.getItem("tasbeehName")||"سبحان الله";
let tasbeehCount=+(localStorage.getItem("tasbeehCount")||0);
let goal=+(localStorage.getItem("tasbeehGoal")||33);
const counterEl=document.getElementById("counter"),nameEl=document.getElementById("tasbeehName"),goalEl=document.getElementById("goalLabel"),goalSelect=document.getElementById("goal"),ring=document.querySelector(".ring");
function updateTasbeeh(){
 counterEl.textContent=tasbeehCount;nameEl.textContent=tasbeehName;goalEl.textContent=goal;goalSelect.value=goal;
 localStorage.setItem("tasbeehName",tasbeehName);localStorage.setItem("tasbeehCount",tasbeehCount);localStorage.setItem("tasbeehGoal",goal);
 const deg=Math.min(tasbeehCount/goal,1)*360;ring.style.background=`conic-gradient(var(--primary) 0deg,var(--primary) ${deg}deg,var(--soft) ${deg}deg,var(--soft) 360deg)`;
}
document.querySelectorAll(".dhikr-pick").forEach(b=>b.onclick=()=>{document.querySelectorAll(".dhikr-pick").forEach(x=>x.classList.remove("active"));b.classList.add("active");tasbeehName=b.dataset.dhikr;tasbeehCount=0;updateTasbeeh()});
document.getElementById("countBtn").onclick=()=>{tasbeehCount++;updateTasbeeh();navigator.vibrate?.(14)};
document.getElementById("minusBtn").onclick=()=>{tasbeehCount=Math.max(0,tasbeehCount-1);updateTasbeeh()};
document.getElementById("plusOneBtn").onclick=()=>{tasbeehCount++;updateTasbeeh()};
document.getElementById("resetBtn").onclick=()=>{tasbeehCount=0;updateTasbeeh()};
goalSelect.onchange=()=>{goal=+goalSelect.value;updateTasbeeh()};

renderAll();updateTasbeeh();
