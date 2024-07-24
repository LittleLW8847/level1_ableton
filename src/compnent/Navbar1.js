export default function Navbar1(){
    return(
        <nav class ="container flex flex-row">
            <span class = "mt-2.5">
                <svg role="img" aria-label="Logo Ableton" class="basis-16 mt-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
                    </path>
                </svg>
            </span>
            

            
            <ul class="container flex flex-row py-5 px-3"> 
                <li class = "basis-12">Live</li>
                <li class = "basis-12">Push</li>
                <li class = "basis-12">Note</li>
                <li class = "basis-12">Link</li>
                <li class = "basis-12">Shop</li>
                <li class = "basis-12">Packs</li>
                <li class = "basis-12">Help</li>
                <li class = "basis-12">More +</li>
                <li class = "basis-1/3 text-right">Try Live 12 for free</li>
                <li class = "basis-96">Log in or Register</li>
            </ul>
        </nav>
        
    )
}