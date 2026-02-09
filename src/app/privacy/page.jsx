import React from 'react';

const PrivacyPolicy = () => {
  const companyName = "i-Connectresources, Inc.";
  const websiteUrl = "https://www.i-connectresources.com";

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-800 leading-relaxed mt-20">
      <header className="border-b pb-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy & SMS Terms</h1>
        <p className="text-sm text-gray-500 mt-2">Last Updated: October 2023</p>
      </header>

      {/* --- Privacy Policy Section --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Privacy Policy</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Information Collection</h3>
            <p>We collect personal information that you provide to us, including but not limited to your name, phone number, and email address when you opt-in to our services.</p>
          </div>

          <div>
            <h3 className="font-bold">How Information is Used</h3>
            <p>Your information is used to provide services, send account notifications, and respond to inquiries.</p>
          </div>

          <div>
            <h3 className="font-bold">Information Sharing</h3>
            <p>We do not sell or rent your personal information to third parties.</p>
            {/* MANDATORY SMS CLAUSE */}
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 italic">
              "SMS consent and phone numbers are not shared with third parties or affiliates under any circumstances."
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* --- SMS Terms Section --- */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">SMS Terms & Conditions</h2>
        <p className="mb-4">
          By opting into SMS from our web forms or other media, you are agreeing to receive SMS messages from <strong>{companyName}</strong>. 
          These messages may include account notifications, appointment reminders, and order alerts.
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-6">
          <li><strong>Messaging frequency may vary.</strong></li>
          <li><strong>Message and data rates may apply.</strong></li>
          <li>To opt out at any time, text <strong>STOP</strong> to our number.</li>
          <li>For assistance, text <strong>HELP</strong> or visit <a href={websiteUrl} className="text-blue-600 underline">{websiteUrl}</a>.</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">Example Consent Language</h3>
          <p className="text-sm italic text-gray-700">
            "By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from {companyName}. 
            This includes SMS messages for account notifications. Message frequency varies. Message and data rates may apply. 
            See privacy policy at [Your Link]. Message HELP for help. Reply STOP to any message to opt out."
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default PrivacyPolicy;