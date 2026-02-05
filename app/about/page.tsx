import React from 'react';
import { Building2, MapPin, Mail, Phone, Shield, Users, Zap } from 'lucide-react';

export const metadata = {
  title: 'About Us - PugArch Technology Pvt Ltd',
  description: 'PugArch Technology is a leading technology service provider specializing in digital communication platforms and software solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About PugArch Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering Organizations with Cutting-Edge Digital Communication Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Who We Are</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">PugArch Technology Pvt Ltd</strong> is a registered technology services and software platform provider incorporated under the Companies Act, 2013. We specialize in developing and deploying advanced digital communication platforms that enable seamless, secure, and efficient communication for organizations across various sectors.
              </p>
              <p>
                Our expertise lies in integrating modern messaging technologies, including WhatsApp Business APIs, SMS gateways, email automation, and custom communication solutions. We serve as a technology enabler, providing the infrastructure and tools that organizations need to connect with their stakeholders effectively.
              </p>
              <p>
                With a strong foundation in software development, cloud computing, and API integration, PugArch Technology has established itself as a trusted partner for businesses, educational institutions, and public sector organizations seeking reliable communication solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">WhatsApp Business API Integration</h3>
              <p className="text-gray-400">
                Official WhatsApp Cloud API integration for transactional notifications, customer support, and opt-in based communication.
              </p>
            </div>

            <div className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Software Development</h3>
              <p className="text-gray-400">
                Tailored software solutions including web applications, mobile apps, and enterprise platforms designed to meet specific organizational needs.
              </p>
            </div>

            <div className="p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Digital Communication Platforms</h3>
              <p className="text-gray-400">
                Multi-channel communication systems integrating SMS, email, push notifications, and messaging APIs for unified stakeholder engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Services Clarification */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-yellow-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Important Clarification</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-white">PugArch Technology Pvt Ltd is a private technology service provider and is NOT a government authority, government department, or public sector undertaking.</strong>
                  </p>
                  <p>
                    We provide technology platforms and communication services that may be utilized by government departments, public authorities, educational institutions, and private organizations. However, we do not represent, impersonate, or act on behalf of any government body unless explicitly authorized through formal agreements.
                  </p>
                  <p>
                    Our role is strictly limited to providing technology infrastructure and software services. We do not issue official government decisions, certificates, licenses, or any form of governmental authorization.
                  </p>
                  <p className="font-semibold text-white border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/10 rounded">
                    Disclaimer: We are a technology service provider and do not represent any government authority unless explicitly authorized through documented legal agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-start gap-4">
                <Building2 className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Legal Entity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Company Name:</strong> PugArch Technology Pvt Ltd<br />
                    <strong>Type:</strong> Private Limited Company<br />
                    <strong>Incorporation:</strong> Registered under the Companies Act, 2013<br />
                    <strong>Industry:</strong> Information Technology & Software Services
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Registered Office</h3>
                  <p className="text-gray-300 leading-relaxed">
                    L-18 LIG Mahada Colony,<br />
                    Laxman Nagar, Manewada,<br />
                    Nagpur, Maharashtra - 440027<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-green-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Branch Office</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Off No. 128, 1st Floor,<br />
                    Raghuleela Mega Mall,<br />
                    Boraspada Road, Behind Poisar Bus Depot,<br />
                    Kandivali (W), Mumbai - 400067,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-4">
                <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Contact Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Email:</strong> info@pugarch.in<br />
                    <strong>Phone:</strong> +91 8180006916<br />
                    <strong>Website:</strong> www.pugarch.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations with innovative, secure, and scalable digital communication solutions that enhance stakeholder engagement, improve operational efficiency, and drive digital transformation across sectors.
              </p>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be India's most trusted technology partner for digital communication platforms, recognized for our commitment to innovation, compliance, data security, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Compliance & Standards</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                PugArch Technology is committed to maintaining the highest standards of compliance, data protection, and ethical business practices. Our operations adhere to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Information Technology Act, 2000 and IT (Amendment) Act, 2008</li>
                <li>WhatsApp Business Policy and Commerce Policy</li>
                <li>Meta Business Platform Terms and Policies</li>
                <li>Data Protection and Privacy Regulations</li>
                <li>Industry best practices for software development and API integration</li>
              </ul>
              <p className="mt-6 pt-6 border-t border-white/10">
                We maintain transparent operations, clear communication with our clients, and strict adherence to platform policies to ensure sustainable and compliant service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
