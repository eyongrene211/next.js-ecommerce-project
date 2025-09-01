import Link from 'next/link';


const FooterComponent = () => {
    return(
        <>
        <footer className='w-max-[1200px]  bg-amber-600'>
            
         
              <div className=' flex flex-col  items-center justify-center'>
                <p>&copy;2025, All Right Reserved.</p>
                  <ul className="flex space-x-4 ">
                <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li> 
               <li><Link href="/about" className="text-white hover:text-gray-300">About</Link> </li> 
               <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link> </li> 
                 </ul>

              </div>
              
        
        </footer>
        </>
    );
}
export default FooterComponent;