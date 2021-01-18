import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} Mesto Russia</p>
        </footer>
    );
}
