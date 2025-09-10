import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4">
              Inflnce
            </h3>
            <p className="text-sm text-gray-400">
              Premium B2B wholesale platform for digital marketing and social media services.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/social-media" className="hover:text-green-400 transition-colors">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/publications" className="hover:text-green-400 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/services/tools" className="hover:text-green-400 transition-colors">
                  Digital Tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/dashboard" className="hover:text-green-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/orders" className="hover:text-green-400 transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/sign-up" className="hover:text-green-400 transition-colors">
                  Apply for Access
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:support@inflnce.io" className="hover:text-green-400 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Inflnce. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>Wholesale Platform</span>
              <span>•</span>
              <span>USA Based</span>
              <span>•</span>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}