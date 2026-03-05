const DashboardPage = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 md:grid-cols-3 gap-6">
                {/* Metric Card */}
                <div className=" p-6 bg-white border rounded-xl rounded-lg  rounded-sm  shadow-sm">
                    <p className="text-admin-teal-600 text-sm font-medium">Total Registered Clubs</p>
                    <h3 className="text-3xl font-bold text-admin-teal-950 mt-1">12,482</h3>
                    <div className="mt-4 flex items-center text-admin-tea-600 text-sm font-bold bg-admin-tea-50 w-fit px-2 py-1 rounded">
                        <span>↑ 14%</span>
                    </div>
                </div>

                {/* Action Card */}
                <div className="p-6 bg-admin-honeydew-100 border border-admin-honeydew-200  rounded-xl rounded-lg rounded-sm">
                    <p className="text-admin-honeydew-800 text-sm font-medium">Total Active Clubs</p>
                    <h3 className="text-3xl font-bold text-admin-honeydew-950 mt-1">24</h3>
                    <button className="mt-4 w-full bg-admin-teal-700 text-white py-2 rounded-lg hover:bg-admin-teal-800 transition">
                        View All
                    </button>
                </div>
                <div className="p-6 bg-admin-honeydew-100 border border-admin-honeydew-200 rounded-xl rounded-lg rounded-sm">
                    <p className="text-admin-honeydew-800 text-sm font-medium">Total Active Clubs</p>
                    <h3 className="text-3xl font-bold text-admin-honeydew-950 mt-1">24</h3>
                    <button className="mt-4 w-full bg-admin-teal-700 text-white py-2 rounded-lg hover:bg-admin-teal-800 transition">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;