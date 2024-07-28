export default function Navbar1(){
    return(
        <nav class ="flex flex-row py-5 w-full">
            <span class = "">
                <svg role="img" aria-label="Logo Ableton" class="basis-16 ml-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
                    <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z">
                    </path>
                </svg>
            </span>
            

            
            <ul class="container flex flex-row pl-14 pr-1"> 
                <li class = "basis-14">Live</li>
                <li class = "basis-14">Push</li>
                <li class = "basis-14">Note</li>
                <li class = "basis-14">Link</li>
                <li class = "basis-14">Shop</li>
                <li class = "basis-14">Packs</li>
                <li class = "basis-14">Help</li>
                <li class = "basis-14">More +</li>
                <li class = "basis-1/3 text-right">Try Live 12 for free</li>
                <li class = "basis-1/4 text-center">Log in or Register</li>
            </ul>
        </nav>
        
    )
}