import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let lightColor = "#fff"
  let darkColor = "#000"
  let r1 = "<"
  let r2 = ">"
  let r3 = "</"
  let r4 = "/>"
  let r5 = "{"
  let r6 = "}"
  const [shtml, setshtml] = useState(0)
  const [scss, setscss] = useState(0)
  const [sjs, setsjs] = useState(0)
  const [sreact, setsreact] = useState(0)
  const [sjqwery, setsjqwery] = useState(0)
  const [swordpress, setswordpress] = useState(0)
  const [act1, setact1] = useState(false)
  const [act2, setact2] = useState(false)
  const [act3, setact3] = useState(false)
  const [act4, setact4] = useState(false)
  const [act5, setact5] = useState(false)
  const [act6, setact6] = useState(false)
  const [animt, setanimt] = useState("websites")
  const [animnum, setanimnum] = useState(1)
  const [animation, setanimation] = useState(true)
  const [cursor, setcursor] = useState(true)
  const [aer1, setaer1] = useState("on")
  const [aer2, setaer2] = useState("on")
  const [gmanim, setgmanim] = useState(true)
  const [pr, setpr] = useState(0)
  const [prtitle, setprtitle] = useState("")

  addEventListener("mousemove", function(event){
    if (cursor == true){
      let x = event.pageX
      let y = event.pageY
      $("#cursorr").css({top: y - 25 + "px", left: x - 25 + "px"})
      $("#cursordot").css({top: y - 3.5 + "px", left: x - 3.5 + "px"})
    }else if (cursor == false){
      
    }
  })

  useEffect(()=>{
    if (document.readyState) {
    let abCu = false
    setInterval(()=>{
      if (abCu == false){
        abCu = true
        $(".ab_cu").css("opacity", "100%")
      }else if (abCu == true){
        abCu = false
        $(".ab_cu").css("opacity", "0%")
      }
    }, 1000)
    function headerAnim(){
      setanimt("games")
      $(".games").css("display", "block")
      $(".websites").css("display", "none")
      $(".figma").css("display", "none")
      setTimeout(() => {
        setanimt("figma projects")
        $(".figma").css("display", "block")
        $(".websites").css("display", "none")
        $(".games").css("display", "none")
      }, 3000)
      setTimeout(() => {
        setanimt("websites")
        $(".websites").css("display", "block")
        $(".games").css("display", "none")
        $(".figma").css("display", "none")
      }, 6000)
    }
    setInterval(() => {
      headerAnim()
    }, 9000)
  }
  if (cursor == false){
    $("#cursorr").css("display", "none")
    $("#cursordot").css("display", "none")
    $("*").css("cursor", "default")
  }else if (cursor == true){
    $("#cursorr").css("display", "block")
    $("#cursordot").css("display", "block")
    $("*").css("cursor", "none")
  }
  },[])

  useEffect(()=>{
     $('html, body').animate({scrollTop: 0}, 10)
    setInterval(() => {
    if ($(document).scrollTop() != 0) {
      $(".btn_top").css("display", "flex")
    } else if ($(document).scrollTop() == 0) {
      $(".btn_top").css("display", "none")
    }
  }, 50)
  
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault()
      this.contact_number.value = Math.random() * 100000 | 0
      emailjs.sendForm('service_39fb5x4', 'template_y7c0kl4', this)
        .then(function () {
          $(".cont_h1").css("display", "block")
          $(".cont_i1").css("display", "none")
        }, function (error) {
          console.log('FAILED...', error)
        })
    })
 
  },[])

  function btnTop(){
    $('html, body').animate({scrollTop: $("#header").offset().top}, 1000)
  }

  function navHome(){
    $('html, body').animate({scrollTop: $("#header").offset().top}, 1000)
  }
  function navSkill(){
    $('html, body').animate({scrollTop: $("#skill").offset().top}, 1000)
  }
  function navProject(){
    $('html, body').animate({scrollTop: $("#project").offset().top}, 1000)
  }
  function navAbout(){
    $('html, body').animate({scrollTop: $("#about").offset().top}, 1000)
  }
  function navContact(){
    $('html, body').animate({scrollTop: $("#cont").offset().top}, 1000)
  }

  function Mskill1(){
    let leght = 93
    let i = 0
    $(".skill_html").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act1 == false){
        setact1(true)
        if(i < leght){
          i++
          setshtml(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  function Mskill2(){
    let leght = 91
    let i = 0
    $(".skill_css").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act2 == false){
        setact2(true)
        if(i < leght){
          i++
          setscss(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  function Mskill3(){
    let leght = 92
    let i = 0
    $(".skill_js").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act3 == false){
        setact3(true)
        if(i < leght){
          i++
          setsjs(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  function Mskill4(){
    let leght = 88
    let i = 0
    $(".skill_react").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act4 == false){
        setact4(true)
        if(i < leght){
          i++
          setsreact(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  function Mskill5(){
    let leght = 90
    let i = 0
    $(".skill_jqwery").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act5 == false){
        setact5(true)
        if(i < leght){
          i++
          setsjqwery(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  function Mskill6(){
    let leght = 85
    let i = 0
    $(".skill_wordpress").css("width", leght + "%")
    let interv = setInterval(()=>{
      if (act6 == false){
        setact6(true)
        if(i < leght){
          i++
          setswordpress(i)
        }else{
          clearInterval(interv)
        }
      }
    },5)
  }
  
  // setInterval(()=>{
  //   setanimt(rect[Math.floor(Math.random() * rect.length)])
  // }, 10000)
  
  // let fpsCounter = document.getElementById('fps');
  //   let frames = 0;
  //   let lastTime = performance.now();

  //   function updateFPS() {
  //     const now = performance.now();
  //     frames++;

  //     if (now - lastTime >= 1000) {
  //       fpsCounter.textContent = 'FPS: ' + frames;
  //       frames = 0;
  //       lastTime = now;
  //     }

  //     requestAnimationFrame(updateFPS);
  //   }

  //   updateFPS()
  // let gminterv = setInterval(()=>{
  //   if(gmanim == true){
  //     for(let i = 1; i <= 18; i++){ 
  //       $("#hGameP" + i).animate({left: Math.random() * (100 - 0) + 0 + "%"}, 0).animate({top: "0px"}, 0).animate({top: "220px"}, Math.random() * (6000 - 3000) + 3000)
  //     }
  //   }else if(gmanim == false){
  //     for(let i = 1; i <= 18; i++){
  //       $("#hGameP" + i).stop().stop().stop()
  //     }
  //   }
  // }, 10)
  function setting(){
    $(".settings").fadeIn(500)
    $(".settings").css("display", "flex")
  }
  function setanim(){
      if (animation == false){
      setanimation(true)
      setaer1("on")
      $("*").css("transition", "0.5s all ease")
      $("#cursorr").css("transition", "0.18s all ease")
    }else if (animation == true){
      setgmanim(true)
      setanimation(false)
      setaer1("off")
      $("*").css("transition", "none")
    }
  }
  function setcursorr(){
    if (cursor == false){
      setcursor(true)
      setaer2("on")
      $("#cursorr").css("display", "block")
      $("#cursordot").css("display", "block")
      $("*").css("cursor", "none")
    }else if (cursor == true){
      setcursor(false)
      setaer2("off")
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function setclose(){
    $(".settings").fadeOut(400)
  }
  let textr = ["websites", "games"]
  let rect = ["#", ",", "^", "@", "&", "%", "=", "+", "/", "!", "?", "|", "[", "]", "~", "`"]
  
  function projectOpen1(){
    setpr(1)
    setprtitle("Boldo")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function projectOpen2(){
    setpr(2)
    setprtitle("Coffee")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function projectOpen3(){
    setpr(3)
    setprtitle("Furniture")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function projectOpen4(){
    setpr(4)
    setprtitle("Global Work")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function projectOpen5(){
    setpr(5)
    setprtitle("Interior")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function projectOpen6(){
    setpr(6)
    setprtitle("Save Ukrane")
    $(".project_menu").fadeIn(500)
    $(".project_menu").css("display", "flex")
    if (cursor == true){
      $("#cursorr").css("display", "none")
      $("#cursordot").css("display", "none")
      $("*").css("cursor", "default")
    }
  }
  function closeProject(){
    $(".project_menu").fadeOut(500)
    if (cursor == true){
      $("#cursorr").css("display", "block")
      $("#cursordot").css("display", "block")
      $("*").css("cursor", "none")
    }
    setTimeout(() => {
      setpr(0)
      setprtitle("")
    }, 500)
  }
  return (
    <>
      <div id="cursorr"></div>
      <div id="cursordot"></div>
      <div className="box">
        <div className="settings">
          <div className="set_h1"><h1>Settings</h1><span id='set_close' onClick={setclose}>x</span></div>
          <button className='set_btn' onClick={setanim}>Animation: {aer1}</button>
          <button className='set_btn' onClick={setcursorr}>Cursor: {aer2}</button>
        </div>
        <nav>
          <div className="logo" onClick={setting}></div>
          <div className="navig">
            <p className="n_i" onClick={navHome}>Home<span className='rectgll2'>{r4}</span></p>
            <p className="n_i" onClick={navSkill}>My skills<span className='rectgll2'>{r4}</span></p>
            <p className="n_i" onClick={navProject}>My projects<span className='rectgll2'>{r4}</span></p>
            <p className="n_i" onClick={navAbout}>About me<span className='rectgll2'>{r4}</span></p>
            <p className="n_i" onClick={navContact}>Contact<span className='rectgll2'>{r4}</span></p>
          </div>
        </nav>
        <header id='header'>
          <div className="h_ib">
            {/* <h1 className="h_h1">
              <span className='tag_name'>
                <span className='rectgl'>{r1}</span>
                h1
                <span className='rectgl'>{r2}</span>
              </span>
              My portfolio
              <span className='tag_name'>
                <span className='rectgl'>{r3}</span>
                h1
                <span className='rectgl'>{r2}</span>
              </span>
            </h1> */}
            <p className="h_pp">{"Home " + r4}</p>
            <h1 className="h_h1 animate__animated animate__bounce wow animate__bounceInLeft">
              Hi, my name is <span className='tag_name'>Illia Sobol</span><br />
              I develop and <br/>design <span id='animated_text'>{animt} <div className="websites"></div><div className="games"></div><div className="figma"></div></span>
            </h1>
          </div>
          {/* <div className="header_game">
            <div className="hGame_monitor">
              <p className="hGame_text" id="hGameP1">1</p>
              <p className="hGame_text" id="hGameP2">2</p>
              <p className="hGame_text" id="hGameP3">3</p>
              <p className="hGame_text" id="hGameP4">4</p>
              <p className="hGame_text" id="hGameP5">5</p>
              <p className="hGame_text" id="hGameP6">6</p>
              <p className="hGame_text" id="hGameP7">7</p>
              <p className="hGame_text" id="hGameP8">8</p>
              <p className="hGame_text" id="hGameP9">9</p>
              <p className="hGame_text" id="hGameP10">10</p>
              <p className="hGame_text" id="hGameP11">11</p>
              <p className="hGame_text" id="hGameP12">12</p>
              <p className="hGame_text" id="hGameP13">13</p>
              <p className="hGame_text" id="hGameP14">14</p>
              <p className="hGame_text" id="hGameP15">15</p>
              <p className="hGame_text" id="hGameP16">16</p>
              <p className="hGame_text" id="hGameP17">17</p>
              <p className="hGame_text" id="hGameP18">18</p>
            </div>
          </div> */}
        </header>
        <main>
          <div className="main_i1" id='skill'>
            <h1 className="main_h1  animate__animated animate__bounce wow animate__bounceInLeft">My skills <span className='rectgll3'>{r4}</span></h1>
            <div className="main_ii1">
              <div className="main_skill"  onMouseEnter={Mskill1}>
                <div className="main_iii">
                  <div className="main_skill_ic1"></div>
                  <h2 className="main_h2">HTML</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_html"></div></div>
                  <p className="main_skill_prr">{shtml}%</p>
                </div>
              </div>
              <div className="main_skill" onMouseEnter={Mskill2}>
                <div className="main_iii">
                  <div className="main_skill_ic2"></div>
                  <h2 className="main_h2">CSS</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_css"></div></div>
                  <p className="main_skill_prr">{scss}%</p>
                </div>
              </div>
              <div className="main_skill" onMouseEnter={Mskill3 }>
                <div className="main_iii">
                  <div className="main_skill_ic3"></div>
                  <h2 className="main_h2">JS</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_js"></div></div>
                  <p className="main_skill_prr">{sjs}%</p>
                </div>
              </div>
              <div className="main_skill" onMouseEnter={Mskill4}>
                <div className="main_iii">
                  <div className="main_skill_ic4"></div>
                  <h2 className="main_h2">REACT</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_react"></div></div>
                  <p className="main_skill_prr">{sreact}%</p>
                </div>
              </div>
              <div className="main_skill" onMouseEnter={Mskill5}>
                <div className="main_iii">
                  <div className="main_skill_ic5"></div>
                  <h2 className="main_h2">JQuery</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_jqwery"></div></div>
                  <p className="main_skill_prr">{sjqwery}%</p>
                </div>
              </div>
              <div className="main_skill" onMouseEnter={Mskill6}>
                <div className="main_iii">
                  <div className="main_skill_ic6"></div>
                  <h2 className="main_h2">WordPress</h2>
                </div>
                <div className="main_iii">
                  <div className="main_skill_pr"><div className="skill_wordpress"></div></div>
                  <p className="main_skill_prr">{swordpress}%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects" id='project'>
            <h1 className="main_h1  animate__animated animate__bounce wow animate__bounceInLeft">My projects <span className='rectgll3'>{r4}</span></h1>
            <div className="prgct">
              <div className="project_i1" onClick={projectOpen1}>
                <div className="pr_shadow">
                  <p className="n_i">Boldo</p>
                </div>
              </div>
              <div className="project_i2" onClick={projectOpen2}>
                <div className="pr_shadow">
                  <p className="n_i">Coffee</p>
                </div>
              </div>
              <div className="project_i3" onClick={projectOpen3}>
                <div className="pr_shadow">
                  <p className="n_i">Furniture</p>
                </div>
              </div>
              <div className="project_i4" onClick={projectOpen4}>
                <div className="pr_shadow">
                  <p className="n_i">Global Work</p>
                </div>
              </div>
              <div className="project_i5" onClick={projectOpen5}>
                <div className="pr_shadow">
                  <p className="n_i">Interior</p>
                </div>
              </div>
              <div className="project_i6" onClick={projectOpen6}>
                <div className="pr_shadow">
                  <p className="n_i">Save Ukraine</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutme" id='about'>
            <h1 className="main_h1 animate__animated animate__bounce wow animate__bounceInLeft">About  <span className='rectgll3'>{r4}</span></h1>
            <div className="ab_cod">
              <div className="ab_numb">
                <div className="ab_n">01</div>
                <div className="ab_n">02</div>
                <div className="ab_n">03</div>
                <div className="ab_n">04</div>
                <div className="ab_n">05</div>
                <div className="ab_n">06</div>
                <div className="ab_n">07</div>
                <div className="ab_n">08</div>
                <div className="ab_n">09</div>
                <div className="ab_n">10</div>
                <div className="ab_n">11</div>
                <div className="ab_n">12</div>
                <div className="ab_n">13</div>
                <div className="ab_n">14</div>
                <div className="ab_n">15</div>
                <div className="ab_n">16</div>
                <div className="ab_n">17</div>
                <div className="ab_n">18</div>
                <div className="ab_n">19</div>
                <div className="ab_n">20</div>
                <div className="ab_n">21</div>
                <div className="ab_n">22</div>
                <div className="ab_n">23</div>
                <div className="ab_n">24</div>
                <div className="ab_n">25</div>
              </div>
              <div className="ab_text">
                <div className="ab_t"><span className='sp_fun'>class</span> <span className='sp_fun_name'>Sobol Illia</span> <span className="sp_r">{r5}</span></div>
                <div className="ab_t">··<span className='sp_fun_name'>constructor</span><span className="sp_r">() {r5}</span></div>
                <div className="ab_t">····<span className="sp_const">const</span> <span className="sp_const_name"> name</span> <span className="sp_r">=</span> <span className="sp_text">'Sobol Illia'</span></div>
                <div className="ab_t">····<span className="sp_const">const</span> <span className="sp_const_name">dayOfBirth</span> <span className="sp_r">=</span> <span className="sp_text">27.06.10</span></div>
                <div className="ab_t">····<span className="sp_const">const</span> <span className="sp_const_name">email</span> <span className="sp_r">=</span> <span className="sp_text">'sobolilly2961@gmail.com'</span></div>
                <div className="ab_t">··<span className="sp_r">{r6}</span></div>
                <div className="ab_t">··<span className='sp_fun_name'>educationExperience</span><span className="sp_r">() {r5}</span></div>
                <div className="ab_t">····<span className='sp_fun'>return</span> <span className="sp_r">[</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2021-2022' : 'In/Computer Skills School/study/HTML & CSS'</span> <span className="sp_r">{r6}</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2022-2023' : 'In/Computer Skills School/study/JavaScript'</span> <span className="sp_r">{r6}</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2023-2024' : 'In/Computer Skills School/study/JQuery & WordPress'</span> <span className="sp_r">{r6}</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2024-2025' : 'In/Computer Skills School/study/React'</span> <span className="sp_r">{r6}</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2023-now' : 'In/simple school/study/Python'</span> <span className="sp_r">{r6}</span></div>
                <div className="ab_t">····<span className="sp_r">]</span></div>
                <div className="ab_t">··<span className="sp_r">{r6}</span></div>
                <div className="ab_t">··<span className='sp_fun_name'>education</span><span className="sp_r">() {r5}</span></div>
                <div className="ab_t">····<span className='sp_fun'>return</span> <span className="sp_r">[</span></div>
                <div className="ab_t">······<span className="sp_r">{r5}</span> <span className="sp_text">'2021-2025': 'Computer Skills School, Computer Science (IT)'</span> <span className="sp_r">{r6}</span>,</div>
                <div className="ab_t">····<span className="sp_r">]</span></div>
                <div className="ab_t">··<span className="sp_r">{r6}</span></div>
                <div className="ab_t">··<span className='sp_fun_name'>skills</span><span className="sp_r">() {r5}</span></div>
                <div className="ab_t">····<span className='sp_fun'>return</span> <span className="sp_r">[</span> <span className="sp_text">'HTML', 'CSS', 'JS', 'React', 'WordPress', 'Python'</span> <span className="sp_r">]</span></div>
                <div className="ab_t">··<span className="sp_r">{r6}</span></div>
                <div className="ab_t"><span className="sp_r">{r6}</span></div>
                <div className="ab_t"><div className="ab_cu"></div></div>
              </div>
            </div>
          </div>
          <div className="contact" id='cont'>
            <h1 className="main_h1 animate__animated animate__bounce wow animate__bounceInLeft">Contact  <span className='rectgll3'>{r4}</span></h1>
            <div className="cont_block">
              <h1 className="cont_h1">Sent!</h1>
              <form className="cont_i1" id='contact-form'>
                <input type="hidden" name='contact_number'/>
                <textarea name="contTxtar" id="contInp" placeholder='Write here...' rows="10" cols="50" required></textarea>
                <button type='submit' className="contBtn">Contact</button>
              </form>
              <div className="cont_i2">
                <div className="cont_tr">
                  <div className="cont_email"></div>
                  <p className="cont_p">sobolilly2961@gmail.com</p>
                </div>
                <div className="cont_tr">
                  <div className="cont_phone"></div>
                  <p className="cont_p">+380689444141</p>
                </div>
                <p className="cont_p2">Fill out the form if you want to chat with me.</p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p className="footer_p">© Made with</p>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#9b9b9b" d="M5.719 14.75c-0.236 0-0.474-0.083-0.664-0.252l-5.060-4.498 5.341-4.748c0.412-0.365 1.044-0.33 1.411 0.083s0.33 1.045-0.083 1.412l-3.659 3.253 3.378 3.002c0.413 0.367 0.45 0.999 0.083 1.412-0.197 0.223-0.472 0.336-0.747 0.336zM14.664 14.748l5.341-4.748-5.060-4.498c-0.413-0.367-1.045-0.33-1.411 0.083s-0.33 1.045 0.083 1.412l3.378 3.003-3.659 3.252c-0.413 0.367-0.45 0.999-0.083 1.412 0.197 0.223 0.472 0.336 0.747 0.336 0.236 0 0.474-0.083 0.664-0.252zM9.986 16.165l2-12c0.091-0.545-0.277-1.060-0.822-1.151-0.547-0.092-1.061 0.277-1.15 0.822l-2 12c-0.091 0.545 0.277 1.060 0.822 1.151 0.056 0.009 0.11 0.013 0.165 0.013 0.48 0 0.904-0.347 0.985-0.835z"></path></svg>
          <p className="footer_p">by Illia. Inspiration from Yasio. Circa 2025</p>
        </footer>
        <div className="btn_top" onClick={btnTop}>
          <svg fill="#000" height="40%" width="40%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.002 492.002" xmlSpace="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844 L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124 c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064 c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132 C494.624,356.041,494.624,338.965,484.136,328.473z"></path> </g> </g> </g></svg>
        </div>
        <div className="project_menu" onClick={closeProject}>
        <div className="project_slide">
          <div className={"pr_big" + pr}></div>
        </div>
        <div className="project_i">
            <div className="project_nav">
              <p id='project_close'>x</p>
            </div>
            <p className="main_p"></p>
            <h1 className="pr_h1"><span className='rectgll4'>{r3}</span>{prtitle}</h1>
          </div>
      </div>
      <div className="header_bg"></div>
      </div>
    </>
  )
}
export default App