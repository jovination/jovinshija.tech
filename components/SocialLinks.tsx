import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";


function SocialLinks() {
    return(
<div className="flex space-x-3">
      {/* Twitter (X) */}
      <a
        href="https://x.com/jovination4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <RiTwitterXLine 
         className="w-[21px] h-[21px] text-[--icons] hover:text-white"

         />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/jovination_"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <RiInstagramLine
         className="w-[21px] h-[21px] text-[--icons] hover:text-white"

         />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/jovination"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <RiLinkedinBoxFill
         className="w-[21.5px] h-[21.5px] text-[--icons] hover:text-white"

         />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/jovination"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <RiGithubFill
         className="w-[21.5px] h-[21.5px] text-[--icons] hover:text-white"

         />
      </a>
    </div>
    )
    
}

export default SocialLinks;