import Cardhtml from './cardhtml'
import Cardcss from './cardcss'
import Link from 'next/link';
export default function Interface() {
    

    return (
        <div>
        <div id="main" style={{ backgroundImage: `url("/meta5.jpg")`  }} class=" bg-cover h-screen ">
            <div  class=" bg-black bg-opacity-30 h-screen ">
                <div class="pt-4">
                <Link href="../"><button type="button" class="ml-8 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back to home Page</button></Link>
    <h1 class="text-white text-center pr-16 pt-10  font-extrabold text-4xl md:text-8xl "> Courses</h1>
    </div>
      
<div class="md:pl-60 mt-8  flex flex-row ">
 
<Cardhtml />

<Cardcss />
</div>
</div>
</div>   
     
 
      </div>
    )
}