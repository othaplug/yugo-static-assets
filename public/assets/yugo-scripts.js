/* PAGE LOADER */
window.addEventListener('load',()=>{
  const loader=document.getElementById('loader');
  if(loader){setTimeout(()=>loader.classList.add('done'),400);setTimeout(()=>loader.remove(),1100);}
});

/* CURSOR */
const cur=document.getElementById('cur');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function lp(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;if(cur){cur.style.left=cx+'px';cur.style.top=cy+'px';}requestAnimationFrame(lp);})();
function addH(sel){document.querySelectorAll(sel).forEach(el=>{el.addEventListener('mouseenter',()=>{if(cur)cur.classList.add('g');});el.addEventListener('mouseleave',()=>{if(cur)cur.classList.remove('g');});});}
addH('a,button,.tier,.vert,.step,.rev-card,.panel,.ugc-card,.fopt,.fcb,.p-svc,.j-card,.team-card,.val,.svc-item,.incl-col,.faq-item,.award-item');

/* PAGES */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+id);
  if(pg)pg.classList.add('active');
  document.querySelectorAll('.n-links button,.n-links a').forEach(l=>l.classList.remove('active'));
  const nl=document.getElementById('nl-'+id);
  if(nl)nl.classList.add('active');
  window.scrollTo(0,0);
  initRev();
}

/* REVEAL */
function initRev(){
  const els=document.querySelectorAll('.page.active .r:not(.in)');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>obs.observe(el));
}
document.addEventListener('DOMContentLoaded',()=>{initRev();setTimeout(initRev,150);});

/* MOBILE */
function toggleMob(){document.getElementById('mob').classList.toggle('open');}
function closeMob(){document.getElementById('mob').classList.remove('open');}

/* EMAIL CAPTURE */
function setCapType(btn,type){
  document.querySelectorAll('.cap-tb').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const i=document.getElementById('cap-in');
  if(i){i.type=type==='sms'?'tel':'email';i.placeholder=type==='sms'?'(416) 000-0000':'Enter your email';}
}
function capSubmit(){
  const i=document.getElementById('cap-in');
  if(i&&i.value.trim()){const v=i.value;i.value='';i.placeholder='Thank you - subscribed!';}
}

/* FAQ */
function toggleFaq(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>f.classList.remove('open'));
  if(!wasOpen)el.classList.add('open');
}

/* JOURNAL CATEGORIES */
function filterCat(btn,cat){
  document.querySelectorAll('.jcat').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
}

/* ARTICLE DATA & TEMPLATE ENGINE */
const ARTICLES={
  'white-glove-promise':{
    cat:'The Craft',date:'April 8, 2026',read:'6 min read',
    title:'Why the white glove isn\'t a metaphor — it\'s a <i>promise.</i>',
    author:'Oché',init:'O',
    body:`<p>The white glove is the most recognisable symbol in luxury service. In hospitality, it means anticipation. In fine art handling, it means protection. At Yugo, it means both — and something more specific: it means that the person handling your possessions understands their value is not measured in dollars.</p>
<h2>The origin of the <i>standard.</i></h2>
<p>When we started Yugo in 2022, we studied every premium service category we could find — not just moving companies, but hospitality brands, private aviation, luxury retail, concierge medicine. What we found was a consistent thread: the best operators in every field didn't just deliver a service. They delivered a feeling. The feeling that someone competent, careful, and genuinely invested was handling the thing you cared about.</p>
<p>That's what the white glove represents. Not a costume. Not a marketing prop. A commitment to a specific standard of care that begins before we arrive at your door and extends well after we leave.</p>
<div class="article-divider"></div>
<h2>What it looks like <i>in practice.</i></h2>
<p>Every Yugo crew member arrives in full uniform. The crew lead introduces each team member by name. Before a single item moves, we do a walkthrough with the client to confirm every detail — access points, fragile items, placement preferences, elevator timing, parking logistics.</p>
<p>Every piece of furniture is fully wrapped and protected before it's moved. Floors are covered. Doorframes are padded. Your tracking link goes live on OPS+ so you can follow the move in real time without having to be present.</p>
<blockquote>"The standard isn't the white glove itself. It's what happens when someone wearing it treats your grandmother's writing desk with the same attention a curator gives a Rothko."</blockquote>
<p>At the destination, every item is placed exactly where the client wants it. Boxes go in the right rooms. Furniture is assembled if needed. A final walkthrough is done together before the crew signs off digitally in OPS+.</p>
<div class="article-pullstat"><div class="article-pullstat-num">400+</div><div class="article-pullstat-text">Five-star reviews from clients who expected the finest and received exactly that. Not a single damage claim unresolved.</div></div>
<p>The white glove isn't a metaphor. It's the most visible part of an invisible system — one built on training, documentation, accountability, and the simple belief that every person deserves to have their belongings handled as if they were irreplaceable. Because to the person who owns them, they are.</p>`
  },
  'high-value-move':{
    cat:'Moving Guide',date:'March 28, 2026',read:'8 min read',
    title:'How to move a high-value home without <i>the anxiety.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>Moving a high-value home is fundamentally different from a standard residential move. The stakes are higher, the logistics are more complex, and the margin for error is essentially zero. This guide covers everything you should have in place six weeks before moving day.</p>
<h2>Six weeks out: <i>documentation.</i></h2>
<p>Start with a full inventory. Photograph every room, every piece of art, every high-value item. Note serial numbers on electronics. Record the condition of furniture surfaces. This documentation protects you in two ways: it gives your movers an accurate scope, and it provides a baseline if anything goes wrong.</p>
<p>Request a Certificate of Insurance (COI) from your moving company. At Yugo, we carry $5M in general liability and produce COIs within 24 hours. If your building requires specific coverage amounts or named additional insureds, we handle that too.</p>
<h2>Four weeks out: <i>building logistics.</i></h2>
<p>Contact both your origin and destination buildings. Book freight elevators for the full duration you'll need — not a two-hour window. Confirm parking permit requirements. Ask about lobby protection deposits. Find out if there are blackout dates or move-in fees.</p>
<p>Your moving company should handle all of this for you. At Yugo, your dedicated coordinator manages every building communication, permit, and elevator booking. You shouldn't be on the phone with a property manager — we should.</p>
<div class="article-divider"></div>
<h2>Two weeks out: <i>packing strategy.</i></h2>
<p>For Estate-tier moves, Yugo sends a crew to your home before moving day to pack everything. Every box is labelled by room and content type. Fragile items get custom wrapping. Fine art gets custom crating. Wine collections get climate-appropriate packaging.</p>
<p>If you're packing yourself, start with rarely-used rooms and work forward. Label every box on three sides. Keep a master list of which boxes go to which room at the destination.</p>
<blockquote>"The anxiety doesn't come from the move itself. It comes from not knowing what's going to happen. Remove the unknowns, and you remove the anxiety."</blockquote>
<p>Moving day should feel like a well-rehearsed operation, not a surprise. With the right preparation and the right team, it will.</p>`
  },
  'gallery-delivery':{
    cat:'Fine Art Logistics',date:'March 14, 2026',read:'5 min read',
    title:'Inside the gallery delivery: from studio <i>to wall.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>We spent a day with Petroff Gallery documenting a collection move from climate-controlled storage to exhibition opening night. What happens between those two points is more complex than most people realise.</p>
<h2>The inventory <i>check.</i></h2>
<p>Before anything leaves storage, every piece is verified against the gallery's master inventory. Condition reports are reviewed. Crating is inspected. Any piece showing signs of environmental damage — humidity exposure, warping, foxing — is flagged immediately.</p>
<p>This isn't a formality. It's a legal requirement in most gallery insurance policies. If you can't document the condition of a work before transit, you can't prove a damage claim after.</p>
<h2>Climate-controlled <i>transit.</i></h2>
<p>The truck is climate-controlled to maintain stable temperature and humidity. Works are loaded vertically in custom A-frame racks, secured with archival padding. Nothing slides. Nothing shifts. Nothing touches another surface.</p>
<div class="article-pullstat"><div class="article-pullstat-num">15</div><div class="article-pullstat-text">The number of providers Petroff Gallery evaluated over twelve years. Yugo is the only one they recommend without reservation.</div></div>
<p>At the gallery, each work is unpacked in sequence according to the curator's hanging plan. Installation hardware is verified before any piece goes on the wall. The gallery's lighting designer works alongside our crew to ensure placement is exact.</p>
<blockquote>"Not once have they let us down. Not once have they been late. Not once have they damaged a piece."</blockquote>
<p>By the time the doors open, every work is hung, lit, and labelled. The only evidence we were there is the exhibition itself.</p>`
  },
  'ops-platform':{
    cat:'Behind the Platform',date:'February 22, 2026',read:'4 min read',
    title:'How OPS+ changed the way our partners <i>think about delivery.</i>',
    author:'Oché',init:'O',
    body:`<p>When we started building OPS+, the goal was simple: give our commercial partners the same visibility into their deliveries that they have into every other part of their business. What we didn't expect was how much it would change the way they work.</p>
<h2>The problem we <i>solved.</i></h2>
<p>Before OPS+, our partners relied on phone calls and text messages to track deliveries. "Where's the truck?" "When will you arrive?" "Did the client sign off?" Every question required a human response. Every response took time. And if the information was wrong — or late — the partner's client experience suffered.</p>
<p>OPS+ replaced all of that with a single dashboard. Real-time GPS tracking. Automated SMS notifications to end clients. Digital sign-off with photos. Full job documentation stored permanently and accessible from anywhere.</p>
<h2>What partners <i>actually use.</i></h2>
<p>The features our partners use most aren't the ones we expected. It's not the GPS tracking — though they use that. It's the co-branded client communication. When an interior designer's client gets a delivery notification, it comes from both the designer and Yugo. The designer's brand is front and centre. The client feels taken care of. The designer doesn't have to lift a finger.</p>
<div class="article-divider"></div>
<p>The second most-used feature is consolidated billing. One invoice per month, all jobs, all verticals. No per-job administration. No chasing receipts. For partners with high volume, this alone saves hours of administrative work every month.</p>
<blockquote>"OPS+ didn't just improve our delivery operations. It made delivery a feature of our client experience instead of a risk."</blockquote>
<p>We built OPS+ ourselves because no off-the-shelf logistics platform was designed for white-glove service. They were designed for throughput. We needed something designed for care.</p>`
  },
  'lori-morris':{
    cat:'Partner Stories',date:'February 8, 2026',read:'7 min read',
    title:'What Lori Morris Design looks for in a <i>logistics partner.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>We sat down with Lori Morris to talk about FF&E delivery, the cost of mistakes, and why the last 10% of a project installation is the most important — and the most easily ruined — part of the work.</p>
<h2>The last ten <i>percent.</i></h2>
<p>"You spend months designing a space," Lori told us. "You source materials from six countries. You manage contractors, timelines, client expectations. And then the final delivery — the moment the client actually sees the finished space — is handed to a logistics company that treats a $40,000 custom sofa the same way they'd treat a box of paper towels."</p>
<p>That's the gap Lori was trying to close when she started working with Yugo. She needed a logistics partner who understood that the delivery wasn't a separate event from the design project — it was the climax of it.</p>
<h2>What went <i>wrong before.</i></h2>
<p>Before Yugo, Lori's team managed deliveries themselves. They'd hire general movers, send a project manager to supervise, and hope for the best. The results were inconsistent. Furniture arrived damaged. Crews didn't know how to handle specialty pieces. Placement was approximate at best.</p>
<blockquote>"Three installations in one day. Not a scratch. Not a minute late. The only logistics partner we use."</blockquote>
<p>The cost wasn't just financial — though damage claims added up. It was reputational. When a client sees a scratch on a new console table, they don't blame the movers. They blame the designer.</p>
<div class="article-pullstat"><div class="article-pullstat-num">3</div><div class="article-pullstat-text">Installations completed in a single day for Lori Morris Design. Zero damage. Zero delays. Full OPS+ documentation.</div></div>
<h2>What changed <i>with Yugo.</i></h2>
<p>Lori now books all FF&E deliveries through Yugo's OPS+ partner portal. Her project manager schedules the job, uploads the placement spec, and the Yugo crew handles the rest — from pickup at the vendor to final placement in the client's home.</p>
<p>Every piece is documented before and after transit. The client receives a co-branded delivery notification. And Lori's team reviews the completed job through OPS+ without ever having to be on site.</p>
<p>"I don't think about logistics anymore," she said. "I think about design. That's how it should be."</p>`
  },
  'condo-move-guide':{
    cat:'Moving Guide',date:'January 30, 2026',read:'6 min read',
    title:'The Toronto condo move: everything your building manager <i>won\'t tell you.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>Moving into or out of a Toronto condo is a different experience from a house move. There are building rules, elevator bookings, lobby protection requirements, and time windows that can derail your move if you don't plan for them. Here's what you need to know.</p>
<h2>Elevator bookings <i>aren't optional.</i></h2>
<p>Most condos require you to book the freight elevator in advance — sometimes weeks in advance. Miss the booking, and you'll be moving furniture through a standard elevator one piece at a time, holding the door for every trip. Or worse, your building won't let you move at all.</p>
<p>At Yugo, your coordinator handles elevator bookings directly with your building management. We know the requirements for most major Toronto condos. We know which buildings need 48 hours notice and which need two weeks.</p>
<h2>Lobby protection <i>deposits.</i></h2>
<p>Many buildings require a lobby protection deposit — typically $500 to $2,000 — before they'll allow a move. Some buildings also require your moving company to carry specific insurance minimums and provide a Certificate of Insurance (COI) naming the condo corporation as an additional insured.</p>
<p>Yugo handles COI requests within 24 hours. We carry $5M in general liability, which exceeds the requirements of every condo building we've worked with in Toronto.</p>
<div class="article-divider"></div>
<h2>Time windows <i>matter.</i></h2>
<p>Most buildings restrict moves to specific hours — often 9am to 5pm on weekdays, with some allowing Saturday moves. Going over your elevator booking time can result in penalties. Starting late because your movers arrived late is not an excuse most building managers accept.</p>
<blockquote>"Yugo doesn't give you a window. They give you a time. And they're there."</blockquote>
<p>The biggest mistake condo movers make is treating the move like a house move with an elevator. It's not. It's a logistics operation with fixed time constraints, building regulations, and access requirements that need to be managed proactively.</p>`
  },
  'grand-piano':{
    cat:'The Craft',date:'January 15, 2026',read:'4 min read',
    title:'How we move a grand piano without touching <i>a single key.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>A grand piano is one of the most complex items any moving company can handle. It's heavy, fragile, acoustically sensitive, and shaped in a way that makes conventional moving equipment almost useless. Here's how we do it.</p>
<h2>The team <i>configuration.</i></h2>
<p>A grand piano move requires a minimum of three crew members, and usually four. Each person has a specific role: two on the body, one on the legs and lyre, and one managing the path — clearing obstacles, holding doors, operating the elevator, and communicating with the rest of the team.</p>
<p>We don't use general crews for piano moves. Every crew member assigned to a piano job has been trained specifically on piano handling — including how to remove and reattach legs, how to wrap the case without pressing against the keys, and how to navigate the instrument through tight spaces without applying lateral pressure to the frame.</p>
<h2>The equipment.</i></h2>
<p>We use a piano board — a reinforced, padded platform designed specifically for grand pianos. The piano is placed on its side (always the flat side, never the curved side), secured to the board, and wrapped in moving blankets and stretch film.</p>
<div class="article-pullstat"><div class="article-pullstat-num">0</div><div class="article-pullstat-text">Damage incidents on piano moves since Yugo's founding. Zero scratches. Zero broken keys. Zero tuning issues caused by mishandling.</div></div>
<p>The legs are removed and wrapped separately. The pedal lyre is detached and protected. The lid is secured shut. Every brass fitting is covered.</p>
<blockquote>"A piano isn't furniture. It's an instrument. And moving it requires the same precision as tuning it."</blockquote>
<p>At the destination, everything is reassembled. The piano is placed on its legs, levelled, and positioned exactly where the client wants it. We recommend scheduling a tuning two weeks after the move — not because we've done anything wrong, but because the instrument needs time to settle into its new environment.</p>`
  },
  'ten-things-moving':{
    cat:'Luxury Living',date:'January 3, 2026',read:'5 min read',
    title:'The ten things worth spending more on <i>when you move.</i>',
    author:'Yugo Editorial',init:'Y',
    body:`<p>This isn't the obvious list. "Hire good movers" is not on it — that should be a given. These are the small, non-obvious decisions that determine whether move day is a smooth transition or a trauma.</p>
<h2>1. A pre-move <i>walkthrough.</i></h2>
<p>Pay for a coordinator to visit your home before moving day. They'll identify access issues, flag fragile items, and create a plan that the crew follows on the day. The cost of a walkthrough is a fraction of the cost of a mistake that could have been prevented by one.</p>
<h2>2. Proper packing <i>materials.</i></h2>
<p>The difference between your dishes arriving intact and arriving in pieces is often the difference between using proper dish-pack boxes with cell dividers and using a regular box with newspaper. Spend the money on the right materials.</p>
<h2>3. Art crating <i>vs. art wrapping.</i></h2>
<p>Blanket-wrapping a painting works for a local move of a low-value piece. For anything you care about — especially works with protruding elements, textured surfaces, or delicate frames — custom crating is the only responsible option.</p>
<div class="article-divider"></div>
<h2>4. A last-night <i>hotel.</i></h2>
<p>If your move spans two days or involves a complex departure, book a hotel for the night between. Sleeping in an empty apartment on an air mattress does not make you tough. It makes you exhausted on the day your most important belongings are being loaded onto a truck.</p>
<h2>5. Post-move <i>cleaning.</i></h2>
<p>Hire a cleaner for your origin address. Most leases and sales contracts require a broom-clean handover. Your movers should not be doing this — their job is to move your things, not scrub your floors.</p>
<blockquote>"The best moves feel invisible. You leave one home and arrive at another, and everything is exactly where it should be."</blockquote>
<p>The remaining five? A dedicated move coordinator, assembly service at destination, floor protection during the move, a post-move walkthrough, and — perhaps most importantly — enough time. Rushing a move is the single most expensive mistake you can make, because the costs don't show up until after the truck has left.</p>`
  }
};

const ARTICLE_SLUGS=['white-glove-promise','high-value-move','gallery-delivery','ops-platform','lori-morris','condo-move-guide','grand-piano','ten-things-moving'];

function showArticle(slug){
  const a=ARTICLES[slug];
  if(!a)return;
  document.getElementById('art-cat').textContent=a.cat;
  document.getElementById('art-title').innerHTML=a.title;
  document.getElementById('art-date').textContent=a.date;
  document.getElementById('art-read').textContent=a.read;
  document.getElementById('art-body').innerHTML=a.body;
  document.getElementById('art-author-name').textContent=a.author;
  document.getElementById('art-author-init').textContent=a.init;
  /* Build related articles (show 3 others) */
  const others=ARTICLE_SLUGS.filter(s=>s!==slug).slice(0,3);
  const colors=['jv1','jv2','jv3'];
  let rhtml='';
  others.forEach((s,i)=>{
    const r=ARTICLES[s];
    if(!r)return;
    const shortTitle=r.title.replace(/<\/?i>/g,'');
    rhtml+=`<div class="j-card" onclick="showArticle('${s}')"><div class="j-vis ${colors[i%3]}"><div class="j-wm">${r.cat.split(' ')[0]}</div></div><div class="j-meta"><div class="j-cat">${r.cat}</div><div class="j-ttl">${shortTitle.length>60?shortTitle.substring(0,57)+'...':shortTitle}</div><div class="j-dt">${r.date}</div></div></div>`;
  });
  document.getElementById('art-related').innerHTML=rhtml;
  showPage('article');
}

/* MODAL SHARED */
function oModal(id){
  const el=document.getElementById(id);
  if(el){el.classList.add('open');document.body.style.overflow='hidden';}
}
function cModal(id){
  const el=document.getElementById(id);
  if(el){el.classList.remove('open');document.body.style.overflow='';}
}
function oclick(e,id){if(e.target===document.getElementById(id))cModal(id);}
function pickO(el,grp){document.querySelectorAll('#'+grp+' .fopt').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');}
function pickSvc(el,grp){document.querySelectorAll('#'+grp+' .p-svc').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');}
function singCB(el,grp){document.querySelectorAll('#'+grp+' .fcb').forEach(o=>o.classList.remove('sel'));el.classList.add('sel');}
function tog(el){el.classList.toggle('sel');}
function togSvc(el){el.classList.toggle('sel');}

/* QUOTE MODAL - CORE */
const TIERS_APPLY=['home','long-distance','last-minute'];

function openQuote(){
  oModal('q-overlay');
  document.querySelectorAll('#q-modal .fs').forEach(s=>s.classList.remove('on'));
  document.getElementById('q-suc').classList.remove('on');
  document.getElementById('qs1').classList.add('on');
  document.getElementById('q-prog').style.width='25%';
  document.querySelectorAll('#q-svc .fopt').forEach(o=>o.classList.remove('sel'));
  document.getElementById('qn1').disabled=true;
}

function openQuoteWithTier(tier){
  openQuote();
  setTimeout(()=>{
    document.querySelectorAll('#q-svc .fopt').forEach(o=>{
      if(o.querySelector('input')&&o.querySelector('input').value==='home'){
        o.classList.add('sel');
        o.querySelector('input').checked=true;
        document.getElementById('qn1').disabled=false;
        buildQ2('home');
      }
    });
    setTimeout(()=>{
      document.querySelectorAll('#q-tier .fopt').forEach(o=>{
        if(o.querySelector('input')&&o.querySelector('input').value===tier){
          o.classList.add('sel');
          o.querySelector('input').checked=true;
          document.getElementById('qn3').disabled=false;
        }
      });
    },50);
  },80);
}

function openQuoteType(type){
  openQuote();
  setTimeout(()=>{
    document.querySelectorAll('#q-svc .fopt').forEach(o=>{
      if(o.querySelector('input')&&o.querySelector('input').value===type){
        o.classList.add('sel');
        o.querySelector('input').checked=true;
        document.getElementById('qn1').disabled=false;
        buildQ2(type);
      }
    });
  },80);
}

function setQ1(){
  document.getElementById('qn1').disabled=false;
  const sel=document.querySelector('#q-svc .sel input');
  if(sel)buildQ2(sel.value);
}

/* STEP 2 DYNAMIC FIELDS - 7 UNIQUE FLOWS */
const Q2FIELDS={
  'home':{
    h:'Tell us about <i>your move.</i>',
    f:`<div class="fr"><div class="fg"><label>Moving from</label><input class="fi" type="text" placeholder="City or postal code"></div><div class="fg"><label>Moving to</label><input class="fi" type="text" placeholder="City or postal code"></div></div><div class="fr"><div class="fg"><label>Preferred date</label><input class="fi" type="date"></div><div class="fg"><label>Property type</label><select class="fi"><option value="" disabled selected>Select type</option><option>Condo / Apartment</option><option>House (detached)</option><option>Semi-detached</option><option>Townhouse</option></select></div></div><div class="fr"><div class="fg"><label>Home size</label><select class="fi"><option value="" disabled selected>Select size</option><option>Studio / Bachelor</option><option>1 Bedroom</option><option>2 Bedrooms</option><option>3 Bedrooms</option><option>4+ Bedrooms</option></select></div><div class="fg"><label>Elevator or stairs?</label><select class="fi"><option value="" disabled selected>Select access</option><option>Elevator available</option><option>Walk-up (2nd floor)</option><option>Walk-up (3rd floor+)</option><option>Ground level / house</option></select></div></div>`
  },
  'estate':{
    h:'Tell us about your <i>estate move.</i>',
    f:`<div class="fr"><div class="fg"><label>Property address</label><input class="fi" type="text" placeholder="Current home address"></div><div class="fg"><label>Destination address</label><input class="fi" type="text" placeholder="New home address"></div></div><div class="fr"><div class="fg"><label>Property size</label><select class="fi"><option value="" disabled selected>Select size</option><option>3,000 - 5,000 sq ft</option><option>5,000 - 8,000 sq ft</option><option>8,000 - 12,000 sq ft</option><option>12,000+ sq ft</option></select></div><div class="fg"><label>Preferred move date</label><input class="fi" type="date"></div></div><div class="fr"><div class="fg"><label>Fine art or antiques?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - significant collection</option><option>Yes - a few pieces</option><option>No</option></select></div><div class="fg"><label>Wine cellar or specialty storage?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - wine collection</option><option>Yes - other specialty storage</option><option>No</option></select></div></div><div class="fg"><label>Do you require a pre-move home consultation?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - schedule a consultation</option><option>Maybe - I'd like to discuss</option><option>No - I know what I need</option></select></div>`
  },
  'office':{
    h:'Tell us about <i>your office move.</i>',
    f:`<div class="fr"><div class="fg"><label>Current office address</label><input class="fi" type="text" placeholder="Address or building name"></div><div class="fg"><label>New office address</label><input class="fi" type="text" placeholder="Address or building name"></div></div><div class="fr"><div class="fg"><label>Preferred move date</label><input class="fi" type="date"></div><div class="fg"><label>Office size</label><select class="fi"><option value="" disabled selected>Select</option><option>Under 10 workstations</option><option>10 - 50 workstations</option><option>50 - 200 workstations</option><option>Full floor / multi-floor</option></select></div></div><div class="fr"><div class="fg"><label>IT equipment involved?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - servers, network hardware</option><option>Yes - standard computers only</option><option>No - already handled separately</option></select></div><div class="fg"><label>After-hours or weekend move?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - must be off-hours</option><option>Weekends preferred</option><option>Business hours are fine</option><option>Flexible</option></select></div></div><div class="fg"><label>Is this part of a corporate relocation program?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - single office move</option><option>Yes - multi-site relocation</option><option>No - independent business</option></select></div>`
  },
  'long-distance':{
    h:'Tell us about your <i>long-distance move.</i>',
    f:`<div class="fr"><div class="fg"><label>Origin city / address</label><input class="fi" type="text" placeholder="e.g. Toronto, ON"></div><div class="fg"><label>Destination city</label><input class="fi" type="text" placeholder="e.g. Ottawa, ON"></div></div><div class="fr"><div class="fg"><label>Preferred date</label><input class="fi" type="date"></div><div class="fg"><label>Approximate distance</label><select class="fi"><option value="" disabled selected>Select</option><option>100 - 200 km</option><option>200 - 500 km</option><option>500 - 1,000 km</option><option>1,000+ km</option></select></div></div><div class="fr"><div class="fg"><label>Property type at origin</label><select class="fi"><option value="" disabled selected>Select</option><option>Condo / Apartment</option><option>House</option><option>Townhouse</option><option>Estate / Luxury home</option></select></div><div class="fg"><label>Home size</label><select class="fi"><option value="" disabled selected>Select</option><option>Studio / 1 bedroom</option><option>2 bedrooms</option><option>3 bedrooms</option><option>4+ bedrooms</option></select></div></div><div class="fg"><label>Do you need temporary storage at either end?</label><select class="fi"><option value="" disabled selected>Select</option><option>Yes - at origin</option><option>Yes - at destination</option><option>Yes - both ends</option><option>No</option></select></div>`
  },
  'specialty':{
    h:'Tell us about your <i>specialty item.</i>',
    f:`<div class="fg"><label>Item type</label><select class="fi"><option value="" disabled selected>Select item type</option><option>Grand piano</option><option>Upright piano</option><option>Gun safe / vault</option><option>Framed fine art</option><option>Sculpture / oversized art</option><option>Antique furniture</option><option>Wine collection</option><option>Medical / scientific equipment</option><option>Marble / stone piece</option><option>Other specialty item</option></select></div><div class="fr"><div class="fg"><label>Pickup address</label><input class="fi" type="text" placeholder="Full address"></div><div class="fg"><label>Delivery address</label><input class="fi" type="text" placeholder="Full address"></div></div><div class="fr"><div class="fg"><label>Preferred date</label><input class="fi" type="date"></div><div class="fg"><label>Approximate dimensions & weight</label><input class="fi" type="text" placeholder="e.g. 6ft grand piano, ~500 lbs"></div></div><div class="fr"><div class="fg"><label>Floor / access at pickup</label><select class="fi"><option value="" disabled selected>Select</option><option>Ground level</option><option>Elevator available</option><option>Stairs only (2nd floor)</option><option>Stairs only (3rd+)</option></select></div><div class="fg"><label>Floor / access at delivery</label><select class="fi"><option value="" disabled selected>Select</option><option>Ground level</option><option>Elevator available</option><option>Stairs only (2nd floor)</option><option>Stairs only (3rd+)</option></select></div></div>`
  },
  'event':{
    h:'Tell us about your <i>event.</i>',
    f:`<div class="fg"><label>Event type</label><select class="fi"><option value="" disabled selected>Select event type</option><option>Corporate event / conference</option><option>Art exhibition / gallery opening</option><option>Hospitality / restaurant opening</option><option>Private residence event</option><option>Trade show / pop-up</option><option>Film / photo shoot</option><option>Other</option></select></div><div class="fr"><div class="fg"><label>Venue name & address</label><input class="fi" type="text" placeholder="Venue name or address"></div><div class="fg"><label>Event date</label><input class="fi" type="date"></div></div><div class="fr"><div class="fg"><label>Setup date & time (if different)</label><input class="fi" type="text" placeholder="e.g. Oct 15, 7:00 AM"></div><div class="fg"><label>Teardown date & time</label><input class="fi" type="text" placeholder="e.g. Oct 16, 11:00 PM"></div></div><div class="fg"><label>What needs to be moved, delivered, or set up?</label><textarea class="fi" placeholder="Tables, chairs, AV equipment, art pieces, furniture, staging, signage..."></textarea></div><div class="fg"><label>Estimated number of items or truck loads</label><select class="fi"><option value="" disabled selected>Select</option><option>Small (under 20 items)</option><option>Medium (20-50 items)</option><option>Large (50+ items / multi-truck)</option><option>Not sure yet</option></select></div>`
  },
  'last-minute':{
    h:'Tell us about your <i>urgent move.</i>',
    f:`<div class="fr"><div class="fg"><label>Moving from</label><input class="fi" type="text" placeholder="Full address"></div><div class="fg"><label>Moving to</label><input class="fi" type="text" placeholder="Full address"></div></div><div class="fr"><div class="fg"><label>When do you need us?</label><select class="fi"><option value="" disabled selected>Select timeframe</option><option>Today (same day)</option><option>Tomorrow</option><option>Within 48 hours</option></select></div><div class="fg"><label>What are we moving?</label><select class="fi"><option value="" disabled selected>Select</option><option>Full home (studio / 1BR)</option><option>Full home (2-3 BR)</option><option>Full home (4+ BR)</option><option>Partial move / few items only</option><option>Single specialty item</option></select></div></div><div class="fg"><label>Why the urgency? <span style="opacity:.4;font-size:.85em;text-transform:none;letter-spacing:0">(helps us prioritise)</span></label><select class="fi"><option value="" disabled selected>Select</option><option>Lease ending / closing date</option><option>Emergency / unexpected situation</option><option>Schedule change</option><option>Other mover cancelled</option><option>Prefer not to say</option></select></div><div class="fg"><label>Anything else we should know?</label><textarea class="fi" placeholder="Access restrictions, fragile items, elevator availability, parking notes..."></textarea></div>`
  }
};

/* STEP 3 TYPE-AWARE CONTENT */
const Q3ADDONS={
  'home':{
    cbs:['Packing','Unpacking','Assembly','Disassembly','Fine Art','Piano / Safe','Cleaning','Junk Removal','Elevator Booking'],
    note:'Fragile items, access restrictions, parking, special requests...',
    howHeard:true
  },
  'estate':{
    cbs:['Full Packing & Crating','Custom Crating','Fine Art Handling','Piano Moving','Wine Cellar Transfer','Wardrobe Service','Post-Move Styling','Cleaning (Move-Out)','Cleaning (Move-In)','Concierge Aftercare'],
    note:'Security requirements, gated access, specific scheduling windows, staff coordination...',
    howHeard:true
  },
  'office':{
    cbs:['IT Disconnect & Reconnect','Furniture Disassembly','Furniture Assembly','Workstation Setup','Filing / Document Packing','Signage & Branding Install','Post-Move Cleaning','Junk / E-Waste Removal'],
    note:'Building access rules, freight elevator hours, security requirements, phased move needs...',
    howHeard:true
  },
  'long-distance':{
    cbs:['Full Packing','Unpacking at Destination','Vehicle Transport','Storage (Origin)','Storage (Destination)','Fine Art','Piano / Safe','Assembly','Disassembly'],
    note:'Delivery window preferences, overnight stops, items requiring climate control...',
    howHeard:true
  },
  'specialty':{
    cbs:['Custom Crating','Climate-Controlled Transport','Insurance Valuation','White-Glove Placement','Rigging / Crane Required','Wall Mounting / Installation'],
    note:'Exact dimensions, insurance value, special handling instructions, photos available...',
    howHeard:true
  },
  'event':{
    cbs:['Setup Labour','Teardown Labour','On-Site Standby Crew','Overnight Security Watch','Return Transport','Staging & Display Build','AV Equipment Handling'],
    note:'Load-in dock details, venue contact, union requirements, certificate of insurance needed...',
    howHeard:true
  },
  'last-minute':{
    cbs:['Packing (We Do It All)','Unpacking','Assembly','Disassembly','Cleaning','Junk Removal','Elevator Booking','Overnight Storage'],
    note:'Anything that will help us get there faster and move you safely...',
    howHeard:false
  }
};

function buildQ2(type){
  const d=Q2FIELDS[type]||Q2FIELDS['home'];
  const h=document.getElementById('qs2h');
  const f=document.getElementById('qs2f');
  if(h)h.innerHTML=d.h;
  if(f)f.innerHTML=d.f;
}

function buildQ3(type){
  const a=Q3ADDONS[type]||Q3ADDONS['home'];
  const showTier=TIERS_APPLY.includes(type);
  /* Tier section */
  const tierSec=document.getElementById('qs3-tier-section');
  if(tierSec)tierSec.style.display=showTier?'block':'none';
  /* Enable continue if no tier needed */
  const qn3=document.getElementById('qn3');
  if(qn3&&!showTier)qn3.disabled=false;
  if(qn3&&showTier){
    const hasTier=document.querySelector('#q-tier .sel');
    qn3.disabled=!hasTier;
  }
  /* Build add-on checkboxes */
  const cbsEl=document.getElementById('qs3-cbs');
  if(cbsEl){
    let cbh='';
    a.cbs.forEach(c=>{
      cbh+=`<label class="fcb" onclick="tog(this)"><input type="checkbox"><div class="fcb-t">${c}</div></label>`;
    });
    cbsEl.innerHTML=cbh;
  }
  /* Notes placeholder */
  const noteEl=document.getElementById('qs3-notes');
  if(noteEl)noteEl.placeholder=a.note;
  /* How heard */
  const hhEl=document.getElementById('qs3-hh');
  if(hhEl)hhEl.style.display=a.howHeard?'block':'none';
}

function qGo(n){
  const selInput=document.querySelector('#q-svc .sel input');
  const type=selInput?selInput.value:'home';

  if(n===2)buildQ2(type);
  if(n===3)buildQ3(type);

  document.querySelectorAll('#q-modal .fs').forEach(s=>s.classList.remove('on'));
  document.getElementById('q-suc').classList.remove('on');
  const s=document.getElementById('qs'+n);
  if(s)s.classList.add('on');
  const pct=[25,50,75,100][n-1]||100;
  const prog=document.getElementById('q-prog');
  if(prog)prog.style.width=pct+'%';
  const modal=document.getElementById('q-modal');
  if(modal)modal.scrollTop=0;
}

function enableQN3(){
  const el=document.getElementById('qn3');
  if(el)el.disabled=false;
}

function qSubmit(){
  const fn=(document.getElementById('qfn')||{}).value||'';
  const em=(document.getElementById('qem')||{}).value||'';
  const fnEl=document.getElementById('qfn');
  const emEl=document.getElementById('qem');
  if(!fn.trim()){if(fnEl){fnEl.style.borderColor='rgba(180,40,40,.7)';fnEl.focus();}return;}
  if(!em.trim()||!em.includes('@')){if(emEl){emEl.style.borderColor='rgba(180,40,40,.7)';emEl.focus();}return;}
  document.querySelectorAll('#q-modal .fs').forEach(s=>s.classList.remove('on'));
  const suc=document.getElementById('q-suc');
  if(suc)suc.classList.add('on');
  const prog=document.getElementById('q-prog');
  if(prog)prog.style.width='100%';
  const modal=document.getElementById('q-modal');
  if(modal)modal.scrollTop=0;
}

/* PARTNER MODAL - CORE */
function openPartner(){
  oModal('p-overlay');
  document.querySelectorAll('#p-modal .fs').forEach(s=>s.classList.remove('on'));
  document.getElementById('p-suc').classList.remove('on');
  document.getElementById('ps1').classList.add('on');
  const prog=document.getElementById('p-prog');
  if(prog)prog.style.width='20%';
  document.querySelectorAll('#p-biz .p-svc').forEach(o=>o.classList.remove('sel'));
  const pn1=document.getElementById('pn1');
  if(pn1)pn1.disabled=true;
}

function pGo(n){
  document.querySelectorAll('#p-modal .fs').forEach(s=>s.classList.remove('on'));
  document.getElementById('p-suc').classList.remove('on');
  const s=document.getElementById('ps'+n);
  if(s)s.classList.add('on');
  const pct=[20,40,60,80,100][n-1]||100;
  const prog=document.getElementById('p-prog');
  if(prog)prog.style.width=pct+'%';
  const modal=document.getElementById('p-modal');
  if(modal)modal.scrollTop=0;
}

function enPN1(){
  const el=document.getElementById('pn1');
  if(el)el.disabled=false;
}

function pSubmit(){
  const fn=(document.getElementById('pfn')||{}).value||'';
  const em=(document.getElementById('pem')||{}).value||'';
  const fnEl=document.getElementById('pfn');
  const emEl=document.getElementById('pem');
  if(!fn.trim()){if(fnEl){fnEl.style.borderColor='rgba(180,40,40,.7)';fnEl.focus();}return;}
  if(!em.trim()||!em.includes('@')){if(emEl){emEl.style.borderColor='rgba(180,40,40,.7)';emEl.focus();}return;}
  document.querySelectorAll('#p-modal .fs').forEach(s=>s.classList.remove('on'));
  const suc=document.getElementById('p-suc');
  if(suc)suc.classList.add('on');
  const prog=document.getElementById('p-prog');
  if(prog)prog.style.width='100%';
  const modal=document.getElementById('p-modal');
  if(modal)modal.scrollTop=0;
}
