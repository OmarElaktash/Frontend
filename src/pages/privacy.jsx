import React from 'react';


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
     

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p>
              At Spera Nova ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p>We collect several types of information, including:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Email addresses</li>
              <li>Password information (stored in encrypted format)</li>
              <li>Chat conversations and interactions with our chatbot</li>
              <li>Usage data and analytics</li>
              <li>Technical information such as IP addresses and browser type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Providing and maintaining our services</li>
              <li>Improving user experience</li>
              <li>Processing transactions</li>
              <li>Sending administrative information</li>
              <li>Ensuring security of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Protection and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Regular backup procedures</li>
              <li>Continuous monitoring for potential security breaches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. GDPR Compliance</h2>
            <p>
              For users in the European Economic Area (EEA), we comply with GDPR requirements and provide the following rights:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When we no longer need to use your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <p>
              <strong>Spera Nova</strong><br />
              Email: u2182091@unimail.hud.ac.uk            
            </p>
          
          </section>

          <div className="mt-8 text-sm text-gray-500">
            Last Updated: 29/04/2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
