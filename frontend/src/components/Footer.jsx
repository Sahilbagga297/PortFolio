const Footer = () => {
    return (
        <footer className="bg-gray-900/60 text-center text-gray-400 p-8 border-t border-gray-700/50 backdrop-blur-lg shadow-2xl relative z-10">
            <div className="max-w-7xl mx-auto">
                <p>&copy; {new Date().getFullYear()} Sahil Bagga. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;