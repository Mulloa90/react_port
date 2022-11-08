import fanpage from '../../assets/project 1.png'
import panda from '../../assets/panda.png'
import box from '../../assets/box.png'
import ADVNTR from '../../assets/ADVNTR.png'
import p2 from '../../assets/project-2 pic.png'


function Project() {
    return (
        <section id="Projects" class="Projects">
       
        <h2>Projects</h2>
        <ul>
            
            <li><a href="https://mulloa90.github.io/fanpage/"><img class="image3" src={fanpage}
                        alt="fanpage"/></a></li>
            <li><a href="https://mulloa90.github.io/my-first-website/"><img class="image4" src={panda}
                        alt="my-first-website"/></a>
                <a href="https://mulloa90.github.io/watch-that-box/"><img class="image5" src={box}
                        alt="box"/></a>
            </li>
            <li><a href="https://mulloa90.github.io/project-1/"><img class="image6" src={ADVNTR}
                alt="fanpage"/></a></li>
            <li><a href="https://github.com/kentshaffer/Project-2"><img class="image6" src={p2}
                alt="fanpage"/></a></li>
        </ul>


    </section>


    );
  }
  
  export default Project;
  