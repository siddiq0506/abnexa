import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Construction ERP vs Generic ERP: Why Native Matters | ConstructOS",
    description: "Why specialized construction ERP systems outperform generic enterprise software like Tally or SAP for contracting businesses.",
};

export default function VersusPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white dark:bg-gray-950">
            <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="font-medium text-gray-900 dark:text-gray-100">ERP vs Generic</li>
                </ol>
            </nav>

            <section className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                    Construction ERP vs Generic ERP
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-10">
                    <p className="text-xl">
                        Generic ERP systems are designed for standardized workflows such as manufacturing or retail distribution. But construction operates differently.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Generic ERPs Assume:</h2>
                            <ul className="space-y-3 list-disc list-inside dark:text-gray-400">
                                <li>Predictable inventory movement</li>
                                <li>Centralized production units</li>
                                <li>Stable operational environments</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Construction Realities:</h2>
                            <ul className="space-y-3 list-disc list-inside text-blue-800 dark:text-blue-200">
                                <li>Work across multiple temporary sites</li>
                                <li>Labour composition changes frequently</li>
                                <li>BOQ based billing drives revenue</li>
                                <li>Project costing tracked separately</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Built-in Capabilities</h2>
                        <p className="mb-6">Construction native ERP systems account for project based accounting, site wise reporting, BOQ linked execution, and dynamic labour management.</p>

                        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full"></div>
                            <p className="text-xl relative z-10 font-bold mb-4">Adapting generic ERP to construction often creates friction.</p>
                            <p className="text-blue-400 relative z-10 font-bold text-2xl italic">
                                Using construction native ERP aligns software with operational reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-50 dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-800 mt-auto">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Ready for a native construction platform?</h2>
                    <Link href="/book-demo" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md active:scale-95">
                        Book a Demo
                    </Link>
                </div>
            </footer>
        </div>
    );
}
