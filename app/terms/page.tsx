import React from 'react';
import { FileText, AlertTriangle, Scale, Shield } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions - PugArch Technology Pvt Ltd',
  description: 'Terms and Conditions for using PugArch Technology services, platforms, and WhatsApp Business API integration.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Scale className="mx-auto mb-6 text-purple-400" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
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
            <h2 className="text-3xl font-bold mb-6 text-purple-400">1. Introduction and Acceptance</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of the services, website, and platforms provided by <strong className="text-white">PugArch Technology Pvt Ltd</strong> ("Company," "we," "us," or "our").
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
              </p>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-6">
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Company Information:</strong><br />
                  PugArch Technology Pvt Ltd<br />
                  L-18 LIG Mahada Colony, Laxman Nagar, Manewada, Nagpur, Maharashtra - 440027, India<br />
                  Email: info@pugarch.in | Phone: +91 8180006916
                </p>
              </div>
            </div>
          </div>

          {/* Definitions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">2. Definitions</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">"Services"</strong> refers to all technology services, platforms, APIs, software, and communication tools provided by PugArch Technology.</p>
              <p><strong className="text-white">"User"</strong> refers to any individual or organization accessing or using our services.</p>
              <p><strong className="text-white">"Platform"</strong> refers to our website, web applications, mobile applications, and related infrastructure.</p>
              <p><strong className="text-white">"Third-Party Platforms"</strong> refers to external services we integrate with, including WhatsApp Business API, SMS gateways, and other communication channels.</p>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">3. Service Description</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                PugArch Technology provides technology services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WhatsApp Business API integration and messaging services</li>
                <li>Custom software development and web applications</li>
                <li>Digital communication platforms (SMS, email, push notifications)</li>
                <li>API integration and automation solutions</li>
                <li>Cloud-based software services</li>
              </ul>
              <div className="p-6 mt-6">
                <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Clarification</p>
                <p>
                  <strong className="text-white">PugArch Technology is a private technology service provider and is NOT a government authority, government department, or public sector organization.</strong> We provide technology platforms that may be used by various organizations, including government departments, but we do not represent or act on behalf of any government body unless explicitly authorized.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Platforms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold text-blue-400">4. Third-Party Platform Disclaimer</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  Mandatory Third-Party Platform Clause
                </p>
                <p className="text-blue-200 font-medium">
                  Our platform facilitates communication using third-party messaging platforms and does not control their policies or availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.1 WhatsApp Business API</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Ownership:</strong> WhatsApp is owned and operated by Meta Platforms, Inc. We are an authorized user of WhatsApp Business APIs.</li>
                  <li><strong className="text-white">Governing Policies:</strong> All WhatsApp communications are subject to WhatsApp's Terms of Service, Business Policy, and Commerce Policy.</li>
                  <li><strong className="text-white">No Affiliation:</strong> We are not affiliated with, endorsed by, or representing Meta Platforms, Inc. or WhatsApp.</li>
                  <li><strong className="text-white">Service Availability:</strong> WhatsApp service availability, features, and policies are controlled by Meta. We are not responsible for changes, interruptions, or discontinuation of WhatsApp services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.2 Other Third-Party Services</h3>
                <p className="mb-2">
                  We integrate with various third-party services (SMS gateways, email providers, cloud platforms). We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Third-party service outages, policy changes, or discontinuation</li>
                  <li>Data handling practices of third-party platforms (governed by their privacy policies)</li>
                  <li>Pricing changes or service modifications by third-party providers</li>
                  <li>Compliance violations by third-party platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Obligations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">5. User Obligations and Acceptable Use</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Account Responsibilities</h3>
                <p className="mb-2">Users are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>All activities conducted under their account</li>
                  <li>Ensuring authorized use of services</li>
                  <li>Promptly notifying us of any unauthorized access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.2 Prohibited Activities</h3>
                <p className="mb-2">Users must NOT:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Send spam, unsolicited messages, or promotional content via WhatsApp without explicit user consent</li>
                  <li>Violate WhatsApp Business Policy, Commerce Policy, or any third-party platform policies</li>
                  <li>Impersonate any person, organization, or government authority</li>
                  <li>Use services for illegal activities, fraud, or malicious purposes</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' data</li>
                  <li>Reverse engineer, decompile, or modify our software</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Violate intellectual property rights</li>
                  <li>Harass, abuse, or harm others through our platform</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.3 WhatsApp-Specific Obligations</h3>
                <p className="mb-2">When using WhatsApp services through our platform, users must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Obtain explicit opt-in consent before sending WhatsApp messages</li>
                  <li>Provide clear opt-out mechanisms (e.g., "Reply STOP to unsubscribe")</li>
                  <li>Use WhatsApp only for transactional, service-related, or opt-in based communication</li>
                  <li>Not send promotional or marketing messages unless explicitly permitted by WhatsApp policies</li>
                  <li>Comply with all WhatsApp Business Policy requirements</li>
                  <li>Respect user privacy and data protection regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">6. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                All content, software, code, designs, logos, trademarks, and materials on our platform are the intellectual property of PugArch Technology Pvt Ltd or our licensors, protected by copyright, trademark, and other intellectual property laws.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6.1 License Grant</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use our services for their intended purpose. This license does not include rights to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Reproduce, distribute, or create derivative works</li>
                  <li>Sell, rent, lease, or sublicense our services</li>
                  <li>Remove or modify proprietary notices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6.2 User Content</h3>
                <p>
                  You retain ownership of content you submit through our platform. By submitting content, you grant us a license to use, store, and process it solely for service delivery purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">7. Payment and Billing</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you subscribe to paid services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Fees:</strong> You agree to pay all applicable fees as per the pricing plan selected</li>
                <li><strong className="text-white">Billing Cycle:</strong> Fees are billed in advance on a monthly, quarterly, or annual basis as specified</li>
                <li><strong className="text-white">Payment Methods:</strong> Accepted payment methods will be specified during checkout</li>
                <li><strong className="text-white">Late Payments:</strong> Late payments may result in service suspension or termination</li>
                <li><strong className="text-white">Refunds:</strong> Refund policies are specified in individual service agreements</li>
                <li><strong className="text-white">Price Changes:</strong> We reserve the right to modify pricing with 30 days' notice</li>
              </ul>
            </div>
          </div>

          {/* Service Availability */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">8. Service Availability and Modifications</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">8.1 Availability:</strong> We strive to maintain high service availability but do not guarantee uninterrupted or error-free service. Scheduled maintenance will be communicated in advance when possible.
              </p>
              <p>
                <strong className="text-white">8.2 Modifications:</strong> We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We will make reasonable efforts to notify users of significant changes.
              </p>
              <p>
                <strong className="text-white">8.3 Third-Party Dependencies:</strong> Service availability may be affected by third-party platform changes (WhatsApp, SMS providers, cloud services). We are not liable for disruptions caused by third-party services.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-red-400" size={32} />
              <h2 className="text-3xl font-bold text-red-400">9. Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg font-semibold text-white">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>PugArch Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claim shall not exceed the amount paid by you for services in the 12 months preceding the claim</li>
                <li>We are not responsible for data loss, business interruption, or lost profits</li>
                <li>We are not liable for third-party platform failures, policy changes, or service interruptions</li>
                <li>We do not guarantee specific outcomes or results from using our services</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-red-500/30 text-sm">
                Some jurisdictions do not allow limitation of liability for certain damages. In such cases, our liability shall be limited to the maximum extent permitted by law.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">10. Indemnification</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless PugArch Technology, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or misuse of our services</li>
                <li>Violation of these Terms or applicable laws</li>
                <li>Violation of third-party rights (intellectual property, privacy, etc.)</li>
                <li>Content you submit or transmit through our platform</li>
                <li>Unauthorized use of your account</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">11. Data Protection and Privacy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Your use of our services is also governed by our <a href="/privacy-policy" className="text-green-400 hover:text-green-300 underline">Privacy Policy</a>, which describes how we collect, use, and protect your personal information.
              </p>
              <p>
                By using our services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">12. Termination</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">12.1 By User:</strong> You may terminate your account at any time by contacting us at info@pugarch.in. Paid subscriptions may be subject to refund policies specified in your service agreement.
              </p>
              <p>
                <strong className="text-white">12.2 By Company:</strong> We reserve the right to suspend or terminate your access to services immediately, without notice, for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activities</li>
                <li>Non-payment of fees</li>
                <li>Abuse of services or harm to other users</li>
                <li>Violation of third-party platform policies (WhatsApp, etc.)</li>
              </ul>
              <p>
                <strong className="text-white">12.3 Effect of Termination:</strong> Upon termination, your right to use services ceases immediately. We may delete your data after a reasonable retention period, subject to legal requirements.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">13. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">13.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
              <p>
                <strong className="text-white">13.2 Jurisdiction:</strong> Any disputes arising from these Terms or use of services shall be subject to the exclusive jurisdiction of courts in Nagpur, Maharashtra, India.
              </p>
              <p>
                <strong className="text-white">13.3 Dispute Resolution:</strong> Before initiating legal proceedings, parties agree to attempt good-faith resolution through negotiation. If unresolved within 30 days, either party may pursue legal remedies.
              </p>
            </div>
          </div>

          {/* Miscellaneous */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">14. Miscellaneous Provisions</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">14.1 Entire Agreement:</strong> These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and PugArch Technology.
              </p>
              <p>
                <strong className="text-white">14.2 Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
              </p>
              <p>
                <strong className="text-white">14.3 Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.
              </p>
              <p>
                <strong className="text-white">14.4 Assignment:</strong> You may not assign or transfer these Terms without our written consent. We may assign our rights and obligations without restriction.
              </p>
              <p>
                <strong className="text-white">14.5 Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control (natural disasters, government actions, pandemics, third-party service outages, etc.).
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">15. Changes to Terms</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Modified" date.
              </p>
              <p>
                Significant changes will be communicated via:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications (where applicable)</li>
              </ul>
              <p className="mt-4">
                Continued use of services after changes constitutes acceptance of the modified Terms. If you do not agree with changes, you must discontinue use of services.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold text-purple-400">16. Contact Information</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                For questions, concerns, or clarifications regarding these Terms, please contact us:
              </p>
              <div className="p-6 mt-4">
                <p className="text-white font-semibold mb-3">PugArch Technology Pvt Ltd</p>
                <p className="space-y-1">
                  <span className="block">L-18 LIG Mahada Colony, Laxman Nagar, Manewada</span>
                  <span className="block">Nagpur, Maharashtra - 440027, India</span>
                  <span className="block mt-3">Email: <a href="mailto:info@pugarch.in" className="text-purple-400 hover:text-purple-300 underline">info@pugarch.in</a></span>
                  <span className="block">Phone: <a href="tel:+918180006916" className="text-purple-400 hover:text-purple-300">+91 8180006916</a></span>
                  <span className="block">Website: <a href="https://www.pugarch.in" className="text-purple-400 hover:text-purple-300 underline">www.pugarch.in</a></span>
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Acknowledgment</h2>
            <p className="text-gray-300 leading-relaxed">
              BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
