import React from 'react';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-bg text-text-main py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                        Terms of Service
                    </h1>
                    <p className="text-muted text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Introduction */}
                <section className="space-y-4">
                    <p className="leading-relaxed text-slate-300">
                        Welcome to Playdel! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using Playdel, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                    </p>
                </section>

                {/* User Accounts */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">1. User Accounts</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>To access certain features, you may need to create an account. You agree to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Provide accurate and complete information during registration.</li>
                            <li>Maintain the confidentiality of your account credentials.</li>
                            <li>Notify us immediately of any unauthorized use of your account.</li>
                            <li>Take responsibility for all activities that occur under your account.</li>
                        </ul>
                    </div>
                </section>

                {/* Acceptable Use */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">2. Acceptable Use</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>You agree not to use Playdel for any unlawful or prohibited purpose, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Harassing, threatening, or defrauding others.</li>
                            <li>Posting harmful, offensive, or inappropriate content.</li>
                            <li>Interfering with the operation or security of the platform.</li>
                            <li>Using automated means to access our services without permission.</li>
                        </ul>
                    </div>
                </section>

                {/* Booking and Payments */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">3. Booking and Payments</h2>
                    <p className="leading-relaxed text-slate-300">
                        Reservations made through Playdel are subject to the specific cancellation and refund policies of the respective clubs or venues. Payments are processed securely securely. We are not responsible for disputes arising directly between players and venues, though we will assist where possible.
                    </p>
                </section>

                {/* Intellectual Property */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">4. Intellectual Property</h2>
                    <p className="leading-relaxed text-slate-300">
                        All content, trademarks, and intellectual property on Playdel are the property of Playdel or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.
                    </p>
                </section>

                {/* Termination */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">5. Termination</h2>
                    <p className="leading-relaxed text-slate-300">
                        We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
                    </p>
                </section>

                {/* Disclaimer of Warranties */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">6. Disclaimer of Warranties</h2>
                    <p className="leading-relaxed text-slate-300">
                        Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the service will be uninterrupted or error-free.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="space-y-6 border-t border-slate-700/50 pt-8 mt-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="text-slate-300 mb-4">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
                        <p className="text-primary font-semibold">Email: <a href="mailto:team@playdel.com" className="hover:underline">team@playdel.com</a></p>
                    </div>
                </section>

            </div>
        </div>
    );
}
