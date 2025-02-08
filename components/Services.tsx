import ServicesAccordion from '@/components/ServicesAccordion';

function Services(){
    return(
        <div className="mt-24">
             <div className="flex flex-col items-center gap-6">
                <h2 className=" text-3xl md:text-5xl font-medium">My Services</h2>
                <p className="text-[--grey01] text-center font-medium">
                Let’s bring your ideas <br /> to life, together
                </p>
            </div>
            <div className="mt-8">
            <ServicesAccordion />
           </div>
        </div>
    )
}

export default Services