import Cardhtml from './cardhtml'
import Cardcss from './cardcss'
export default function Interface() {
    

    return (
        <div>
        <div id="main" style={{ backgroundImage: `url("/meta5.jpg")`  }} class=" bg-cover h-screen ">
            <div  class=" bg-black bg-opacity-30 h-screen ">
                <div class="pt-4">
    <h1 class="text-white text-center pt-10  pl-20 font-extrabold text-8xl "> Courses</h1>
    </div>
      
<div class="pl-60 pt-8 grid  grid-cols-2 grid-rows-1">
 
<Cardhtml />


<Cardcss />
</div>
</div>
</div>   
     
  
      aaaaaa
      </div>
    )
}