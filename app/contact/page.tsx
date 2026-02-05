import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - PugArch Technology Pvt Ltd',
  description: 'Get in touch with PugArch Technology for technology services, WhatsApp Business API integration, and digital communication solutions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help. Reach out to us for any inquiries about our technology services and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Registered Office */}
            <div className="p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Registered Office</h2>
                  <p className="text-gray-400 text-sm">Nagpur, Maharashtra</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">PugArch Technology Pvt Ltd</strong><br />
                  L-18 LIG Mahada Colony,<br />
                  Laxman Nagar, Manewada,<br />
                  Nagpur, Maharashtra - 440027<br />
                  India
                </p>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Branch Office</h2>
                  <p className="text-gray-400 text-sm">Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="leading-relaxed">
                  <strong className="text-white">PugArch Technology Pvt Ltd</strong><br />
                  Off No. 128, 1st Floor,<br />
                  Raghuleela Mega Mall,<br />
                  Boraspada Road, Behind Poisar Bus Depot,<br />
                  Kandivali (W), Mumbai - 400067,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-purple-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Email Us</h3>
              <a 
                href="mailto:info@pugarch.in" 
                className="text-purple-300 hover:text-purple-200 transition-colors break-all"
              >
                info@pugarch.in
              </a>
              <p className="text-gray-400 text-sm mt-2">General inquiries and support</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
              <a 
                href="tel:+918180006916" 
                className="text-blue-300 hover:text-blue-200 transition-colors"
              >
                +91 8180006916
              </a>
              <p className="text-gray-400 text-sm mt-2">Monday to Saturday, 10 AM - 6 PM IST</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Business Hours</h3>
              <p className="text-green-300">Mon - Sat: 10:00 AM - 6:00 PM</p>
              <p className="text-gray-400 text-sm mt-2">Indian Standard Time (IST)</p>
            </div>
          </div>

          {/* Support Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Get Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Technical Support</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  For technical assistance with our platforms, API integrations, or service-related queries, please contact us via email with detailed information about your issue.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail size={18} />
                  <a href="mailto:info@pugarch.in" className="hover:text-purple-300 transition-colors">
                    info@pugarch.in
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Business Inquiries</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  For partnership opportunities, enterprise solutions, or general business inquiries, reach out to our business development team.
                </p>
                <div className="flex items-center gap-2 text-blue-400">
                  <Phone size={18} />
                  <a href="tel:+918180006916" className="hover:text-blue-300 transition-colors">
                    +91 8180006916
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-yellow-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Important Notice</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">PugArch Technology Pvt Ltd</strong> is a private technology service provider. We are <strong className="text-white">NOT a government authority</strong> or government department.
              </p>
              <p>
                If you are seeking government services, official certificates, licenses, or governmental assistance, please contact the relevant government department directly. We provide technology platforms and software services only.
              </p>
              <p className="text-sm text-gray-400 mt-4 pt-4 border-t border-yellow-500/20">
                For WhatsApp-related inquiries, please refer to our <a href="/whatsapp" className="text-yellow-400 hover:text-yellow-300 underline">WhatsApp Usage Policy</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Send className="mx-auto mb-4 text-purple-400" size={48} />
            <h2 className="text-2xl font-bold mb-4 text-white">We Value Your Time</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our team strives to respond to all inquiries within 24-48 business hours. For urgent technical issues affecting active services, please mention "URGENT" in your email subject line.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
