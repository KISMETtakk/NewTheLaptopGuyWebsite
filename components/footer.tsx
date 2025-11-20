import { MessageCircle, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 border-2 border-white bg-white/5 flex items-center justify-center">
                <span className="text-xs font-bold">TLG</span>
              </div>
              <span className="text-lg font-light tracking-wider text-white">The Laptop Guy</span>
            </div>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Premium laptops with guaranteed quality. Every device comes with a 3-month warranty and professional service.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="https://api.whatsapp.com/send/?phone=27813556089&text=Hi+there%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-light text-white/60 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +27 81 355 6089</span>
                
              </a>

                            <a
                href="https://api.whatsapp.com/send/?phone=27817134203&text=Hi+there%21+I+am+interested+in+purchasing+a+laptop.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-light text-white/60 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +27 81 713 4203</span>
                
              </a>

              <div className="flex items-center gap-2 text-sm font-light text-white/60">
                <Mail className="h-4 w-4" />
                <span>info@thelaptopguy.co.za</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-white">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-light text-white/60">
                <Clock className="h-4 w-4" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-light text-white/60">
                <Clock className="h-4 w-4" />
                <span>Sat: 9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-light text-white/60">
                <Clock className="h-4 w-4" />
                <span>Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-sm font-light text-white/40">
            © {new Date().getFullYear()} The Laptop Guy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
