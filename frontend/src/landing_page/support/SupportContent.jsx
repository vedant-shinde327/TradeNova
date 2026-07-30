import FAQSection from "./FAQSection";
import Sidebar from "./Sidebar";

function SupportContent() {
    return ( 
        <section className="container py-5">
            <div className="row">

                {/* left section */}
                <div className="col-lg-8">
                    <div className="bg-white border rounded p-4">
                        <FAQSection />
                    </div>
                </div>

                {/* right section */} 
                <div className="col-lg-4">
                    <div className="bg-white border rounded p-4">
                        <Sidebar />
                    </div>
                </div>

            </div>
        </section>
     );
}

export default SupportContent;