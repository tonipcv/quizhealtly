"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyEN() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-24 sm:w-32">
            <Image 
              src="/logo.png" 
              alt="VUOM Logo" 
              width={120} 
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/politicas" className="text-sm text-gray-500 hover:text-gray-900">
              Português
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-900 font-medium">English</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: June 19, 2024</p>
        </div>

        {/* Content */}
        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              VUOM™ ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p>We may collect several types of information from and about users of our Service, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> This includes email address, name, phone number, address, and other information you provide when registering for our Service.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our Service, including your browser type, access times, pages viewed, and the time spent on those pages.</li>
              <li><strong>Device Information:</strong> Information about your device including IP address, device type, operating system, and browser type.</li>
              <li><strong>Questionnaire Responses:</strong> Answers you provide to personalize your experience with the VUOM™ protocol.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your experience with the VUOM™ protocol</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Disclosure of Your Information</h2>
            <p>We may disclose information that we collect in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Service Providers:</strong> We may share your information with third-party vendors, service providers, and other third parties who perform services on our behalf.</li>
              <li><strong>For Business Transfers:</strong> We may share your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure and we cannot guarantee the absolute security of your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Your Choices</h2>
            <p>You have several choices regarding the information you provide to us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> You may update, correct, or delete your account information at any time by logging into your account or contacting us.</li>
              <li><strong>Marketing Communications:</strong> You can opt out of receiving marketing communications from us by following the unsubscribe instructions included in our emails.</li>
              <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can choose to set your browser to refuse all cookies or to alert you when cookies are being sent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Third-Party Websites</h2>
            <p>
              Our Service may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Children's Privacy</h2>
            <p>
              Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Facebook Data</h2>
            <p>
              Our quizzes and assessments are not sponsored, endorsed, or administered by Facebook/Meta. When you provide information through our quizzes, you understand that you are providing information directly to VUOM™ and not to Facebook/Meta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> support@vuom.life
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} VUOM™. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
} 