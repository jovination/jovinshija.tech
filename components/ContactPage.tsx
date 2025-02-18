import ProfileComponent from "@/components/ProfileComponent"
import ContactForm from "@/components/ContactForm"


function ContactPage(){
    return(
        <div className="h-[1188px] flex flex-col justify-center gap-8">
           <ProfileComponent />
           <ContactForm />

        </div>
    )
}
export default ContactPage;