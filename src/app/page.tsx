'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Simple language detection for demo
    const browserLang = navigator.language.split('-')[0];
    if (['th', 'zh', 'en'].includes(browserLang)) {
      setLang(browserLang);
    }
    
    // Simulate video loading for demo
    const timer = setTimeout(() => setVideoLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    en: {
      headline: "Global Technology. Local Expertise. Zero Compliance Risk.",
      subhead: "Strategic partner for Supermicro AI infrastructure, Thailand data center compliance, rare earth supply chain security, and SMAS medical device market entry.",
      cta: "Get Your Free Risk Assessment"
    },
    zh: {
      headline: "全球技术。本地专业。零合规风险。",
      subhead: "Supermicro人工智能基础设施、泰国数据中心合规、稀土供应链安全和SMAS医疗设备市场准入的战略合作伙伴。",
      cta: "获取您的免费风险评估"
    },
    th: {
      headline: "เทคโนโลยีระดับโลก ความเชี่ยวชาญระดับท้องถิ่น ความเสี่ยงด้านการปฏิบัติตามกฎระเบียบเป็นศูนย์",
      subhead: "พันธมิตรเชิงกลยุทธ์สำหรับโครงสร้างพื้นฐาน AI ของ Supermicro การปฏิบัติตามกฎระเบียบศูนย์ข้อมูลไทย ความปลอดภัยของห่วงโซ่อุปทานแร่หายาก และการเข้าสู่ตลาดอุปกรณ์การแพทย์ SMAS",
      cta: "รับการประเมินความเสี่ยงฟรีของคุณ"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with REAL UI video background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 animate-pulse" />
          )}
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Fallback gradient while video loads */}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              {content[lang as keyof typeof content].headline}
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in animation-delay-200">
              {content[lang as keyof typeof content].subhead}
            </p>
            <div className="animate-fade-in animation-delay-400">
              <button 
                className="b2b-button hover:bg-blue-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {content[lang as keyof typeof content].cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section - REAL UI principle: social proof */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🇹🇭", title: "Thai Registered", subtitle: "DBD #600.012515" },
              { icon: "🖥️", title: "Supermicro Partner", subtitle: "AI Finance Vertical" },
              { icon: "📋", title: "Regulatory Expert", subtitle: "NBTC/BOI/EEC" },
              { icon: "🔗", title: "Supply Chain Security", subtitle: "Rare Earth Due Diligence" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - REAL UI principle: clear value proposition */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We de-risk complex technology deployments across regulated industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Infrastructure",
                desc: "Supermicro GPU solutions for financial services: quantitative trading, risk management, document automation with full data sovereignty",
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Datacenter Compliance",
                desc: "End-to-end regulatory navigation: NBTC licensing, BOI/EEC promotions, power grid connections, and environmental compliance for Thailand data centers",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Supply Chain Security",
                desc: "Rare earth material due diligence: supplier validation, origin traceability, and compliance verification for critical manufacturing supply chains",
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Medical Market Entry",
                desc: "SMAS Technology partnership: biosensors and safety syringes for Thailand/ASEAN markets with TFDA certification and healthcare GR support",
                color: "from-red-500 to-rose-600"
              }
            ].map((solution, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <button className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - REAL UI principle: clear CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content[lang as keyof typeof content].cta}</h2>
            <p className="text-blue-100 mb-8">
              Complete this form and our regulatory experts will contact you within 24 hours
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="b2b-input bg-white/20 text-white placeholder-blue-200" />
                  <input type="text" placeholder="Company Name" className="b2b-input bg-white/20 text-white placeholder-blue-200" />
                  <input type="email" placeholder="Email Address" className="b2b-input bg-white/20 text-white placeholder-blue-200" />
                  <input type="tel" placeholder="Phone Number" className="b2b-input bg-white/20 text-white placeholder-blue-200" />
                </div>
                
                <select className="b2b-select bg-white/20 text-white">
                  <option value="">Which solution are you interested in?</option>
                  <option value="ai">AI Infrastructure (Supermicro)</option>
                  <option value="datacenter">Datacenter Compliance (Thailand)</option>
                  <option value="supply">Supply Chain Security (Rare Earth)</option>
                  <option value="medical">Medical Market Entry (SMAS)</option>
                </select>
                
                <textarea 
                  placeholder="Your specific challenge or question" 
                  rows={4} 
                  className="b2b-input bg-white/20 text-white placeholder-blue-200"
                ></textarea>
                
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="terms" className="mt-1 rounded text-blue-600" />
                  <label htmlFor="terms" className="text-blue-100 text-sm">
                    I agree to the processing of my personal data in accordance with PDPA and relevant regulations
                  </label>
                </div>
                
                <button type="submit" className="b2b-button w-full bg-white text-blue-900 hover:bg-gray-100">
                  Submit Assessment Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - REAL UI principle: professional credibility */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Rich Dad Thai Kao</h3>
              <p className="mb-4">Leading Business Towards Digital Transformation</p>
              <p className="text-sm">เลขที่ 600.012515</p>
              <p className="text-sm">Department of Business Development</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">AI Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datacenter Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Supply Chain Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medical Market Entry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Bangkok, Thailand</li>
                <li>contact@richdad-thaikao.com</li>
                <li>+66 (0) XXX XXX XXX</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Rich Dad Thai Kao. All rights reserved.</p>
            <p className="mt-2 text-blue-400">Thai Registered Business #600.012515</p>
          </div>
        </div>
      </footer>
    </div>
  );
}