import Paymonth from './Paymonth'
import Payyear from './Payyear'
import Link from 'next/link'

export default function Payheader() {

    return (
        

  <div style={{ backgroundImage: `url("/payment1.jpg")`  }} class="bg-left-bottom h-screen bg-cover" >
    <Link href="../../"><button type="button" class="ml-20 mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back to home Page</button></Link>
    <div class="pt-36 pl-16 flex flex-row gap-16">
   <Paymonth />
   <Payyear />
   
   </div>
  </div>


    )
}