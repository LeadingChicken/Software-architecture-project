import Link from 'next/link';
const Header=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/caro">Tic-Tac-Toe</Link></li>
                    <li><Link href="/memory">Memory Game</Link></li>
                    <li><Link href="/quiz">Quiz Game</Link></li>
                    <li><Link href="/chat">Chat</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;