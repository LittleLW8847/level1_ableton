export default function Navbar1(){
    return(
        <nav class ="flex flex-row py-5 w-full">
            <span class = "left flex flex-row justify-flex-end w-1/2">
                <svg role="img" aria-label="Logo Ableton" class="basis-16 ml-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
                    </path>
                </svg>

                <ul class="container flex flex-row pl-5 pr-1 justify-evenly"> 
                <li class="basis-auto">Live</li>
                <li class="basis-auto">Push</li>
                <li class="basis-auto">Note</li>
                <li class="basis-auto">Link</li>
                <li class="basis-auto">Shop</li>
                <li class="basis-auto">Packs</li>
                <li class="basis-auto">Help</li>
                <li class="basis-auto">More +</li>
                </ul>
            </span>
            

            <ul class="container flex flex-row ml-auto mr-20 w-1/4 justify-evenly">
                <li class = "basis-auto">Try Live 12 for free</li>
                <li class = "basis-auto">Log in or Register</li>
            </ul>

            
        </nav>
        
    )
}