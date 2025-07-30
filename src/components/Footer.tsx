import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">Demandorbit Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Eliminate inaccurate contact information, reduce bounce rates, and improve outbound campaign success with our real-time contact validation platform.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Charlotte, NC</p>
              <p>support@demandorbit.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://salescentri.com/solutions/psa-suite/features" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="https://salescentri.com/pricing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Resources</a></li>
              <li><a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
            <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Privacy Policy</a>
            <a href="https://salescentri.com/trust/security-privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Terms of Service</a>
            <span>© 2024 Demandorbit Solutions</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <a 
              href="https://salescentri.com/?utm_source=demandorbit.com&utm_medium=footer&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;