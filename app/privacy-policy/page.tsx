import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-bg text-text-main py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                        Privacy Policy
                    </h1>
                    <p className="text-muted text-lg">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>

                {/* Introduction */}
                <section className="space-y-4">
                    <p className="leading-relaxed text-slate-300">
                        Playdel respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and your rights regarding your information.
                    </p>
                    <p className="leading-relaxed text-slate-300">
                        By using the Playdel mobile application and related services (the “Service”), you agree to the collection and use of information in accordance with this policy.
                    </p>
                </section>

                {/* 1. Information We Collect */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">1. Information We Collect</h2>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">1.1. Personal Information</h3>
                        <div className="text-slate-300 space-y-2">
                            <p>We collect information you provide directly when you:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>Create an account</li>
                                <li>Book padel courts</li>
                                <li>Join matches or log scores</li>
                                <li>Interact with club management features</li>
                            </ul>
                            <p className="mt-2">This may include:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>Name, email address, phone number</li>
                                <li>Profile photo</li>
                                <li>Date of birth</li>
                                <li>Player rating or performance data</li>
                                <li>Booking and payment details</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">1.2. Location Data</h3>
                        <div className="text-slate-300 space-y-2">
                            <p>With your permission, we collect:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>Precise location to suggest nearby courts</li>
                                <li>Geo-fencing data for employee attendance tracking (for clubs & managers)</li>
                            </ul>
                            <p>Location data is used only with consent and can be disabled anytime in settings.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">1.3. Usage and Device Information</h3>
                        <div className="text-slate-300 space-y-2">
                            <p>We automatically collect:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>Device type and model</li>
                                <li>Operating system version</li>
                                <li>App usage data (pages visited, timestamps)</li>
                                <li>Crash reports and performance logs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">1.4. Scores and Rankings</h3>
                        <div className="text-slate-300 space-y-2">
                            <p>When you log match results, we collect and process this data to:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>Compute player rankings</li>
                                <li>Display match history</li>
                                <li>Improve matchmaking</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2. How We Use Your Information */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">2. How We Use Your Information</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Provide and improve the Service</li>
                            <li>Enable matchmaking and player ranking</li>
                            <li>Process court bookings and generate receipts</li>
                            <li>Support club management features (attendance, scheduling)</li>
                            <li>Communicate important updates or changes</li>
                            <li>Personalize app experience</li>
                            <li>Monitor performance and fix issues</li>
                        </ul>
                        <p>We do not sell your personal data to third parties.</p>
                    </div>
                </section>

                {/* 3. Sharing Your Information */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">3. Sharing Your Information</h2>
                    <p className="text-slate-300">We may share your data with:</p>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">3.1. Service Providers</h3>
                        <p className="text-slate-300">
                            Third-party vendors who help operate the app (e.g., analytics, cloud hosting, payment processors).
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">3.2. Clubs and Managers</h3>
                        <div className="text-slate-300 space-y-2">
                            <p>If you book a court or participate in a club:</p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                                <li>The relevant club may access your name, booking details, scores, and performance data for operational purposes.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">3.3. Legal Compliance</h3>
                        <p className="text-slate-300">
                            We may disclose information when required by law or to protect rights, safety, or property.
                        </p>
                    </div>
                </section>

                {/* 4. Your Choices and Rights */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">4. Your Choices and Rights</h2>
                    <div className="space-y-4 text-slate-300">
                        <p>You may:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Access, edit, or delete your account information</li>
                            <li>Withdraw consent for location data (app settings)</li>
                            <li>Opt out of non-essential notifications</li>
                            <li>Request copies of your data</li>
                        </ul>
                        <p>To exercise these rights, contact us at the contact details provided below.</p>
                    </div>
                </section>

                {/* 5. Data Security */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">5. Data Security</h2>
                    <p className="leading-relaxed text-slate-300">
                        We use standard industry practices to protect data, including encryption and secure servers. However, no method is 100% secure; we cannot guarantee absolute protection.
                    </p>
                </section>

                {/* 6. Children’s Privacy */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">6. Children’s Privacy</h2>
                    <p className="leading-relaxed text-slate-300">
                        The Service is not intended for children under 13. We do not knowingly collect data from users under the age of 13.
                    </p>
                </section>

                {/* 7. Third-Party Links */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">7. Third-Party Links</h2>
                    <p className="leading-relaxed text-slate-300">
                        The app may contain links to external services. We are not responsible for the privacy practices of those sites.
                    </p>
                </section>

                {/* 8. Changes to This Policy */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">8. Changes to This Policy</h2>
                    <p className="leading-relaxed text-slate-300">
                        We may update this policy occasionally. We’ll notify you of significant changes in the app or by email.
                    </p>
                </section>

                {/* 9. Contact Us */}
                <section className="space-y-6 border-t border-slate-700/50 pt-8 mt-12">
                    <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                    <p className="text-slate-300 mb-4">
                        If you have questions, concerns, or requests regarding your privacy, please contact:
                    </p>
                    <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
                        <p className="text-white font-semibold mb-2">Rugoria Technologies</p>
                        <p className="text-primary font-semibold">Email: <a href="mailto:team@rugoria.net" className="hover:underline">team@rugoria.net</a></p>
                    </div>
                </section>

            </div>
        </div>
    );
}
