import HeadTitle from '@/components/HeadTitle';
import PricingTable from "@/components/PricingTable"

function PricingPackages(){
    return (
        <div className="mt-14 mb-10" id="pricing">
            <HeadTitle 
            heading="My Pricing" 
            subheading="choose the plan that fits your project" 
            />
            <PricingTable  />

        </div>
    )
}
export default PricingPackages;