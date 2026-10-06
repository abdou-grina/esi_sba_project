import { div } from "framer-motion/client";
import "./SidProfile.css";
function SidProfile({email, name, image, level}){
    const firstLetter = name?.charAt(0).toUpperCase();
    return (
        <div className="sidprofile">
            {image ? (
                <img src={image} alt="profile" className="avatar" />
            ) : (
                <div className="avatar-fallback">
                {firstLetter}
                </div>
            )}

            <span className="profile-name">{email}</span>
            <span className="profile-level">المستوى: {level} ثانوي</span>
        </div>
        
  );
}
export default SidProfile;