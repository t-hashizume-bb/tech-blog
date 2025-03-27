import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer px-8 flex items-center justify-between">
      <small className="copyright block text-center">© 2025 Onur Mark. All rights reserved.</small>
        <div className="footer-nav">
            <ul className="footer-nav-list flex gap-8 justify-center">
              <li className="footer-nav-list-item">    
                <Link href="/privacy-policy" className="footer-nav-list-item__link">
                    プライバシーポリシー
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link href="/disclaimer" className="footer-nav-list-item__link">
                    免責事項
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link href="/copyright" className="footer-nav-list-item__link">
                    著作権について
                </Link>
              </li>
            </ul>
      </div>
    </footer>
  )
}