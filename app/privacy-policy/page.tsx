import React from 'react';
import { Shield, Lock, Eye, Database, Bell, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - PugArch Technology Pvt Ltd',
  description: 'Privacy Policy for PugArch Technology services including WhatsApp Business API usage, data collection, and user rights.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Shield className="mx-auto mb-6 text-purple-400" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last Updated: February 5, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">1. Introduction</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This Privacy Policy describes how <strong className="text-white">PugArch Technology Pvt Ltd</strong> ("we," "us," or "our") collects, uses, stores, and protects your personal information when you use our website, services, and communication platforms.
              </p>
              <p>
                By accessing our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p className="text-sm text-gray-400 p-4">
                <strong className="text-white">Company Information:</strong><br />
                PugArch Technology Pvt Ltd<br />
                L-18 LIG Mahada Colony, Laxman Nagar, Manewada, Nagpur, Maharashtra - 440027, India<br />
                Email: info@pugarch.in
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold text-blue-400">2. Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
                <p className="mb-2">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, postal address</li>
                  <li><strong className="text-white">Account Information:</strong> Username, password (encrypted), profile details</li>
                  <li><strong className="text-white">Communication Data:</strong> Messages, inquiries, and correspondence with our support team</li>
                  <li><strong className="text-white">Business Information:</strong> Company name, designation, business requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2.2 Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address, browser type, and version</li>
                  <li>Device information and operating system</li>
                  <li>Time zone settings and location data (with consent)</li>
                  <li>Usage data and analytics (pages visited, time spent, click patterns)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2.3 Service Usage Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>API usage logs and transaction records</li>
                  <li>Service performance metrics</li>
                  <li>Error logs and debugging information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WhatsApp-Specific Privacy Policy */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">3. WhatsApp Business API Usage</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  🔒 WhatsApp Data Protection Commitment
                </p>
                <p className="text-green-200 font-medium">
                  We use WhatsApp Business APIs only to communicate with users who have explicitly opted in. WhatsApp user data is not shared, sold, or used for marketing purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.1 WhatsApp Communication Principles</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Opt-In Only:</strong> We send WhatsApp messages only to users who have explicitly provided consent through documented opt-in mechanisms (web forms, SMS confirmation, or in-person consent)</li>
                  <li><strong className="text-white">No Unsolicited Messages:</strong> We do not send promotional, marketing, or unsolicited messages via WhatsApp</li>
                  <li><strong className="text-white">Transactional Use:</strong> WhatsApp is used exclusively for transactional notifications, service updates, customer support responses, and opt-in based communication</li>
                  <li><strong className="text-white">Easy Opt-Out:</strong> Users can opt out at any time by replying "STOP" or through account settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.2 WhatsApp Data Collection</h3>
                <p className="mb-2">When you interact with us via WhatsApp, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Phone number (WhatsApp ID)</li>
                  <li>Message content (only for service delivery and support)</li>
                  <li>Message delivery status and timestamps</li>
                  <li>User profile information (name, profile picture - as provided by WhatsApp)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.3 WhatsApp Data Usage</h3>
                <p className="mb-2">WhatsApp data is used strictly for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sending service notifications and updates</li>
                  <li>Responding to customer support inquiries</li>
                  <li>Delivering transactional information (confirmations, alerts, status updates)</li>
                  <li>Maintaining service quality and compliance records</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.4 WhatsApp Data Protection</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">No Third-Party Sharing:</strong> WhatsApp user data is never sold, rented, or shared with third parties for marketing purposes</li>
                  <li><strong className="text-white">No Cross-Platform Marketing:</strong> WhatsApp contact information is not used for email marketing, SMS campaigns, or other promotional channels without separate explicit consent</li>
                  <li><strong className="text-white">Secure Storage:</strong> All WhatsApp-related data is stored securely with encryption and access controls</li>
                  <li><strong className="text-white">Retention Limits:</strong> Message data is retained only as long as necessary for service delivery and compliance requirements</li>
                </ul>
              </div>

              <div className="p-6 mt-6">
                <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Clarification</p>
                <p className="text-gray-300">
                  WhatsApp is a service provided by Meta Platforms, Inc. We use WhatsApp Business APIs as authorized by Meta. We are not affiliated with, endorsed by, or representing Meta or WhatsApp. All WhatsApp communications are subject to WhatsApp's Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold text-purple-400">4. How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Service Delivery:</strong> To provide, maintain, and improve our technology services and platforms</li>
                <li><strong className="text-white">Communication:</strong> To send service-related notifications, updates, and respond to inquiries</li>
                <li><strong className="text-white">Technical Support:</strong> To diagnose technical issues and provide customer support</li>
                <li><strong className="text-white">Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
                <li><strong className="text-white">Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
                <li><strong className="text-white">Analytics:</strong> To understand usage patterns and improve user experience (anonymized data only)</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-white/10 text-sm">
                <strong className="text-white">We do NOT use your personal information for:</strong> Unsolicited marketing, selling to third parties, or any purpose not explicitly stated in this policy.
              </p>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">5. Data Sharing and Disclosure</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Third-Party Service Providers</h3>
                <p className="mb-2">
                  We may share limited information with trusted third-party service providers who assist us in operating our services, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cloud hosting providers (for secure data storage)</li>
                  <li>API platform providers (WhatsApp Business API, SMS gateways)</li>
                  <li>Analytics services (anonymized data only)</li>
                  <li>Payment processors (for billing purposes)</li>
                </ul>
                <p className="mt-3 text-sm p-4">
                  All third-party providers are contractually bound to protect your data and use it only for specified purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.2 Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law, court order, or governmental authority, or to protect our rights, property, or safety.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.3 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, user information may be transferred. We will notify users of any such change.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">6. Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Encryption:</strong> Data transmission via SSL/TLS encryption; sensitive data encrypted at rest</li>
                <li><strong className="text-white">Access Controls:</strong> Role-based access restrictions and authentication mechanisms</li>
                <li><strong className="text-white">Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong className="text-white">Secure Infrastructure:</strong> Hosting on secure, compliant cloud platforms</li>
                <li><strong className="text-white">Data Backups:</strong> Regular encrypted backups with disaster recovery protocols</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but continuously work to enhance our security measures.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">7. Your Rights and Choices</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications or WhatsApp messages at any time</li>
                <li><strong className="text-white">Data Portability:</strong> Request transfer of your data to another service provider (where technically feasible)</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw previously given consent for data processing</li>
              </ul>
              <div className="mt-6 p-6">
                <p className="text-white font-semibold mb-2">To exercise your rights:</p>
                <p>Email us at <a href="mailto:info@pugarch.in" className="text-purple-400 hover:text-purple-300 underline">info@pugarch.in</a> with your request. We will respond within 30 days.</p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">8. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We use cookies and similar technologies to enhance user experience, analyze usage, and improve our services.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand user behavior (anonymized)</li>
                  <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
              <p className="text-sm">
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">9. Data Retention</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We retain personal information only as long as necessary for the purposes stated in this policy or as required by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Active Accounts:</strong> Data retained while account is active</li>
                <li><strong className="text-white">Inactive Accounts:</strong> Data may be deleted after 2 years of inactivity (with prior notice)</li>
                <li><strong className="text-white">Transaction Records:</strong> Retained for 7 years for compliance and audit purposes</li>
                <li><strong className="text-white">Communication Logs:</strong> Retained for 1 year unless legally required otherwise</li>
              </ul>
              <p className="mt-4 text-sm">
                Upon deletion request, we will remove your data within 30 days, except where retention is legally required.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">10. Children's Privacy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information.
              </p>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">11. Legal Compliance</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Information Technology Act, 2000 and IT (Amendment) Act, 2008</li>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>WhatsApp Business Policy and Commerce Policy</li>
                <li>Meta Business Platform Policies</li>
                <li>Applicable data protection and privacy regulations in India</li>
              </ul>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">12. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify users of significant changes via:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>Updated "Last Modified" date at the top of this policy</li>
              </ul>
              <p className="mt-4">
                Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">13. Contact Us</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="p-6 mt-4">
                <p className="text-white font-semibold mb-3">PugArch Technology Pvt Ltd</p>
                <p className="space-y-1">
                  <span className="block">L-18 LIG Mahada Colony, Laxman Nagar, Manewada</span>
                  <span className="block">Nagpur, Maharashtra - 440027, India</span>
                  <span className="block mt-3">Email: <a href="mailto:info@pugarch.in" className="text-purple-400 hover:text-purple-300 underline">info@pugarch.in</a></span>
                  <span className="block">Phone: <a href="tel:+918180006916" className="text-purple-400 hover:text-purple-300">+91 8180006916</a></span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
