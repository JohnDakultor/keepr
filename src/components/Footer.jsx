import React from "react";
import '../styles/footer.css'



export default function Footer() {
    
    const year = new Date().getFullYear();
    return (
        <div>
            <footer>
                <p>Copyright © {year}</p>
            </footer>
        </div>
    );
}