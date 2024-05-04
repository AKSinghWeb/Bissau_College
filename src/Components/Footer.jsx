const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left column */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Bissau College, Shillong</h2>
                        <p>An Education India Institute</p>
                        <p>Re-accredited by NAAC in 2020 Grade- B</p>
                        <p>Institutional Partner</p>
                    </div>

                    {/* Middle column */}
                    <div className="flex flex-col">
                        <img src="/path/to/your/image" alt="Institutional Partner Logo" className="mt-4" />
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-4">Address</h2>
                        <p>Upper New Colony, Laitumkhrah, Shillong,</p>
                        <p>Meghalaya - 793003</p>
                        <p>(0364) 2221618</p>
                        <p>principal@womenscollege.ac.in</p>
                        <p>office@womenscollege.ac.in</p>
                        <p>Monday - Saturday / 9:00am - 5:00pm</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
