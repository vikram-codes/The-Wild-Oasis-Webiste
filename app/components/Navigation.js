import Link from "next/link"

function Navigation() {
    return (
        <>
        <ul>
         <li>
            <Link href='/'>Home</Link>
         </li>
         <li>
            <Link href='/cabins'>Cabins</Link>
         </li>
         <li>
            <Link href='/about'>About us</Link>
         </li>
         <li>
            <Link href='/account'>Your Account</Link>
         </li>
        </ul>
        </>
    )
}

export default Navigation
