import React from 'react';
import { MessageSquare, CheckCircle, XCircle, Bell, Shield, UserCheck, LogOut, Info } from 'lucide-react';

export const metadata = {
  title: 'WhatsApp Usage Policy - PugArch Technology Pvt Ltd',
  description: 'WhatsApp Business API usage policy, opt-in/opt-out procedures, data handling, and compliance information for PugArch Technology services.',
};

export default function WhatsAppPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <MessageSquare className="mx-auto mb-6 text-green-400" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              WhatsApp Usage Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent information about how we use WhatsApp Business API to communicate with you
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
          
          {/* Service Operator */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">1. Service Operator Identity</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  📱 WhatsApp Service Operated By
                </p>
                <p className="text-green-200 mb-4">
                  This WhatsApp service is operated by <strong className="text-white">PugArch Technology Pvt Ltd</strong>, a private technology service provider.
                </p>
                <div className="text-sm space-y-1 text-gray-300">
                  <p><strong className="text-white">Company Name:</strong> PugArch Technology Pvt Ltd</p>
                  <p><strong className="text-white">Type:</strong> Private Limited Company (Technology Service Provider)</p>
                  <p><strong className="text-white">Registered Office:</strong> L-18 LIG Mahada Colony, Laxman Nagar, Manewada, Nagpur, Maharashtra - 440027, India</p>
                  <p><strong className="text-white">Email:</strong> info@pugarch.in</p>
                  <p><strong className="text-white">Phone:</strong> +91 8180006916</p>
                </div>
              </div>
            </div>
          </div>

          {/* Government Relationship Clarification */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold text-yellow-400">2. Government Relationship Clarification</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  ⚠️ IMPORTANT NOTICE
                </p>
                <div className="space-y-3 text-yellow-100">
                  <p className="font-semibold">
                    PugArch Technology Pvt Ltd is NOT a government authority and does not issue official government decisions.
                  </p>
                  <p>
                    We are a <strong>private technology service provider</strong> that develops and operates digital communication platforms. Our services may be utilized by various organizations, including government departments and public authorities, for stakeholder communication purposes.
                  </p>
                  <p>
                    <strong className="text-white">What this means:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We provide the technology platform and infrastructure</li>
                    <li>We do not represent or impersonate any government body</li>
                    <li>We do not issue licenses, certificates, or official government documents</li>
                    <li>We do not make governmental decisions or policy determinations</li>
                    <li>Our role is strictly limited to technology service provision</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Platform Usage by Government Departments</h3>
                <p className="mb-3">
                  The platform may be used by government departments for citizen communication, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service notifications and updates</li>
                  <li>Application status tracking</li>
                  <li>Appointment confirmations</li>
                  <li>Public information dissemination</li>
                  <li>Citizen grievance acknowledgments</li>
                </ul>
                <p className="mt-4 text-sm p-4">
                  <strong className="text-white">Clarification:</strong> When government departments use our platform, they are the message senders and decision-makers. We merely provide the communication infrastructure. All official government communications, decisions, and services remain the responsibility of the respective government department.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose of WhatsApp Communication */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold text-blue-400">3. Purpose of WhatsApp Communication</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Permitted Use Cases</h3>
                <p className="mb-3">We use WhatsApp Business API exclusively for the following purposes:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4">
                    <CheckCircle className="text-blue-400 mb-2" size={20} />
                    <p className="font-semibold text-white mb-2">✅ Transactional Notifications</p>
                    <ul className="text-sm space-y-1">
                      <li>• Order confirmations</li>
                      <li>• Payment receipts</li>
                      <li>• Booking confirmations</li>
                      <li>• Delivery updates</li>
                    </ul>
                  </div>

                  <div className="p-4">
                    <CheckCircle className="text-blue-400 mb-2" size={20} />
                    <p className="font-semibold text-white mb-2">✅ Service Updates</p>
                    <ul className="text-sm space-y-1">
                      <li>• Account status changes</li>
                      <li>• Application progress</li>
                      <li>• Appointment reminders</li>
                      <li>• Service alerts</li>
                    </ul>
                  </div>

                  <div className="p-4">
                    <CheckCircle className="text-blue-400 mb-2" size={20} />
                    <p className="font-semibold text-white mb-2">✅ Customer Support</p>
                    <ul className="text-sm space-y-1">
                      <li>• Query responses</li>
                      <li>• Technical assistance</li>
                      <li>• Issue resolution</li>
                      <li>• Help desk support</li>
                    </ul>
                  </div>

                  <div className="p-4">
                    <CheckCircle className="text-blue-400 mb-2" size={20} />
                    <p className="font-semibold text-white mb-2">✅ Opt-In Communications</p>
                    <ul className="text-sm space-y-1">
                      <li>• Subscribed updates</li>
                      <li>• Requested information</li>
                      <li>• Consent-based alerts</li>
                      <li>• User-initiated messages</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3.2 Prohibited Use Cases</h3>
                <p className="mb-3">We do NOT use WhatsApp for:</p>
                <div className="space-y-3">
                  <div className="p-4 flex items-start gap-3">
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white mb-1">❌ Promotional or Marketing Messages</p>
                      <p className="text-sm">No unsolicited advertisements, sales promotions, or marketing campaigns</p>
                    </div>
                  </div>

                  <div className="p-4 flex items-start gap-3">
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white mb-1">❌ Spam or Unsolicited Messages</p>
                      <p className="text-sm">No bulk messaging without explicit user consent</p>
                    </div>
                  </div>

                  <div className="p-4 flex items-start gap-3">
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white mb-1">❌ Third-Party Marketing</p>
                      <p className="text-sm">No sharing of contact information with third parties for marketing</p>
                    </div>
                  </div>

                  <div className="p-4 flex items-start gap-3">
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white mb-1">❌ Prohibited Content</p>
                      <p className="text-sm">No illegal, harmful, or policy-violating content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opt-In Mechanism */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">4. Opt-In Mechanism</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  🔐 Consent-Based Communication Only
                </p>
                <p className="text-green-200 font-medium">
                  We send WhatsApp messages ONLY to users who have explicitly opted in through documented consent mechanisms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.1 How Opt-In Works</h3>
                <p className="mb-3">You may opt in to receive WhatsApp messages through:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Website Forms:</strong> Checking a consent checkbox during registration or service signup</li>
                  <li><strong className="text-white">Mobile App:</strong> Enabling WhatsApp notifications in app settings</li>
                  <li><strong className="text-white">SMS Confirmation:</strong> Replying "YES" to an SMS opt-in request</li>
                  <li><strong className="text-white">In-Person Consent:</strong> Providing written or verbal consent (documented)</li>
                  <li><strong className="text-white">Service Enrollment:</strong> Agreeing to WhatsApp communication as part of service terms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4.2 Consent Requirements</h3>
                <p className="mb-3">All opt-ins must meet the following criteria:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Explicit:</strong> Clear, affirmative action required (no pre-checked boxes)</li>
                  <li><strong className="text-white">Informed:</strong> Users are informed about what they're consenting to</li>
                  <li><strong className="text-white">Documented:</strong> Consent records are maintained with timestamps</li>
                  <li><strong className="text-white">Specific:</strong> Consent is specific to WhatsApp communication</li>
                  <li><strong className="text-white">Revocable:</strong> Users can withdraw consent at any time</li>
                </ul>
              </div>

              <div className="p-6 mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Example Opt-In Language</h3>
                <div className="p-4 text-sm text-gray-300">
                  <p className="mb-2">☑️ <em>"I agree to receive transactional notifications and service updates via WhatsApp from [Service Name] operated by PugArch Technology Pvt Ltd. I understand I can opt out at any time by replying STOP."</em></p>
                </div>
              </div>
            </div>
          </div>

          {/* Opt-Out Mechanism */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <LogOut className="text-red-400" size={32} />
              <h2 className="text-3xl font-bold text-red-400">5. Opt-Out Mechanism</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  🚪 Easy Opt-Out Anytime
                </p>
                <p className="text-red-200 font-medium">
                  Users may opt out at any time by replying STOP. Opt-out requests are processed immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.1 How to Opt Out</h3>
                <p className="mb-3">You can stop receiving WhatsApp messages through any of these methods:</p>
                
                <div className="space-y-4">
                  <div className="p-5">
                    <p className="font-semibold text-white mb-2">Method 1: Reply STOP</p>
                    <p className="text-sm mb-3">Simply reply with the word <span className="bg-red-500/20 px-2 py-1 rounded text-red-300 font-mono">STOP</span> to any WhatsApp message you receive from us.</p>
                    <div className="p-3 text-sm">
                      <p className="text-gray-400">Example:</p>
                      <p className="text-white font-mono mt-1">You: STOP</p>
                      <p className="text-green-400 font-mono mt-1">System: You have been unsubscribed from WhatsApp notifications.</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-semibold text-white mb-2">Method 2: Account Settings</p>
                    <p className="text-sm">Log in to your account and disable WhatsApp notifications in communication preferences.</p>
                  </div>

                  <div className="p-5">
                    <p className="font-semibold text-white mb-2">Method 3: Email Request</p>
                    <p className="text-sm">Send an email to <a href="mailto:info@pugarch.in" className="text-red-400 hover:text-red-300 underline">info@pugarch.in</a> with your phone number and opt-out request.</p>
                  </div>

                  <div className="p-5">
                    <p className="font-semibold text-white mb-2">Method 4: Contact Support</p>
                    <p className="text-sm">Call <a href="tel:+918180006916" className="text-red-400 hover:text-red-300">+91 8180006916</a> and request to be removed from WhatsApp communications.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5.2 Opt-Out Processing</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Immediate Effect:</strong> Opt-out requests are processed within minutes</li>
                  <li><strong className="text-white">Confirmation:</strong> You will receive a confirmation message acknowledging your opt-out</li>
                  <li><strong className="text-white">No Further Messages:</strong> You will not receive any further WhatsApp messages (except opt-out confirmation)</li>
                  <li><strong className="text-white">Re-Opt-In Available:</strong> You can opt back in at any time through the same channels</li>
                </ul>
              </div>

              <div className="p-6 mt-6">
                <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Note</p>
                <p className="text-gray-300 text-sm">
                  Opting out of WhatsApp messages does not affect other communication channels (email, SMS) unless you separately opt out of those. Critical service-related messages (e.g., security alerts, account verification) may still be sent via other channels as required for service delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Message Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">6. Message Categories</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="mb-4">WhatsApp messages you receive from us fall into the following categories:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-2">📋 Transactional Notifications</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Order/booking confirmations</li>
                    <li>• Payment receipts</li>
                    <li>• Delivery status updates</li>
                    <li>• Transaction alerts</li>
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
                  <h3 className="font-semibold text-white mb-2">🔔 Service Notifications</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Account status changes</li>
                    <li>• Application updates</li>
                    <li>• Appointment reminders</li>
                    <li>• Service alerts</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5">
                  <h3 className="font-semibold text-white mb-2">💬 Support Responses</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Answers to your queries</li>
                    <li>• Technical support</li>
                    <li>• Issue resolution updates</li>
                    <li>• Help desk responses</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-5">
                  <h3 className="font-semibold text-white mb-2">📢 Acknowledgments</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Request confirmations</li>
                    <li>• Submission receipts</li>
                    <li>• Feedback acknowledgments</li>
                    <li>• Opt-in/opt-out confirmations</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-sm p-4">
                <strong className="text-white">Note:</strong> All messages are service-related and non-promotional. We do not send marketing, advertising, or sales messages via WhatsApp.
              </p>
            </div>
          </div>

          {/* Data Handling */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold text-blue-400">7. Data Handling Principles</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div className="p-6">
                <p className="text-lg font-semibold text-white mb-4">
                  🔒 Your WhatsApp Data is Protected
                </p>
                <p className="text-blue-200 font-medium">
                  We collect and use WhatsApp data solely for service delivery. Your data is never sold, shared for marketing, or used for purposes beyond what you consented to.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7.1 Data We Collect</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">Phone Number:</strong> Your WhatsApp-registered phone number</li>
                  <li><strong className="text-white">Message Content:</strong> Messages you send to us (for support purposes only)</li>
                  <li><strong className="text-white">Delivery Status:</strong> Whether messages were delivered, read, or failed</li>
                  <li><strong className="text-white">Timestamps:</strong> When messages were sent and received</li>
                  <li><strong className="text-white">Profile Information:</strong> Name and profile picture (as provided by WhatsApp API)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7.2 How We Use WhatsApp Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sending service notifications and transactional messages</li>
                  <li>Responding to customer support inquiries</li>
                  <li>Maintaining message delivery logs for compliance</li>
                  <li>Improving service quality and user experience</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7.3 Data Protection Commitments</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white">No Selling or Sharing</p>
                      <p className="text-sm">WhatsApp data is never sold, rented, or shared with third parties for marketing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white">No Cross-Platform Marketing</p>
                      <p className="text-sm">WhatsApp contacts are not used for email or SMS marketing without separate consent</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white">Secure Storage</p>
                      <p className="text-sm">All data is encrypted and stored on secure, compliant infrastructure</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-white">Limited Retention</p>
                      <p className="text-sm">Data is retained only as long as necessary for service delivery and compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commerce Policy Compliance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">8. WhatsApp Commerce Policy Compliance</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our use of WhatsApp Business API strictly complies with <strong className="text-white">WhatsApp Commerce Policy</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">No Prohibited Content:</strong> We do not send messages containing illegal, harmful, or policy-violating content</li>
                <li><strong className="text-white">No Spam:</strong> All messages are opt-in based and relevant to the user</li>
                <li><strong className="text-white">Accurate Information:</strong> All information shared is truthful and not misleading</li>
                <li><strong className="text-white">Respect User Privacy:</strong> User data is handled in accordance with privacy regulations</li>
                <li><strong className="text-white">Quality Messaging:</strong> Messages are well-formatted, clear, and provide value to recipients</li>
                <li><strong className="text-white">Timely Responses:</strong> Customer inquiries are responded to promptly</li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Platform Disclaimer */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-300">9. WhatsApp Platform Disclaimer</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">WhatsApp</strong> is a messaging platform owned and operated by <strong className="text-white">Meta Platforms, Inc.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We are an authorized user of WhatsApp Business APIs</li>
                <li>We are not affiliated with, endorsed by, or representing Meta Platforms, Inc.</li>
                <li>WhatsApp service availability and features are controlled by Meta</li>
                <li>All WhatsApp communications are subject to WhatsApp's Terms of Service and Privacy Policy</li>
                <li>We are not responsible for WhatsApp platform changes, outages, or policy modifications</li>
              </ul>
              <p className="mt-4 text-sm">
                For WhatsApp platform issues, please refer to <a href="https://www.whatsapp.com/legal" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">WhatsApp Legal Information</a>.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">10. Your Rights</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>Regarding WhatsApp communications, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Opt Out:</strong> Stop receiving WhatsApp messages at any time (reply STOP)</li>
                <li><strong className="text-white">Access Data:</strong> Request a copy of WhatsApp data we hold about you</li>
                <li><strong className="text-white">Delete Data:</strong> Request deletion of your WhatsApp conversation history</li>
                <li><strong className="text-white">Correct Information:</strong> Update your phone number or profile information</li>
                <li><strong className="text-white">File Complaints:</strong> Report policy violations or inappropriate messages</li>
              </ul>
              <p className="mt-4 p-4">
                To exercise your rights, contact us at <a href="mailto:info@pugarch.in" className="text-purple-400 hover:text-purple-300 underline">info@pugarch.in</a> or call <a href="tel:+918180006916" className="text-purple-400 hover:text-purple-300">+91 8180006916</a>.
              </p>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">11. Policy Updates</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may update this WhatsApp Usage Policy to reflect changes in our practices, WhatsApp policies, or legal requirements. Significant changes will be communicated via:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WhatsApp notification to opted-in users</li>
                <li>Email notification</li>
                <li>Website announcement</li>
              </ul>
              <p className="mt-4">
                Continued use of WhatsApp services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">12. Contact Us</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                For questions, concerns, or requests regarding WhatsApp communications:
              </p>
              <div className="p-6 mt-4">
                <p className="text-white font-semibold mb-3">PugArch Technology Pvt Ltd</p>
                <p className="space-y-1">
                  <span className="block">L-18 LIG Mahada Colony, Laxman Nagar, Manewada</span>
                  <span className="block">Nagpur, Maharashtra - 440027, India</span>
                  <span className="block mt-3">Email: <a href="mailto:info@pugarch.in" className="text-green-400 hover:text-green-300 underline">info@pugarch.in</a></span>
                  <span className="block">Phone: <a href="tel:+918180006916" className="text-green-400 hover:text-green-300">+91 8180006916</a></span>
                  <span className="block">Website: <a href="https://www.pugarch.in" className="text-green-400 hover:text-green-300 underline">www.pugarch.in</a></span>
                </p>
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Summary</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>✅ WhatsApp service operated by <strong className="text-white">PugArch Technology Pvt Ltd</strong> (private technology provider)</p>
              <p>✅ We are <strong className="text-white">NOT a government authority</strong></p>
              <p>✅ Platform may be used by government departments for citizen communication</p>
              <p>✅ Messages sent only after <strong className="text-white">explicit opt-in</strong></p>
              <p>✅ <strong className="text-white">No promotional or unsolicited messages</strong></p>
              <p>✅ Easy opt-out: <strong className="text-white">Reply STOP</strong> anytime</p>
              <p>✅ WhatsApp data <strong className="text-white">not sold or shared</strong> for marketing</p>
              <p>✅ Full compliance with WhatsApp Business and Commerce Policies</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
