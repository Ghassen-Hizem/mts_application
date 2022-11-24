import User from './userAccount'
import Cardhtml from './cardhtml'
import Cardcss from './cardcss'
import Cardjs from './cardjs'
import Cardphp from './cardphp'

export default function Interface() {

    return (
        

        <div class=" h-screen bg-gradient-to-r from-purple-900 to-pink-900">
       <User />
       <h1 class="pl-8 pt-8 text-6xl text-center text-green-300 font-extrabold">Recommended Courses</h1>
       <div class="flex flex-row justify-evenly pl-80 pt-16">
       <Cardhtml />
       <Cardcss />
       <Cardjs />
       <Cardphp />
       </div>
      
      </div>


    )
}