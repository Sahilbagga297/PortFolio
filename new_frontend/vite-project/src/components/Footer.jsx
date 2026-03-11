import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-bagga-22327b295/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Sahilbagga297', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Sahil Bagga. Built with
            <Heart size={14} className="text-cyan-accent fill-current" />
          </p>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-cyan-accent transition-colors duration-300 p-2"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
