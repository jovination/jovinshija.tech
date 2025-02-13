import HeadTitle from '@/components/HeadTitle';
import PricingTable from "@/components/PricingTable"

function PricingPackages(){
    return (
        <div className="mt-24">
            <HeadTitle 
            heading="My Pricing" 
            subheading="choose the plan that fits your project" 
            />
            <PricingTable  />

        </div>
    )
}
export default PricingPackages;